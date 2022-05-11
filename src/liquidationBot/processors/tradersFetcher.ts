import type { Provider } from "@ethersproject/providers";
import type { Trader } from "@liquidationBot/types";
import { setTimeout } from "node:timers/promises";
import { Readable } from "node:stream";
import { FetchError } from "@liquidationBot/errors";

export type TradersFetcherProcessor = Readable & {
  [Symbol.asyncIterator](): AsyncIterableIterator<TradersFetcherResult>;
};

/**
 * Traders fetcher has internal state that holds trader positions, as they are retrieved from the
 * blockchain.
 *
 * Initially, this internal state is empty.  `fetchHistory()` will populate internal state with
 * position information from blocks before the current one.  As the blockchain is extended,
 * `fetchNewPositions()` will extend this internal state with positions that were added since the
 * last `fetchNewPositions()` call.
 *
 * While history is not fully populated, `getOpenPositions()` may not return some of the positions
 * opened in blocks that were not processed yet.  `positionHistoryIsComplete()` should be called to
 * determine if the positions history is still incomplete and one needs to call
 * `fetchPositionHistory()` repeatedly, until the positions history is fully populated.
 *
 * While positions history is incomplete, `fetchPositionHistory()` should be invoked rather
 * frequently.  When it is complete, `fetchPositionHistory()` does nothing and `fetchNewPositions()`
 * can be invoked less frequently.
 */
export type Deployment = {
  /**
   * Returns false until position history has been fully populated, up to the block where the
   * exchange was deployed.
   */
  positionHistoryIsComplete: () => boolean;

  /**
   * Fetched next chunk of blocks, checking them for any position change events.  This happens in
   * the reverse order, with the most recent blocks fetched first.  Subsequent call with fetch an
   * older chunk of blocks, as long as `positionHistoryIsComplete()` is `false`.
   */
  fetchPositionHistory: (provider: Provider) => Promise<void | FetchError>;

  /**
   * Fetches a chunk of blocks since the last invocation and until the latest block on the chain.
   *
   * On the very first invocation, records the current latest block on the chain, and does nothing.
   * Use `fetchPositionHistory()` to fetch older blocks.
   */
  fetchNewPositions: (provider: Provider) => Promise<void | FetchError>;

  /**
   * Returns a list of all the open positions, known at the moment.
   */
  getOpenPositions: () => Trader[];
};

export type TradersFetcherResult = Trader[] | FetchError;

export function start(
  deployment: Deployment,
  provider: Provider,
  historyFetchIntervalSec: number,
  reFetchIntervalSec: number
): TradersFetcherProcessor {
  /*
   * Fetches position data in both directions - backwards and forwards.
   * Complexity comes from the fact that we want to use different delays for different directions.
   *
   * Stream ends when the position history is fully populated.
   */
  const fetchBothDirections = async function* () {
    let nextHistoryFetch = Date.now();
    let nextNewFetch = Date.now();

    while (!deployment.positionHistoryIsComplete()) {
      const now = Date.now();

      if (nextHistoryFetch <= now) {
        const maybeError = await deployment.fetchPositionHistory(provider);
        if (maybeError !== undefined) {
          yield maybeError;
        }
        nextHistoryFetch = now + historyFetchIntervalSec * 1_000;
      }

      if (nextNewFetch <= now) {
        const maybeError = await deployment.fetchNewPositions(provider);
        if (maybeError !== undefined) {
          yield maybeError;
        }
        nextNewFetch = now + reFetchIntervalSec * 1_000;
      }

      yield deployment.getOpenPositions();

      await setTimeout(Math.min(nextHistoryFetch, nextNewFetch) - now);
    }
  };

  /*
   * When we are done fetching position history further updates become straighforward.
   */
  const fetchOnlyForward = async function* () {
    while (true) {
      const maybeError = await deployment.fetchNewPositions(provider);
      if (maybeError !== undefined) {
        yield maybeError;
      } else {
        yield deployment.getOpenPositions();
      }

      await setTimeout(reFetchIntervalSec * 1_000);
    }
  };

  const tradersGenerator = async function* () {
    yield* fetchBothDirections();
    yield* fetchOnlyForward();
  };

  return Readable.from(tradersGenerator());
}
