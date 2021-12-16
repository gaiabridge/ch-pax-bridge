import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClonesMock, ClonesMockInterface } from "../ClonesMock";
export declare class ClonesMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClonesMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClonesMock;
    connect(signer: Signer): ClonesMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506106d4806100206000396000f3fe6080604052600436106100345760003560e01c80630fbe133c14610039578063360d0fad1461004e5780636e9ebc811461008a575b600080fd5b61004c610047366004610523565b61009d565b005b34801561005a57600080fd5b5061006e610069366004610576565b6100f3565b6040516001600160a01b03909116815260200160405180910390f35b61004c6100983660046105a0565b610111565b6100ee6100b2846001600160a01b031661012d565b83838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506101cf92505050565b505050565b60006101086001600160a01b0384168361022c565b90505b92915050565b6101276100b26001600160a01b03861685610292565b50505050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b0381166101ca5760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b60448201526064015b60405180910390fd5b919050565b8051156101ec576101ea6001600160a01b0383168234610332565b505b6040516001600160a01b03831681527f39a773f10839d86923d91d5ce7d6642f2f63a95d850495abb1f162e38aa04ea59060200160405180910390a15050565b6000610108838330604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b8152606093841b60148201526f5af43d82803e903d91602b57fd5bf3ff60801b6028820152921b6038830152604c8201526037808220606c830152605591012090565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528360601b60148201526e5af43d82803e903d91602b57fd5bf360881b6028820152826037826000f59150506001600160a01b03811661010b5760405162461bcd60e51b815260206004820152601760248201527f455243313136373a2063726561746532206661696c656400000000000000000060448201526064016101c1565b606061035884848460405180606001604052806029815260200161067660299139610362565b90505b9392505050565b6060824710156103c35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101c1565b843b6104115760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101c1565b600080866001600160a01b0316858760405161042d9190610626565b60006040518083038185875af1925050503d806000811461046a576040519150601f19603f3d011682016040523d82523d6000602084013e61046f565b606091505b509150915061047f82828661048a565b979650505050505050565b6060831561049957508161035b565b8251156104a95782518084602001fd5b8160405162461bcd60e51b81526004016101c19190610642565b80356001600160a01b03811681146101ca57600080fd5b60008083601f8401126104ec57600080fd5b50813567ffffffffffffffff81111561050457600080fd5b60208301915083602082850101111561051c57600080fd5b9250929050565b60008060006040848603121561053857600080fd5b610541846104c3565b9250602084013567ffffffffffffffff81111561055d57600080fd5b610569868287016104da565b9497909650939450505050565b6000806040838503121561058957600080fd5b610592836104c3565b946020939093013593505050565b600080600080606085870312156105b657600080fd5b6105bf856104c3565b935060208501359250604085013567ffffffffffffffff8111156105e257600080fd5b6105ee878288016104da565b95989497509550505050565b60005b838110156106155781810151838201526020016105fd565b838111156101275750506000910152565b600082516106388184602087016105fa565b9190910192915050565b60208152600082518060208401526106618160408501602087016105fa565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a264697066735822122038959ac49ee05049eaaff9182f0c16c751de5e2f930654b26463e8ddf333d41664736f6c634300080a0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): ClonesMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ClonesMock;
}
//# sourceMappingURL=ClonesMock__factory.d.ts.map