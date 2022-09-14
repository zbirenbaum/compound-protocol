/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV7Storage,
  ComptrollerV7StorageInterface,
} from "../ComptrollerV7Storage";

const _abi = [
  {
    inputs: [],
    name: "_borrowGuardianPaused",
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
    inputs: [],
    name: "_mintGuardianPaused",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allMarkets",
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
    name: "borrowCapGuardian",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "borrowCaps",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "borrowGuardianPaused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compAccrued",
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
    name: "compAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compBorrowSpeeds",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compBorrowState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compBorrowerIndex",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compContributorSpeeds",
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
    name: "compRate",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compReceivable",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSpeeds",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSupplierIndex",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSupplySpeeds",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSupplyState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
    name: "immutableCompAddress",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastContributorBlock",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "bool",
        name: "isListed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "collateralFactorMantissa",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationThresholdMantissa",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralFactorMantissaVip",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationThresholdMantissaVip",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isComped",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isPrivate",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "onlyWhitelistedBorrow",
        type: "bool",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintGuardianPaused",
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
    name: "pauseGuardian",
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
  {
    inputs: [],
    name: "seizeGuardianPaused",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "supplyCaps",
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
    name: "tokenBalanceVipThreshold",
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
    name: "transferGuardianPaused",
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
    inputs: [],
    name: "vipNft",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedUser",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610831806100206000396000f3fe608060405234801561001057600080fd5b50600436106102325760003560e01c80638c57804e11610130578063bb82aa5e116100b8578063dcfbc0c71161007c578063dcfbc0c714610682578063e6653f3d14610695578063e8755446146106a9578063f4a433c0146106b2578063f851a440146106d257600080fd5b8063bb82aa5e146105f1578063bea6b8b814610604578063ca0af04314610624578063cc7ebdc41461064f578063dce154491461066f57600080fd5b80639a6f5ac3116100ff5780639a6f5ac31461058d578063aa900754146105a0578063ac0b0bb7146105a9578063ad888c33146105bd578063b21be7fd146105c657600080fd5b80638c57804e1461048e5780638e8f294b146104c657806394b2294b14610564578063986ab8381461056d57600080fd5b806352d84d1e116101be5780637d3ab61a116101825780637d3ab61a146104115780637dc0d1d01461042457806385b7beb81461043757806387f76303146104575780638936c5fa1461046b57600080fd5b806352d84d1e1461033c5780636aa875b51461034f5780636b79c38d1461036f5780636d154ea5146103cb578063731f0c2b146103ee57600080fd5b8063267822471161020557806326782247146102c85780633c94786f146102db5780634a584432146102ff5780634ada90af1461031f57806351b446191461032857600080fd5b806302c3bcbb146102375780631d7b33d71461026a57806321af45691461028a57806324a3d622146102b5575b600080fd5b610257610245366004610763565b60196020526000908152604090205481565b6040519081526020015b60405180910390f35b610257610278366004610763565b600f6020526000908152604090205481565b60175461029d906001600160a01b031681565b6040516001600160a01b039091168152602001610261565b600a5461029d906001600160a01b031681565b60015461029d906001600160a01b031681565b600a546102ef90600160a01b900460ff1681565b6040519015158152602001610261565b61025761030d366004610763565b60186020526000908152604090205481565b61025760065481565b6016546102ef90600160a01b900460ff1681565b61029d61034a366004610785565b6106e5565b61025761035d366004610763565b601d6020526000908152604090205481565b6103a761037d366004610763565b6010602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b604080516001600160e01b03909316835263ffffffff909116602083015201610261565b6102ef6103d9366004610763565b600c6020526000908152604090205460ff1681565b6102ef6103fc366004610763565b600b6020526000908152604090205460ff1681565b60165461029d906001600160a01b031681565b60045461029d906001600160a01b031681565b610257610445366004610763565b601e6020526000908152604090205481565b600a546102ef90600160b01b900460ff1681565b6102ef610479366004610763565b60156020526000908152604090205460ff1681565b6103a761049c366004610763565b6011602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b6105216104d4366004610763565b60096020526000908152604090208054600182015460028301546003840154600485015460069095015460ff94851695939492939192818116916101008104821691620100009091041688565b60408051981515895260208901979097529587019490945260608601929092526080850152151560a0840152151560c0830152151560e082015261010001610261565b61025760075481565b61025761057b366004610763565b601a6020526000908152604090205481565b601f5461029d906001600160a01b031681565b610257600e5481565b600a546102ef90600160b81b900460ff1681565b61025760205481565b6102576105d436600461079e565b601260209081526000928352604080842090915290825290205481565b60025461029d906001600160a01b031681565b610257610612366004610763565b601b6020526000908152604090205481565b61025761063236600461079e565b601360209081526000928352604080842090915290825290205481565b61025761065d366004610763565b60146020526000908152604090205481565b61029d61067d3660046107d1565b61070f565b60035461029d906001600160a01b031681565b600a546102ef90600160a81b900460ff1681565b61025760055481565b6102576106c0366004610763565b601c6020526000908152604090205481565b60005461029d906001600160a01b031681565b600d81815481106106f557600080fd5b6000918252602090912001546001600160a01b0316905081565b6008602052816000526040600020818154811061072b57600080fd5b6000918252602090912001546001600160a01b03169150829050565b80356001600160a01b038116811461075e57600080fd5b919050565b60006020828403121561077557600080fd5b61077e82610747565b9392505050565b60006020828403121561079757600080fd5b5035919050565b600080604083850312156107b157600080fd5b6107ba83610747565b91506107c860208401610747565b90509250929050565b600080604083850312156107e457600080fd5b6107ed83610747565b94602093909301359350505056fea2646970667358221220a7787323a94dc7a587b479328cfb9c18932536b5233f1592109c389a90999f4364736f6c634300080a0033";

export class ComptrollerV7Storage__factory extends ContractFactory {
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
  ): Promise<ComptrollerV7Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV7Storage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ComptrollerV7Storage {
    return super.attach(address) as ComptrollerV7Storage;
  }
  connect(signer: Signer): ComptrollerV7Storage__factory {
    return super.connect(signer) as ComptrollerV7Storage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV7StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV7StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV7Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV7Storage;
  }
}
