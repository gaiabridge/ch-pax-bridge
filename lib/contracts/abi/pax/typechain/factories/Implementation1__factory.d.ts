import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Implementation1, Implementation1Interface } from "../Implementation1";
export declare class Implementation1__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Implementation1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Implementation1;
    connect(signer: Signer): Implementation1__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610159806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063552410771461003b5780638129fc1c14610050575b600080fd5b61004e61004936600461010a565b600155565b005b61004e600054610100900460ff168061006c575060005460ff16155b6100d35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff161580156100f5576000805461ffff19166101011790555b8015610107576000805461ff00191690555b50565b60006020828403121561011c57600080fd5b503591905056fea26469706673582212207892b4be04086033ac6f452d6c4d2b3e1c50699ef78a1cb41ecd33e992bd276364736f6c634300080a0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): Implementation1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Implementation1;
}
//# sourceMappingURL=Implementation1__factory.d.ts.map