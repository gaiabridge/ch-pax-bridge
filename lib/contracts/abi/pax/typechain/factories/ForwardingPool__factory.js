"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardingPool__factory = void 0;
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
            {
                internalType: "address",
                name: "_to",
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
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "SetTo",
        type: "event",
    },
    {
        inputs: [],
        name: "forward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "setTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "to",
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
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161070738038061070783398101604081905261002f91610154565b610038336100ec565b600180546001600160a01b0319166001600160a01b038516908117909155604080516314a9c06d60e21b815290516352a701b4916004808201926020929091908290030181865afa158015610091573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b59190610197565b600280546001600160a01b03199081166001600160a01b0393841617909155600393909355600480549093169116179055506101bb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461015157600080fd5b50565b60008060006060848603121561016957600080fd5b83516101748161013c565b60208501516040860151919450925061018c8161013c565b809150509250925092565b6000602082840312156101a957600080fd5b81516101b48161013c565b9392505050565b61053d806101ca6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b146100f8578063a448e84e14610109578063d264e05e1461011c578063f106845414610124578063f2fde38b1461013b57600080fd5b8063131519811461009857806352a701b4146100c8578063715018a6146100db57806377233e90146100e5575b600080fd5b6004546100ab906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6002546100ab906001600160a01b031681565b6100e361014e565b005b6100e36100f3366004610467565b61018d565b6000546001600160a01b03166100ab565b6001546100ab906001600160a01b031681565b6100e3610201565b61012d60035481565b6040519081526020016100bf565b6100e3610149366004610467565b610383565b6000546001600160a01b031633146101815760405162461bcd60e51b815260040161017890610497565b60405180910390fd5b61018b6000610417565b565b6000546001600160a01b031633146101b75760405162461bcd60e51b815260040161017890610497565b600480546001600160a01b0319166001600160a01b0383169081179091556040517fb19d3ee4c3d1459278c131884ef67449890fea57cdd313f01e1ec8e1a0ccb72e90600090a250565b6000546001600160a01b0316331461022b5760405162461bcd60e51b815260040161017890610497565b6001546003546040516328f582d360e11b81526001600160a01b03909216916351eb05a6916102609160040190815260200190565b600060405180830381600087803b15801561027a57600080fd5b505af115801561028e573d6000803e3d6000fd5b5050600254600480546040516370a0823160e01b815230928101929092526001600160a01b03928316945063a9059cbb9350919091169083906370a0823190602401602060405180830381865afa1580156102ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031191906104cc565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561035c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038091906104e5565b50565b6000546001600160a01b031633146103ad5760405162461bcd60e51b815260040161017890610497565b6001600160a01b0381166104125760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610178565b610380815b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561047957600080fd5b81356001600160a01b038116811461049057600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156104de57600080fd5b5051919050565b6000602082840312156104f757600080fd5b8151801515811461049057600080fdfea264697066735822122025c60ad5f30805751e99a7e1b60780dffec756020a68dab708bcd1af40e2d80164736f6c634300080a0033";
class ForwardingPool__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(_paxEmitter, _pid, _to, overrides) {
        return super.deploy(_paxEmitter, _pid, _to, overrides || {});
    }
    getDeployTransaction(_paxEmitter, _pid, _to, overrides) {
        return super.getDeployTransaction(_paxEmitter, _pid, _to, overrides || {});
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
exports.ForwardingPool__factory = ForwardingPool__factory;
ForwardingPool__factory.bytecode = _bytecode;
ForwardingPool__factory.abi = _abi;
//# sourceMappingURL=ForwardingPool__factory.js.map