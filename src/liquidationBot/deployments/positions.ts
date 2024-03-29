/**
 * Given an exchange, recovers the list of trading positions open as of a specific block number.
 *
 * As positions are stored in a map in the `Exchange` contract, we can not just iterate over all the
 * positions.  Instead we read `ChangePosition` events generated by the exchange and recover the
 * active list based on that.
 *
 * Both v4 and v4.1 use this code to fetch positions.
 */

import { tryNTimes } from "../../utils";
import { Trader } from "../types";

export enum PositionState {
  Open,
  Closed,
}

export class Position {
  constructor(
    /// Block number where we observed latest action for this position.
    public block: number,
    /// Transaction number within the `block`, number where we observed latest action for this
    //position.
    public transaction: number,
    /// State observed in block `lastAction`.
    public state: PositionState
  ) {}
}

/**
 * Abstracts the process of fetching events for different deployment types.
 */
export type GetEvents<Event> = (
  fromBlock: number,
  toBlock: number
) => Promise<Event[]>;

/**
 * Given an event returned by `GetEvents<Event>`, returns it's internal details.
 *
 * Returning `undefined` ignores the event.
 */
export type UnpackEvent<Event> = (event: Event) =>
  | {
      trader: Trader;
      block: number;
      transaction: number;
      state: PositionState;
    }
  | undefined;

/**
 * Maps a position to the latest state available about this position.
 *
 * Internally an object of this type will accumulate a continuous range of blocks that it has
 * already processed.  This range can be extended in either direction.  `fetchNew()` extends it into
 * the future, and `fetchHistory()` extends it into the past.
 */
export class Positions {
  /**
   * First block that has been already processed, and is contained in `positions`.
   * `undefined` means we have not processed any blocks yet.
   */
  firstProcessedBlock: undefined | number;

  /**
   * Last block that has been already processed, and is contained in `positions`.
   * `undefined` means we have not processed any blocks yet.
   */
  lastProcessedBlock: undefined | number;

  constructor(
    private exchangeLaunchBlock: number,
    public positions: {
      [trader: Trader]: Position;
    } = {}
  ) {
    this.firstProcessedBlock = undefined;
    this.lastProcessedBlock = undefined;
  }

  public historyIsComplete(): boolean {
    return (
      this.firstProcessedBlock !== undefined &&
      this.firstProcessedBlock <= this.exchangeLaunchBlock
    );
  }

  public historyBlocksLeft(): number {
    return this.firstProcessedBlock === undefined
      ? 0
      : this.firstProcessedBlock - this.exchangeLaunchBlock;
  }

  /**
   * Fetches up to `blocks` blocks starting form the very first of the already processed blocks and
   * into the past.  But stops if we have already reached the `exchangeLaunchBlock` block.  This
   * will extend the range of processed blocks into the past.
   *
   * For each fetched block, extracts any possible position change events and records any new
   * position information.
   */
  public async fetchHistory<Event>(
    blocks: number,
    getCurrentBlock: () => Promise<number>,
    getEvents: GetEvents<Event>,
    unpackEvent: UnpackEvent<Event>
  ): Promise<void> {
    const { firstProcessedBlock, exchangeLaunchBlock } = this;

    const toBlock =
      firstProcessedBlock !== undefined
        ? firstProcessedBlock - 1
        : await getCurrentBlock();
    const fromBlock = Math.max(toBlock - (blocks - 1), exchangeLaunchBlock);

    await this.fetchEventsFor(fromBlock, toBlock, getEvents, unpackEvent);

    this.firstProcessedBlock = fromBlock;
    this.lastProcessedBlock ??= toBlock;
  }

  /**
   * Fetches up to `blocks` blocks starting from the very last of the already processed blocks and
   * into the future.  Up to the block returned by `getCurrentBlock`.  This will extend the range of
   * processed blocks into the future.
   *
   * For each fetched block, extracts any possible position change events and records any new
   * position information.
   *
   * If this is the first call, just records `getCurrentBlock()` result as the next starting point.
   * Fetching the current block and any blocks before that is the responsibility of
   * `fetchHistory()`.
   */
  public async fetchNew<Event>(
    blocks: number,
    getCurrentBlock: () => Promise<number>,
    getEvents: GetEvents<Event>,
    unpackEvent: UnpackEvent<Event>
  ): Promise<void> {
    const { lastProcessedBlock } = this;

    const currentBlock = await getCurrentBlock();

    if (lastProcessedBlock === undefined) {
      /*
       * If `lastProcessedBlock` is `undefined` it means we did not fetch any history yet.  Neither
       * forward from the current block, nor backwards.
       *
       * As this method is supposed to fetch forward, there is nothing to fetch yet.  But we set the
       * processed block numbers into a state that records the current block.  Next time
       * `fetchNew()` will start fetching from this point on.  And `fetchHistory()` will fetch
       * backwards from this point.
       *
       * As `firstProcessedBlock` and `lastProcessedBlock` are inclusive boundaries, an empty set of
       * blocks is represented by `firstProcessedBlock` being after `lastProcessedBlock`.
       */
      this.firstProcessedBlock = currentBlock + 1;
      this.lastProcessedBlock = currentBlock;
      return;
    }

    const fromBlock = lastProcessedBlock + 1;

    if (fromBlock > currentBlock) {
      // No new blocks.
      return;
    }

    const toBlock = Math.min(fromBlock + blocks - 1, currentBlock);

    await this.fetchEventsFor(fromBlock, toBlock, getEvents, unpackEvent);

    this.lastProcessedBlock = toBlock;
  }

  private async fetchEventsFor<Event>(
    fromBlock: number,
    toBlock: number,
    getEvents: GetEvents<Event>,
    unpackEvent: UnpackEvent<Event>
  ): Promise<void> {
    const { positions } = this;

    const events = await tryNTimes(3, () => getEvents(fromBlock, toBlock));

    for (const event of events) {
      const unpacked = unpackEvent(event);
      if (unpacked === undefined) {
        continue;
      }
      const { trader, block, transaction, state } = unpacked;

      const position = positions[trader];
      if (position === undefined) {
        positions[trader] = new Position(block, transaction, state);
        continue;
      }

      if (
        position.block > block ||
        (position.block == block && position.transaction >= transaction)
      ) {
        continue;
      }

      position.block = block;
      position.transaction = transaction;
      position.state = state;
    }
  }

  public getOpen(): Trader[] {
    const { positions } = this;

    return Object.entries(positions)
      .filter(([_address, info]) => info.state == PositionState.Open)
      .map(([trader, _info]) => trader as Trader);
  }
}
