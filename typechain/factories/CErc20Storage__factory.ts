/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CErc20Storage, CErc20StorageInterface } from "../CErc20Storage";

const _abi = [
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060918061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636f307dc314602d575b600080fd5b600054603f906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f3fea26469706673582212200d2bae94102e88d4453da0b20a4922c24358fa96d9a41a1d59b1e32fe2a70de264736f6c634300080a0033";

export class CErc20Storage__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CErc20Storage> {
    return super.deploy(overrides || {}) as Promise<CErc20Storage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CErc20Storage {
    return super.attach(address) as CErc20Storage;
  }
  connect(signer: Signer): CErc20Storage__factory {
    return super.connect(signer) as CErc20Storage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CErc20StorageInterface {
    return new utils.Interface(_abi) as CErc20StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CErc20Storage {
    return new Contract(address, _abi, signerOrProvider) as CErc20Storage;
  }
}
