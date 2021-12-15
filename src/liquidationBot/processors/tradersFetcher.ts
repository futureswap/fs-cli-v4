import { setTimeout } from "node:timers/promises";
import { Readable } from "node:stream";
import { config } from "@config";
import type { Trader } from "@liquidationBot/types";
import { FetchError } from "@liquidationBot/errors";
import { tradersService } from "@liquidationBot/services";

const processorConfig = config.processors.tradersFetcher;
const exchangeGenesisBlock = config.network.exchangeGenesisBlock;
const RE_FETCH_INTERVAL = processorConfig.reFetchIntervalSec * 1_000;

export type TradersFetcherResult = Trader[] | FetchError;
export type TradersFetcherProcessor = Readable & {
  [Symbol.asyncIterator](): AsyncIterableIterator<TradersFetcherResult>;
};

export function start(): TradersFetcherProcessor {
  return Readable.from(tradersGenerator());
}

async function* tradersGenerator(): AsyncGenerator<TradersFetcherResult> {
  let activeTraders: Trader[] = [];
  let lastBlockRead = exchangeGenesisBlock;

  while (true) {
    try {
      const { updatedActiveTraders, latestBlock } =
        await tradersService.getUpdatedActiveTraders(
          activeTraders,
          lastBlockRead
        );
      activeTraders = updatedActiveTraders;
      lastBlockRead = latestBlock;

      yield activeTraders;
    } catch (error) {
      yield new FetchError(error);
    }
    await setTimeout(RE_FETCH_INTERVAL);
  }
}
