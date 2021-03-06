"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitMapMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "get",
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
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        name: "setTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "unset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101eb806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063088d22551461005157806360fe47b1146100845780639507d39a146100b4578063dcc9d43c146100fa575b600080fd5b61008261005f366004610167565b600881901c60009081526020819052604090208054600160ff84161b1916905550565b005b610082610092366004610167565b600881901c60009081526020819052604090208054600160ff84161b17905550565b6100e66100c2366004610167565b600881901c600090815260208190526040812054600160ff84161b16151592915050565b604051901515815260200160405180910390f35b610082610108366004610180565b61011460008383610118565b5050565b801561014257600882901c60009081526020849052604090208054600160ff85161b179055505050565b600882901c60009081526020849052604090208054600160ff85161b19169055505050565b60006020828403121561017957600080fd5b5035919050565b6000806040838503121561019357600080fd5b82359150602083013580151581146101aa57600080fd5b80915050925092905056fea2646970667358221220c4311a2a968f1040453f97088ade8bbfa0f2d41ac124075c37c582cc5144a24764736f6c634300080a0033";
class BitMapMock__factory extends ethers_1.ContractFactory {
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
exports.BitMapMock__factory = BitMapMock__factory;
BitMapMock__factory.bytecode = _bytecode;
BitMapMock__factory.abi = _abi;
//# sourceMappingURL=BitMapMock__factory.js.map