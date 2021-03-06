"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurnPool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IPaxEmitter",
                name: "_paxEmitter",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "paxEmitter",
        outputs: [
            {
                internalType: "contract IPaxEmitter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pid",
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
const _bytecode = "0x608060405234801561001057600080fd5b5060405161037f38038061037f83398101604081905261002f916100ed565b600080546001600160a01b0319166001600160a01b038416908117909155604080516314a9c06d60e21b815290516352a701b4916004808201926020929091908290030181865afa158015610088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ac919061011b565b600180546001600160a01b0319166001600160a01b03929092169190911790556002555061013f565b6001600160a01b03811681146100ea57600080fd5b50565b6000806040838503121561010057600080fd5b825161010b816100d5565b6020939093015192949293505050565b60006020828403121561012d57600080fd5b8151610138816100d5565b9392505050565b6102318061014e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806344df8e701461005157806352a701b41461005b578063a448e84e1461008b578063f10684541461009e575b600080fd5b6100596100b5565b005b60015461006e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60005461006e906001600160a01b031681565b6100a760025481565b604051908152602001610082565b6000546002546040516328f582d360e11b81526001600160a01b03909216916351eb05a6916100ea9160040190815260200190565b600060405180830381600087803b15801561010457600080fd5b505af1158015610118573d6000803e3d6000fd5b50506001546040516370a0823160e01b81523060048201526001600160a01b0390911692506342966c68915082906370a0823190602401602060405180830381865afa15801561016c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019091906101e2565b6040518263ffffffff1660e01b81526004016101ae91815260200190565b600060405180830381600087803b1580156101c857600080fd5b505af11580156101dc573d6000803e3d6000fd5b50505050565b6000602082840312156101f457600080fd5b505191905056fea2646970667358221220ebf27ef41424056fa9a632a6fe59abbebf63251f8e580d696c032fbc95b5c13764736f6c634300080a0033";
class BurnPool__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(_paxEmitter, _pid, overrides) {
        return super.deploy(_paxEmitter, _pid, overrides || {});
    }
    getDeployTransaction(_paxEmitter, _pid, overrides) {
        return super.getDeployTransaction(_paxEmitter, _pid, overrides || {});
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
exports.BurnPool__factory = BurnPool__factory;
BurnPool__factory.bytecode = _bytecode;
BurnPool__factory.abi = _abi;
//# sourceMappingURL=BurnPool__factory.js.map