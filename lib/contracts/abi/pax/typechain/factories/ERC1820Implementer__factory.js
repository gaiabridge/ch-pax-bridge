"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1820Implementer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "canImplementInterfaceForAddress",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610114806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063249cb3fa14602d575b600080fd5b603c603836600460a4565b604e565b60405190815260200160405180910390f35b6000828152602081815260408083206001600160a01b038516845290915281205460ff16607b576000609d565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b9392505050565b6000806040838503121560b657600080fd5b8235915060208301356001600160a01b038116811460d357600080fd5b80915050925092905056fea26469706673582212208483754a3d338c548732577bcf0a2c6706b9934c0d262fd8d5f605557fd48f2264736f6c634300080a0033";
class ERC1820Implementer__factory extends ethers_1.ContractFactory {
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
exports.ERC1820Implementer__factory = ERC1820Implementer__factory;
ERC1820Implementer__factory.bytecode = _bytecode;
ERC1820Implementer__factory.abi = _abi;
//# sourceMappingURL=ERC1820Implementer__factory.js.map