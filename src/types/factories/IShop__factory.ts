/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Ishop, IshopInterface } from "../Ishop";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "articule",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ItemsAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "purchaseDataChiper",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "purchaseDataHash",
        type: "string",
      },
    ],
    name: "ItemsPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_articule",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "mintAndPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "purchaseDataChiper",
        type: "string",
      },
      {
        internalType: "string",
        name: "purchaseDataHash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "purchaseItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "withrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Ishop__factory {
  static readonly abi = _abi;
  static createInterface(): IshopInterface {
    return new utils.Interface(_abi) as IshopInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ishop {
    return new Contract(address, _abi, signerOrProvider) as Ishop;
  }
}
