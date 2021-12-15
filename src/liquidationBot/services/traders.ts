import type { Trader } from "@liquidationBot/types";
import { TraderAction } from "@liquidationBot/types";
import { exchangeService } from "@liquidationBot/services";

type ActiveTradersResults = {
  updatedActiveTraders: Trader[];
  latestBlock: number;
};

export const getUpdatedActiveTraders = async (
  currActiveTraders: Trader[],
  lastBlockRead: number
): Promise<ActiveTradersResults> => {
  const { lastTraderActions, latestBlock } =
    await exchangeService.getLastTraderActionsSince(lastBlockRead);

  // Remove traders who recently closed and add those who recent opened positions.
  const updatedActiveTraders = currActiveTraders.filter(
    (trader) => lastTraderActions[trader] != TraderAction.CLOSE_POSITION
  );
  for (const trader in lastTraderActions) {
    const castTrader = trader as Trader;
    if (lastTraderActions[trader as Trader] == TraderAction.OPEN_POSITION) {
      updatedActiveTraders.push(castTrader);
    }
  }

  return {
    updatedActiveTraders,
    latestBlock,
  };
};
