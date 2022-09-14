/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV4Storage,
  ComptrollerV4StorageInterface,
} from "../ComptrollerV4Storage";

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
  "0x608060405234801561001057600080fd5b50610728806100206000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806387f763031161010f578063bb82aa5e116100a2578063dcfbc0c711610071578063dcfbc0c714610599578063e6653f3d146105ac578063e8755446146105c0578063f851a440146105c957600080fd5b8063bb82aa5e14610528578063ca0af0431461053b578063cc7ebdc414610566578063dce154491461058657600080fd5b806394b2294b116100de57806394b2294b146104d7578063aa900754146104e0578063ac0b0bb7146104e9578063b21be7fd146104fd57600080fd5b806387f76303146103ca5780638936c5fa146103de5780638c57804e146104015780638e8f294b1461043957600080fd5b80634ada90af116101875780636d154ea5116101565780636d154ea51461035e578063731f0c2b146103815780637d3ab61a146103a45780637dc0d1d0146103b757600080fd5b80634ada90af146102d257806351b44619146102db57806352d84d1e146102ef5780636b79c38d1461030257600080fd5b806324a3d622116101c357806324a3d62214610268578063267822471461027b5780633c94786f1461028e5780634a584432146102b257600080fd5b806302c3bcbb146101ea5780631d7b33d71461021d57806321af45691461023d575b600080fd5b61020a6101f836600461065a565b60196020526000908152604090205481565b6040519081526020015b60405180910390f35b61020a61022b36600461065a565b600f6020526000908152604090205481565b601754610250906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b600a54610250906001600160a01b031681565b600154610250906001600160a01b031681565b600a546102a290600160a01b900460ff1681565b6040519015158152602001610214565b61020a6102c036600461065a565b60186020526000908152604090205481565b61020a60065481565b6016546102a290600160a01b900460ff1681565b6102506102fd36600461067c565b6105dc565b61033a61031036600461065a565b6010602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b604080516001600160e01b03909316835263ffffffff909116602083015201610214565b6102a261036c36600461065a565b600c6020526000908152604090205460ff1681565b6102a261038f36600461065a565b600b6020526000908152604090205460ff1681565b601654610250906001600160a01b031681565b600454610250906001600160a01b031681565b600a546102a290600160b01b900460ff1681565b6102a26103ec36600461065a565b60156020526000908152604090205460ff1681565b61033a61040f36600461065a565b6011602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b61049461044736600461065a565b60096020526000908152604090208054600182015460028301546003840154600485015460069095015460ff94851695939492939192818116916101008104821691620100009091041688565b60408051981515895260208901979097529587019490945260608601929092526080850152151560a0840152151560c0830152151560e082015261010001610214565b61020a60075481565b61020a600e5481565b600a546102a290600160b81b900460ff1681565b61020a61050b366004610695565b601260209081526000928352604080842090915290825290205481565b600254610250906001600160a01b031681565b61020a610549366004610695565b601360209081526000928352604080842090915290825290205481565b61020a61057436600461065a565b60146020526000908152604090205481565b6102506105943660046106c8565b610606565b600354610250906001600160a01b031681565b600a546102a290600160a81b900460ff1681565b61020a60055481565b600054610250906001600160a01b031681565b600d81815481106105ec57600080fd5b6000918252602090912001546001600160a01b0316905081565b6008602052816000526040600020818154811061062257600080fd5b6000918252602090912001546001600160a01b03169150829050565b80356001600160a01b038116811461065557600080fd5b919050565b60006020828403121561066c57600080fd5b6106758261063e565b9392505050565b60006020828403121561068e57600080fd5b5035919050565b600080604083850312156106a857600080fd5b6106b18361063e565b91506106bf6020840161063e565b90509250929050565b600080604083850312156106db57600080fd5b6106e48361063e565b94602093909301359350505056fea2646970667358221220840e771572a7df26e7c3ff47d5d648f7f5e7f0273d568faceb64a89cab8704c064736f6c634300080a0033";

export class ComptrollerV4Storage__factory extends ContractFactory {
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
  ): Promise<ComptrollerV4Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV4Storage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ComptrollerV4Storage {
    return super.attach(address) as ComptrollerV4Storage;
  }
  connect(signer: Signer): ComptrollerV4Storage__factory {
    return super.connect(signer) as ComptrollerV4Storage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV4StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV4StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV4Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV4Storage;
  }
}
