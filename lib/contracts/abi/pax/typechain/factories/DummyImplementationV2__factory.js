"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyImplementationV2__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "get",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_text",
                type: "string",
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "initializeNonPayable",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "initializeNonPayableWithValue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "initializePayable",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "initializePayableWithValue",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newVal",
                type: "uint256",
            },
        ],
        name: "migrate",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "reverts",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "text",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "value",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "values",
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
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061064e806100206000396000f3fe6080604052600436106100a75760003560e01c80635e383d21116100645780635e383d21146101675780636d4ce63c14610187578063763e2831146101a35780639fba1f9a146101be578063d31f8b6b146101c8578063e79f5bee1461012957600080fd5b80631f1bd692146100ac578063227367d5146100d75780633bccbbc9146100f05780633fa4f24514610105578063454b06081461012957806354fd4d501461013c575b600080fd5b3480156100b857600080fd5b506100c16101e8565b6040516100ce91906103e8565b60405180910390f35b3480156100e357600080fd5b506100ee600a600055565b005b3480156100fc57600080fd5b506100ee610276565b34801561011157600080fd5b5061011b60005481565b6040519081526020016100ce565b6100ee61013736600461043d565b600055565b34801561014857600080fd5b506040805180820190915260028152612b1960f11b60208201526100c1565b34801561017357600080fd5b5061011b61018236600461043d565b6102c2565b34801561019357600080fd5b50604051600181526020016100ce565b3480156101af57600080fd5b506100ee61013736600461043d565b6100ee6064600055565b3480156101d457600080fd5b506100ee6101e336600461051d565b6102e3565b600180546101f5906105dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610221906105dd565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b505050505081565b60405162461bcd60e51b815260206004820152601c60248201527f44756d6d79496d706c656d656e746174696f6e20726576657274656400000000604482015260640160405180910390fd5b600281815481106102d257600080fd5b600091825260209091200154905081565b600083905581516102fb906001906020850190610315565b50805161030f906002906020840190610399565b50505050565b828054610321906105dd565b90600052602060002090601f0160209004810192826103435760008555610389565b82601f1061035c57805160ff1916838001178555610389565b82800160010185558215610389579182015b8281111561038957825182559160200191906001019061036e565b506103959291506103d3565b5090565b828054828255906000526020600020908101928215610389579160200282018281111561038957825182559160200191906001019061036e565b5b8082111561039557600081556001016103d4565b600060208083528351808285015260005b81811015610415578581018301518582016040015282016103f9565b81811115610427576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561044f57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561049557610495610456565b604052919050565b600082601f8301126104ae57600080fd5b8135602067ffffffffffffffff8211156104ca576104ca610456565b8160051b6104d982820161046c565b92835284810182019282810190878511156104f357600080fd5b83870192505b84831015610512578235825291830191908301906104f9565b979650505050505050565b60008060006060848603121561053257600080fd5b8335925060208085013567ffffffffffffffff8082111561055257600080fd5b818701915087601f83011261056657600080fd5b81358181111561057857610578610456565b61058a601f8201601f1916850161046c565b818152898583860101111561059e57600080fd5b8185850186830137600091810190940152919350604086013591808311156105c557600080fd5b50506105d38682870161049d565b9150509250925092565b600181811c908216806105f157607f821691505b6020821081141561061257634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220339b977eb9fc67ba53a559b21b50a046f6d8387eb1ac54b7c0a245c0b889655c64736f6c634300080a0033";
class DummyImplementationV2__factory extends ethers_1.ContractFactory {
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
exports.DummyImplementationV2__factory = DummyImplementationV2__factory;
DummyImplementationV2__factory.bytecode = _bytecode;
DummyImplementationV2__factory.abi = _abi;
//# sourceMappingURL=DummyImplementationV2__factory.js.map