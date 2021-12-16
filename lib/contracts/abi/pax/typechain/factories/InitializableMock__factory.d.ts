import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InitializableMock, InitializableMockInterface } from "../InitializableMock";
export declare class InitializableMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<InitializableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): InitializableMock;
    connect(signer: Signer): InitializableMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610384806100206000396000f3fe60806040526004361061006f5760003560e01c8063a9cc47181161004e578063a9cc4718146100c7578063c3b8ef2a146100dc578063cb3a528d1461010c578063e955c9ec1461012157600080fd5b806218eaa8146100745780630c55699c146100895780638129fc1c146100b2575b600080fd5b6100876100823660046102e7565b610134565b005b34801561009557600080fd5b5061009f60015481565b6040519081526020015b60405180910390f35b3480156100be57600080fd5b506100876101af565b3480156100d357600080fd5b5061008761022c565b3480156100e857600080fd5b506000546100fc9062010000900460ff1681565b60405190151581526020016100a9565b34801561011857600080fd5b50610087610274565b61008761012f3660046102e7565b600155565b600054610100900460ff168061014d575060005460ff16155b6101725760405162461bcd60e51b815260040161016990610300565b60405180910390fd5b600054610100900460ff16158015610194576000805461ffff19166101011790555b600182905580156101ab576000805461ff00191690555b5050565b600054610100900460ff16806101c8575060005460ff16155b6101e45760405162461bcd60e51b815260040161016990610300565b600054610100900460ff16158015610206576000805461ffff19166101011790555b6000805462ff00001916620100001790558015610229576000805461ff00191690555b50565b60405162461bcd60e51b815260206004820181905260248201527f496e697469616c697a61626c654d6f636b20666f72636564206661696c7572656044820152606401610169565b600054610100900460ff168061028d575060005460ff16155b6102a95760405162461bcd60e51b815260040161016990610300565b600054610100900460ff161580156102cb576000805461ffff19166101011790555b6102d36101af565b8015610229576000805461ff001916905550565b6000602082840312156102f957600080fd5b5035919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea26469706673582212205b56d6b4dd877877478f6c9a5ee777550018b1d1326449914f11fff641fabaa164736f6c634300080a0033";
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
    static createInterface(): InitializableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InitializableMock;
}
//# sourceMappingURL=InitializableMock__factory.d.ts.map