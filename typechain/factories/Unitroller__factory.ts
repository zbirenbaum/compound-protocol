/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Unitroller, UnitrollerInterface } from "../Unitroller";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "error",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "info",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "detail",
        type: "uint256",
      },
    ],
    name: "Failure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "NewImplementation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingImplementation",
        type: "address",
      },
    ],
    name: "NewPendingImplementation",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_acceptAdmin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_acceptImplementation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "_setPendingAdmin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPendingImplementation",
        type: "address",
      },
    ],
    name: "_setPendingImplementation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556105df806100326000396000f3fe60806040526004361061007b5760003560e01c8063dcfbc0c71161004e578063dcfbc0c714610196578063e992a041146101b6578063e9c714f2146101d6578063f851a440146101eb5761007b565b806326782247146100f6578063b71d1a0c14610133578063bb82aa5e14610161578063c1e8033414610181575b6002546040516000916001600160a01b03169061009b908390369061055a565b600060405180830381855af49150503d80600081146100d6576040519150601f19603f3d011682016040523d82523d6000602084013e6100db565b606091505b505090506040513d6000823e8180156100f2573d82f35b3d82fd5b34801561010257600080fd5b50600154610116906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013f57600080fd5b5061015361014e36600461056a565b61020b565b60405190815260200161012a565b34801561016d57600080fd5b50600254610116906001600160a01b031681565b34801561018d57600080fd5b50610153610298565b3480156101a257600080fd5b50600354610116906001600160a01b031681565b3480156101c257600080fd5b506101536101d136600461056a565b61038e565b3480156101e257600080fd5b50610153610407565b3480156101f757600080fd5b50600054610116906001600160a01b031681565b600080546001600160a01b031633146102305761022a6001600e6104e1565b92915050565b600180546001600160a01b038481166001600160a01b031983168117909355604080519190921680825260208201939093527fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a991015b60405180910390a160005b9392505050565b6003546000906001600160a01b0316331415806102be57506003546001600160a01b0316155b156102d3576102ce6001806104e1565b905090565b60028054600380546001600160a01b038082166001600160a01b031980861682179096559490911690915560408051919092168082526020820184905292917fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a910160405180910390a1600354604080516001600160a01b03808516825290921660208301527fe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d81591015b60405180910390a160009250505090565b600080546001600160a01b031633146103ad5761022a6001600f6104e1565b600380546001600160a01b038481166001600160a01b031983168117909355604080519190921680825260208201939093527fe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d8159101610286565b6001546000906001600160a01b031633141580610422575033155b15610433576102ce600160006104e1565b60008054600180546001600160a01b038082166001600160a01b031980861682179096559490911690915560408051919092168082526020820184905292917ff9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc910160405180910390a1600154604080516001600160a01b03808516825290921660208301527fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9910161037d565b60007f45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa083601281111561051657610516610593565b83601381111561052857610528610593565b60408051928352602083019190915260009082015260600160405180910390a182601281111561029157610291610593565b8183823760009101908152919050565b60006020828403121561057c57600080fd5b81356001600160a01b038116811461029157600080fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212205e4c9f084570d0ffaf57224a5c24c88c84b2d48d807db1933f6756b35553562064736f6c634300080a0033";

export class Unitroller__factory extends ContractFactory {
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
  ): Promise<Unitroller> {
    return super.deploy(overrides || {}) as Promise<Unitroller>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Unitroller {
    return super.attach(address) as Unitroller;
  }
  connect(signer: Signer): Unitroller__factory {
    return super.connect(signer) as Unitroller__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitrollerInterface {
    return new utils.Interface(_abi) as UnitrollerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Unitroller {
    return new Contract(address, _abi, signerOrProvider) as Unitroller;
  }
}