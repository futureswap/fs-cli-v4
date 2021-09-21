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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IExchangeInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(address,uint256,uint256,bytes)": FunctionFragment;
    "assetToken()": FunctionFragment;
    "changePosition(int256,int256,int256)": FunctionFragment;
    "exchangeConfig1()": FunctionFragment;
    "exchangeConfig2()": FunctionFragment;
    "exchangeState()": FunctionFragment;
    "getLiquidityTokenAmount(uint256)": FunctionFragment;
    "getLiquidityValue(uint256)": FunctionFragment;
    "getOraclePrice()": FunctionFragment;
    "getPosition(address)": FunctionFragment;
    "getRedeemableLiquidityTokenAmount()": FunctionFragment;
    "liquidate(address)": FunctionFragment;
    "liquidityIncentives()": FunctionFragment;
    "liquidityToken()": FunctionFragment;
    "onTokenTransfer(address,uint256,bytes)": FunctionFragment;
    "pausePrice()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "removeLiquidity(address,uint256,uint256,uint256)": FunctionFragment;
    "setExchangeConfig1(int256,int256,uint256,uint256,int256,uint256,int256)": FunctionFragment;
    "setExchangeConfig2(int256,int256,int256,int256,int256,int256)": FunctionFragment;
    "setExchangeState(uint8,int256)": FunctionFragment;
    "stableToken()": FunctionFragment;
    "swapPool()": FunctionFragment;
    "tradingIncentives()": FunctionFragment;
    "treasury()": FunctionFragment;
    "wethToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changePosition",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeConfig1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeConfig2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityTokenAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOraclePrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPosition", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRedeemableLiquidityTokenAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "liquidate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "liquidityIncentives",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onTokenTransfer",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pausePrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setExchangeConfig1",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setExchangeConfig2",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setExchangeState",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stableToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "swapPool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tradingIncentives",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeConfig1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeConfig2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOraclePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemableLiquidityTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityIncentives",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pausePrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchangeConfig1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchangeConfig2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchangeState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tradingIncentives",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wethToken", data: BytesLike): Result;

  events: {};
}

export class IExchange extends BaseContract {
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

  interface: IExchangeInterface;

