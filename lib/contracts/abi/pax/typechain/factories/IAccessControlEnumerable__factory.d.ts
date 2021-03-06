import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAccessControlEnumerable, IAccessControlEnumerableInterface } from "../IAccessControlEnumerable";
export declare class IAccessControlEnumerable__factory {
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
    static createInterface(): IAccessControlEnumerableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAccessControlEnumerable;
}
//# sourceMappingURL=IAccessControlEnumerable__factory.d.ts.map