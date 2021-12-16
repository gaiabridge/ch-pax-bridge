import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC777Mock, ERC777MockInterface } from "../ERC777Mock";
export declare class ERC777Mock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(initialHolder: string, initialBalance: BigNumberish, name: string, symbol: string, defaultOperators: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC777Mock>;
    getDeployTransaction(initialHolder: string, initialBalance: BigNumberish, name: string, symbol: string, defaultOperators: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC777Mock;
    connect(signer: Signer): ERC777Mock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162002517380380620025178339810160408190526200003491620007ea565b82828282600290805190602001906200004f929190620005e3565b50815162000065906003906020850190620005e3565b5080516200007b90600490602084019062000672565b5060005b8151811015620000eb57600160056000848481518110620000a457620000a462000913565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e2816200093f565b9150506200007f565b506040516329965a1d60e01b815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156200016657600080fd5b505af11580156200017b573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b158015620001f957600080fd5b505af11580156200020e573d6000803e3d6000fd5b5050505050505062000247858560405180602001604052806000815250604051806020016040528060008152506200025260201b60201c565b505050505062000a9f565b6200026284848484600162000268565b50505050565b6001600160a01b038516620002c45760405162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f206164647265737360448201526064015b60405180910390fd5b33620002d48160008888620003c9565b8460016000828254620002e891906200095d565b90915550506001600160a01b03861660009081526020819052604081208054879290620003179084906200095d565b909155506200032f90508160008888888888620003f8565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516200037893929190620009a6565b60405180910390a36040518581526001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b6040517f52316ab8e8b0687ce803e403dfe429541bccd4f6c4683ec65d254d382f15a26590600090a150505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa1580156200047a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004a09190620009df565b90506001600160a01b0381161562000522576040516223de2960e01b81526001600160a01b038216906223de2990620004e8908b908b908b908b908b908b9060040162000a04565b600060405180830381600087803b1580156200050357600080fd5b505af115801562000518573d6000803e3d6000fd5b50505050620005d3565b8115620005d35762000548866001600160a01b0316620005dd60201b62000a4e1760201c565b15620005d35760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a401620002bb565b5050505050505050565b3b151590565b828054620005f19062000a62565b90600052602060002090601f01602090048101928262000615576000855562000660565b82601f106200063057805160ff191683800117855562000660565b8280016001018555821562000660579182015b828111156200066057825182559160200191906001019062000643565b506200066e929150620006ca565b5090565b82805482825590600052602060002090810192821562000660579160200282015b828111156200066057825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000693565b5b808211156200066e5760008155600101620006cb565b80516001600160a01b0381168114620006f957600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156200073f576200073f620006fe565b604052919050565b60005b83811015620007645781810151838201526020016200074a565b83811115620002625750506000910152565b600082601f8301126200078857600080fd5b81516001600160401b03811115620007a457620007a4620006fe565b620007b9601f8201601f191660200162000714565b818152846020838601011115620007cf57600080fd5b620007e282602083016020870162000747565b949350505050565b600080600080600060a086880312156200080357600080fd5b6200080e86620006e1565b60208781015160408901519297509550906001600160401b03808211156200083557600080fd5b620008438a838b0162000776565b955060608901519150808211156200085a57600080fd5b620008688a838b0162000776565b945060808901519150808211156200087f57600080fd5b818901915089601f8301126200089457600080fd5b815181811115620008a957620008a9620006fe565b8060051b9150620008bc84830162000714565b818152918301840191848101908c841115620008d757600080fd5b938501935b838510156200090057620008f085620006e1565b82529385019390850190620008dc565b8096505050505050509295509295909350565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141562000956576200095662000929565b5060010190565b6000821982111562000973576200097362000929565b500190565b600081518084526200099281602086016020860162000747565b601f01601f19169290920160200192915050565b838152606060208201526000620009c1606083018562000978565b8281036040840152620009d5818562000978565b9695505050505050565b600060208284031215620009f257600080fd5b620009fd82620006e1565b9392505050565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c06080820181905260009062000a419083018562000978565b82810360a084015262000a55818562000978565b9998505050505050505050565b600181811c9082168062000a7757607f821691505b6020821081141562000a9957634e487b7160e01b600052602260045260246000fd5b50919050565b611a688062000aaf6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063959b8c3f116100b8578063cfbfab0b1161007c578063cfbfab0b14610272578063d95b637114610285578063dd62ed3e14610298578063fad8b32a146102d1578063fc673c4f146102e4578063fe9d9303146102f757600080fd5b8063959b8c3f1461021e57806395d89b41146102315780639bd9bbc614610239578063a9059cbb1461024c578063b1f0b5be1461025f57600080fd5b8063313ce567116100ff578063313ce567146101b7578063556f0dc7146101c657806356189cb4146101cd57806362ad1b83146101e257806370a08231146101f557600080fd5b806306e485381461013c57806306fdde031461015a578063095ea7b31461016f57806318160ddd1461019257806323b872dd146101a4575b600080fd5b61014461030a565b60405161015191906113fe565b60405180910390f35b61016261036c565b6040516101519190611498565b61018261017d3660046114c3565b6103f5565b6040519015158152602001610151565b6001545b604051908152602001610151565b6101826101b23660046114ef565b61040d565b60405160128152602001610151565b6001610196565b6101e06101db3660046114ef565b6105d6565b005b6101e06101f03660046115d3565b6105e6565b610196610203366004611666565b6001600160a01b031660009081526020819052604090205490565b6101e061022c366004611666565b610622565b610162610740565b6101e0610247366004611683565b61074f565b61018261025a3660046114c3565b61076d565b6101e061026d3660046116dc565b610820565b6101e061028036600461175c565b610832565b6101826102933660046117f6565b61083f565b6101966102a63660046117f6565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b6101e06102df366004611666565b6108e1565b6101e06102f23660046116dc565b6109fd565b6101e061030536600461182f565b610a2f565b6060600480548060200260200160405190810160405280929190818152602001828054801561036257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610344575b5050505050905090565b60606002805461037b90611876565b80601f01602080910402602001604051908101604052809291908181526020018280546103a790611876565b80156103625780601f106103c957610100808354040283529160200191610362565b820191906000526020600020905b8154815290600101906020018083116103d757509395945050505050565b600033610403818585610a54565b5060019392505050565b60006001600160a01b03831661043e5760405162461bcd60e51b8152600401610435906118b1565b60405180910390fd5b6001600160a01b0384166104a35760405162461bcd60e51b815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201526564647265737360d01b6064820152608401610435565b60003390506104d4818686866040518060200160405280600081525060405180602001604052806000815250610b7b565b610500818686866040518060200160405280600081525060405180602001604052806000815250610ca3565b6001600160a01b03808616600090815260086020908152604080832093851683529290522054838110156105885760405162461bcd60e51b815260206004820152602960248201527f4552433737373a207472616e7366657220616d6f756e74206578636565647320604482015268616c6c6f77616e636560b81b6064820152608401610435565b61059c8683610597878561190b565b610a54565b6105ca8287878760405180602001604052806000815250604051806020016040528060008152506000610e15565b50600195945050505050565b6105e1838383610a54565b505050565b6105f0338661083f565b61060c5760405162461bcd60e51b815260040161043590611922565b61061b85858585856001610fda565b5050505050565b336001600160a01b03821614156106875760405162461bcd60e51b8152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201526330ba37b960e11b6064820152608401610435565b6001600160a01b03811660009081526005602052604090205460ff16156106d8573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff19169055610707565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60606003805461037b90611876565b6105e133848484604051806020016040528060008152506001610fda565b60006001600160a01b0383166107955760405162461bcd60e51b8152600401610435906118b1565b60003390506107c6818286866040518060200160405280600081525060405180602001604052806000815250610b7b565b6107f2818286866040518060200160405280600081525060405180602001604052806000815250610ca3565b6104038182868660405180602001604052806000815250604051806020016040528060008152506000610e15565b61082c848484846110bd565b50505050565b61061b85858585856110c7565b6000816001600160a01b0316836001600160a01b031614806108aa57506001600160a01b03831660009081526005602052604090205460ff1680156108aa57506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b806108da57506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b0381163314156109445760405162461bcd60e51b815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f6044820152603960f91b6064820152608401610435565b6001600160a01b03811660009081526005602052604090205460ff1615610998573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191660011790556109c4565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610a07338561083f565b610a235760405162461bcd60e51b815260040161043590611922565b61082c84848484611219565b610a4a33838360405180602001604052806000815250611219565b5050565b3b151590565b6001600160a01b038316610ab85760405162461bcd60e51b815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610435565b6001600160a01b038216610b1a5760405162461bcd60e51b815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610435565b6001600160a01b0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015610bfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c20919061196e565b90506001600160a01b03811615610c9a57604051633ad5cbc160e11b81526001600160a01b038216906375ab978290610c67908a908a908a908a908a908a9060040161198b565b600060405180830381600087803b158015610c8157600080fd5b505af1158015610c95573d6000803e3d6000fd5b505050505b50505050505050565b610caf868686866113cf565b6001600160a01b03851660009081526020819052604090205483811015610d285760405162461bcd60e51b815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201526662616c616e636560c81b6064820152608401610435565b6001600160a01b03808716600090815260208190526040808220878503905591871681529081208054869290610d5f9084906119e5565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051610db7939291906119fd565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051610e0491815260200190565b60405180910390a350505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015610e96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eba919061196e565b90506001600160a01b03811615610f36576040516223de2960e01b81526001600160a01b038216906223de2990610eff908b908b908b908b908b908b9060040161198b565b600060405180830381600087803b158015610f1957600080fd5b505af1158015610f2d573d6000803e3d6000fd5b50505050610fd0565b8115610fd0576001600160a01b0386163b15610fd05760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a401610435565b5050505050505050565b6001600160a01b03861661103b5760405162461bcd60e51b815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f206164647265604482015261737360f01b6064820152608401610435565b6001600160a01b0385166110915760405162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f20616464726573736044820152606401610435565b336110a0818888888888610b7b565b6110ae818888888888610ca3565b610c9a81888888888888610e15565b61082c8484848460015b6001600160a01b03851661111d5760405162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f20616464726573736044820152606401610435565b3361112b81600088886113cf565b846001600082825461113d91906119e5565b90915550506001600160a01b0386166000908152602081905260408120805487929061116a9084906119e5565b9091555061118090508160008888888888610e15565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516111c7939291906119fd565b60405180910390a36040518581526001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050505050565b6001600160a01b03841661127a5760405162461bcd60e51b815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f206164647265604482015261737360f01b6064820152608401610435565b3361128a81866000878787610b7b565b61129781866000876113cf565b6001600160a01b0385166000908152602081905260409020548481101561130c5760405162461bcd60e51b815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c616044820152626e636560e81b6064820152608401610435565b6001600160a01b038616600090815260208190526040812086830390556001805487929061133b90849061190b565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098878787604051611389939291906119fd565b60405180910390a36040518581526000906001600160a01b038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611209565b6040517f52316ab8e8b0687ce803e403dfe429541bccd4f6c4683ec65d254d382f15a26590600090a150505050565b6020808252825182820181905260009190848201906040850190845b8181101561143f5783516001600160a01b03168352928401929184019160010161141a565b50909695505050505050565b6000815180845260005b8181101561147157602081850181015186830182015201611455565b81811115611483576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006108da602083018461144b565b6001600160a01b03811681146114c057600080fd5b50565b600080604083850312156114d657600080fd5b82356114e1816114ab565b946020939093013593505050565b60008060006060848603121561150457600080fd5b833561150f816114ab565b9250602084013561151f816114ab565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261155757600080fd5b813567ffffffffffffffff8082111561157257611572611530565b604051601f8301601f19908116603f0116810190828211818310171561159a5761159a611530565b816040528381528660208588010111156115b357600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a086880312156115eb57600080fd5b85356115f6816114ab565b94506020860135611606816114ab565b935060408601359250606086013567ffffffffffffffff8082111561162a57600080fd5b61163689838a01611546565b9350608088013591508082111561164c57600080fd5b5061165988828901611546565b9150509295509295909350565b60006020828403121561167857600080fd5b81356108da816114ab565b60008060006060848603121561169857600080fd5b83356116a3816114ab565b925060208401359150604084013567ffffffffffffffff8111156116c657600080fd5b6116d286828701611546565b9150509250925092565b600080600080608085870312156116f257600080fd5b84356116fd816114ab565b935060208501359250604085013567ffffffffffffffff8082111561172157600080fd5b61172d88838901611546565b9350606087013591508082111561174357600080fd5b5061175087828801611546565b91505092959194509250565b600080600080600060a0868803121561177457600080fd5b853561177f816114ab565b945060208601359350604086013567ffffffffffffffff808211156117a357600080fd5b6117af89838a01611546565b945060608801359150808211156117c557600080fd5b506117d288828901611546565b925050608086013580151581146117e857600080fd5b809150509295509295909350565b6000806040838503121561180957600080fd5b8235611814816114ab565b91506020830135611824816114ab565b809150509250929050565b6000806040838503121561184257600080fd5b82359150602083013567ffffffffffffffff81111561186057600080fd5b61186c85828601611546565b9150509250929050565b600181811c9082168061188a57607f821691505b602082108114156118ab57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b60008282101561191d5761191d6118f5565b500390565b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201526b39103337b9103437b63232b960a11b606082015260800190565b60006020828403121561198057600080fd5b81516108da816114ab565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c0608082018190526000906119c69083018561144b565b82810360a08401526119d8818561144b565b9998505050505050505050565b600082198211156119f8576119f86118f5565b500190565b838152606060208201526000611a16606083018561144b565b8281036040840152611a28818561144b565b969550505050505056fea264697066735822122042e60c5ace8514762ff5370434c8e66ea6a3e5a02e6f74743457d6c430b3d4b264736f6c634300080a0033";
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
    static createInterface(): ERC777MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC777Mock;
}
//# sourceMappingURL=ERC777Mock__factory.d.ts.map