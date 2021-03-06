import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MigratableMockV2, MigratableMockV2Interface } from "../MigratableMockV2";
export declare class MigratableMockV2__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MigratableMockV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MigratableMockV2;
    connect(signer: Signer): MigratableMockV2__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101ff806100206000396000f3fe60806040526004361061003f5760003560e01c80630c55699c146100445780633e54bacb1461006c578063a56dfe4a14610081578063fe4b84df14610097575b600080fd5b34801561005057600080fd5b5061005a60015481565b60405190815260200160405180910390f35b61007f61007a36600461018e565b6100aa565b005b34801561008d57600080fd5b5061005a60035481565b61007f6100a53660046101b0565b6100d1565b60025460ff16156100ba57600080fd5b60019182556003556002805460ff19169091179055565b600054610100900460ff16806100ea575060005460ff16155b6101515760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015610173576000805461ffff19166101011790555b6001829055801561018a576000805461ff00191690555b5050565b600080604083850312156101a157600080fd5b50508035926020909101359150565b6000602082840312156101c257600080fd5b503591905056fea2646970667358221220dd720d0bee73fff7fc19983710ef311a614f7264231608c2589df045abd920a964736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MigratableMockV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MigratableMockV2;
}
//# sourceMappingURL=MigratableMockV2__factory.d.ts.map