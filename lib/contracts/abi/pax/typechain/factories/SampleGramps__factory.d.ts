import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleGramps, SampleGrampsInterface } from "../SampleGramps";
export declare class SampleGramps__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SampleGramps>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SampleGramps;
    connect(signer: Signer): SampleGramps__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506104bc806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634a6c9db6146100515780638129fc1c14610079578063f62d188814610083578063fa39851f14610096575b600080fd5b6000546100649062010000900460ff1681565b60405190151581526020015b60405180910390f35b6100816100ab565b005b6100816100913660046102f7565b610131565b61009e6101ba565b60405161007091906103a8565b600054610100900460ff16806100c4575060005460ff16155b6100e95760405162461bcd60e51b81526004016100e0906103fd565b60405180910390fd5b600054610100900460ff1615801561010b576000805461ffff19166101011790555b6000805462ff0000191662010000179055801561012e576000805461ff00191690555b50565b600054610100900460ff168061014a575060005460ff16155b6101665760405162461bcd60e51b81526004016100e0906103fd565b600054610100900460ff16158015610188576000805461ffff19166101011790555b6101906100ab565b81516101a3906001906020850190610248565b5080156101b6576000805461ff00191690555b5050565b600180546101c79061044b565b80601f01602080910402602001604051908101604052809291908181526020018280546101f39061044b565b80156102405780601f1061021557610100808354040283529160200191610240565b820191906000526020600020905b81548152906001019060200180831161022357829003601f168201915b505050505081565b8280546102549061044b565b90600052602060002090601f01602090048101928261027657600085556102bc565b82601f1061028f57805160ff19168380011785556102bc565b828001600101855582156102bc579182015b828111156102bc5782518255916020019190600101906102a1565b506102c89291506102cc565b5090565b5b808211156102c857600081556001016102cd565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561030957600080fd5b813567ffffffffffffffff8082111561032157600080fd5b818401915084601f83011261033557600080fd5b813581811115610347576103476102e1565b604051601f8201601f19908116603f0116810190838211818310171561036f5761036f6102e1565b8160405282815287602084870101111561038857600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b818110156103d5578581018301518582016040015282016103b9565b818111156103e7576000604083870101525b50601f01601f1916929092016040019392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181811c9082168061045f57607f821691505b6020821081141561048057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220cffb5134942bbaa428648f21d2279e3da4bb2c00f7a0cfc6560049037e44394c64736f6c634300080a0033";
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
    static createInterface(): SampleGrampsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SampleGramps;
}
//# sourceMappingURL=SampleGramps__factory.d.ts.map