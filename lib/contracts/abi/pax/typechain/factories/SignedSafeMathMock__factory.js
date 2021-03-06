"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedSafeMathMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256",
            },
        ],
        name: "add",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256",
            },
        ],
        name: "div",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256",
            },
        ],
        name: "mul",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256",
            },
        ],
        name: "sub",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506102c5806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634350913814610051578063a5f3c23b14610076578063adefc37b14610089578063bbe93d911461009c575b600080fd5b61006461005f366004610116565b6100af565b60405190815260200160405180910390f35b610064610084366004610116565b6100c2565b610064610097366004610116565b6100ce565b6100646100aa366004610116565b6100da565b60006100bb83836100e6565b9392505050565b60006100bb83836100f2565b60006100bb83836100fe565b60006100bb838361010a565b60006100bb828461014e565b60006100bb828461018a565b60006100bb82846101cb565b60006100bb828461020a565b6000806040838503121561012957600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b60008261016b57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561018557610185610138565b500590565b600080821280156001600160ff1b03849003851316156101ac576101ac610138565b600160ff1b83900384128116156101c5576101c5610138565b50500190565b60008083128015600160ff1b8501841216156101e9576101e9610138565b6001600160ff1b038401831381161561020457610204610138565b50500390565b60006001600160ff1b038184138284138082168684048611161561023057610230610138565b600160ff1b600087128281168783058912161561024f5761024f610138565b6000871292508782058712848416161561026b5761026b610138565b8785058712818416161561028157610281610138565b50505092909302939250505056fea2646970667358221220912c054477eb23242d465a6d1df123ace414b18ad5a78b4861b6e4e401aca3a864736f6c634300080a0033";
class SignedSafeMathMock__factory extends ethers_1.ContractFactory {
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
exports.SignedSafeMathMock__factory = SignedSafeMathMock__factory;
SignedSafeMathMock__factory.bytecode = _bytecode;
SignedSafeMathMock__factory.abi = _abi;
//# sourceMappingURL=SignedSafeMathMock__factory.js.map