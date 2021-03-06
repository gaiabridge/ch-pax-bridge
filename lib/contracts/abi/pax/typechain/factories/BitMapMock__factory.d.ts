import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BitMapMock, BitMapMockInterface } from "../BitMapMock";
export declare class BitMapMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BitMapMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BitMapMock;
    connect(signer: Signer): BitMapMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101eb806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063088d22551461005157806360fe47b1146100845780639507d39a146100b4578063dcc9d43c146100fa575b600080fd5b61008261005f366004610167565b600881901c60009081526020819052604090208054600160ff84161b1916905550565b005b610082610092366004610167565b600881901c60009081526020819052604090208054600160ff84161b17905550565b6100e66100c2366004610167565b600881901c600090815260208190526040812054600160ff84161b16151592915050565b604051901515815260200160405180910390f35b610082610108366004610180565b61011460008383610118565b5050565b801561014257600882901c60009081526020849052604090208054600160ff85161b179055505050565b600882901c60009081526020849052604090208054600160ff85161b19169055505050565b60006020828403121561017957600080fd5b5035919050565b6000806040838503121561019357600080fd5b82359150602083013580151581146101aa57600080fd5b80915050925092905056fea2646970667358221220c4311a2a968f1040453f97088ade8bbfa0f2d41ac124075c37c582cc5144a24764736f6c634300080a0033";
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
    static createInterface(): BitMapMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BitMapMock;
}
//# sourceMappingURL=BitMapMock__factory.d.ts.map