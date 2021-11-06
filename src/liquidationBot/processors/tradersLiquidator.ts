import type { Trader } from "@liquidationBot/types";
import type { LiquidationsResults } from "@liquidationBot/services";
import { WritableOptions, Duplex, Readable, Writable } from "node:stream";
import { EventEmitter, once } from "node:events";
import { setTimeout } from "node:timers/promises";
import { config as appConfig } from "@config";
import { CheckError, LiquidationError } from "@liquidationBot/errors";
import {
  exchangeService,
  liquidationBotService,
} from "@liquidationBot/services";

const processorConfig = appConfig.processors.tradersLiquidator;

export type TradersLiquidatorResult =
  | { liquidatableChecksErrors: CheckError[] }
  | {
      liquidationsResults: LiquidationsResults;
      liquidationsErrors: LiquidationError[];
    };
export type TradersLiquidatorProcessor = Duplex & {
  [Symbol.asyncIterator](): AsyncIterableIterator<TradersLiquidatorResult>;
};

export function start(): TradersLiquidatorProcessor {
  const liquidatableTraders = new Set<Trader>();
  const tradersEvents = new EventEmitter();

  const saveLiquidatableTraders: WritableOptions["write"] = (
    newLiquidatableTraders: Trader[],
    _: never, // encoding. Irrelevant for streams in object mode
    callback: (error?: Error) => void
  ) => {
    newLiquidatableTraders.forEach((trader) => liquidatableTraders.add(trader));

    if (liquidatableTraders.size) {
      tradersEvents.emit("gotSome", true);
    }

    callback();
  };

  type LiquidationGenerator = () => AsyncGenerator<TradersLiquidatorResult>;
  const liquidationsGenerator: LiquidationGenerator = async function* () {
    while (true) {
      if (!liquidatableTraders.size) {
        await once(tradersEvents, "gotSome");
      }
      const { liquidationsResults, liquidationsErrors } =
        await exchangeService.liquidate([...liquidatableTraders]);

      const liquidatedTraders = Object.keys(liquidationsResults) as Trader[];
      liquidatedTraders.forEach((trader) => liquidatableTraders.delete(trader));

      yield { liquidationsResults, liquidationsErrors };

      if (liquidationsErrors.length) {
        await setTimeout(processorConfig.retryIntervalSec);
      }

      const erroredTraders = liquidationsErrors.map(({ trader }) => trader);
      const { nonLiquidatableTraders, liquidatableChecksErrors } =
        await filterNonLiquidatableTraders(erroredTraders);
      nonLiquidatableTraders.forEach((nonLiquidatableTrader) => {
        liquidatableTraders.delete(nonLiquidatableTrader);
      });
      if (liquidatableChecksErrors.length) {
        yield { liquidatableChecksErrors };
      }
    }
  };

  async function filterNonLiquidatableTraders(traders: Trader[]) {
    const nonLiquidatableTraders = new Set<Trader>(traders);
    const liquidatableChecksErrors: CheckError[] = [];

    for await (const checkResult of liquidationBotService.filterLiquidatableTraders(
      traders
    )) {
      if (checkResult instanceof CheckError) {
        liquidatableChecksErrors.push(checkResult);
      } else {
        checkResult.forEach((liquidatableTrader) => {
          nonLiquidatableTraders.delete(liquidatableTrader);
        });
      }
    }

    return {
      nonLiquidatableTraders,
      liquidatableChecksErrors,
    };
  }

  return Duplex.from({
    writable: new Writable({
      write: saveLiquidatableTraders,
      objectMode: true,
    }),
    readable: Readable.from(liquidationsGenerator()),
  });
}
