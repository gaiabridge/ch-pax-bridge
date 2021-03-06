import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorPreventLateQuorum, GovernorPreventLateQuorumInterface } from "../GovernorPreventLateQuorum";
export declare class GovernorPreventLateQuorum__factory {
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
    static createInterface(): GovernorPreventLateQuorumInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorPreventLateQuorum;
}
//# sourceMappingURL=GovernorPreventLateQuorum__factory.d.ts.map