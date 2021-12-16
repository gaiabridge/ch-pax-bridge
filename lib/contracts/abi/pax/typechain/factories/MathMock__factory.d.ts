import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MathMock, MathMockInterface } from "../MathMock";
export declare class MathMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MathMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MathMock;
    connect(signer: Signer): MathMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610274806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631b5ac4b51461005c5780632b7423ab146100815780636d5433e6146100945780637ae2b5c7146100a75780639cb35327146100ba575b600080fd5b61006f61006a36600461019f565b6100cd565b60405190815260200160405180910390f35b61006f61008f3660046101b8565b6100de565b61006f6100a23660046101b8565b6100f1565b61006f6100b53660046101b8565b6100fd565b61006f6100c83660046101b8565b610109565b60006100d882610115565b92915050565b60006100ea838361012c565b9392505050565b60006100ea8383610147565b60006100ea838361015e565b60006100ea838361016d565b60008082121561012857816000036100d8565b5090565b600061013b60028484186101f0565b6100ea90848416610204565b60008183101561015757816100ea565b5090919050565b600081831061015757816100ea565b6000610179828461022a565b15610185576001610188565b60005b60ff1661019583856101f0565b6100ea9190610204565b6000602082840312156101b157600080fd5b5035919050565b600080604083850312156101cb57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601260045260246000fd5b6000826101ff576101ff6101da565b500490565b6000821982111561022557634e487b7160e01b600052601160045260246000fd5b500190565b600082610239576102396101da565b50069056fea2646970667358221220f0a2ed91b149406cb17182a2119f5bc42c79d67dd5b9cbbfda42097f613a6b4464736f6c634300080a0033";
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
    static createInterface(): MathMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MathMock;
}
//# sourceMappingURL=MathMock__factory.d.ts.map