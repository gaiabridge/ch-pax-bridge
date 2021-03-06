"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20NoReturnMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "allowance_",
                type: "uint256",
            },
        ],
        name: "setAllowance",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "transfer",
        outputs: [],
        stateMutability: "nonpayable",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101ed806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063095ea7b31461005c57806323b872dd146100755780633ba93f261461008d578063a9059cbb1461005c578063dd62ed3e146100ad575b600080fd5b61007361006a366004610105565b50506000600155565b005b61007361008336600461012f565b5050600060015550565b61007361009b36600461016b565b33600090815260208190526040902055565b6100d76100bb366004610184565b506001600160a01b031660009081526020819052604090205490565b60405190815260200160405180910390f35b80356001600160a01b038116811461010057600080fd5b919050565b6000806040838503121561011857600080fd5b610121836100e9565b946020939093013593505050565b60008060006060848603121561014457600080fd5b61014d846100e9565b925061015b602085016100e9565b9150604084013590509250925092565b60006020828403121561017d57600080fd5b5035919050565b6000806040838503121561019757600080fd5b6101a0836100e9565b91506101ae602084016100e9565b9050925092905056fea26469706673582212201339b60abb628829a232fd8b53c9b5de3292a9266e6e5713fda0375a618d181f64736f6c634300080a0033";
class ERC20NoReturnMock__factory extends ethers_1.ContractFactory {
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
exports.ERC20NoReturnMock__factory = ERC20NoReturnMock__factory;
ERC20NoReturnMock__factory.bytecode = _bytecode;
ERC20NoReturnMock__factory.abi = _abi;
//# sourceMappingURL=ERC20NoReturnMock__factory.js.map