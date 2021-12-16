import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleHuman, SampleHumanInterface } from "../SampleHuman";
export declare class SampleHuman__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SampleHuman>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SampleHuman;
    connect(signer: Signer): SampleHuman__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061016a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634a6c9db61461003b5780638129fc1c14610062575b600080fd5b60005461004e9062010000900460ff1681565b604051901515815260200160405180910390f35b61006a61006c565b005b600054610100900460ff1680610085575060005460ff16155b6100ec5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff1615801561010e576000805461ffff19166101011790555b6000805462ff00001916620100001790558015610131576000805461ff00191690555b5056fea2646970667358221220fa4d7352661c63d234d485f198566f19d9ca2eba241057a075c88680a3ac760a64736f6c634300080a0033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): SampleHumanInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SampleHuman;
}
//# sourceMappingURL=SampleHuman__factory.d.ts.map