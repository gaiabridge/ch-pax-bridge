import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PausableMock, PausableMockInterface } from "../PausableMock";
export declare class PausableMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PausableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PausableMock;
    connect(signer: Signer): PausableMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506000805461ffff191681556001556103248061002e6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806376657b8e1161005b57806376657b8e146100bf5780638456cb59146100d15780639958f045146100d9578063e7651d7a146100e157600080fd5b806306661abd146100825780633f4ba83a1461009e5780635c975abb146100a8575b600080fd5b61008b60015481565b6040519081526020015b60405180910390f35b6100a66100e9565b005b60005460ff165b6040519015158152602001610095565b6000546100af90610100900460ff1681565b6100a66100f3565b6100a66100fb565b6100a661015a565b6100f16101b7565b565b6100f161024a565b60005460ff166101495760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064015b60405180910390fd5b6000805461ff001916610100179055565b60005460ff16156101a05760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610140565b600180549060006101b0836102c5565b9190505550565b60005460ff166102005760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610140565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60005460ff16156102905760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610140565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861022d3390565b60006000198214156102e757634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122080a97faaca7390ff2ef09a1928945708d9ccbc80c36fbf71712020c61d3b9e0164736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): PausableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PausableMock;
}
//# sourceMappingURL=PausableMock__factory.d.ts.map