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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CTokenStorageInterface extends ethers.utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "accrualBlockNumber()": FunctionFragment;
    "admin()": FunctionFragment;
    "autocompound()": FunctionFragment;
    "borrowIndex()": FunctionFragment;
    "comptroller()": FunctionFragment;
    "decimals()": FunctionFragment;
    "glpManager()": FunctionFragment;
    "glpRewardRouter()": FunctionFragment;
    "gmxToken()": FunctionFragment;
    "interestRateModel()": FunctionFragment;
    "isGLP()": FunctionFragment;
    "name()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "protocolSeizeShareMantissa()": FunctionFragment;
    "reserveFactorMantissa()": FunctionFragment;
    "sbfGMX()": FunctionFragment;
    "stakedGLP()": FunctionFragment;
    "stakedGmxTracker()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalBorrows()": FunctionFragment;
    "totalReserves()": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "accrualBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "autocompound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "comptroller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "glpManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "glpRewardRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gmxToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "interestRateModel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isGLP", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolSeizeShareMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveFactorMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sbfGMX", values?: undefined): string;
  encodeFunctionData(functionFragment: "stakedGLP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakedGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalBorrows",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "accrualBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "autocompound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comptroller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "glpManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "glpRewardRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gmxToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "interestRateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolSeizeShareMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveFactorMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sbfGMX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakedGLP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakedGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export class CTokenStorage extends BaseContract {
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

  interface: CTokenStorageInterface;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    accrualBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    autocompound(overrides?: CallOverrides): Promise<[boolean]>;

    borrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    comptroller(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    glpManager(overrides?: CallOverrides): Promise<[string]>;

    glpRewardRouter(overrides?: CallOverrides): Promise<[string]>;

    gmxToken(overrides?: CallOverrides): Promise<[string]>;

    interestRateModel(overrides?: CallOverrides): Promise<[string]>;

    isGLP(overrides?: CallOverrides): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    reserveFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    sbfGMX(overrides?: CallOverrides): Promise<[string]>;

    stakedGLP(overrides?: CallOverrides): Promise<[string]>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalBorrows(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  autocompound(overrides?: CallOverrides): Promise<boolean>;

  borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

  comptroller(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  glpManager(overrides?: CallOverrides): Promise<string>;

  glpRewardRouter(overrides?: CallOverrides): Promise<string>;

  gmxToken(overrides?: CallOverrides): Promise<string>;

  interestRateModel(overrides?: CallOverrides): Promise<string>;

  isGLP(overrides?: CallOverrides): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  sbfGMX(overrides?: CallOverrides): Promise<string>;

  stakedGLP(overrides?: CallOverrides): Promise<string>;

  stakedGmxTracker(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;

  totalReserves(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    autocompound(overrides?: CallOverrides): Promise<boolean>;

    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    comptroller(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    glpManager(overrides?: CallOverrides): Promise<string>;

    glpRewardRouter(overrides?: CallOverrides): Promise<string>;

    gmxToken(overrides?: CallOverrides): Promise<string>;

    interestRateModel(overrides?: CallOverrides): Promise<string>;

    isGLP(overrides?: CallOverrides): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    sbfGMX(overrides?: CallOverrides): Promise<string>;

    stakedGLP(overrides?: CallOverrides): Promise<string>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;

    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    autocompound(overrides?: CallOverrides): Promise<BigNumber>;

    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    comptroller(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    glpManager(overrides?: CallOverrides): Promise<BigNumber>;

    glpRewardRouter(overrides?: CallOverrides): Promise<BigNumber>;

    gmxToken(overrides?: CallOverrides): Promise<BigNumber>;

    interestRateModel(overrides?: CallOverrides): Promise<BigNumber>;

    isGLP(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    sbfGMX(overrides?: CallOverrides): Promise<BigNumber>;

    stakedGLP(overrides?: CallOverrides): Promise<BigNumber>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;

    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accrualBlockNumber(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    autocompound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glpManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glpRewardRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gmxToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isGLP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolSeizeShareMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reserveFactorMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sbfGMX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedGLP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalBorrows(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