  functions: {
    addLiquidity(
      _provider: string,
      _stableAmount: BigNumberish,
      _minLiquidityTokens: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assetToken(overrides?: CallOverrides): Promise<[string]>;

    changePosition(
      _deltaStable: BigNumberish,
      _deltaAsset: BigNumberish,
      _stableBound: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeConfig1(overrides?: CallOverrides): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        tradeFeeFraction: BigNumber;
        timeFee: BigNumber;
        maxLeverage: BigNumber;
        minCollateral: BigNumber;
        treasuryFraction: BigNumber;
        removeLiquidityFee: BigNumber;
        tradeLiquidityReserveFactor: BigNumber;
      }
    >;

    exchangeConfig2(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        dfrRate: BigNumber;
        liquidatorFrac: BigNumber;
        maxLiquidatorFee: BigNumber;
        poolLiquidationFrac: BigNumber;
        maxPoolLiquidationFee: BigNumber;
        adlFeePercent: BigNumber;
      }
    >;

    exchangeState(overrides?: CallOverrides): Promise<[number]>;

    getLiquidityTokenAmount(
      _stableAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        assetAmount: BigNumber;
        liquidityTokenAmount: BigNumber;
      }
    >;

    getLiquidityValue(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        assetAmount: BigNumber;
        stableAmount: BigNumber;
      }
    >;

    getOraclePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPosition(
      _trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        asset: BigNumber;
        stable: BigNumber;
        adlTrancheId: number;
        adlShareClass: BigNumber;
      }
    >;

    getRedeemableLiquidityTokenAmount(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    liquidate(
      _trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityIncentives(overrides?: CallOverrides): Promise<[string]>;

    liquidityToken(overrides?: CallOverrides): Promise<[string]>;

    onTokenTransfer(
      _from: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pausePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    removeLiquidity(
      _recipient: string,
      _tokenAmount: BigNumberish,
      _minAssetAmount: BigNumberish,
      _minStableAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExchangeConfig1(
      _tradeFeeFraction: BigNumberish,
      _timeFee: BigNumberish,
      _maxLeverage: BigNumberish,
      _minCollateral: BigNumberish,
      _treasuryFraction: BigNumberish,
      _removeLiquidityFee: BigNumberish,
      _tradeLiquidityReserveFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExchangeConfig2(
      _dfrRate: BigNumberish,
      _liquidatorFrac: BigNumberish,
      _maxLiquidatorFee: BigNumberish,
      _poolLiquidationFrac: BigNumberish,
      _maxPoolLiquidationFee: BigNumberish,
      _adlFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExchangeState(
      _state: BigNumberish,
      _pausePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stableToken(overrides?: CallOverrides): Promise<[string]>;

    swapPool(overrides?: CallOverrides): Promise<[string]>;

    tradingIncentives(overrides?: CallOverrides): Promise<[string]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    wethToken(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidity(
    _provider: string,
    _stableAmount: BigNumberish,
    _minLiquidityTokens: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assetToken(overrides?: CallOverrides): Promise<string>;

  changePosition(
    _deltaStable: BigNumberish,
    _deltaAsset: BigNumberish,
    _stableBound: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeConfig1(overrides?: CallOverrides): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      tradeFeeFraction: BigNumber;
      timeFee: BigNumber;
      maxLeverage: BigNumber;
      minCollateral: BigNumber;
      treasuryFraction: BigNumber;
      removeLiquidityFee: BigNumber;
      tradeLiquidityReserveFactor: BigNumber;
    }
  >;

  exchangeConfig2(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      dfrRate: BigNumber;
      liquidatorFrac: BigNumber;
      maxLiquidatorFee: BigNumber;
      poolLiquidationFrac: BigNumber;
      maxPoolLiquidationFee: BigNumber;
      adlFeePercent: BigNumber;
    }
  >;

  exchangeState(overrides?: CallOverrides): Promise<number>;

  getLiquidityTokenAmount(
    _stableAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      assetAmount: BigNumber;
      liquidityTokenAmount: BigNumber;
    }
  >;

  getLiquidityValue(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { assetAmount: BigNumber; stableAmount: BigNumber }
  >;

  getOraclePrice(overrides?: CallOverrides): Promise<BigNumber>;

  getPosition(
    _trader: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      asset: BigNumber;
      stable: BigNumber;
      adlTrancheId: number;
      adlShareClass: BigNumber;
    }
  >;

  getRedeemableLiquidityTokenAmount(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  liquidate(
    _trader: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityIncentives(overrides?: CallOverrides): Promise<string>;

  liquidityToken(overrides?: CallOverrides): Promise<string>;

  onTokenTransfer(
    _from: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pausePrice(overrides?: CallOverrides): Promise<BigNumber>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  removeLiquidity(
    _recipient: string,
    _tokenAmount: BigNumberish,
    _minAssetAmount: BigNumberish,
    _minStableAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExchangeConfig1(
    _tradeFeeFraction: BigNumberish,
    _timeFee: BigNumberish,
    _maxLeverage: BigNumberish,
    _minCollateral: BigNumberish,
    _treasuryFraction: BigNumberish,
    _removeLiquidityFee: BigNumberish,
    _tradeLiquidityReserveFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExchangeConfig2(
    _dfrRate: BigNumberish,
    _liquidatorFrac: BigNumberish,
    _maxLiquidatorFee: BigNumberish,
    _poolLiquidationFrac: BigNumberish,
    _maxPoolLiquidationFee: BigNumberish,
    _adlFeePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExchangeState(
    _state: BigNumberish,
    _pausePrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stableToken(overrides?: CallOverrides): Promise<string>;

  swapPool(overrides?: CallOverrides): Promise<string>;

  tradingIncentives(overrides?: CallOverrides): Promise<string>;

  treasury(overrides?: CallOverrides): Promise<string>;

  wethToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidity(
      _provider: string,
      _stableAmount: BigNumberish,
      _minLiquidityTokens: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetToken(overrides?: CallOverrides): Promise<string>;

    changePosition(
      _deltaStable: BigNumberish,
      _deltaAsset: BigNumberish,
      _stableBound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        startAsset: BigNumber;
        startStable: BigNumber;
        totalAsset: BigNumber;
        totalStable: BigNumber;
        tradeFee: BigNumber;
        traderPayout: BigNumber;
      }
    >;

    exchangeConfig1(overrides?: CallOverrides): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        tradeFeeFraction: BigNumber;
        timeFee: BigNumber;
        maxLeverage: BigNumber;
        minCollateral: BigNumber;
        treasuryFraction: BigNumber;
        removeLiquidityFee: BigNumber;
        tradeLiquidityReserveFactor: BigNumber;
      }
    >;

    exchangeConfig2(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        dfrRate: BigNumber;
        liquidatorFrac: BigNumber;
        maxLiquidatorFee: BigNumber;
        poolLiquidationFrac: BigNumber;
        maxPoolLiquidationFee: BigNumber;
        adlFeePercent: BigNumber;
      }
    >;

    exchangeState(overrides?: CallOverrides): Promise<number>;

    getLiquidityTokenAmount(
      _stableAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        assetAmount: BigNumber;
        liquidityTokenAmount: BigNumber;
      }
    >;

    getLiquidityValue(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        assetAmount: BigNumber;
        stableAmount: BigNumber;
      }
    >;

    getOraclePrice(overrides?: CallOverrides): Promise<BigNumber>;

    getPosition(
      _trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        asset: BigNumber;
        stable: BigNumber;
        adlTrancheId: number;
        adlShareClass: BigNumber;
      }
    >;

    getRedeemableLiquidityTokenAmount(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(_trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    liquidityIncentives(overrides?: CallOverrides): Promise<string>;

    liquidityToken(overrides?: CallOverrides): Promise<string>;

    onTokenTransfer(
      _from: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pausePrice(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    removeLiquidity(
      _recipient: string,
      _tokenAmount: BigNumberish,
      _minAssetAmount: BigNumberish,
      _minStableAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        assetAmount: BigNumber;
        stableAmount: BigNumber;
      }
    >;

    setExchangeConfig1(
      _tradeFeeFraction: BigNumberish,
      _timeFee: BigNumberish,
      _maxLeverage: BigNumberish,
      _minCollateral: BigNumberish,
      _treasuryFraction: BigNumberish,
      _removeLiquidityFee: BigNumberish,
      _tradeLiquidityReserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeConfig2(
      _dfrRate: BigNumberish,
      _liquidatorFrac: BigNumberish,
      _maxLiquidatorFee: BigNumberish,
      _poolLiquidationFrac: BigNumberish,
      _maxPoolLiquidationFee: BigNumberish,
      _adlFeePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeState(
      _state: BigNumberish,
      _pausePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stableToken(overrides?: CallOverrides): Promise<string>;

    swapPool(overrides?: CallOverrides): Promise<string>;

    tradingIncentives(overrides?: CallOverrides): Promise<string>;

    treasury(overrides?: CallOverrides): Promise<string>;

    wethToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      _provider: string,
      _stableAmount: BigNumberish,
      _minLiquidityTokens: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assetToken(overrides?: CallOverrides): Promise<BigNumber>;

    changePosition(
      _deltaStable: BigNumberish,
      _deltaAsset: BigNumberish,
      _stableBound: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeConfig1(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeConfig2(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeState(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidityTokenAmount(
      _stableAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityValue(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOraclePrice(overrides?: CallOverrides): Promise<BigNumber>;

    getPosition(_trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRedeemableLiquidityTokenAmount(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(
      _trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityIncentives(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityToken(overrides?: CallOverrides): Promise<BigNumber>;

    onTokenTransfer(
      _from: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pausePrice(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      _recipient: string,
      _tokenAmount: BigNumberish,
      _minAssetAmount: BigNumberish,
      _minStableAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExchangeConfig1(
      _tradeFeeFraction: BigNumberish,
      _timeFee: BigNumberish,
      _maxLeverage: BigNumberish,
      _minCollateral: BigNumberish,
      _treasuryFraction: BigNumberish,
      _removeLiquidityFee: BigNumberish,
      _tradeLiquidityReserveFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExchangeConfig2(
      _dfrRate: BigNumberish,
      _liquidatorFrac: BigNumberish,
      _maxLiquidatorFee: BigNumberish,
      _poolLiquidationFrac: BigNumberish,
      _maxPoolLiquidationFee: BigNumberish,
      _adlFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExchangeState(
      _state: BigNumberish,
      _pausePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stableToken(overrides?: CallOverrides): Promise<BigNumber>;

    swapPool(overrides?: CallOverrides): Promise<BigNumber>;

    tradingIncentives(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      _provider: string,
      _stableAmount: BigNumberish,
      _minLiquidityTokens: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assetToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changePosition(
      _deltaStable: BigNumberish,
      _deltaAsset: BigNumberish,
      _stableBound: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeConfig1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeConfig2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidityTokenAmount(
      _stableAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityValue(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOraclePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPosition(
      _trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRedeemableLiquidityTokenAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate(
      _trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityIncentives(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onTokenTransfer(
      _from: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pausePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeLiquidity(
      _recipient: string,
      _tokenAmount: BigNumberish,
      _minAssetAmount: BigNumberish,
      _minStableAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeConfig1(
      _tradeFeeFraction: BigNumberish,
      _timeFee: BigNumberish,
      _maxLeverage: BigNumberish,
      _minCollateral: BigNumberish,
      _treasuryFraction: BigNumberish,
      _removeLiquidityFee: BigNumberish,
      _tradeLiquidityReserveFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeConfig2(
      _dfrRate: BigNumberish,
      _liquidatorFrac: BigNumberish,
      _maxLiquidatorFee: BigNumberish,
      _poolLiquidationFrac: BigNumberish,
      _maxPoolLiquidationFee: BigNumberish,
      _adlFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeState(
      _state: BigNumberish,
      _pausePrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stableToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tradingIncentives(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}