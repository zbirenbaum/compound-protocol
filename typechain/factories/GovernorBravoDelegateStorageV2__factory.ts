/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernorBravoDelegateStorageV2,
  GovernorBravoDelegateStorageV2Interface,
} from "../GovernorBravoDelegateStorageV2";

const _abi = [
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
    name: "comp",
    outputs: [
      {
        internalType: "contract CompInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
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
    name: "initialProposalId",
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
    name: "latestProposalIds",
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
    name: "proposalCount",
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
    name: "proposalThreshold",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "abstainVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "contract TimelockInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingDelay",
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
    name: "votingPeriod",
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
    name: "whitelistAccountExpirations",
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
    name: "whitelistGuardian",
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
  "0x608060405234801561001057600080fd5b5061033f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80635c60da1b1161008c578063d33219b411610066578063d33219b414610288578063da35c6641461029b578063f851a440146102a4578063fc4eee42146102b757600080fd5b80635c60da1b14610259578063b58131b01461026c578063c5a8425d1461027557600080fd5b806317977c61116100c857806317977c61146101fd578063267822471461021d57806338bd0dda146102305780633932abb11461025057600080fd5b8063013cf08b146100ef57806302a251a3146101bb578063109d0af8146101d2575b600080fd5b6101606100fd3660046102c0565b600a60208190526000918252604090912080546001820154600283015460078401546008850154600986015496860154600b870154600c9097015495976001600160a01b0390951696939592949193919290919060ff808216916101009004168a565b604080519a8b526001600160a01b0390991660208b0152978901969096526060880194909452608087019290925260a086015260c085015260e084015215156101008301521515610120820152610140015b60405180910390f35b6101c460045481565b6040519081526020016101b2565b6009546101e5906001600160a01b031681565b6040516001600160a01b0390911681526020016101b2565b6101c461020b3660046102d9565b600b6020526000908152604090205481565b6001546101e5906001600160a01b031681565b6101c461023e3660046102d9565b600c6020526000908152604090205481565b6101c460035481565b6002546101e5906001600160a01b031681565b6101c460055481565b600d546101e5906001600160a01b031681565b6008546101e5906001600160a01b031681565b6101c460075481565b6000546101e5906001600160a01b031681565b6101c460065481565b6000602082840312156102d257600080fd5b5035919050565b6000602082840312156102eb57600080fd5b81356001600160a01b038116811461030257600080fd5b939250505056fea2646970667358221220c9047cd3bcf781925fe5357c1bc37bce1e850261ce70136215ddd9cf8a5257d464736f6c634300080a0033";

export class GovernorBravoDelegateStorageV2__factory extends ContractFactory {
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
  ): Promise<GovernorBravoDelegateStorageV2> {
    return super.deploy(
      overrides || {}
    ) as Promise<GovernorBravoDelegateStorageV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernorBravoDelegateStorageV2 {
    return super.attach(address) as GovernorBravoDelegateStorageV2;
  }
  connect(signer: Signer): GovernorBravoDelegateStorageV2__factory {
    return super.connect(signer) as GovernorBravoDelegateStorageV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorBravoDelegateStorageV2Interface {
    return new utils.Interface(_abi) as GovernorBravoDelegateStorageV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorBravoDelegateStorageV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorBravoDelegateStorageV2;
  }
}
