import { liquidationBot } from "./bot";
import type { LiquidationBotArguments } from "./cli";
import { getDeployment } from "./cli";
import * as reporting from "./reporting";

export const run = async (args: LiquidationBotArguments) => {
  const {
    provider,
    fetcherRetryIntervalSec,
    checkerRetryIntervalSec,
    liquidatorRetryIntervalSec,
    liquidatorDelaySec,
  } = args;
  const deployment = getDeployment(args);

  const bot = liquidationBot.start(
    deployment,
    provider,
    fetcherRetryIntervalSec,
    checkerRetryIntervalSec,
    liquidatorRetryIntervalSec,
    liquidatorDelaySec
  );

  let reportingProcess =
    args.reporting == "pm2"
      ? reporting.pm2.start(liquidationBot)
      : reporting.console.start(liquidationBot);

  await Promise.race([bot, reportingProcess]);
};
