import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CountersImpl, CountersImplInterface } from "../CountersImpl";
export declare class CountersImpl__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CountersImpl>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CountersImpl;
    connect(signer: Signer): CountersImpl__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610123806100206000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c80632baeceb714604b5780639fa6a6e3146053578063d09de08a146068578063d826f88f14606e575b600080fd5b60516074565b005b60005460405190815260200160405180910390f35b6051607e565b6051608b565b607c60006093565b565b607c600080546001019055565b607c60008055565b80548060e55760405162461bcd60e51b815260206004820152601b60248201527f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000604482015260640160405180910390fd5b60001901905556fea2646970667358221220aec46116feca17ec86df91c83de7c540473d711f28189c78e71dee747ffb510064736f6c634300080a0033";
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
    static createInterface(): CountersImplInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CountersImpl;
}
//# sourceMappingURL=CountersImpl__factory.d.ts.map