import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContextMock, ContextMockInterface } from "../ContextMock";
export declare class ContextMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContextMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ContextMock;
    connect(signer: Signer): ContextMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061025e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063376bf2621461003b578063d737d0c714610050575b600080fd5b61004e6100493660046100e5565b610058565b005b61004e61009a565b7faf235354a0a47c91ee171961326335cb2d1a8e55b8a89859b0e61eb049e50ea0600036848460405161008e94939291906101a0565b60405180910390a15050565b6040805133815290517fd6558c3ed910d959271054471fd1c326679d9fece99c5091b00ed89627cf2bfc9181900360200190a1565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156100f857600080fd5b82359150602083013567ffffffffffffffff8082111561011757600080fd5b818501915085601f83011261012b57600080fd5b81358181111561013d5761013d6100cf565b604051601f8201601f19908116603f01168101908382118183101715610165576101656100cf565b8160405282815288602084870101111561017e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60608152836060820152838560808301376000608085830101526000601f1980601f8701168301602086818601526080858303016040860152855180608084015260005b818110156102005787810183015184820160a0015282016101e4565b8181111561021257600060a083860101525b50601f019092160160a00197965050505050505056fea26469706673582212204f4a6c172cad6e1a70ef0272fe46b2b9ca2707dbce4c93fc609de7c5584557a064736f6c634300080a0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ContextMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContextMock;
}
//# sourceMappingURL=ContextMock__factory.d.ts.map