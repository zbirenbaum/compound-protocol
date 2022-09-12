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

interface WhitePaperInterestRateModelInterface extends ethers.utils.Interface {
  functions: {
    "baseRatePerBlock()": FunctionFragment;
    "blocksPerYear()": FunctionFragment;
    "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
    "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
    "isInterestRateModel()": FunctionFragment;
    "multiplierPerBlock()": FunctionFragment;
    "utilizationRate(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "baseRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blocksPerYear",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyRate",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isInterestRateModel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multiplierPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "utilizationRate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "baseRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blocksPerYear",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInterestRateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplierPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "utilizationRate",
    data: BytesLike
  ): Result;

  events: {
    "NewInterestParams(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewInterestParams"): EventFragment;
}

export type NewInterestParamsEvent = TypedEvent<
  [BigNumber, BigNumber] & {
    baseRatePerBlock: BigNumber;
    multiplierPerBlock: BigNumber;
  }
>;

export class WhitePaperInterestRateModel extends BaseContract {
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

  interface: WhitePaperInterestRateModelInterface;

  functions: {
    baseRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isInterestRateModel(overrides?: CallOverrides): Promise<[boolean]>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

  getBorrowRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupplyRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    reserveFactorMantissa: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

  multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  utilizationRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "NewInterestParams(uint256,uint256)"(
      baseRatePerBlock?: null,
      multiplierPerBlock?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { baseRatePerBlock: BigNumber; multiplierPerBlock: BigNumber }
    >;

    NewInterestParams(
      baseRatePerBlock?: null,
      multiplierPerBlock?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { baseRatePerBlock: BigNumber; multiplierPerBlock: BigNumber }
    >;
  };

  estimateGas: {
    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<BigNumber>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInterestRateModel(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiplierPerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
