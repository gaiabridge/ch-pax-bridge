"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeCastMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "toInt128",
        outputs: [
            {
                internalType: "int128",
                name: "",
                type: "int128",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "toInt16",
        outputs: [
            {
                internalType: "int16",
                name: "",
                type: "int16",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toInt256",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "toInt32",
        outputs: [
            {
                internalType: "int32",
                name: "",
                type: "int32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "toInt64",
        outputs: [
            {
                internalType: "int64",
                name: "",
                type: "int64",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "toInt8",
        outputs: [
            {
                internalType: "int8",
                name: "",
                type: "int8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toUint128",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toUint16",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toUint224",
        outputs: [
            {
                internalType: "uint224",
                name: "",
                type: "uint224",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "toUint256",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toUint32",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toUint64",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toUint8",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
        ],
        name: "toUint96",
        outputs: [
            {
                internalType: "uint96",
                name: "",
                type: "uint96",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506108e0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063c81932551161008c578063dd2a031611610066578063dd2a03161461028b578063dfbe873b146102b1578063f136dc02146102d2578063fdcf791b146102f857600080fd5b8063c819325514610217578063cf65b4d31461023f578063d6bd32aa1461026557600080fd5b80635bb79860116100c85780635bb7986014610175578063809fdd33146101a05780639374068f146101cb5780639c6f59be146101f157600080fd5b80630cc4681e146100ef5780631cf887fc146101195780632665fad014610149575b600080fd5b6101026100fd366004610733565b61030b565b60405160ff90911681526020015b60405180910390f35b61012c610127366004610733565b61031c565b6040516bffffffffffffffffffffffff9091168152602001610110565b61015c610157366004610733565b610327565b60405167ffffffffffffffff9091168152602001610110565b610188610183366004610733565b610332565b6040516001600160e01b039091168152602001610110565b6101b36101ae366004610733565b61033d565b6040516001600160801b039091168152602001610110565b6101de6101d9366004610733565b610348565b60405161ffff9091168152602001610110565b6102046101ff366004610733565b610353565b60405160039190910b8152602001610110565b61022a610225366004610733565b61035e565b60405163ffffffff9091168152602001610110565b61025261024d366004610733565b610369565b60405160019190910b8152602001610110565b610278610273366004610733565b610374565b60405160079190910b8152602001610110565b61029e610299366004610733565b61037f565b604051600f9190910b8152602001610110565b6102c46102bf366004610733565b61038a565b604051908152602001610110565b6102e56102e0366004610733565b610395565b60405160009190910b8152602001610110565b6102c4610306366004610733565b6103a0565b6000610316826103ab565b92915050565b6000610316826103db565b600061031682610448565b600061031682610472565b6000610316826104db565b600061031682610504565b600061031682610528565b60006103168261055f565b600061031682610585565b6000610316826105b8565b6000610316826105f7565b600061031682610646565b6000610316826106b0565b6000610316826106e1565b600060ff8211156103d75760405162461bcd60e51b81526004016103ce9061074c565b60405180910390fd5b5090565b60006bffffffffffffffffffffffff8211156103d75760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201526536206269747360d01b60648201526084016103ce565b600067ffffffffffffffff8211156103d75760405162461bcd60e51b81526004016103ce90610791565b60006001600160e01b038211156103d75760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016103ce565b60006001600160801b038211156103d75760405162461bcd60e51b81526004016103ce906107d7565b600061ffff8211156103d75760405162461bcd60e51b81526004016103ce9061081e565b6000637fffffff1982128015906105435750637fffffff8213155b6103d75760405162461bcd60e51b81526004016103ce90610864565b600063ffffffff8211156103d75760405162461bcd60e51b81526004016103ce90610864565b6000617fff19821280159061059c5750617fff8213155b6103d75760405162461bcd60e51b81526004016103ce9061081e565b6000677fffffffffffffff1982128015906105db5750677fffffffffffffff8213155b6103d75760405162461bcd60e51b81526004016103ce90610791565b60006f7fffffffffffffffffffffffffffffff19821280159061062a57506f7fffffffffffffffffffffffffffffff8213155b6103d75760405162461bcd60e51b81526004016103ce906107d7565b60006001600160ff1b038211156103d75760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016103ce565b6000607f1982128015906106c55750607f8213155b6103d75760405162461bcd60e51b81526004016103ce9061074c565b6000808212156103d75760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016103ce565b60006020828403121561074557600080fd5b5035919050565b60208082526025908201527f53616665436173743a2076616c756520646f65736e27742066697420696e2038604082015264206269747360d81b606082015260800190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660408201526534206269747360d01b606082015260800190565b60208082526027908201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316040820152663238206269747360c81b606082015260800190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160408201526536206269747360d01b606082015260800190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360408201526532206269747360d01b60608201526080019056fea264697066735822122028a2bf48a7ec3d3daac731f3f45db0f62d7719d61be2f72a5610726c7903eda864736f6c634300080a0033";
class SafeCastMock__factory extends ethers_1.ContractFactory {
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
exports.SafeCastMock__factory = SafeCastMock__factory;
SafeCastMock__factory.bytecode = _bytecode;
SafeCastMock__factory.abi = _abi;
//# sourceMappingURL=SafeCastMock__factory.js.map