"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20FlashMintMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                internalType: "address",
                name: "initialAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialBalance",
                type: "uint256",
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
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "flashFee",
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
                internalType: "contract IERC3156FlashBorrower",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "flashLoan",
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
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "maxFlashLoan",
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620012f4380380620012f48339810160408190526200003491620002dd565b8351849084906200004d9060039060208501906200016a565b508051620000639060049060208401906200016a565b5050506200007882826200008260201b60201c565b50505050620003d4565b6001600160a01b038216620000dd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f1919062000370565b90915550506001600160a01b038216600090815260208190526040812080548392906200012090849062000370565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001789062000397565b90600052602060002090601f0160209004810192826200019c5760008555620001e7565b82601f10620001b757805160ff1916838001178555620001e7565b82800160010185558215620001e7579182015b82811115620001e7578251825591602001919060010190620001ca565b50620001f5929150620001f9565b5090565b5b80821115620001f55760008155600101620001fa565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200023857600080fd5b81516001600160401b038082111562000255576200025562000210565b604051601f8301601f19908116603f0116810190828211818310171562000280576200028062000210565b816040528381526020925086838588010111156200029d57600080fd5b600091505b83821015620002c15785820183015181830184015290820190620002a2565b83821115620002d35760008385830101525b9695505050505050565b60008060008060808587031215620002f457600080fd5b84516001600160401b03808211156200030c57600080fd5b6200031a8883890162000226565b955060208701519150808211156200033157600080fd5b50620003408782880162000226565b604087015190945090506001600160a01b03811681146200036057600080fd5b6060959095015193969295505050565b600082198211156200039257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003ac57607f821691505b60208210811415620003ce57634e487b7160e01b600052602260045260246000fd5b50919050565b610f1080620003e46000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063613255ab1161008c578063a457c2d711610066578063a457c2d7146101ce578063a9059cbb146101e1578063d9d98ce4146101f4578063dd62ed3e1461020757600080fd5b8063613255ab1461018a57806370a082311461019d57806395d89b41146101c657600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce5671461015557806339509351146101645780635cffe9de1461017757600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f7610240565b6040516101049190610c0f565b60405180910390f35b61012061011b366004610c7c565b6102d2565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610ca8565b6102e8565b60405160128152602001610104565b610120610172366004610c7c565b610397565b610120610185366004610ce9565b6103d3565b610134610198366004610d88565b6105b0565b6101346101ab366004610d88565b6001600160a01b031660009081526020819052604090205490565b6100f76105de565b6101206101dc366004610c7c565b6105ed565b6101206101ef366004610c7c565b610686565b610134610202366004610c7c565b610693565b610134610215366004610dac565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461024f90610de5565b80601f016020809104026020016040519081016040528092919081815260200182805461027b90610de5565b80156102c85780601f1061029d576101008083540402835291602001916102c8565b820191906000526020600020905b8154815290600101906020018083116102ab57829003601f168201915b5050505050905090565b60006102df3384846106f6565b50600192915050565b60006102f584848461081b565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561037f5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61038c85338584036106f6565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102df9185906103ce908690610e36565b6106f6565b6000806103e08686610693565b90506103ec87866109ea565b6040516323e30c8b60e01b81527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9906001600160a01b038916906323e30c8b906104449033908b908b9088908c908c90600401610e4e565b6020604051808303816000875af1158015610463573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104879190610eaa565b146104e05760405162461bcd60e51b8152602060048201526024808201527f4552433230466c6173684d696e743a20696e76616c69642072657475726e2076604482015263616c756560e01b6064820152608401610376565b6001600160a01b038716600090815260016020908152604080832030845290915290205461050e8287610e36565b8110156105755760405162461bcd60e51b815260206004820152602f60248201527f4552433230466c6173684d696e743a20616c6c6f77616e636520646f6573206e60448201526e1bdd08185b1b1bddc81c99599d5b99608a1b6064820152608401610376565b61058f8830846105858a86610ec3565b6103ce9190610ec3565b6105a28861059d8489610e36565b610ac9565b506001979650505050505050565b60006001600160a01b03821630146105c95760006105d8565b6002546105d890600019610ec3565b92915050565b60606004805461024f90610de5565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561066f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610376565b61067c33858584036106f6565b5060019392505050565b60006102df33848461081b565b60006001600160a01b03831630146106ed5760405162461bcd60e51b815260206004820152601b60248201527f4552433230466c6173684d696e743a2077726f6e6720746f6b656e00000000006044820152606401610376565b50600092915050565b6001600160a01b0383166107585760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610376565b6001600160a01b0382166107b95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610376565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831661087f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610376565b6001600160a01b0382166108e15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610376565b6001600160a01b038316600090815260208190526040902054818110156109595760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610376565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610990908490610e36565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109dc91815260200190565b60405180910390a350505050565b6001600160a01b038216610a405760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610376565b8060026000828254610a529190610e36565b90915550506001600160a01b03821660009081526020819052604081208054839290610a7f908490610e36565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610b295760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610376565b6001600160a01b03821660009081526020819052604090205481811015610b9d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610376565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610bcc908490610ec3565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161080e565b600060208083528351808285015260005b81811015610c3c57858101830151858201604001528201610c20565b81811115610c4e576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610c7957600080fd5b50565b60008060408385031215610c8f57600080fd5b8235610c9a81610c64565b946020939093013593505050565b600080600060608486031215610cbd57600080fd5b8335610cc881610c64565b92506020840135610cd881610c64565b929592945050506040919091013590565b600080600080600060808688031215610d0157600080fd5b8535610d0c81610c64565b94506020860135610d1c81610c64565b935060408601359250606086013567ffffffffffffffff80821115610d4057600080fd5b818801915088601f830112610d5457600080fd5b813581811115610d6357600080fd5b896020828501011115610d7557600080fd5b9699959850939650602001949392505050565b600060208284031215610d9a57600080fd5b8135610da581610c64565b9392505050565b60008060408385031215610dbf57600080fd5b8235610dca81610c64565b91506020830135610dda81610c64565b809150509250929050565b600181811c90821680610df957607f821691505b60208210811415610e1a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e4957610e49610e20565b500190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c0840137600060c0848401015260c0601f19601f8501168301019050979650505050505050565b600060208284031215610ebc57600080fd5b5051919050565b600082821015610ed557610ed5610e20565b50039056fea264697066735822122092ac8ece3a66425404ee2a9c1b0bc8bd41c2c8540310b3a8f56e629dbc8b269364736f6c634300080a0033";
class ERC20FlashMintMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(name, symbol, initialAccount, initialBalance, overrides) {
        return super.deploy(name, symbol, initialAccount, initialBalance, overrides || {});
    }
    getDeployTransaction(name, symbol, initialAccount, initialBalance, overrides) {
        return super.getDeployTransaction(name, symbol, initialAccount, initialBalance, overrides || {});
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
exports.ERC20FlashMintMock__factory = ERC20FlashMintMock__factory;
ERC20FlashMintMock__factory.bytecode = _bytecode;
ERC20FlashMintMock__factory.abi = _abi;
//# sourceMappingURL=ERC20FlashMintMock__factory.js.map