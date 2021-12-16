"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundEscrow__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address payable",
                name: "beneficiary_",
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
                name: "payee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256",
            },
        ],
        name: "Deposited",
        type: "event",
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
        inputs: [],
        name: "RefundsClosed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "RefundsEnabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "payee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256",
            },
        ],
        name: "Withdrawn",
        type: "event",
    },
    {
        inputs: [],
        name: "beneficiary",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "beneficiaryWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "close",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "refundee",
                type: "address",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "payee",
                type: "address",
            },
        ],
        name: "depositsOf",
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
        name: "enableRefunds",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "state",
        outputs: [
            {
                internalType: "enum RefundEscrow.State",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "payee",
                type: "address",
            },
        ],
        name: "withdraw",
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
        ],
        name: "withdrawalAllowed",
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
];
const _bytecode = "0x60a060405234801561001057600080fd5b50604051610bcd380380610bcd83398101604081905261002f91610113565b610038336100c3565b6001600160a01b0381166100a85760405162461bcd60e51b815260206004820152602d60248201527f526566756e64457363726f773a2062656e65666963696172792069732074686560448201526c207a65726f206164647265737360981b606482015260840160405180910390fd5b6001600160a01b03166080526002805460ff19169055610143565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561012557600080fd5b81516001600160a01b038116811461013c57600080fd5b9392505050565b608051610a696101646000396000818160bb01526105850152610a696000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101895780639af6549a146101a7578063c19d93fb146101bc578063e3a9db1a146101dc578063f2fde38b14610220578063f340fa011461024057600080fd5b806338af3eed146100ac57806343d726d6146100f857806351cff8d91461010f578063685ca1941461012f578063715018a61461015f5780638c52dc4114610174575b600080fd5b3480156100b857600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b34801561010457600080fd5b5061010d610253565b005b34801561011b57600080fd5b5061010d61012a366004610976565b610335565b34801561013b57600080fd5b5061014f61014a366004610976565b6103b2565b60405190151581526020016100ef565b34801561016b57600080fd5b5061010d6103d4565b34801561018057600080fd5b5061010d61040a565b34801561019557600080fd5b506000546001600160a01b03166100db565b3480156101b357600080fd5b5061010d6104ed565b3480156101c857600080fd5b5060025460ff166040516100ef91906109b0565b3480156101e857600080fd5b506102126101f7366004610976565b6001600160a01b031660009081526001602052604090205490565b6040519081526020016100ef565b34801561022c57600080fd5b5061010d61023b366004610976565b6105ab565b61010d61024e366004610976565b610643565b6000546001600160a01b031633146102865760405162461bcd60e51b815260040161027d906109d8565b60405180910390fd5b600060025460ff16600281111561029f5761029f61099a565b146102fe5760405162461bcd60e51b815260206004820152602960248201527f526566756e64457363726f773a2063616e206f6e6c7920636c6f7365207768696044820152686c652061637469766560b81b606482015260840161027d565b6002805460ff1916811790556040517f088672c3a6e342f7cd94a65ba63b79df24a8973927b4d05d803c44bbf787d12f90600090a1565b61033e816103b2565b6103a65760405162461bcd60e51b815260206004820152603360248201527f436f6e646974696f6e616c457363726f773a207061796565206973206e6f7420604482015272616c6c6f77656420746f20776974686472617760681b606482015260840161027d565b6103af816106c6565b50565b6000600160025460ff1660028111156103cd576103cd61099a565b1492915050565b6000546001600160a01b031633146103fe5760405162461bcd60e51b815260040161027d906109d8565b610408600061075f565b565b6000546001600160a01b031633146104345760405162461bcd60e51b815260040161027d906109d8565b600060025460ff16600281111561044d5761044d61099a565b146104b55760405162461bcd60e51b815260206004820152603260248201527f526566756e64457363726f773a2063616e206f6e6c7920656e61626c6520726560448201527166756e6473207768696c652061637469766560701b606482015260840161027d565b6002805460ff191660011790556040517f599d8e5a83cffb867d051598c4d70e805d59802d8081c1c7d6dffc5b6aca2b8990600090a1565b6002805460ff1660028111156105055761050561099a565b146105785760405162461bcd60e51b815260206004820152603860248201527f526566756e64457363726f773a2062656e65666963696172792063616e206f6e60448201527f6c79207769746864726177207768696c6520636c6f7365640000000000000000606482015260840161027d565b6104086001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016476107af565b6000546001600160a01b031633146105d55760405162461bcd60e51b815260040161027d906109d8565b6001600160a01b03811661063a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161027d565b6103af8161075f565b600060025460ff16600281111561065c5761065c61099a565b146106bd5760405162461bcd60e51b815260206004820152602b60248201527f526566756e64457363726f773a2063616e206f6e6c79206465706f736974207760448201526a68696c652061637469766560a81b606482015260840161027d565b6103af816108cd565b6000546001600160a01b031633146106f05760405162461bcd60e51b815260040161027d906109d8565b6001600160a01b038116600081815260016020526040812080549190559061071890826107af565b816001600160a01b03167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58260405161075391815260200190565b60405180910390a25050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b804710156107ff5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161027d565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461084c576040519150601f19603f3d011682016040523d82523d6000602084013e610851565b606091505b50509050806108c85760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161027d565b505050565b6000546001600160a01b031633146108f75760405162461bcd60e51b815260040161027d906109d8565b6001600160a01b038116600090815260016020526040812080543492839291610921908490610a0d565b90915550506040518181526001600160a01b038316907f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c490602001610753565b6001600160a01b03811681146103af57600080fd5b60006020828403121561098857600080fd5b813561099381610961565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60208101600383106109d257634e487b7160e01b600052602160045260246000fd5b91905290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610a2e57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212204680c7cbc86285300b20b62bdfc82b0c888596bc8cc673450b241bacc51cf8eb64736f6c634300080a0033";
class RefundEscrow__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(beneficiary_, overrides) {
        return super.deploy(beneficiary_, overrides || {});
    }
    getDeployTransaction(beneficiary_, overrides) {
        return super.getDeployTransaction(beneficiary_, overrides || {});
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
exports.RefundEscrow__factory = RefundEscrow__factory;
RefundEscrow__factory.bytecode = _bytecode;
RefundEscrow__factory.abi = _abi;
//# sourceMappingURL=RefundEscrow__factory.js.map