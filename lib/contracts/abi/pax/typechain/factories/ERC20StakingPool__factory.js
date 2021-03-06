"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20StakingPool__factory = void 0;
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
                internalType: "contract IERC20",
                name: "_token",
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
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "claimed",
                type: "uint256",
            },
        ],
        name: "Claim",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "by",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "distributed",
                type: "uint256",
            },
        ],
        name: "Distribute",
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
        ],
        name: "accumulativeOf",
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
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "claimableOf",
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
                name: "owner",
                type: "address",
            },
        ],
        name: "claimedOf",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "shares",
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
        name: "token",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalShares",
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
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "unstake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405260006004556000600555600060075534801561001f57600080fd5b50604051610dce380380610dce83398101604081905261003e9161010a565b600080546001600160a01b0319166001600160a01b038516908117909155604080516314a9c06d60e21b815290516352a701b4916004808201926020929091908290030181865afa158015610097573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100bb919061014d565b600180546001600160a01b03199081166001600160a01b039384161790915560029390935560038054909316911617905550610171565b6001600160a01b038116811461010757600080fd5b50565b60008060006060848603121561011f57600080fd5b835161012a816100f2565b602085015160408601519194509250610142816100f2565b809150509250925092565b60006020828403121561015f57600080fd5b815161016a816100f2565b9392505050565b610c4e806101806000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a694fc3a11610071578063a694fc3a14610143578063baa3f7ee14610156578063ce7c2ac21461017f578063ef15f8111461019f578063f1068454146101b2578063fc0c546a146101bb57600080fd5b80632e17de78146100b95780633a98ef39146100ce5780634e71d92d146100ea57806352a701b4146100f25780638903ab9d1461011d578063a448e84e14610130575b600080fd5b6100cc6100c7366004610a95565b6101ce565b005b6100d760055481565b6040519081526020015b60405180910390f35b6100cc610294565b600154610105906001600160a01b031681565b6040516001600160a01b0390911681526020016100e1565b6100d761012b366004610aae565b6103b9565b600054610105906001600160a01b031681565b6100cc610151366004610a95565b6103eb565b6100d7610164366004610aae565b6001600160a01b031660009081526009602052604090205490565b6100d761018d366004610aae565b60066020526000908152604090205481565b6100d76101ad366004610aae565b6104b0565b6100d760025481565b600354610105906001600160a01b031681565b6101d78161064f565b6003546001600160a01b031663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af1158015610236573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025a9190610ad7565b5060405181815233907f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd906020015b60405180910390a250565b61029c6106cb565b60006102a733610985565b905080156103b6576102d98160096000335b6001600160a01b03168152602081019190915260400160002054906109ab565b33600081815260096020908152604091829020939093555183815290917f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4910160405180910390a26001546001600160a01b031663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af1158015610380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a49190610ad7565b506004546103b290826109be565b6004555b50565b6001600160a01b0381166000908152600960205260408120546103e5906103df846104b0565b906109be565b92915050565b6103f4816109ca565b6003546001600160a01b03166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018490526064016020604051808303816000875af1158015610459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d9190610ad7565b5060405181815233907febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a90602001610289565b6007546005546000919015610646576001546040516370a0823160e01b81523060048201526000916105ae916001600160a01b03909116906370a0823190602401602060405180830381865afa15801561050e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105329190610af9565b6000546002546040516334b2590160e01b81526001600160a01b03909216916334b25901916105679160040190815260200190565b602060405180830381865afa158015610584573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a89190610af9565b906109ab565b905060006105c7600454836109be90919063ffffffff16565b905080156105f8576005546105f5906105ee906105e884600160801b610a27565b90610a33565b84906109ab565b92505b6001600160a01b03851660009081526008602090815260408083205460069092529091205461063d91600160801b916105e89190610637908890610a27565b90610a3f565b95945050505050565b50600092915050565b6106576106cb565b60055461066490826109be565b6005553360009081526006602052604090205461068190826109be565b336000908152600660205260409020556007546106b8906106a29083610a27565b3360009081526008602052604090205490610a3f565b3360009081526008602052604090205550565b6005541561082b576000546002546040516328f582d360e11b81526001600160a01b03909216916351eb05a6916107089160040190815260200190565b600060405180830381600087803b15801561072257600080fd5b505af1158015610736573d6000803e3d6000fd5b50506001546040516370a0823160e01b8152306004820152600093506001600160a01b0390911691506370a0823190602401602060405180830381865afa158015610785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a99190610af9565b905060006107c2600454836109be90919063ffffffff16565b90508015610825576005546107ec906107e3906105e884600160801b610a27565b600754906109ab565b60075560405181815233907fc1d32ad5cca423e7dda2123dbf8c482f8e77d00b631c06e903a47f2cec1334df9060200160405180910390a25b50600455565b6000546002546040516328f582d360e11b81526001600160a01b03909216916351eb05a6916108609160040190815260200190565b600060405180830381600087803b15801561087a57600080fd5b505af115801561088e573d6000803e3d6000fd5b50506001546040516370a0823160e01b8152306004820152600093506001600160a01b0390911691506370a0823190602401602060405180830381865afa1580156108dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109019190610af9565b9050600061091a600454836109be90919063ffffffff16565b9050801561098157600154604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c6890602401600060405180830381600087803b15801561096857600080fd5b505af115801561097c573d6000803e3d6000fd5b505050505b5050565b6001600160a01b0381166000908152600960205260408120546103e5906103df84610a4b565b60006109b78284610b28565b9392505050565b60006109b78284610b40565b6109d26106cb565b6005546109df90826109ab565b6005556109f08160066000336102b9565b336000908152600660205260409020556007546106b890610a119083610a27565b3360009081526008602052604090205490610a89565b60006109b78284610b57565b60006109b78284610b76565b60006109b78284610b98565b6001600160a01b03811660009081526008602090815260408083205460069092528220546007546103e592600160801b926105e89261063791610a27565b60006109b78284610bd9565b600060208284031215610aa757600080fd5b5035919050565b600060208284031215610ac057600080fd5b81356001600160a01b03811681146109b757600080fd5b600060208284031215610ae957600080fd5b815180151581146109b757600080fd5b600060208284031215610b0b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b3b57610b3b610b12565b500190565b600082821015610b5257610b52610b12565b500390565b6000816000190483118215151615610b7157610b71610b12565b500290565b600082610b9357634e487b7160e01b600052601260045260246000fd5b500490565b600080821280156001600160ff1b0384900385131615610bba57610bba610b12565b600160ff1b8390038412811615610bd357610bd3610b12565b50500190565b60008083128015600160ff1b850184121615610bf757610bf7610b12565b6001600160ff1b0384018313811615610c1257610c12610b12565b5050039056fea264697066735822122071c068cc58319b1d56c9811a97404d0f2865e9c872a8d9bac9483a90810f621064736f6c634300080a0033";
class ERC20StakingPool__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(_paxEmitter, _pid, _token, overrides) {
        return super.deploy(_paxEmitter, _pid, _token, overrides || {});
    }
    getDeployTransaction(_paxEmitter, _pid, _token, overrides) {
        return super.getDeployTransaction(_paxEmitter, _pid, _token, overrides || {});
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
exports.ERC20StakingPool__factory = ERC20StakingPool__factory;
ERC20StakingPool__factory.bytecode = _bytecode;
ERC20StakingPool__factory.abi = _abi;
//# sourceMappingURL=ERC20StakingPool__factory.js.map