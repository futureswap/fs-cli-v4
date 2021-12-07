/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IExternalLiquidityIncentives,
  IExternalLiquidityIncentivesInterface,
} from "../IExternalLiquidityIncentives";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum AccountantPermissions",
        name: "permimssion",
        type: "uint8",
      },
    ],
    name: "AccountantAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountant",
        type: "address",
      },
    ],
    name: "AccountantRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountant",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "intervalLast",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes20",
        name: "scriptSha",
        type: "bytes20",
      },
      {
        components: [
          {
            internalType: "address",
            name: "provider",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ProviderAddition[]",
        name: "additions",
        type: "tuple[]",
      },
    ],
    name: "IncentivesAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountant",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "intervalLast",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "provider",
            type: "address",
          },
          {
            internalType: "int256",
            name: "amount",
            type: "int256",
          },
        ],
        indexed: false,
        internalType: "struct ProviderAdjustment[]",
        name: "adjustments",
        type: "tuple[]",
      },
    ],
    name: "IncentivesAdjusted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accountant",
        type: "address",
      },
    ],
    name: "accountants",
    outputs: [
      {
        internalType: "enum AccountantPermissions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "accountant",
            type: "address",
          },
          {
            internalType: "enum AccountantPermissions",
            name: "permissions",
            type: "uint8",
          },
        ],
        internalType: "struct AccountantInfo",
        name: "info",
        type: "tuple",
      },
    ],
    name: "addAccountant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "intervalStart",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "intervalEnd",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "intervalLast",
        type: "bool",
      },
      {
        internalType: "bytes20",
        name: "scriptSha",
        type: "bytes20",
      },
      {
        internalType: "uint256[]",
        name: "packedAccounts",
        type: "uint256[]",
      },
    ],
    name: "addIncentives",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "intervalStart",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "intervalEnd",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "intervalLast",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "provider",
            type: "address",
          },
          {
            internalType: "int256",
            name: "amount",
            type: "int256",
          },
        ],
        internalType: "struct ProviderAdjustment[]",
        name: "adjustments",
        type: "tuple[]",
      },
    ],
    name: "adjustIncentives",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lockupTime",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
    ],
    name: "claimableTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accountant",
        type: "address",
      },
    ],
    name: "removeAccountant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC677Token",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenLocker",
    outputs: [
      {
        internalType: "contract TokenLocker",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IExternalLiquidityIncentives__factory {
  static readonly abi = _abi;
  static createInterface(): IExternalLiquidityIncentivesInterface {
    return new utils.Interface(_abi) as IExternalLiquidityIncentivesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExternalLiquidityIncentives {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IExternalLiquidityIncentives;
  }
}
