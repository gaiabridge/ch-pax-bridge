import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorTimelockCompound, GovernorTimelockCompoundInterface } from "../GovernorTimelockCompound";
export declare class GovernorTimelockCompound__factory {
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
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): GovernorTimelockCompoundInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorTimelockCompound;
}
//# sourceMappingURL=GovernorTimelockCompound__factory.d.ts.map