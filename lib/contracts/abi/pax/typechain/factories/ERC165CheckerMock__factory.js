"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC165CheckerMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes4[]",
                name: "interfaceIds",
                type: "bytes4[]",
            },
        ],
        name: "getSupportedInterfaces",
        outputs: [
            {
                internalType: "bool[]",
                name: "",
                type: "bool[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes4[]",
                name: "interfaceIds",
                type: "bytes4[]",
            },
        ],
        name: "supportsAllInterfaces",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "supportsERC165",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
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
const _bytecode = "0x608060405234801561001057600080fd5b506105fd806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634b9dd9041461005157806377e6b4cc14610079578063c398a92514610099578063d9057007146100ac575b600080fd5b61006461005f3660046103bf565b6100bf565b60405190151581526020015b60405180910390f35b61008c6100873660046103bf565b6100dd565b6040516100709190610497565b6100646100a73660046104dd565b6100f2565b6100646100ba3660046104f8565b610106565b60006100d46001600160a01b0384168361011b565b90505b92915050565b60606100d46001600160a01b0384168361018b565b60006100d7826001600160a01b0316610241565b60006100d46001600160a01b03841683610274565b600061012683610241565b610132575060006100d7565b60005b825181101561018157610161848483815181106101545761015461052b565b602002602001015161028c565b61016f5760009150506100d7565b8061017981610541565b915050610135565b5060019392505050565b60606000825167ffffffffffffffff8111156101a9576101a9610391565b6040519080825280602002602001820160405280156101d2578160200160208202803683370190505b5090506101de84610241565b156100d45760005b835181101561023957610205858583815181106101545761015461052b565b8282815181106102175761021761052b565b911515602092830291909101909101528061023181610541565b9150506101e6565b509392505050565b6000610254826301ffc9a760e01b61028c565b80156100d7575061026d826001600160e01b031961028c565b1592915050565b600061027f83610241565b80156100d457506100d483835b604080516001600160e01b0319831660248083019190915282518083039091018152604490910182526020810180516001600160e01b03166301ffc9a760e01b179052905160009190829081906001600160a01b03871690617530906102f390869061056a565b6000604051808303818686fa925050503d806000811461032f576040519150601f19603f3d011682016040523d82523d6000602084013e610334565b606091505b509150915060208151101561034f57600093505050506100d7565b81801561036b57508080602001905181019061036b91906105a5565b9695505050505050565b80356001600160a01b038116811461038c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b80356001600160e01b03198116811461038c57600080fd5b600080604083850312156103d257600080fd5b6103db83610375565b915060208084013567ffffffffffffffff808211156103f957600080fd5b818601915086601f83011261040d57600080fd5b81358181111561041f5761041f610391565b8060051b604051601f19603f8301168101818110858211171561044457610444610391565b60405291825284820192508381018501918983111561046257600080fd5b938501935b8285101561048757610478856103a7565b84529385019392850192610467565b8096505050505050509250929050565b6020808252825182820181905260009190848201906040850190845b818110156104d15783511515835292840192918401916001016104b3565b50909695505050505050565b6000602082840312156104ef57600080fd5b6100d482610375565b6000806040838503121561050b57600080fd5b61051483610375565b9150610522602084016103a7565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561056357634e487b7160e01b600052601160045260246000fd5b5060010190565b6000825160005b8181101561058b5760208186018101518583015201610571565b8181111561059a576000828501525b509190910192915050565b6000602082840312156105b757600080fd5b815180151581146100d457600080fdfea2646970667358221220b7210c6f102f0459a5ac2c6f66676584cb616e767f89629aab2d48ecd37acac464736f6c634300080a0033";
class ERC165CheckerMock__factory extends ethers_1.ContractFactory {
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
exports.ERC165CheckerMock__factory = ERC165CheckerMock__factory;
ERC165CheckerMock__factory.bytecode = _bytecode;
ERC165CheckerMock__factory.abi = _abi;
//# sourceMappingURL=ERC165CheckerMock__factory.js.map