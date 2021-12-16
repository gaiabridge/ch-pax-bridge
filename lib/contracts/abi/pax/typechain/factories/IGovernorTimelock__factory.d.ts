import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGovernorTimelock, IGovernorTimelockInterface } from "../IGovernorTimelock";
export declare class IGovernorTimelock__factory {
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
    static createInterface(): IGovernorTimelockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGovernorTimelock;
}
//# sourceMappingURL=IGovernorTimelock__factory.d.ts.map