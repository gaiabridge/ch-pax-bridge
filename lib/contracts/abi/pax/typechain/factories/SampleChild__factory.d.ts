import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleChild, SampleChildInterface } from "../SampleChild";
export declare class SampleChild__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SampleChild>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SampleChild;
    connect(signer: Signer): SampleChild__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506107bb806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638beaf7d7116100665780638beaf7d714610108578063ed7dfee31461011b578063f62d188814610124578063fa39851f14610137578063fe4b84df1461014c57600080fd5b80631c8aca3b146100a3578063237b5e96146100bf5780634a6c9db6146100c85780636f2edbd2146100eb5780638129fc1c14610100575b600080fd5b6100ac60035481565b6040519081526020015b60405180910390f35b6100ac60045481565b6000546100db9062010000900460ff1681565b60405190151581526020016100b6565b6100fe6100f93660046105b5565b61015f565b005b6100fe6101f0565b6100fe61011636600461060c565b61026d565b6100ac60015481565b6100fe610132366004610651565b6102e9565b61013f610372565b6040516100b6919061068e565b6100fe61015a3660046106e3565b610400565b600054610100900460ff1680610178575060005460ff16155b61019d5760405162461bcd60e51b8152600401610194906106fc565b60405180910390fd5b600054610100900460ff161580156101bf576000805461ffff19166101011790555b6101c885610400565b6101d2848461026d565b600482905580156101e9576000805461ff00191690555b5050505050565b600054610100900460ff1680610209575060005460ff16155b6102255760405162461bcd60e51b8152600401610194906106fc565b600054610100900460ff16158015610247576000805461ffff19166101011790555b6000805462ff0000191662010000179055801561026a576000805461ff00191690555b50565b600054610100900460ff1680610286575060005460ff16155b6102a25760405162461bcd60e51b8152600401610194906106fc565b600054610100900460ff161580156102c4576000805461ffff19166101011790555b6102cd836102e9565b600382905580156102e4576000805461ff00191690555b505050565b600054610100900460ff1680610302575060005460ff16155b61031e5760405162461bcd60e51b8152600401610194906106fc565b600054610100900460ff16158015610340576000805461ffff19166101011790555b6103486101f0565b815161035b906002906020850190610479565b50801561036e576000805461ff00191690555b5050565b6002805461037f9061074a565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061074a565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b505050505081565b600054610100900460ff1680610419575060005460ff16155b6104355760405162461bcd60e51b8152600401610194906106fc565b600054610100900460ff16158015610457576000805461ffff19166101011790555b61045f6101f0565b6001829055801561036e576000805461ff00191690555050565b8280546104859061074a565b90600052602060002090601f0160209004810192826104a757600085556104ed565b82601f106104c057805160ff19168380011785556104ed565b828001600101855582156104ed579182015b828111156104ed5782518255916020019190600101906104d2565b506104f99291506104fd565b5090565b5b808211156104f957600081556001016104fe565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261053957600080fd5b813567ffffffffffffffff8082111561055457610554610512565b604051601f8301601f19908116603f0116810190828211818310171561057c5761057c610512565b8160405283815286602085880101111561059557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080608085870312156105cb57600080fd5b84359350602085013567ffffffffffffffff8111156105e957600080fd5b6105f587828801610528565b949794965050505060408301359260600135919050565b6000806040838503121561061f57600080fd5b823567ffffffffffffffff81111561063657600080fd5b61064285828601610528565b95602094909401359450505050565b60006020828403121561066357600080fd5b813567ffffffffffffffff81111561067a57600080fd5b61068684828501610528565b949350505050565b600060208083528351808285015260005b818110156106bb5785810183015185820160400152820161069f565b818111156106cd576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156106f557600080fd5b5035919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181811c9082168061075e57607f821691505b6020821081141561077f57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220b2d4c6d96536e0bd6388160bcbce5be5037cb6c467fb0a7e0b4ebb04a8ae399a64736f6c634300080a0033";
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
    static createInterface(): SampleChildInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SampleChild;
}
//# sourceMappingURL=SampleChild__factory.d.ts.map