import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleMother, SampleMotherInterface } from "../SampleMother";
export declare class SampleMother__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SampleMother>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SampleMother;
    connect(signer: Signer): SampleMother__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061024a806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634a6c9db6146100515780638129fc1c14610079578063ed7dfee314610083578063fe4b84df1461009a575b600080fd5b6000546100649062010000900460ff1681565b60405190151581526020015b60405180910390f35b6100816100ad565b005b61008c60015481565b604051908152602001610070565b6100816100a83660046101ad565b610133565b600054610100900460ff16806100c6575060005460ff16155b6100eb5760405162461bcd60e51b81526004016100e2906101c6565b60405180910390fd5b600054610100900460ff1615801561010d576000805461ffff19166101011790555b6000805462ff00001916620100001790558015610130576000805461ff00191690555b50565b600054610100900460ff168061014c575060005460ff16155b6101685760405162461bcd60e51b81526004016100e2906101c6565b600054610100900460ff1615801561018a576000805461ffff19166101011790555b6101926100ad565b600182905580156101a9576000805461ff00191690555b5050565b6000602082840312156101bf57600080fd5b5035919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea2646970667358221220e7564603e22cea13448568e75f503a21651f50751c24ca8903147387c436dada64736f6c634300080a0033";
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
    static createInterface(): SampleMotherInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SampleMother;
}
//# sourceMappingURL=SampleMother__factory.d.ts.map