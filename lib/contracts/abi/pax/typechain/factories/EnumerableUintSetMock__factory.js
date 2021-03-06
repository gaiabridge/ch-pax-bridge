"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumerableUintSetMock__factory = void 0;
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
                internalType: "uint256",
                name: "value",
                type: "uint256",
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
                name: "value",
                type: "uint256",
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
                internalType: "uint256",
                name: "value",
                type: "uint256",
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
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061048f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631003e2d2146100675780631f7b6d321461007c5780634cc8221514610097578063971217b7146100aa578063c34052e0146100bf578063e0886f90146100e2575b600080fd5b61007a6100753660046103ab565b6100f5565b005b610084610142565b6040519081526020015b60405180910390f35b61007a6100a53660046103ab565b610153565b6100b261015f565b60405161008e91906103c4565b6100d26100cd3660046103ab565b61016b565b604051901515815260200161008e565b6100846100f03660046103ab565b61017d565b60006101018183610189565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051610136911515815260200190565b60405180910390a15050565b600061014e600061019c565b905090565b600061010181836101a6565b606061014e60006101b2565b600061017781836101bf565b92915050565b600061017781836101d7565b600061019583836101e3565b9392505050565b6000610177825490565b60006101958383610232565b6060600061019583610325565b60008181526001830160205260408120541515610195565b60006101958383610381565b600081815260018301602052604081205461022a57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610177565b506000610177565b6000818152600183016020526040812054801561031b576000610256600183610408565b855490915060009061026a90600190610408565b90508181146102cf57600086600001828154811061028a5761028a61042d565b90600052602060002001549050808760000184815481106102ad576102ad61042d565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806102e0576102e0610443565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610177565b6000915050610177565b60608160000180548060200260200160405190810160405280929190818152602001828054801561037557602002820191906000526020600020905b815481526020019060010190808311610361575b50505050509050919050565b60008260000182815481106103985761039861042d565b9060005260206000200154905092915050565b6000602082840312156103bd57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103fc578351835292840192918401916001016103e0565b50909695505050505050565b60008282101561042857634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122056230edba3654dec426c4f2879835aa5506955766cba92cd59abc0fedc5fe86f64736f6c634300080a0033";
class EnumerableUintSetMock__factory extends ethers_1.ContractFactory {
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
exports.EnumerableUintSetMock__factory = EnumerableUintSetMock__factory;
EnumerableUintSetMock__factory.bytecode = _bytecode;
EnumerableUintSetMock__factory.abi = _abi;
//# sourceMappingURL=EnumerableUintSetMock__factory.js.map