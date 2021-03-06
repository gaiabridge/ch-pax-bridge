"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimersBlockNumberImpl__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "getDeadline",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isExpired",
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
        name: "isPending",
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
        name: "isStarted",
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
        name: "isUnset",
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
        name: "reset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "timestamp",
                type: "uint64",
            },
        ],
        name: "setDeadline",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610243806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635f8d96de1161005b5780635f8d96de146100e05780639c30ad7e14610107578063aebc04831461012a578063d826f88f1461015c57600080fd5b80632260fe3a146100825780632f13b60c146100b5578063544736e6146100bd575b600080fd5b604080516020810190915260005467ffffffffffffffff1690819052155b60405190151581526020015b60405180910390f35b6100a0610169565b604080516020810190915260005467ffffffffffffffff169081905215156100a0565b604080516020808201835260005467ffffffffffffffff16918290529151908152016100ac565b604080516020810190915260005467ffffffffffffffff169081905243106100a0565b61015a6101383660046101dc565b6000805467ffffffffffffffff831667ffffffffffffffff1990911617905550565b005b61015a61018e565b905090565b60408051602081019091526000805467ffffffffffffffff16825290610164906101a6565b6101a46000805467ffffffffffffffff19169055565b565b60006101bc825167ffffffffffffffff16151590565b80156101d6575043826000015167ffffffffffffffff1611155b92915050565b6000602082840312156101ee57600080fd5b813567ffffffffffffffff8116811461020657600080fd5b939250505056fea26469706673582212204212be760fbafdd78f10c2e6e79656e327e8d5f258295c238b67721341673a7964736f6c634300080a0033";
class TimersBlockNumberImpl__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.TimersBlockNumberImpl__factory = TimersBlockNumberImpl__factory;
TimersBlockNumberImpl__factory.bytecode = _bytecode;
TimersBlockNumberImpl__factory.abi = _abi;
//# sourceMappingURL=TimersBlockNumberImpl__factory.js.map