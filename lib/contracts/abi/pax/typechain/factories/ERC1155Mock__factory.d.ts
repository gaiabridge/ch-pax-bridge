import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155Mock, ERC1155MockInterface } from "../ERC1155Mock";
export declare class ERC1155Mock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1155Mock>;
    getDeployTransaction(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155Mock;
    connect(signer: Signer): ERC1155Mock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001ee938038062001ee983398101604081905262000034916200011d565b80620000408162000048565b505062000236565b80516200005d90600290602084019062000061565b5050565b8280546200006f90620001f9565b90600052602060002090601f016020900481019282620000935760008555620000de565b82601f10620000ae57805160ff1916838001178555620000de565b82800160010185558215620000de579182015b82811115620000de578251825591602001919060010190620000c1565b50620000ec929150620000f0565b5090565b5b80821115620000ec5760008155600101620000f1565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200013157600080fd5b82516001600160401b03808211156200014957600080fd5b818501915085601f8301126200015e57600080fd5b81518181111562000173576200017362000107565b604051601f8201601f19908116603f011681019083821181831017156200019e576200019e62000107565b816040528281528886848701011115620001b757600080fd5b600093505b82841015620001db5784840186015181850187015292850192620001bc565b82841115620001ed5760008684830101525b98975050505050505050565b600181811c908216806200020e57607f821691505b602082108114156200023057634e487b7160e01b600052602260045260246000fd5b50919050565b611ca380620002466000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c80634e1273f41161008c578063a22cb46511610066578063a22cb465146101bd578063e985e9c5146101d0578063f242432a1461020c578063f5298aca1461021f57600080fd5b80634e1273f4146101775780636b20c45414610197578063731133e9146101aa57600080fd5b8062fdd58e146100d357806301ffc9a7146100f957806302fe53051461011c5780630e89341c146101315780631f7fdffa146101515780632eb2c2d614610164575b600080fd5b6100e66100e13660046111a8565b610232565b6040519081526020015b60405180910390f35b61010c6101073660046111e8565b6102c9565b60405190151581526020016100f0565b61012f61012a3660046112ad565b61031b565b005b61014461013f3660046112fe565b610327565b6040516100f09190611364565b61012f61015f36600461142c565b6103bb565b61012f6101723660046114c5565b6103cd565b61018a61018536600461156f565b610464565b6040516100f09190611675565b61012f6101a5366004611688565b61058e565b61012f6101b83660046116fc565b61059e565b61012f6101cb366004611751565b6105aa565b61010c6101de36600461178d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61012f61021a3660046117c0565b6105b9565b61012f61022d366004611825565b610640565b60006001600160a01b0383166102a35760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b14806102fa57506001600160e01b031982166303a24d0760e21b145b8061031557506301ffc9a760e01b6001600160e01b03198316145b92915050565b6103248161064b565b50565b60606002805461033690611858565b80601f016020809104026020016040519081016040528092919081815260200182805461036290611858565b80156103af5780601f10610384576101008083540402835291602001916103af565b820191906000526020600020905b81548152906001019060200180831161039257829003601f168201915b50505050509050919050565b6103c78484848461065e565b50505050565b6001600160a01b0385163314806103e957506103e985336101de565b6104505760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b606482015260840161029a565b61045d85858585856107a9565b5050505050565b606081518351146104c95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b606482015260840161029a565b6000835167ffffffffffffffff8111156104e5576104e561120c565b60405190808252806020026020018201604052801561050e578160200160208202803683370190505b50905060005b84518110156105865761055985828151811061053257610532611893565b602002602001015185838151811061054c5761054c611893565b6020026020010151610232565b82828151811061056b5761056b611893565b602090810291909101015261057f816118bf565b9050610514565b509392505050565b610599838383610945565b505050565b6103c784848484610ac1565b6105b5338383610b91565b5050565b6001600160a01b0385163314806105d557506105d585336101de565b6106335760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b606482015260840161029a565b61045d8585858585610c72565b610599838383610d8f565b80516105b59060029060208401906110f3565b6001600160a01b0384166106845760405162461bcd60e51b815260040161029a906118da565b81518351146106a55760405162461bcd60e51b815260040161029a9061191b565b3360005b8451811015610741578381815181106106c4576106c4611893565b60200260200101516000808784815181106106e1576106e1611893565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107299190611963565b90915550819050610739816118bf565b9150506106a9565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161079292919061197b565b60405180910390a461045d81600087878787610e91565b81518351146107ca5760405162461bcd60e51b815260040161029a9061191b565b6001600160a01b0384166107f05760405162461bcd60e51b815260040161029a906119a9565b3360005b84518110156108d757600085828151811061081157610811611893565b60200260200101519050600085838151811061082f5761082f611893565b602090810291909101810151600084815280835260408082206001600160a01b038e16835290935291909120549091508181101561087f5760405162461bcd60e51b815260040161029a906119ee565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906108bc908490611963565b92505081905550505050806108d0906118bf565b90506107f4565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161092792919061197b565b60405180910390a461093d818787878787610e91565b505050505050565b6001600160a01b03831661096b5760405162461bcd60e51b815260040161029a90611a38565b805182511461098c5760405162461bcd60e51b815260040161029a9061191b565b604080516020810190915260009081905233905b8351811015610a625760008482815181106109bd576109bd611893565b6020026020010151905060008483815181106109db576109db611893565b602090810291909101810151600084815280835260408082206001600160a01b038c168352909352919091205490915081811015610a2b5760405162461bcd60e51b815260040161029a90611a7b565b6000928352602083815260408085206001600160a01b038b1686529091529092209103905580610a5a816118bf565b9150506109a0565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610ab392919061197b565b60405180910390a450505050565b6001600160a01b038416610ae75760405162461bcd60e51b815260040161029a906118da565b33610b0181600087610af888610fed565b61045d88610fed565b6000848152602081815260408083206001600160a01b038916845290915281208054859290610b31908490611963565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461045d81600087878787611038565b816001600160a01b0316836001600160a01b03161415610c055760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b606482015260840161029a565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610c985760405162461bcd60e51b815260040161029a906119a9565b33610ca8818787610af888610fed565b6000848152602081815260408083206001600160a01b038a16845290915290205483811015610ce95760405162461bcd60e51b815260040161029a906119ee565b6000858152602081815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290610d26908490611963565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610d86828888888888611038565b50505050505050565b6001600160a01b038316610db55760405162461bcd60e51b815260040161029a90611a38565b33610de581856000610dc687610fed565b610dcf87610fed565b5050604080516020810190915260009052505050565b6000838152602081815260408083206001600160a01b038816845290915290205482811015610e265760405162461bcd60e51b815260040161029a90611a7b565b6000848152602081815260408083206001600160a01b03898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6001600160a01b0384163b1561093d5760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610ed59089908990889088908890600401611abf565b6020604051808303816000875af1925050508015610f10575060408051601f3d908101601f19168201909252610f0d91810190611b1d565b60015b610fbd57610f1c611b3a565b806308c379a01415610f565750610f31611b56565b80610f3c5750610f58565b8060405162461bcd60e51b815260040161029a9190611364565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b606482015260840161029a565b6001600160e01b0319811663bc197c8160e01b14610d865760405162461bcd60e51b815260040161029a90611be0565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061102757611027611893565b602090810291909101015292915050565b6001600160a01b0384163b1561093d5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061107c9089908990889088908890600401611c28565b6020604051808303816000875af19250505080156110b7575060408051601f3d908101601f191682019092526110b491810190611b1d565b60015b6110c357610f1c611b3a565b6001600160e01b0319811663f23a6e6160e01b14610d865760405162461bcd60e51b815260040161029a90611be0565b8280546110ff90611858565b90600052602060002090601f0160209004810192826111215760008555611167565b82601f1061113a57805160ff1916838001178555611167565b82800160010185558215611167579182015b8281111561116757825182559160200191906001019061114c565b50611173929150611177565b5090565b5b808211156111735760008155600101611178565b80356001600160a01b03811681146111a357600080fd5b919050565b600080604083850312156111bb57600080fd5b6111c48361118c565b946020939093013593505050565b6001600160e01b03198116811461032457600080fd5b6000602082840312156111fa57600080fd5b8135611205816111d2565b9392505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156112485761124861120c565b6040525050565b600067ffffffffffffffff8311156112695761126961120c565b604051611280601f8501601f191660200182611222565b80915083815284848401111561129557600080fd5b83836020830137600060208583010152509392505050565b6000602082840312156112bf57600080fd5b813567ffffffffffffffff8111156112d657600080fd5b8201601f810184136112e757600080fd5b6112f68482356020840161124f565b949350505050565b60006020828403121561131057600080fd5b5035919050565b6000815180845260005b8181101561133d57602081850181015186830182015201611321565b8181111561134f576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006112056020830184611317565b600067ffffffffffffffff8211156113915761139161120c565b5060051b60200190565b600082601f8301126113ac57600080fd5b813560206113b982611377565b6040516113c68282611222565b83815260059390931b85018201928281019150868411156113e657600080fd5b8286015b8481101561140157803583529183019183016113ea565b509695505050505050565b600082601f83011261141d57600080fd5b6112058383356020850161124f565b6000806000806080858703121561144257600080fd5b61144b8561118c565b9350602085013567ffffffffffffffff8082111561146857600080fd5b6114748883890161139b565b9450604087013591508082111561148a57600080fd5b6114968883890161139b565b935060608701359150808211156114ac57600080fd5b506114b98782880161140c565b91505092959194509250565b600080600080600060a086880312156114dd57600080fd5b6114e68661118c565b94506114f46020870161118c565b9350604086013567ffffffffffffffff8082111561151157600080fd5b61151d89838a0161139b565b9450606088013591508082111561153357600080fd5b61153f89838a0161139b565b9350608088013591508082111561155557600080fd5b506115628882890161140c565b9150509295509295909350565b6000806040838503121561158257600080fd5b823567ffffffffffffffff8082111561159a57600080fd5b818501915085601f8301126115ae57600080fd5b813560206115bb82611377565b6040516115c88282611222565b83815260059390931b85018201928281019150898411156115e857600080fd5b948201945b8386101561160d576115fe8661118c565b825294820194908201906115ed565b9650508601359250508082111561162357600080fd5b506116308582860161139b565b9150509250929050565b600081518084526020808501945080840160005b8381101561166a5781518752958201959082019060010161164e565b509495945050505050565b602081526000611205602083018461163a565b60008060006060848603121561169d57600080fd5b6116a68461118c565b9250602084013567ffffffffffffffff808211156116c357600080fd5b6116cf8783880161139b565b935060408601359150808211156116e557600080fd5b506116f28682870161139b565b9150509250925092565b6000806000806080858703121561171257600080fd5b61171b8561118c565b93506020850135925060408501359150606085013567ffffffffffffffff81111561174557600080fd5b6114b98782880161140c565b6000806040838503121561176457600080fd5b61176d8361118c565b91506020830135801515811461178257600080fd5b809150509250929050565b600080604083850312156117a057600080fd5b6117a98361118c565b91506117b76020840161118c565b90509250929050565b600080600080600060a086880312156117d857600080fd5b6117e18661118c565b94506117ef6020870161118c565b93506040860135925060608601359150608086013567ffffffffffffffff81111561181957600080fd5b6115628882890161140c565b60008060006060848603121561183a57600080fd5b6118438461118c565b95602085013595506040909401359392505050565b600181811c9082168061186c57607f821691505b6020821081141561188d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156118d3576118d36118a9565b5060010190565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60008219821115611976576119766118a9565b500190565b60408152600061198e604083018561163a565b82810360208401526119a0818561163a565b95945050505050565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b6001600160a01b0386811682528516602082015260a060408201819052600090611aeb9083018661163a565b8281036060840152611afd818661163a565b90508281036080840152611b118185611317565b98975050505050505050565b600060208284031215611b2f57600080fd5b8151611205816111d2565b600060033d1115611b535760046000803e5060005160e01c5b90565b600060443d1015611b645790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715611b9457505050505090565b8285019150815181811115611bac5750505050505090565b843d8701016020828501011115611bc65750505050505090565b611bd560208286010187611222565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090611c6290830184611317565b97965050505050505056fea2646970667358221220e0ebd21360e11867b8d57aaa0a3877a389e447268d0642f67c0bae7fe0c49eb564736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
    static createInterface(): ERC1155MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155Mock;
}
//# sourceMappingURL=ERC1155Mock__factory.d.ts.map