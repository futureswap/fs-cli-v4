import { config } from "@config";
import { providers } from "ethers";

const { network } = config;
const { chainId, rpcUrl } = network;

const providerConfig = { name: "json-rpc", chainId };
export default new providers.JsonRpcProvider(rpcUrl, providerConfig);
