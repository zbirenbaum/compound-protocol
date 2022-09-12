/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CTokenStorage, CTokenStorageInterface } from "../CTokenStorage";

const _abi = [
  {
    inputs: [],
    name: "WETH",
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
    name: "accrualBlockNumber",
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
    name: "admin",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "autocompound",
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
    name: "borrowIndex",
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
    name: "comptroller",
    outputs: [
      {
        internalType: "contract ComptrollerInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "glpManager",
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
    name: "glpRewardRouter",
    outputs: [
      {
        internalType: "contract IGmxRewardRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gmxToken",
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
    name: "interestRateModel",
    outputs: [
      {
        internalType: "contract InterestRateModel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isGLP",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolSeizeShareMantissa",
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
    name: "reserveFactorMantissa",
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
    name: "sbfGMX",
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
    name: "stakedGLP",
    outputs: [
      {
        internalType: "contract IStakedGlp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedGmxTracker",
    outputs: [
      {
        internalType: "contract IRewardTracker",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBorrows",
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
    name: "totalReserves",
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
    name: "totalSupply",
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

const _bytecode =
  "0x60a06040526000805476a906f338cb21815cbc4bc87ace9e68c87ef8d8f10000006301000000600160b81b0319909116179055600180546001600160a01b0319908116732f546ad4edd93b956c8999be404cdcafde3e89ae1790915560028054821673fc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a17905560038054821673908c4d94d34924765f1edc22a1dd098397c59dd417905560048054821673d2d1162512f927a7e282ef43a362659e4f2a728f1790557382af49447d8a07e3bd95bd0d56f35241523fbab16080526005805490911673321f653eed006ad1c29d174e17d96351bde226491790553480156100f857600080fd5b5060805161048461011460003960006102b001526104846000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80636752e702116100c3578063aa5af0fd1161007c578063aa5af0fd146102a2578063ad5c4648146102ab578063bae49e99146102d2578063f3fdb15a146102e5578063f851a440146102f8578063fa6db1bc1461031057600080fd5b80636752e7021461024e578063686722311461025c5780636c540baf14610276578063842e11eb1461027f5780638f840ddd1461029157806395d89b411461029a57600080fd5b8063267822471161011557806326782247146101ca57806326d9687c146101dd578063313ce5671461020057806347bd37181461021f5780635b30cf55146102285780635fe3b5671461023b57600080fd5b806306dd74e51461015257806306fdde03146101825780630ce4018a14610197578063173b9904146101aa57806318160ddd146101c1575b600080fd5b600454610165906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61018a610323565b60405161017991906103be565b600354610165906001600160a01b031681565b6101b3600d5481565b604051908152602001610179565b6101b360125481565b600954610165906001600160a01b031681565b6000546101f09062010000900460ff1681565b6040519015158152602001610179565b60085461020d9060ff1681565b60405160ff9091168152602001610179565b6101b360105481565b600154610165906001600160a01b031681565b600a54610165906001600160a01b031681565b6101b3666379da05b6000081565b60005461016590630100000090046001600160a01b031681565b6101b3600e5481565b6000546101f090610100900460ff1681565b6101b360115481565b61018a6103b1565b6101b3600f5481565b6101657f000000000000000000000000000000000000000000000000000000000000000081565b600254610165906001600160a01b031681565b600b54610165906001600160a01b031681565b6008546101659061010090046001600160a01b031681565b600554610165906001600160a01b031681565b6006805461033090610413565b80601f016020809104026020016040519081016040528092919081815260200182805461035c90610413565b80156103a95780601f1061037e576101008083540402835291602001916103a9565b820191906000526020600020905b81548152906001019060200180831161038c57829003601f168201915b505050505081565b6007805461033090610413565b600060208083528351808285015260005b818110156103eb578581018301518582016040015282016103cf565b818111156103fd576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061042757607f821691505b6020821081141561044857634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220186f467905cb1ee0484cf229a7399197347a5bd5cd107e4a2afcb1f2c44d90e964736f6c634300080a0033";

export class CTokenStorage__factory extends ContractFactory {
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
  ): Promise<CTokenStorage> {
    return super.deploy(overrides || {}) as Promise<CTokenStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CTokenStorage {
    return super.attach(address) as CTokenStorage;
  }
  connect(signer: Signer): CTokenStorage__factory {
    return super.connect(signer) as CTokenStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CTokenStorageInterface {
    return new utils.Interface(_abi) as CTokenStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CTokenStorage {
    return new Contract(address, _abi, signerOrProvider) as CTokenStorage;
  }
}
