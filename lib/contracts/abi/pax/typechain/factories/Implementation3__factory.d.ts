import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Implementation3, Implementation3Interface } from "../Implementation3";
export declare class Implementation3__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Implementation3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Implementation3;
    connect(signer: Signer): Implementation3__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101ca806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630ff4c91614610046578063552410771461006b5780638129fc1c14610080575b600080fd5b610059610054366004610155565b610088565b60405190815260200160405180910390f35b61007e610079366004610155565b600155565b005b61007e61009e565b600081600154610098919061016e565b92915050565b600054610100900460ff16806100b7575060005460ff16155b61011e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015610140576000805461ffff19166101011790555b8015610152576000805461ff00191690555b50565b60006020828403121561016757600080fd5b5035919050565b6000821982111561018f57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220ca140e2743a5f72ed5be97bb9435ac2539f40710a41b0f2ebb4e1aa925b1a84064736f6c634300080a0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): Implementation3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Implementation3;
}
//# sourceMappingURL=Implementation3__factory.d.ts.map