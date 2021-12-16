import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClashingImplementation, ClashingImplementationInterface } from "../ClashingImplementation";
export declare class ClashingImplementation__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClashingImplementation>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClashingImplementation;
    connect(signer: Signer): ClashingImplementation__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060928061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063abf8e0e7146037578063f851a44014604b575b600080fd5b604051600181526020015b60405180910390f35b60405163111111428152602001604256fea26469706673582212200e28695350c4fb030f925540e85b29c92191448b1df9d1eee79ec7c1ff0ffd8564736f6c634300080a0033";
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
    static createInterface(): ClashingImplementationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ClashingImplementation;
}
//# sourceMappingURL=ClashingImplementation__factory.d.ts.map