import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AccessControlEnumerable, AccessControlEnumerableInterface } from "../AccessControlEnumerable";
export declare class AccessControlEnumerable__factory {
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
    static createInterface(): AccessControlEnumerableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccessControlEnumerable;
}
//# sourceMappingURL=AccessControlEnumerable__factory.d.ts.map