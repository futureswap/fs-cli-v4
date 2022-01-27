import type { Trader } from "@liquidationBot/types";
import type { LiquidationBotApi } from "@generated/LiquidationBotApi";
import { chunk } from "lodash";
import { CheckError } from "@liquidationBot/errors";

export type LiquidatableTradersCheckResult = Trader[] | CheckError;

export type ConstructFilter = (
  liquidationBotApi: LiquidationBotApi,
  exchangeAddress: string,
  chunkSize: number
) => Filter;

export type Filter = (
  traders: Trader[]
) => AsyncGenerator<LiquidatableTradersCheckResult>;

export const constructFilterLiquidatableTraders: ConstructFilter = (
  liquidationBotApi: LiquidationBotApi,
  exchangeAddress: string,
  chunkSize: number
) =>
  async function* (traders: Trader[]) {
    const chunksOfTraders = chunk(traders, chunkSize);
    for (const [chunkIndex, chunkOfTraders] of chunksOfTraders.entries()) {
      try {
        const areLiquidatable =
          await liquidationBotApi.callStatic.isLiquidatable(
            exchangeAddress,
            chunkOfTraders
          );

        const liquidatableTraders = areLiquidatable.flatMap(
          (isLiquidatable, i) =>
            isLiquidatable ? traders[chunkIndex * chunkSize + i] : []
        );

        yield liquidatableTraders;
      } catch (error) {
        yield new CheckError(
          chunkOfTraders,
          chunkIndex * chunkSize,
          traders.length,
          error
        );
      }
    }
  };
