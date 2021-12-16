import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SupportsInterfaceWithLookupMock, SupportsInterfaceWithLookupMockInterface } from "../SupportsInterfaceWithLookupMock";
export declare class SupportsInterfaceWithLookupMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SupportsInterfaceWithLookupMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SupportsInterfaceWithLookupMock;
    connect(signer: Signer): SupportsInterfaceWithLookupMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506100216301ffc9a760e01b610026565b6100c1565b6001600160e01b0319808216141561009c5760405162461bcd60e51b815260206004820152602f60248201527f455243313635496e7465726661636573537570706f727465643a20696e76616c60448201526e1a59081a5b9d195c999858d9481a59608a1b606482015260840160405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b610100806100d06000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a714603757806334d7006c146076575b600080fd5b60616042366004609b565b6001600160e01b03191660009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b60836301ffc9a760e01b81565b6040516001600160e01b03199091168152602001606d565b60006020828403121560ac57600080fd5b81356001600160e01b03198116811460c357600080fd5b939250505056fea264697066735822122096649c279a5a7eb44517b354984368151ed8b0a20b5138c72d3641e87090584664736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    })[];
    static createInterface(): SupportsInterfaceWithLookupMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SupportsInterfaceWithLookupMock;
}
//# sourceMappingURL=SupportsInterfaceWithLookupMock__factory.d.ts.map