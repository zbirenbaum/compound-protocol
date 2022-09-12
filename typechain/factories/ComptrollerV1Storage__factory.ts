/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV1Storage,
  ComptrollerV1StorageInterface,
} from "../ComptrollerV1Storage";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accountAssets",
    outputs: [
      {
        internalType: "contract CToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
  {
    inputs: [],
    name: "closeFactorMantissa",
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
  {
    inputs: [],
    name: "comptrollerImplementation",
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
  {
    inputs: [],
    name: "liquidationIncentiveMantissa",
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
  {
    inputs: [],
    name: "maxAssets",
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
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract PriceOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
  {
    inputs: [],
    name: "pendingComptrollerImplementation",
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
  "0x608060405234801561001057600080fd5b506101f6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063bb82aa5e11610066578063bb82aa5e146100fb578063dce154491461010e578063dcfbc0c714610121578063e875544614610134578063f851a4401461013d57600080fd5b806326782247146100985780634ada90af146100c85780637dc0d1d0146100df57806394b2294b146100f2575b600080fd5b6001546100ab906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d160065481565b6040519081526020016100bf565b6004546100ab906001600160a01b031681565b6100d160075481565b6002546100ab906001600160a01b031681565b6100ab61011c366004610188565b610150565b6003546100ab906001600160a01b031681565b6100d160055481565b6000546100ab906001600160a01b031681565b6008602052816000526040600020818154811061016c57600080fd5b6000918252602090912001546001600160a01b03169150829050565b6000806040838503121561019b57600080fd5b82356001600160a01b03811681146101b257600080fd5b94602093909301359350505056fea2646970667358221220fa0b238700de6c1ed6091fc8c6f5d6b4bdc0a074d46d724ead43949a731c31f764736f6c634300080a0033";

export class ComptrollerV1Storage__factory extends ContractFactory {
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
  ): Promise<ComptrollerV1Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV1Storage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ComptrollerV1Storage {
    return super.attach(address) as ComptrollerV1Storage;
  }
  connect(signer: Signer): ComptrollerV1Storage__factory {
    return super.connect(signer) as ComptrollerV1Storage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV1StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV1StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV1Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV1Storage;
  }
}
