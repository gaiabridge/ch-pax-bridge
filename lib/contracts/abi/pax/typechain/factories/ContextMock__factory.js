"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "integerValue",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "stringValue",
                type: "string",
            },
        ],
        name: "Data",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Sender",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "integerValue",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "stringValue",
                type: "string",
            },
        ],
        name: "msgData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "msgSender",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061025e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063376bf2621461003b578063d737d0c714610050575b600080fd5b61004e6100493660046100e5565b610058565b005b61004e61009a565b7faf235354a0a47c91ee171961326335cb2d1a8e55b8a89859b0e61eb049e50ea0600036848460405161008e94939291906101a0565b60405180910390a15050565b6040805133815290517fd6558c3ed910d959271054471fd1c326679d9fece99c5091b00ed89627cf2bfc9181900360200190a1565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156100f857600080fd5b82359150602083013567ffffffffffffffff8082111561011757600080fd5b818501915085601f83011261012b57600080fd5b81358181111561013d5761013d6100cf565b604051601f8201601f19908116603f01168101908382118183101715610165576101656100cf565b8160405282815288602084870101111561017e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60608152836060820152838560808301376000608085830101526000601f1980601f8701168301602086818601526080858303016040860152855180608084015260005b818110156102005787810183015184820160a0015282016101e4565b8181111561021257600060a083860101525b50601f019092160160a00197965050505050505056fea26469706673582212204f4a6c172cad6e1a70ef0272fe46b2b9ca2707dbce4c93fc609de7c5584557a064736f6c634300080a0033";
class ContextMock__factory extends ethers_1.ContractFactory {
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
exports.ContextMock__factory = ContextMock__factory;
ContextMock__factory.bytecode = _bytecode;
ContextMock__factory.abi = _abi;
//# sourceMappingURL=ContextMock__factory.js.map