"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyImplementation__factory = void 0;
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
const _bytecode = "0x608060405234801561001057600080fd5b50610643806100206000396000f3fe60806040526004361061009c5760003560e01c80635e383d21116100645780635e383d21146101495780636d4ce63c14610169578063763e2831146101855780639fba1f9a146101a5578063d31f8b6b146101af578063e79f5bee146101cf57600080fd5b80631f1bd692146100a1578063227367d5146100cc5780633bccbbc9146100e55780633fa4f245146100fa57806354fd4d501461011e575b600080fd5b3480156100ad57600080fd5b506100b66101dd565b6040516100c391906103dd565b60405180910390f35b3480156100d857600080fd5b506100e3600a600055565b005b3480156100f157600080fd5b506100e361026b565b34801561010657600080fd5b5061011060005481565b6040519081526020016100c3565b34801561012a57600080fd5b50604080518082019091526002815261563160f01b60208201526100b6565b34801561015557600080fd5b50610110610164366004610432565b6102b7565b34801561017557600080fd5b50604051600181526020016100c3565b34801561019157600080fd5b506100e36101a0366004610432565b600055565b6100e36064600055565b3480156101bb57600080fd5b506100e36101ca366004610512565b6102d8565b6100e36101a0366004610432565b600180546101ea906105d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610216906105d2565b80156102635780601f1061023857610100808354040283529160200191610263565b820191906000526020600020905b81548152906001019060200180831161024657829003601f168201915b505050505081565b60405162461bcd60e51b815260206004820152601c60248201527f44756d6d79496d706c656d656e746174696f6e20726576657274656400000000604482015260640160405180910390fd5b600281815481106102c757600080fd5b600091825260209091200154905081565b600083905581516102f090600190602085019061030a565b50805161030490600290602084019061038e565b50505050565b828054610316906105d2565b90600052602060002090601f016020900481019282610338576000855561037e565b82601f1061035157805160ff191683800117855561037e565b8280016001018555821561037e579182015b8281111561037e578251825591602001919060010190610363565b5061038a9291506103c8565b5090565b82805482825590600052602060002090810192821561037e579160200282018281111561037e578251825591602001919060010190610363565b5b8082111561038a57600081556001016103c9565b600060208083528351808285015260005b8181101561040a578581018301518582016040015282016103ee565b8181111561041c576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561044457600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561048a5761048a61044b565b604052919050565b600082601f8301126104a357600080fd5b8135602067ffffffffffffffff8211156104bf576104bf61044b565b8160051b6104ce828201610461565b92835284810182019282810190878511156104e857600080fd5b83870192505b84831015610507578235825291830191908301906104ee565b979650505050505050565b60008060006060848603121561052757600080fd5b8335925060208085013567ffffffffffffffff8082111561054757600080fd5b818701915087601f83011261055b57600080fd5b81358181111561056d5761056d61044b565b61057f601f8201601f19168501610461565b818152898583860101111561059357600080fd5b8185850186830137600091810190940152919350604086013591808311156105ba57600080fd5b50506105c886828701610492565b9150509250925092565b600181811c908216806105e657607f821691505b6020821081141561060757634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220ebda96cd49b63fb4817ddb7da67bbdd3032ece87c3eb422a34aa2ba4809bbd2e64736f6c634300080a0033";
class DummyImplementation__factory extends ethers_1.ContractFactory {
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
exports.DummyImplementation__factory = DummyImplementation__factory;
DummyImplementation__factory.bytecode = _bytecode;
DummyImplementation__factory.abi = _abi;
//# sourceMappingURL=DummyImplementation__factory.js.map