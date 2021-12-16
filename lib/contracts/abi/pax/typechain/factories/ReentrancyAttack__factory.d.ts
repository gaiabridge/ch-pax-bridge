import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReentrancyAttack, ReentrancyAttackInterface } from "../ReentrancyAttack";
export declare class ReentrancyAttack__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReentrancyAttack>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReentrancyAttack;
    connect(signer: Signer): ReentrancyAttack__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101be806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630a2df1ed14610030575b600080fd5b61004361003e36600461011c565b610045565b005b60408051600481526024810182526020810180516001600160e01b03166001600160e01b0319851617905290516000913391610081919061014d565b6000604051808303816000865af19150503d80600081146100be576040519150601f19603f3d011682016040523d82523d6000602084013e6100c3565b606091505b50509050806101185760405162461bcd60e51b815260206004820152601d60248201527f5265656e7472616e637941747461636b3a206661696c65642063616c6c000000604482015260640160405180910390fd5b5050565b60006020828403121561012e57600080fd5b81356001600160e01b03198116811461014657600080fd5b9392505050565b6000825160005b8181101561016e5760208186018101518583015201610154565b8181111561017d576000828501525b50919091019291505056fea26469706673582212202457d6a3d27ecafd82c6595d63e3ad7176900d888df8f65b9e93285f5e32286064736f6c634300080a0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ReentrancyAttackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyAttack;
}
//# sourceMappingURL=ReentrancyAttack__factory.d.ts.map