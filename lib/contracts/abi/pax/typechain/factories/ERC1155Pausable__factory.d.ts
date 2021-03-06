import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC1155Pausable, ERC1155PausableInterface } from "../ERC1155Pausable";
export declare class ERC1155Pausable__factory {
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
    static createInterface(): ERC1155PausableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155Pausable;
}
//# sourceMappingURL=ERC1155Pausable__factory.d.ts.map