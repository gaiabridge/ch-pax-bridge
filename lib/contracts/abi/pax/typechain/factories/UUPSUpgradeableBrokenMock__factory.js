"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUPSUpgradeableBrokenMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "current",
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
        name: "decrement",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "increment",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "upgradeTo",
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
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60a06040523060805234801561001457600080fd5b506080516102b761002d600039600050506102b76000f3fe6080604052600436106100555760003560e01c80632baeceb71461005a5780633659cfe6146100715780634f1ef2861461008f5780639fa6a6e3146100a1578063d09de08a146100c3578063d826f88f146100d8575b600080fd5b34801561006657600080fd5b5061006f6100ed565b005b34801561007d57600080fd5b5061006f61008c366004610187565b50565b61006f61009d3660046101bf565b5050565b3480156100ad57600080fd5b5060005460405190815260200160405180910390f35b3480156100cf57600080fd5b5061006f6100f9565b3480156100e457600080fd5b5061006f610107565b6100f76000610110565b565b6100f7600080546001019055565b6100f760008055565b8054806101635760405162461bcd60e51b815260206004820152601b60248201527f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000604482015260640160405180910390fd5b600019019055565b80356001600160a01b038116811461018257600080fd5b919050565b60006020828403121561019957600080fd5b6101a28261016b565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156101d257600080fd5b6101db8361016b565b9150602083013567ffffffffffffffff808211156101f857600080fd5b818501915085601f83011261020c57600080fd5b81358181111561021e5761021e6101a9565b604051601f8201601f19908116603f01168101908382118183101715610246576102466101a9565b8160405282815288602084870101111561025f57600080fd5b826020860160208301376000602084830101528095505050505050925092905056fea264697066735822122058e34102bb1a206a069811434f15a4cc961f4f8cd6aaec1b1f4c9d47cd69824d64736f6c634300080a0033";
class UUPSUpgradeableBrokenMock__factory extends ethers_1.ContractFactory {
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
exports.UUPSUpgradeableBrokenMock__factory = UUPSUpgradeableBrokenMock__factory;
UUPSUpgradeableBrokenMock__factory.bytecode = _bytecode;
UUPSUpgradeableBrokenMock__factory.abi = _abi;
//# sourceMappingURL=UUPSUpgradeableBrokenMock__factory.js.map