import { getEnumEnv, getNumberEnv, getStringEnv } from "./utils";

const WALLET_PREFIX = "m/44'/60'/0'/0/";
// These are the blocks containing the first transactions to the first exchange.
const FUTURESWAP_EXCHANGE_GENESIS_BLOCKS = {
  RINKEBY: 5280847,
  MAINNET: 2194550,
};

type Config = {
  readonly exchangeAddress: string;
  readonly walletPath: string;
  readonly network: {
    readonly mnemonic: string;
    readonly chainId: number;
    readonly rpcUrl: string;
    readonly address: string;
    readonly exchangeGenesisBlock: number;
  };
  readonly liquidationBot: {
    readonly maxBlocksToProcessPerRound: number;
    readonly maxTradersPerLiquidatableCheck: number;
  };
  readonly processors: {
    readonly tradersFetcher: {
      readonly reFetchIntervalSec: number;
    };
    readonly tradersChecker: {
      readonly recheckIntervalSec: number;
    };
    readonly tradersLiquidator: {
      readonly retryIntervalSec: number;
    };
  };
  readonly reporting: "console" | "pm2";
};

const exchangeAddress = getStringEnv("EXCHANGE_ADDRESS").toLowerCase();

const networkName = getEnumEnv("NETWORK_ID", [
  "ARBITRUM_RINKEBY",
  "ARBITRUM",
]).toUpperCase();

const network =
  networkName == "ARBITRUM_RINKEBY"
    ? {
        mnemonic: getStringEnv("ARBITRUM_RINKEBY_MNEMONIC"),
        chainId: getNumberEnv("ARBITRUM_RINKEBY_CHAINID"),
        rpcUrl: getStringEnv("ARBITRUM_RINKEBY_RPC_URL"),
        address: "0x70E7c7F3034D5f2Ff662a5D4f2019E2117b43BD5",
        exchangeGenesisBlock: FUTURESWAP_EXCHANGE_GENESIS_BLOCKS.RINKEBY,
      }
    : {
        mnemonic: getStringEnv("ARBITRUM_MNEMONIC"),
        chainId: getNumberEnv("ARBITRUM_CHAINID"),
        rpcUrl: getStringEnv("ARBITRUM_RPC_URL"),
        address: "0xbFAb47F47853a59ce68226D7ac9b58c5b402D5d0",
        exchangeGenesisBlock: FUTURESWAP_EXCHANGE_GENESIS_BLOCKS.MAINNET,
      };

const reFetchIntervalSec = Number(
  process.env["LIQUIDATION_BOT_TRADERS_FETCHER_REFETCH_INTERVAL_SEC"] ?? 20
);
const recheckIntervalSec = Number(
  process.env["LIQUIDATION_BOT_TRADERS_CHECKER_RECHECK_INTERVAL_SEC"] ?? 5
);
const retryIntervalSec = Number(
  process.env["LIQUIDATION_BOT_TRADERS_LIQUIDATOR_RETRY_INTERVAL_SEC"] ?? 1
);
const reporting = getEnumEnv("REPORTING", ["console", "pm2"], {
  default: "console",
});

export const config: Config = {
  exchangeAddress,
  walletPath:
    WALLET_PREFIX +
    getNumberEnv("ACCOUNT_NUMBER", { isInt: true, isPositive: true }),
  network,
  liquidationBot: {
    maxBlocksToProcessPerRound: 100_000,
    maxTradersPerLiquidatableCheck: 1_000,
  },
  processors: {
    tradersFetcher: {
      reFetchIntervalSec: reFetchIntervalSec,
    },
    tradersChecker: {
      recheckIntervalSec: recheckIntervalSec,
    },
    tradersLiquidator: {
      retryIntervalSec: retryIntervalSec,
    },
  },
  reporting,
};
