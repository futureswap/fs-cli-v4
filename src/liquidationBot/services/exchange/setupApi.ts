import { config } from "@config";
import { IExchange__factory } from "@generated/factory/IExchange__factory";
import { IExchangeEvents__factory } from "@generated/factory/IExchangeEvents__factory";
import wallet from "../wallet";

const { exchangeAddress } = config;

export const exchangeApi = IExchange__factory.connect(exchangeAddress, wallet);
export const exchangeEventsApi = IExchangeEvents__factory.connect(
  exchangeAddress,
  wallet
);
