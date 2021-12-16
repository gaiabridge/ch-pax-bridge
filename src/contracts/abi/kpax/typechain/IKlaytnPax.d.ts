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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IKlaytnPaxInterface extends ethers.utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "receiveOverHorizon(uint256,address,uint256,uint256,bytes)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "received(address,uint256,address,uint256)": FunctionFragment;
    "signer()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "sendCount(address,uint256,address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "sended(address,uint256,address,uint256)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "sendOverHorizon(uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveOverHorizon",
    values: [BigNumberish, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "received",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCount",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sended",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "sendOverHorizon",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveOverHorizon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "received", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sended", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendOverHorizon",
    data: BytesLike
  ): Result;

  events: {
    "Transfer(address,address,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "SetSigner(address)": EventFragment;
    "SendOverHorizon(address,uint256,address,uint256,uint256)": EventFragment;
    "ReceiveOverHorizon(address,uint256,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetSigner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendOverHorizon"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiveOverHorizon"): EventFragment;
}

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type SetSignerEvent = TypedEvent<[string] & { signer: string }>;

export type SendOverHorizonEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber] & {
    sender: string;
    toChain: BigNumber;
    receiver: string;
    sendId: BigNumber;
    amount: BigNumber;
  }
>;

export type ReceiveOverHorizonEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber] & {
    receiver: string;
    fromChain: BigNumber;
    sender: string;
    sendId: BigNumber;
    amount: BigNumber;
  }
>;

export class IKlaytnPax extends BaseContract {
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

  interface: IKlaytnPaxInterface;

  functions: {
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sended(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  receiveOverHorizon(
    fromChain: BigNumberish,
    sender: string,
    sendId: BigNumberish,
    amount: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  received(
    receiver: string,
    fromChain: BigNumberish,
    sender: string,
    sendId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendCount(
    sender: string,
    toChain: BigNumberish,
    receiver: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sended(
    sender: string,
    toChain: BigNumberish,
    receiver: string,
    sendId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  sendOverHorizon(
    toChain: BigNumberish,
    receiver: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    signer(overrides?: CallOverrides): Promise<string>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sended(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    "SetSigner(address)"(
      signer?: string | null
    ): TypedEventFilter<[string], { signer: string }>;

    SetSigner(
      signer?: string | null
    ): TypedEventFilter<[string], { signer: string }>;

    "SendOverHorizon(address,uint256,address,uint256,uint256)"(
      sender?: string | null,
      toChain?: BigNumberish | null,
      receiver?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        sender: string;
        toChain: BigNumber;
        receiver: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;

    SendOverHorizon(
      sender?: string | null,
      toChain?: BigNumberish | null,
      receiver?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        sender: string;
        toChain: BigNumber;
        receiver: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;

    "ReceiveOverHorizon(address,uint256,address,uint256,uint256)"(
      receiver?: string | null,
      fromChain?: BigNumberish | null,
      sender?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        receiver: string;
        fromChain: BigNumber;
        sender: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;

    ReceiveOverHorizon(
      receiver?: string | null,
      fromChain?: BigNumberish | null,
      sender?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        receiver: string;
        fromChain: BigNumber;
        sender: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;
  };

  estimateGas: {
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sended(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sended(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
