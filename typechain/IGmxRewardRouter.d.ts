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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IGmxRewardRouterInterface extends ethers.utils.Interface {
  functions: {
    "bonusGmxTracker()": FunctionFragment;
    "feeGlpTracker()": FunctionFragment;
    "feeGmxTracker()": FunctionFragment;
    "glpManager()": FunctionFragment;
    "handleRewards(bool,bool,bool,bool,bool,bool,bool)": FunctionFragment;
    "mintAndStakeGlp(address,uint256,uint256,uint256)": FunctionFragment;
    "mintAndStakeGlpETH(uint256,uint256)": FunctionFragment;
    "signalTransfer(address)": FunctionFragment;
    "stakeGmx(uint256)": FunctionFragment;
    "stakedGlpTracker()": FunctionFragment;
    "stakedGmxTracker()": FunctionFragment;
    "unstakeGmx(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bonusGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "glpManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "handleRewards",
    values: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeGlp",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeGlpETH",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalTransfer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedGlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeGmx",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "bonusGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "glpManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeGlp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeGlpETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakedGlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstakeGmx", data: BytesLike): Result;

  events: {};
}

export class IGmxRewardRouter extends BaseContract {
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

  interface: IGmxRewardRouterInterface;

  functions: {
    bonusGmxTracker(overrides?: CallOverrides): Promise<[string]>;

    feeGlpTracker(overrides?: CallOverrides): Promise<[string]>;

    feeGmxTracker(overrides?: CallOverrides): Promise<[string]>;

    glpManager(overrides?: CallOverrides): Promise<[string]>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeGmx(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<[string]>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<[string]>;

    unstakeGmx(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bonusGmxTracker(overrides?: CallOverrides): Promise<string>;

  feeGlpTracker(overrides?: CallOverrides): Promise<string>;

  feeGmxTracker(overrides?: CallOverrides): Promise<string>;

  glpManager(overrides?: CallOverrides): Promise<string>;

  handleRewards(
    _shouldClaimGmx: boolean,
    _shouldStakeGmx: boolean,
    _shouldClaimEsGmx: boolean,
    _shouldStakeEsGmx: boolean,
    _shouldStakeMultiplierPoints: boolean,
    _shouldClaimWeth: boolean,
    _shouldConvertWethToEth: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintAndStakeGlp(
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintAndStakeGlpETH(
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalTransfer(
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeGmx(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedGlpTracker(overrides?: CallOverrides): Promise<string>;

  stakedGmxTracker(overrides?: CallOverrides): Promise<string>;

  unstakeGmx(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bonusGmxTracker(overrides?: CallOverrides): Promise<string>;

    feeGlpTracker(overrides?: CallOverrides): Promise<string>;

    feeGmxTracker(overrides?: CallOverrides): Promise<string>;

    glpManager(overrides?: CallOverrides): Promise<string>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signalTransfer(_receiver: string, overrides?: CallOverrides): Promise<void>;

    stakeGmx(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<string>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<string>;

    unstakeGmx(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    bonusGmxTracker(overrides?: CallOverrides): Promise<BigNumber>;

    feeGlpTracker(overrides?: CallOverrides): Promise<BigNumber>;

    feeGmxTracker(overrides?: CallOverrides): Promise<BigNumber>;

    glpManager(overrides?: CallOverrides): Promise<BigNumber>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeGmx(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<BigNumber>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<BigNumber>;

    unstakeGmx(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bonusGmxTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGmxTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glpManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeGmx(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstakeGmx(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}