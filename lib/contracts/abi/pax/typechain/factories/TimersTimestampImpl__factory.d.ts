import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TimersTimestampImpl, TimersTimestampImplInterface } from "../TimersTimestampImpl";
export declare class TimersTimestampImpl__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TimersTimestampImpl>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TimersTimestampImpl;
    connect(signer: Signer): TimersTimestampImpl__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610243806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635f8d96de1161005b5780635f8d96de146100e05780639c30ad7e14610107578063aebc04831461012a578063d826f88f1461015c57600080fd5b80632260fe3a146100825780632f13b60c146100b5578063544736e6146100bd575b600080fd5b604080516020810190915260005467ffffffffffffffff1690819052155b60405190151581526020015b60405180910390f35b6100a0610169565b604080516020810190915260005467ffffffffffffffff169081905215156100a0565b604080516020808201835260005467ffffffffffffffff16918290529151908152016100ac565b604080516020810190915260005467ffffffffffffffff169081905242106100a0565b61015a6101383660046101dc565b6000805467ffffffffffffffff831667ffffffffffffffff1990911617905550565b005b61015a61018e565b905090565b60408051602081019091526000805467ffffffffffffffff16825290610164906101a6565b6101a46000805467ffffffffffffffff19169055565b565b60006101bc825167ffffffffffffffff16151590565b80156101d6575042826000015167ffffffffffffffff1611155b92915050565b6000602082840312156101ee57600080fd5b813567ffffffffffffffff8116811461020657600080fd5b939250505056fea2646970667358221220a3d177972cb741c88940f12711e5315bd72c43d1a814f63fbaeb9b390d00994464736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): TimersTimestampImplInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TimersTimestampImpl;
}
//# sourceMappingURL=TimersTimestampImpl__factory.d.ts.map