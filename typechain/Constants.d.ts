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
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ConstantsInterface extends ethers.utils.Interface {
  functions: {
    "CRV()": FunctionFragment;
    "CURVE_3CRV_GAUGE()": FunctionFragment;
    "CURVE_3CRV_POOL()": FunctionFragment;
    "CURVE_3CRV_TOKEN()": FunctionFragment;
    "CURVE_MINTR()": FunctionFragment;
    "CURVE_SUSD_GAUGE()": FunctionFragment;
    "CURVE_SUSD_POOL()": FunctionFragment;
    "CURVE_SUSD_TOKEN()": FunctionFragment;
    "DAI()": FunctionFragment;
    "SNX()": FunctionFragment;
    "SUSD()": FunctionFragment;
    "USDC()": FunctionFragment;
    "USDT()": FunctionFragment;
    "WBTC()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "CRV", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CURVE_3CRV_GAUGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_3CRV_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_3CRV_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_MINTR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_SUSD_GAUGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_SUSD_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_SUSD_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
  encodeFunctionData(functionFragment: "SNX", values?: undefined): string;
  encodeFunctionData(functionFragment: "SUSD", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDT", values?: undefined): string;
  encodeFunctionData(functionFragment: "WBTC", values?: undefined): string;

  decodeFunctionResult(functionFragment: "CRV", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_3CRV_GAUGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_3CRV_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_3CRV_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_MINTR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_SUSD_GAUGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_SUSD_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_SUSD_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SNX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SUSD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WBTC", data: BytesLike): Result;

  events: {};
}

export class Constants extends Contract {
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

  interface: ConstantsInterface;

  functions: {
    CRV(overrides?: CallOverrides): Promise<[string]>;

    "CRV()"(overrides?: CallOverrides): Promise<[string]>;

    CURVE_3CRV_GAUGE(overrides?: CallOverrides): Promise<[string]>;

    "CURVE_3CRV_GAUGE()"(overrides?: CallOverrides): Promise<[string]>;

    CURVE_3CRV_POOL(overrides?: CallOverrides): Promise<[string]>;

    "CURVE_3CRV_POOL()"(overrides?: CallOverrides): Promise<[string]>;

    CURVE_3CRV_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    "CURVE_3CRV_TOKEN()"(overrides?: CallOverrides): Promise<[string]>;

    CURVE_MINTR(overrides?: CallOverrides): Promise<[string]>;

    "CURVE_MINTR()"(overrides?: CallOverrides): Promise<[string]>;

    CURVE_SUSD_GAUGE(overrides?: CallOverrides): Promise<[string]>;

    "CURVE_SUSD_GAUGE()"(overrides?: CallOverrides): Promise<[string]>;

    CURVE_SUSD_POOL(overrides?: CallOverrides): Promise<[string]>;

    "CURVE_SUSD_POOL()"(overrides?: CallOverrides): Promise<[string]>;

    CURVE_SUSD_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    "CURVE_SUSD_TOKEN()"(overrides?: CallOverrides): Promise<[string]>;

    DAI(overrides?: CallOverrides): Promise<[string]>;

    "DAI()"(overrides?: CallOverrides): Promise<[string]>;

    SNX(overrides?: CallOverrides): Promise<[string]>;

    "SNX()"(overrides?: CallOverrides): Promise<[string]>;

    SUSD(overrides?: CallOverrides): Promise<[string]>;

    "SUSD()"(overrides?: CallOverrides): Promise<[string]>;

    USDC(overrides?: CallOverrides): Promise<[string]>;

    "USDC()"(overrides?: CallOverrides): Promise<[string]>;

    USDT(overrides?: CallOverrides): Promise<[string]>;

    "USDT()"(overrides?: CallOverrides): Promise<[string]>;

    WBTC(overrides?: CallOverrides): Promise<[string]>;

    "WBTC()"(overrides?: CallOverrides): Promise<[string]>;
  };

  CRV(overrides?: CallOverrides): Promise<string>;

  "CRV()"(overrides?: CallOverrides): Promise<string>;

  CURVE_3CRV_GAUGE(overrides?: CallOverrides): Promise<string>;

  "CURVE_3CRV_GAUGE()"(overrides?: CallOverrides): Promise<string>;

  CURVE_3CRV_POOL(overrides?: CallOverrides): Promise<string>;

  "CURVE_3CRV_POOL()"(overrides?: CallOverrides): Promise<string>;

  CURVE_3CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

  "CURVE_3CRV_TOKEN()"(overrides?: CallOverrides): Promise<string>;

  CURVE_MINTR(overrides?: CallOverrides): Promise<string>;

  "CURVE_MINTR()"(overrides?: CallOverrides): Promise<string>;

  CURVE_SUSD_GAUGE(overrides?: CallOverrides): Promise<string>;

  "CURVE_SUSD_GAUGE()"(overrides?: CallOverrides): Promise<string>;

  CURVE_SUSD_POOL(overrides?: CallOverrides): Promise<string>;

  "CURVE_SUSD_POOL()"(overrides?: CallOverrides): Promise<string>;

  CURVE_SUSD_TOKEN(overrides?: CallOverrides): Promise<string>;

  "CURVE_SUSD_TOKEN()"(overrides?: CallOverrides): Promise<string>;

  DAI(overrides?: CallOverrides): Promise<string>;

  "DAI()"(overrides?: CallOverrides): Promise<string>;

  SNX(overrides?: CallOverrides): Promise<string>;

  "SNX()"(overrides?: CallOverrides): Promise<string>;

  SUSD(overrides?: CallOverrides): Promise<string>;

  "SUSD()"(overrides?: CallOverrides): Promise<string>;

  USDC(overrides?: CallOverrides): Promise<string>;

  "USDC()"(overrides?: CallOverrides): Promise<string>;

  USDT(overrides?: CallOverrides): Promise<string>;

  "USDT()"(overrides?: CallOverrides): Promise<string>;

  WBTC(overrides?: CallOverrides): Promise<string>;

  "WBTC()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    CRV(overrides?: CallOverrides): Promise<string>;

    "CRV()"(overrides?: CallOverrides): Promise<string>;

    CURVE_3CRV_GAUGE(overrides?: CallOverrides): Promise<string>;

    "CURVE_3CRV_GAUGE()"(overrides?: CallOverrides): Promise<string>;

    CURVE_3CRV_POOL(overrides?: CallOverrides): Promise<string>;

    "CURVE_3CRV_POOL()"(overrides?: CallOverrides): Promise<string>;

    CURVE_3CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

    "CURVE_3CRV_TOKEN()"(overrides?: CallOverrides): Promise<string>;

    CURVE_MINTR(overrides?: CallOverrides): Promise<string>;

    "CURVE_MINTR()"(overrides?: CallOverrides): Promise<string>;

    CURVE_SUSD_GAUGE(overrides?: CallOverrides): Promise<string>;

    "CURVE_SUSD_GAUGE()"(overrides?: CallOverrides): Promise<string>;

    CURVE_SUSD_POOL(overrides?: CallOverrides): Promise<string>;

    "CURVE_SUSD_POOL()"(overrides?: CallOverrides): Promise<string>;

    CURVE_SUSD_TOKEN(overrides?: CallOverrides): Promise<string>;

    "CURVE_SUSD_TOKEN()"(overrides?: CallOverrides): Promise<string>;

    DAI(overrides?: CallOverrides): Promise<string>;

    "DAI()"(overrides?: CallOverrides): Promise<string>;

    SNX(overrides?: CallOverrides): Promise<string>;

    "SNX()"(overrides?: CallOverrides): Promise<string>;

    SUSD(overrides?: CallOverrides): Promise<string>;

    "SUSD()"(overrides?: CallOverrides): Promise<string>;

    USDC(overrides?: CallOverrides): Promise<string>;

    "USDC()"(overrides?: CallOverrides): Promise<string>;

    USDT(overrides?: CallOverrides): Promise<string>;

    "USDT()"(overrides?: CallOverrides): Promise<string>;

    WBTC(overrides?: CallOverrides): Promise<string>;

    "WBTC()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    CRV(overrides?: CallOverrides): Promise<BigNumber>;

    "CRV()"(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_3CRV_GAUGE(overrides?: CallOverrides): Promise<BigNumber>;

    "CURVE_3CRV_GAUGE()"(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_3CRV_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "CURVE_3CRV_POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_3CRV_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "CURVE_3CRV_TOKEN()"(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_MINTR(overrides?: CallOverrides): Promise<BigNumber>;

    "CURVE_MINTR()"(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_SUSD_GAUGE(overrides?: CallOverrides): Promise<BigNumber>;

    "CURVE_SUSD_GAUGE()"(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_SUSD_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "CURVE_SUSD_POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_SUSD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "CURVE_SUSD_TOKEN()"(overrides?: CallOverrides): Promise<BigNumber>;

    DAI(overrides?: CallOverrides): Promise<BigNumber>;

    "DAI()"(overrides?: CallOverrides): Promise<BigNumber>;

    SNX(overrides?: CallOverrides): Promise<BigNumber>;

    "SNX()"(overrides?: CallOverrides): Promise<BigNumber>;

    SUSD(overrides?: CallOverrides): Promise<BigNumber>;

    "SUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

    USDC(overrides?: CallOverrides): Promise<BigNumber>;

    "USDC()"(overrides?: CallOverrides): Promise<BigNumber>;

    USDT(overrides?: CallOverrides): Promise<BigNumber>;

    "USDT()"(overrides?: CallOverrides): Promise<BigNumber>;

    WBTC(overrides?: CallOverrides): Promise<BigNumber>;

    "WBTC()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CRV(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CRV()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CURVE_3CRV_GAUGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CURVE_3CRV_GAUGE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_3CRV_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CURVE_3CRV_POOL()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_3CRV_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CURVE_3CRV_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_MINTR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CURVE_MINTR()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CURVE_SUSD_GAUGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CURVE_SUSD_GAUGE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_SUSD_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CURVE_SUSD_POOL()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_SUSD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CURVE_SUSD_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DAI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SNX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SNX()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SUSD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "USDC()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "USDT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WBTC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WBTC()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
