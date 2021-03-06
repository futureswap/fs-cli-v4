/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IExchangeInternalInterface extends ethers.utils.Interface {
  functions: {
    "getTranche(uint8,uint32)": FunctionFragment;
    "lastShareClass(uint8)": FunctionFragment;
    "lastUpdatedTimestamp()": FunctionFragment;
    "longPosition()": FunctionFragment;
    "positions(address)": FunctionFragment;
    "shortPosition()": FunctionFragment;
    "updateIncentives(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getTranche",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastShareClass",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "longPosition",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "positions", values: [string]): string;
  encodeFunctionData(
    functionFragment: "shortPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateIncentives",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "getTranche", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastShareClass",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "longPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shortPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIncentives",
    data: BytesLike
  ): Result;

  events: {};
}

export class IExchangeInternal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IExchangeInternalInterface;

  functions: {
    getTranche(
      trancheId: BigNumberish,
      shareClass: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        assetShares: BigNumber;
        stable: BigNumber;
        totalTrancheShares: BigNumber;
      }
    >;

    lastShareClass(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    lastUpdatedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    longPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { asset: BigNumber; totalAssetShares: BigNumber }
    >;

    positions(_trader: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    shortPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { asset: BigNumber; totalAssetShares: BigNumber }
    >;

    updateIncentives(
      _trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getTranche(
    trancheId: BigNumberish,
    shareClass: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      assetShares: BigNumber;
      stable: BigNumber;
      totalTrancheShares: BigNumber;
    }
  >;

  lastShareClass(
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  lastUpdatedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  longPosition(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { asset: BigNumber; totalAssetShares: BigNumber }
  >;

  positions(_trader: string, overrides?: CallOverrides): Promise<BigNumber>;

  shortPosition(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { asset: BigNumber; totalAssetShares: BigNumber }
  >;

  updateIncentives(
    _trader: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getTranche(
      trancheId: BigNumberish,
      shareClass: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        assetShares: BigNumber;
        stable: BigNumber;
        totalTrancheShares: BigNumber;
      }
    >;

    lastShareClass(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    lastUpdatedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    longPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { asset: BigNumber; totalAssetShares: BigNumber }
    >;

    positions(_trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    shortPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { asset: BigNumber; totalAssetShares: BigNumber }
    >;

    updateIncentives(_trader: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getTranche(
      trancheId: BigNumberish,
      shareClass: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastShareClass(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdatedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    longPosition(overrides?: CallOverrides): Promise<BigNumber>;

    positions(_trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    shortPosition(overrides?: CallOverrides): Promise<BigNumber>;

    updateIncentives(
      _trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getTranche(
      trancheId: BigNumberish,
      shareClass: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastShareClass(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdatedTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    longPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      _trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shortPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateIncentives(
      _trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
