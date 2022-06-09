/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ItemsAdded = ContractEventLog<{
  articule: string;
  uri: string;
  amount: string;
  id: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type ItemsPurchased = ContractEventLog<{
  id: string;
  amount: string;
  purchaseDataChiper: string;
  purchaseDataHash: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface Ishop extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Ishop;
  clone(): Ishop;
  methods: {
    mintAndPrice(
      _articule: string,
      amount: number | string | BN,
      id: number | string | BN,
      newPrice: number | string | BN
    ): NonPayableTransactionObject<void>;

    purchaseItem(
      id: number | string | BN,
      purchaseDataChiper: string,
      purchaseDataHash: string,
      amount: number | string | BN
    ): PayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    withrawFunds(
      value: number | string | BN,
      to: string
    ): NonPayableTransactionObject<void>;
  };
  events: {
    ItemsAdded(cb?: Callback<ItemsAdded>): EventEmitter;
    ItemsAdded(options?: EventOptions, cb?: Callback<ItemsAdded>): EventEmitter;

    ItemsPurchased(cb?: Callback<ItemsPurchased>): EventEmitter;
    ItemsPurchased(
      options?: EventOptions,
      cb?: Callback<ItemsPurchased>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ItemsAdded", cb: Callback<ItemsAdded>): void;
  once(
    event: "ItemsAdded",
    options: EventOptions,
    cb: Callback<ItemsAdded>
  ): void;

  once(event: "ItemsPurchased", cb: Callback<ItemsPurchased>): void;
  once(
    event: "ItemsPurchased",
    options: EventOptions,
    cb: Callback<ItemsPurchased>
  ): void;
}
