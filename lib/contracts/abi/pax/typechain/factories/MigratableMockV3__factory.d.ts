import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MigratableMockV3, MigratableMockV3Interface } from "../MigratableMockV3";
export declare class MigratableMockV3__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MigratableMockV3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MigratableMockV3;
    connect(signer: Signer): MigratableMockV3__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061023c806100206000396000f3fe60806040526004361061004a5760003560e01c80630c55699c1461004f5780633e54bacb146100775780638fd3ab801461008c578063a56dfe4a14610094578063fe4b84df146100aa575b600080fd5b34801561005b57600080fd5b5061006560015481565b60405190815260200160405180910390f35b61008a6100853660046101cb565b6100bd565b005b61008a6100e4565b3480156100a057600080fd5b5061006560035481565b61008a6100b83660046101ed565b61010e565b60025460ff16156100cd57600080fd5b60019182556003556002805460ff19169091179055565b60045460ff16156100f457600080fd5b60018054600380548355556004805460ff19169091179055565b600054610100900460ff1680610127575060005460ff16155b61018e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff161580156101b0576000805461ffff19166101011790555b600182905580156101c7576000805461ff00191690555b5050565b600080604083850312156101de57600080fd5b50508035926020909101359150565b6000602082840312156101ff57600080fd5b503591905056fea2646970667358221220c3ab5c6f037fe09425a82ba4c159d45b99d9f5572918165f2713bb59c4af646664736f6c634300080a0033";
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
    static createInterface(): MigratableMockV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MigratableMockV3;
}
//# sourceMappingURL=MigratableMockV3__factory.d.ts.map