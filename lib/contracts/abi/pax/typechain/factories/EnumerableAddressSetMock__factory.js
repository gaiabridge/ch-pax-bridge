"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumerableAddressSetMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "result",
                type: "bool",
            },
        ],
        name: "OperationResult",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "value",
                type: "address",
            },
        ],
        name: "add",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "at",
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
                name: "value",
                type: "address",
            },
        ],
        name: "contains",
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
        inputs: [],
        name: "length",
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
                name: "value",
                type: "address",
            },
        ],
        name: "remove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "values",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506104f5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630a3b0a4f146100675780631f7b6d321461007c57806329092d0e146100975780635dbe47e8146100aa578063971217b7146100cd578063e0886f90146100e2575b600080fd5b61007a6100753660046103df565b61010d565b005b61008461015a565b6040519081526020015b60405180910390f35b61007a6100a53660046103df565b61016b565b6100bd6100b83660046103df565b610177565b604051901515815260200161008e565b6100d5610189565b60405161008e9190610408565b6100f56100f0366004610455565b610195565b6040516001600160a01b03909116815260200161008e565b600061011981836101a1565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e338160405161014e911515815260200190565b60405180910390a15050565b600061016660006101bd565b905090565b600061011981836101c7565b600061018381836101dc565b92915050565b606061016660006101fe565b6000610183818361020b565b60006101b6836001600160a01b038416610217565b9392505050565b6000610183825490565b60006101b6836001600160a01b038416610266565b6001600160a01b038116600090815260018301602052604081205415156101b6565b606060006101b683610359565b60006101b683836103b5565b600081815260018301602052604081205461025e57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610183565b506000610183565b6000818152600183016020526040812054801561034f57600061028a60018361046e565b855490915060009061029e9060019061046e565b90508181146103035760008660000182815481106102be576102be610493565b90600052602060002001549050808760000184815481106102e1576102e1610493565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610314576103146104a9565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610183565b6000915050610183565b6060816000018054806020026020016040519081016040528092919081815260200182805480156103a957602002820191906000526020600020905b815481526020019060010190808311610395575b50505050509050919050565b60008260000182815481106103cc576103cc610493565b9060005260206000200154905092915050565b6000602082840312156103f157600080fd5b81356001600160a01b03811681146101b657600080fd5b6020808252825182820181905260009190848201906040850190845b818110156104495783516001600160a01b031683529284019291840191600101610424565b50909695505050505050565b60006020828403121561046757600080fd5b5035919050565b60008282101561048e57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220321e2f3008204d868cb088e25c4df252a3666e067b6bdef58ce17e96785f23d264736f6c634300080a0033";
class EnumerableAddressSetMock__factory extends ethers_1.ContractFactory {
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
exports.EnumerableAddressSetMock__factory = EnumerableAddressSetMock__factory;
EnumerableAddressSetMock__factory.bytecode = _bytecode;
EnumerableAddressSetMock__factory.abi = _abi;
//# sourceMappingURL=EnumerableAddressSetMock__factory.js.map