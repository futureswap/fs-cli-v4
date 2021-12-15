import type { ContractTransaction } from "ethers";
import type { LastTraderActions, Trader } from "@liquidationBot/types";
import { TraderAction } from "@liquidationBot/types";
import { LiquidationError } from "@liquidationBot/errors";
import { exchangeApi, exchangeEventsApi } from "./setupApi";
import { config } from "@config";
import { providers } from "ethers";

export type LiquidationsResults = { [k in Trader]: ContractTransaction };

type Liquidate = (traders: Trader[]) => Promise<{
  liquidationsResults: LiquidationsResults;
  liquidationsErrors: LiquidationError[];
}>;

type ActiveTradersResults = {
  lastTraderActions: LastTraderActions;
  latestBlock: number;
};

const { network, liquidationBot } = config;
const { chainId, rpcUrl } = network;

const providerConfig = { name: "json-rpc", chainId };
const provider = new providers.JsonRpcProvider(rpcUrl, providerConfig);

export const getLastTraderActionsSince = async (
  startBlock: number
): Promise<ActiveTradersResults> => {
  const eventFilter = exchangeEventsApi.filters.PositionChanged(
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  const currentBlockNumber = await provider.getBlockNumber();

  const { maxBlocksToProcessPerRound: rangeSize } = liquidationBot;
  const blockRangesToProcess = [];
  for (
    let rangeStart = startBlock;
    rangeStart < currentBlockNumber;
    rangeStart += rangeSize
  ) {
    blockRangesToProcess.push([rangeStart, Math.max(rangeStart + rangeSize)]);
  }

  const lastTraderActions: LastTraderActions = {};
  // Divide the number of blocks to load into smaller ranges to avoid hitting the provider's
  // limit. This is only necessary if there's a lot of blocks to load.
  for (const [startBlock, endBlock] of blockRangesToProcess) {
    const changePositionsEvents = await exchangeEventsApi.queryFilter(
      eventFilter,
      startBlock,
      endBlock
    );
    for (const event of changePositionsEvents) {
      const previousAsset = event.args.previousAsset;
      const previousStable = event.args.previousStable;
      const newAsset = event.args.newAsset;
      const newStable = event.args.newStable;
      const trader = event.args.trader as Trader;

      // Override the previous last action of this trader.
      if (previousAsset.eq(0) && previousStable.eq(0)) {
        lastTraderActions[trader] = TraderAction.OPEN_POSITION;
      } else if (newAsset.eq(0) && newStable.eq(0)) {
        lastTraderActions[trader] = TraderAction.CLOSE_POSITION;
      }
    }
  }

  return { lastTraderActions, latestBlock: currentBlockNumber };
};

export const liquidate: Liquidate = async (traders) => {
  const liquidationsResults: LiquidationsResults = {};
  const liquidationsErrors: LiquidationError[] = [];

  for (const trader of traders) {
    try {
      liquidationsResults[trader] = await exchangeApi.liquidate(trader);
    } catch (error) {
      liquidationsErrors.push(new LiquidationError(trader, error));
    }
  }

  return { liquidationsResults, liquidationsErrors };
};
