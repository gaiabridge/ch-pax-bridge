"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whitehole__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IPax",
                name: "_pax",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Stake",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "share",
                type: "uint256",
            },
        ],
        name: "Unstake",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "pax",
        outputs: [
            {
                internalType: "contract IPax",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "stake",
        outputs: [],
        stateMutability: "nonpayable",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "share",
                type: "uint256",
            },
        ],
        name: "unstake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620011053803806200110583398101604081905262000034916200016a565b604080518082018252600a81526910d3910814185e1cd95d60b21b60208083019182528351808501909452600684526514105614d15560d21b9084015281519192916200008491600391620000c4565b5080516200009a906004906020840190620000c4565b5050600580546001600160a01b0319166001600160a01b03939093169290921790915550620001d9565b828054620000d2906200019c565b90600052602060002090601f016020900481019282620000f6576000855562000141565b82601f106200011157805160ff191683800117855562000141565b8280016001018555821562000141579182015b828111156200014157825182559160200191906001019062000124565b506200014f92915062000153565b5090565b5b808211156200014f576000815560010162000154565b6000602082840312156200017d57600080fd5b81516001600160a01b03811681146200019557600080fd5b9392505050565b600181811c90821680620001b157607f821691505b60208210811415620001d357634e487b7160e01b600052602260045260246000fd5b50919050565b610f1c80620001e96000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806352a701b41161008c578063a457c2d711610066578063a457c2d7146101e8578063a694fc3a146101fb578063a9059cbb1461020e578063dd62ed3e1461022157600080fd5b806352a701b41461018c57806370a08231146101b757806395d89b41146101e057600080fd5b806323b872dd116100c857806323b872dd146101425780632e17de7814610155578063313ce5671461016a578063395093511461017957600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761025a565b6040516101049190610cac565b60405180910390f35b61012061011b366004610d1d565b6102ec565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610d47565b610302565b610168610163366004610d83565b6103b1565b005b60405160128152602001610104565b610120610187366004610d1d565b61050e565b60055461019f906001600160a01b031681565b6040516001600160a01b039091168152602001610104565b6101346101c5366004610d9c565b6001600160a01b031660009081526020819052604090205490565b6100f761054a565b6101206101f6366004610d1d565b610559565b610168610209366004610d83565b6105f2565b61012061021c366004610d1d565b610767565b61013461022f366004610db7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026990610dea565b80601f016020809104026020016040519081016040528092919081815260200182805461029590610dea565b80156102e25780601f106102b7576101008083540402835291602001916102e2565b820191906000526020600020905b8154815290600101906020018083116102c557829003601f168201915b5050505050905090565b60006102f9338484610774565b50600192915050565b600061030f848484610899565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103995760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103a68533858403610774565b506001949350505050565b60006103bc60025490565b6005546040516370a0823160e01b815230600482015291925060009161044391849161043d916001600160a01b0316906370a0823190602401602060405180830381865afa158015610412573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104369190610e25565b8690610a68565b90610a7b565b905061044f3384610a87565b6005546001600160a01b031663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af11580156104ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d29190610e3e565b5060405183815233907f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd906020015b60405180910390a2505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102f9918590610545908690610e76565b610774565b60606004805461026990610dea565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105db5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610390565b6105e83385858403610774565b5060019392505050565b6005546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561063b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065f9190610e25565b9050600061066c60025490565b9050801580610679575081155b1561068d576106883384610bcd565b6106ab565b600061069d8361043d8685610a68565b90506106a93382610bcd565b505b6005546001600160a01b03166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018690526064016020604051808303816000875af1158015610710573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107349190610e3e565b5060405183815233907febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a90602001610501565b60006102f9338484610899565b6001600160a01b0383166107d65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610390565b6001600160a01b0382166108375760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610390565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166108fd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610390565b6001600160a01b03821661095f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610390565b6001600160a01b038316600090815260208190526040902054818110156109d75760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610390565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610a0e908490610e76565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a5a91815260200190565b60405180910390a350505050565b6000610a748284610e8e565b9392505050565b6000610a748284610ead565b6001600160a01b038216610ae75760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610390565b6001600160a01b03821660009081526020819052604090205481811015610b5b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610390565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b8a908490610ecf565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161088c565b6001600160a01b038216610c235760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610390565b8060026000828254610c359190610e76565b90915550506001600160a01b03821660009081526020819052604081208054839290610c62908490610e76565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b81811015610cd957858101830151858201604001528201610cbd565b81811115610ceb576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610d1857600080fd5b919050565b60008060408385031215610d3057600080fd5b610d3983610d01565b946020939093013593505050565b600080600060608486031215610d5c57600080fd5b610d6584610d01565b9250610d7360208501610d01565b9150604084013590509250925092565b600060208284031215610d9557600080fd5b5035919050565b600060208284031215610dae57600080fd5b610a7482610d01565b60008060408385031215610dca57600080fd5b610dd383610d01565b9150610de160208401610d01565b90509250929050565b600181811c90821680610dfe57607f821691505b60208210811415610e1f57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610e3757600080fd5b5051919050565b600060208284031215610e5057600080fd5b81518015158114610a7457600080fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115610e8957610e89610e60565b500190565b6000816000190483118215151615610ea857610ea8610e60565b500290565b600082610eca57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610ee157610ee1610e60565b50039056fea26469706673582212202b3e0fa33c672fa451c2551b411ca5993a5dc3a12f0e999ebecec9d013427f8364736f6c634300080a0033";
class Whitehole__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(_pax, overrides) {
        return super.deploy(_pax, overrides || {});
    }
    getDeployTransaction(_pax, overrides) {
        return super.getDeployTransaction(_pax, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Whitehole__factory = Whitehole__factory;
Whitehole__factory.bytecode = _bytecode;
Whitehole__factory.abi = _abi;
//# sourceMappingURL=Whitehole__factory.js.map