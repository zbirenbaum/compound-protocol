/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  GmxTokenPriceOracle,
  GmxTokenPriceOracleInterface,
} from "../GmxTokenPriceOracle";

const _abi = [
  {
    inputs: [],
    name: "getPriceInUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class GmxTokenPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): GmxTokenPriceOracleInterface {
    return new utils.Interface(_abi) as GmxTokenPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GmxTokenPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as GmxTokenPriceOracle;
  }
}