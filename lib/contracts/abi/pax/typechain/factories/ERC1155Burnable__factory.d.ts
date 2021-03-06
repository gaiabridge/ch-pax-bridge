import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC1155Burnable, ERC1155BurnableInterface } from "../ERC1155Burnable";
export declare class ERC1155Burnable__factory {
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
    static createInterface(): ERC1155BurnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155Burnable;
}
//# sourceMappingURL=ERC1155Burnable__factory.d.ts.map