"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArraysImpl__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "array",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "element",
                type: "uint256",
            },
        ],
        name: "findUpperBound",
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
const _bytecode = "0x608060405234801561001057600080fd5b506040516103a33803806103a383398101604081905261002f916100bf565b8051610042906000906020840190610049565b505061017c565b828054828255906000526020600020908101928215610084579160200282015b82811115610084578251825591602001919060010190610069565b50610090929150610094565b5090565b5b808211156100905760008155600101610095565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156100d257600080fd5b82516001600160401b03808211156100e957600080fd5b818501915085601f8301126100fd57600080fd5b81518181111561010f5761010f6100a9565b8060051b604051601f19603f83011681018181108582111715610134576101346100a9565b60405291825284820192508381018501918883111561015257600080fd5b938501935b8285101561017057845184529385019392850192610157565b98975050505050505050565b6102188061018b6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806333e3a58a14610030575b600080fd5b61004361003e36600461014c565b610055565b60405190815260200160405180910390f35b60006100618183610067565b92915050565b815460009061007857506000610061565b82546000905b808210156100d4576000610092838361012a565b9050848682815481106100a7576100a7610165565b906000526020600020015411156100c0578091506100ce565b6100cb816001610191565b92505b5061007e565b600082118015610109575083856100ec6001856101a9565b815481106100fc576100fc610165565b9060005260206000200154145b15610122576101196001836101a9565b92505050610061565b509392505050565b600061013960028484186101c0565b61014590848416610191565b9392505050565b60006020828403121561015e57600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156101a4576101a461017b565b500190565b6000828210156101bb576101bb61017b565b500390565b6000826101dd57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220fb9d07fcc613f8e21220fbf6afd81977f2235c9f4d121c1847ab1cbc75ce44a464736f6c634300080a0033";
class ArraysImpl__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(array, overrides) {
        return super.deploy(array, overrides || {});
    }
    getDeployTransaction(array, overrides) {
        return super.getDeployTransaction(array, overrides || {});
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
exports.ArraysImpl__factory = ArraysImpl__factory;
ArraysImpl__factory.bytecode = _bytecode;
ArraysImpl__factory.abi = _abi;
//# sourceMappingURL=ArraysImpl__factory.js.map