"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovernorTimelockCompoundMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "contract ERC20Votes",
                name: "token_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "votingDelay_",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "votingPeriod_",
                type: "uint256",
            },
            {
                internalType: "contract ICompoundTimelock",
                name: "timelock_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "quorumNumerator_",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "ProposalCanceled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "string[]",
                name: "signatures",
                type: "string[]",
            },
            {
                indexed: false,
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "description",
                type: "string",
            },
        ],
        name: "ProposalCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "ProposalExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "eta",
                type: "uint256",
            },
        ],
        name: "ProposalQueued",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldProposalThreshold",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newProposalThreshold",
                type: "uint256",
            },
        ],
        name: "ProposalThresholdSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldQuorumNumerator",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newQuorumNumerator",
                type: "uint256",
            },
        ],
        name: "QuorumNumeratorUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldTimelock",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newTimelock",
                type: "address",
            },
        ],
        name: "TimelockChange",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "voter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "support",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "weight",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "reason",
                type: "string",
            },
        ],
        name: "VoteCast",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldVotingDelay",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newVotingDelay",
                type: "uint256",
            },
        ],
        name: "VotingDelaySet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldVotingPeriod",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newVotingPeriod",
                type: "uint256",
            },
        ],
        name: "VotingPeriodSet",
        type: "event",
    },
    {
        inputs: [],
        name: "BALLOT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "COUNTING_MODE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "__acceptAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
        ],
        name: "cancel",
        outputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "support",
                type: "uint8",
            },
        ],
        name: "castVote",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "support",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "castVoteBySig",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "support",
                type: "uint8",
            },
            {
                internalType: "string",
                name: "reason",
                type: "string",
            },
        ],
        name: "castVoteWithReason",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                internalType: "bytes32",
                name: "descriptionHash",
                type: "bytes32",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "getVotes",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasVoted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                internalType: "bytes32",
                name: "descriptionHash",
                type: "bytes32",
            },
        ],
        name: "hashProposal",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "proposalDeadline",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "proposalEta",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "proposalSnapshot",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proposalThreshold",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "proposalVotes",
        outputs: [
            {
                internalType: "uint256",
                name: "againstVotes",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "forVotes",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "abstainVotes",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                internalType: "string",
                name: "description",
                type: "string",
            },
        ],
        name: "propose",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                internalType: "bytes32",
                name: "descriptionHash",
                type: "bytes32",
            },
        ],
        name: "queue",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "quorum",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "quorumDenominator",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "quorumNumerator",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "relay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newProposalThreshold",
                type: "uint256",
            },
        ],
        name: "setProposalThreshold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newVotingDelay",
                type: "uint256",
            },
        ],
        name: "setVotingDelay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newVotingPeriod",
                type: "uint256",
            },
        ],
        name: "setVotingPeriod",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "state",
        outputs: [
            {
                internalType: "enum IGovernor.ProposalState",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "timelock",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract ERC20Votes",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newQuorumNumerator",
                type: "uint256",
            },
        ],
        name: "updateQuorumNumerator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ICompoundTimelock",
                name: "newTimelock",
                type: "address",
            },
        ],
        name: "updateTimelock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "votingDelay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "votingPeriod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x6101606040523480156200001257600080fd5b506040516200394238038062003942833981016040819052620000359162000496565b808583868660008b806200005d6040805180820190915260018152603160f81b602082015290565b815160208084019190912082518383012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c00190528051940193909320919290916080523060c0526101205250508251620001039250600091506020840190620003bd565b506200011190508362000161565b6200011c82620001a2565b620001278162000249565b5050506200013b816200028a60201b60201c565b506001600160a01b0316610140526200015481620002f3565b50505050505050620005f2565b60025460408051918252602082018390527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a1600255565b60008111620002085760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f7253657474696e67733a20766f74696e6720706572696f6420604482015266746f6f206c6f7760c81b60648201526084015b60405180910390fd5b60035460408051918252602082018390527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a1600355565b60045460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600455565b600554604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b6064811115620003785760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60448201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e616064820152623a37b960e91b608482015260a401620001ff565b600780549082905560408051828152602081018490527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a15050565b828054620003cb90620005b5565b90600052602060002090601f016020900481019282620003ef57600085556200043a565b82601f106200040a57805160ff19168380011785556200043a565b828001600101855582156200043a579182015b828111156200043a5782518255916020019190600101906200041d565b50620004489291506200044c565b5090565b5b808211156200044857600081556001016200044d565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200049157600080fd5b919050565b60008060008060008060c08789031215620004b057600080fd5b86516001600160401b0380821115620004c857600080fd5b818901915089601f830112620004dd57600080fd5b815181811115620004f257620004f262000463565b604051601f8201601f19908116603f011681019083821181831017156200051d576200051d62000463565b81604052828152602093508c848487010111156200053a57600080fd5b600091505b828210156200055e57848201840151818301850152908301906200053f565b82821115620005705760008484830101525b99506200058291505089820162000479565b965050506040870151935060608701519250620005a26080880162000479565b915060a087015190509295509295509295565b600181811c90821680620005ca57607f821691505b60208210811415620005ec57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051610140516132e76200065b60003960008181610715015281816118e201526119ad01526000611c7201526000611cc101526000611c9c01526000611bf501526000611c1f01526000611c4901526132e76000f3fe6080604052600436106102085760003560e01c80637d5e81e211610118578063c59057e4116100a0578063ea0217cf1161006f578063ea0217cf14610683578063eb9019d4146106a3578063ece40cc1146106c3578063f8ce560a146106e3578063fc0c546a1461070357600080fd5b8063c59057e4146105b7578063d33219b4146105d7578063dd4e2ba514610609578063deaaa7cc1461064f57600080fd5b8063ab58fb8e116100e7578063ab58fb8e1461052d578063b58131b01461054d578063b9a6196114610562578063c01f9e3714610577578063c28bc2fa1461059757600080fd5b80637d5e81e2146104c457806397c3d334146104e4578063a7713a70146104f8578063a890c9101461050d57600080fd5b80633bccf4fd1161019b578063544ffc9c1161016a578063544ffc9c146103e557806354fd4d501461043a578063567813881461046457806370b0f660146104845780637b3c71d3146104a457600080fd5b80633bccf4fd1461032e5780633e4f49e61461034e578063438596321461037b578063452115d6146103c557600080fd5b8063160cbed7116101d7578063160cbed7146102c65780632656227d146102e65780632d63f693146102f95780633932abb11461031957600080fd5b806301ffc9a71461023057806302a251a31461026557806306f3f9e61461028457806306fdde03146102a457600080fd5b3661022b5730610216610737565b6001600160a01b03161461022957600080fd5b005b600080fd5b34801561023c57600080fd5b5061025061024b366004612714565b610750565b60405190151581526020015b60405180910390f35b34801561027157600080fd5b506003545b60405190815260200161025c565b34801561029057600080fd5b5061022961029f36600461273e565b610761565b3480156102b057600080fd5b506102b96107ae565b60405161025c91906127af565b3480156102d257600080fd5b506102766102e1366004612a03565b610840565b6102766102f4366004612a03565b610bba565b34801561030557600080fd5b5061027661031436600461273e565b610c8d565b34801561032557600080fd5b50600254610276565b34801561033a57600080fd5b50610276610349366004612aa8565b610cc4565b34801561035a57600080fd5b5061036e61036936600461273e565b610d58565b60405161025c9190612b0c565b34801561038757600080fd5b50610250610396366004612b34565b60008281526008602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b3480156103d157600080fd5b506102766103e0366004612a03565b610d63565b3480156103f157600080fd5b5061041f61040036600461273e565b6000908152600860205260409020805460018201546002909201549092565b6040805193845260208401929092529082015260600161025c565b34801561044657600080fd5b506040805180820190915260018152603160f81b60208201526102b9565b34801561047057600080fd5b5061027661047f366004612b64565b610d7a565b34801561049057600080fd5b5061022961049f36600461273e565b610da3565b3480156104b057600080fd5b506102766104bf366004612bd8565b610de4565b3480156104d057600080fd5b506102766104df366004612c31565b610e36565b3480156104f057600080fd5b506064610276565b34801561050457600080fd5b50600754610276565b34801561051957600080fd5b50610229610528366004612cf1565b6110f2565b34801561053957600080fd5b5061027661054836600461273e565b611133565b34801561055957600080fd5b5061027661115f565b34801561056e57600080fd5b5061022961116a565b34801561058357600080fd5b5061027661059236600461273e565b6111d4565b3480156105a357600080fd5b506102296105b2366004612d0e565b611203565b3480156105c357600080fd5b506102766105d2366004612a03565b611284565b3480156105e357600080fd5b506005546001600160a01b03165b6040516001600160a01b03909116815260200161025c565b34801561061557600080fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e908201526102b9565b34801561065b57600080fd5b506102767f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b34801561068f57600080fd5b5061022961069e36600461273e565b6112be565b3480156106af57600080fd5b506102766106be366004612d51565b6112ff565b3480156106cf57600080fd5b506102296106de36600461273e565b611312565b3480156106ef57600080fd5b506102766106fe36600461273e565b611353565b34801561070f57600080fd5b506105f17f000000000000000000000000000000000000000000000000000000000000000081565b600061074b6005546001600160a01b031690565b905090565b600061075b8261135e565b92915050565b610769610737565b6001600160a01b0316336001600160a01b0316146107a25760405162461bcd60e51b815260040161079990612d7d565b60405180910390fd5b6107ab81611383565b50565b6060600080546107bd90612db4565b80601f01602080910402602001604051908101604052809291908181526020018280546107e990612db4565b80156108365780601f1061080b57610100808354040283529160200191610836565b820191906000526020600020905b81548152906001019060200180831161081957829003601f168201915b5050505050905090565b60008061084f86868686611284565b9050600461085c82610d58565b600781111561086d5761086d612af6565b1461088a5760405162461bcd60e51b815260040161079990612def565b60055460408051630d48571f60e31b815290516000926001600160a01b031691636a42b8f89160048083019260209291908290030181865afa1580156108d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f89190612e30565b6109029042612e5f565b90506109246109108261144b565b6000848152600660205260409020906114b7565b60005b8751811015610b755760055488516001600160a01b039091169063f2b06537908a908490811061095957610959612e77565b602002602001015189848151811061097357610973612e77565b602002602001015189858151811061098d5761098d612e77565b6020026020010151866040516020016109a99493929190612e8d565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016109dd91815260200190565b602060405180830381865afa1580156109fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1e9190612ed3565b15610a9c5760405162461bcd60e51b815260206004820152604260248201527f476f7665726e6f7254696d656c6f636b436f6d706f756e643a206964656e746960448201527f63616c2070726f706f73616c20616374696f6e20616c72656164792071756575606482015261195960f21b608482015260a401610799565b60055488516001600160a01b0390911690633a66f901908a9084908110610ac557610ac5612e77565b6020026020010151898481518110610adf57610adf612e77565b6020026020010151898581518110610af957610af9612e77565b6020026020010151866040518563ffffffff1660e01b8152600401610b219493929190612e8d565b6020604051808303816000875af1158015610b40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b649190612e30565b50610b6e81612ef5565b9050610927565b5060408051838152602081018390527f9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda289291015b60405180910390a15095945050505050565b600080610bc986868686611284565b90506000610bd682610d58565b90506004816007811115610bec57610bec612af6565b1480610c0957506005816007811115610c0757610c07612af6565b145b610c255760405162461bcd60e51b815260040161079990612def565b600082815260016020818152604092839020600201805460ff191690921790915590518381527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f910160405180910390a1610c8382888888886114d5565b5095945050505050565b60008181526001602090815260408083208151928301909152546001600160401b0316908190525b6001600160401b031692915050565b604080517f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f602082015290810186905260ff851660608201526000908190610d3090610d2890608001604051602081830303815290604052805190602001206114e2565b868686611530565b9050610d4d8782886040518060200160405280600081525061154e565b979650505050505050565b600061075b82611659565b6000610d718585858561173a565b95945050505050565b600080339050610d9b8482856040518060200160405280600081525061154e565b949350505050565b610dab610737565b6001600160a01b0316336001600160a01b031614610ddb5760405162461bcd60e51b815260040161079990612d7d565b6107ab81611748565b600080339050610e2c86828787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061154e92505050565b9695505050505050565b6000610e4061115f565b610e4f336106be600143612f10565b1015610ecf5760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72436f6d7061746962696c697479427261766f3a2070726f7060448201527f6f73657220766f7465732062656c6f772070726f706f73616c207468726573686064820152621bdb1960ea1b608482015260a401610799565b6000610ee48686868680519060200120611284565b90508451865114610f075760405162461bcd60e51b815260040161079990612f27565b8351865114610f285760405162461bcd60e51b815260040161079990612f27565b6000865111610f795760405162461bcd60e51b815260206004820152601860248201527f476f7665726e6f723a20656d7074792070726f706f73616c00000000000000006044820152606401610799565b600081815260016020908152604091829020825191820190925281546001600160401b03169081905215610ff95760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c20616c72656164792065786973746044820152607360f81b6064820152608401610799565b600061100c61100760025490565b61144b565b6110154361144b565b61101f9190612f68565b9050600061102f61100760035490565b6110399083612f68565b905061104583836114b7565b61105260018401826114b7565b7f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e084338b8b8d516001600160401b03811115611090576110906127c2565b6040519080825280602002602001820160405280156110c357816020015b60608152602001906001900390816110ae5790505b508c88888e6040516110dd9998979695949392919061305c565b60405180910390a15091979650505050505050565b6110fa610737565b6001600160a01b0316336001600160a01b03161461112a5760405162461bcd60e51b815260040161079990612d7d565b6107ab81611789565b60008181526006602090815260408083208151928301909152546001600160401b031690819052610cb5565b600061074b60045490565b600560009054906101000a90046001600160a01b03166001600160a01b0316630e18b6816040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156111ba57600080fd5b505af11580156111ce573d6000803e3d6000fd5b50505050565b60008181526001602081815260408084208151928301909152909101546001600160401b031690819052610cb5565b61120b610737565b6001600160a01b0316336001600160a01b03161461123b5760405162461bcd60e51b815260040161079990612d7d565b61127d8483838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892506117f2915050565b5050505050565b60008484848460405160200161129d949392919061314b565b60408051601f19818403018152919052805160209091012095945050505050565b6112c6610737565b6001600160a01b0316336001600160a01b0316146112f65760405162461bcd60e51b815260040161079990612d7d565b6107ab81611818565b600061130b83836118b9565b9392505050565b61131a610737565b6001600160a01b0316336001600160a01b03161461134a5760405162461bcd60e51b815260040161079990612d7d565b6107ab8161194f565b600061075b82611990565b60006001600160e01b03198216636e665ced60e01b148061075b575061075b82611a34565b60648111156114065760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60448201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e616064820152623a37b960e91b608482015260a401610799565b600780549082905560408051828152602081018490527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a15050565b60006001600160401b038211156114b35760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b6064820152608401610799565b5090565b815467ffffffffffffffff19166001600160401b0391909116179055565b61127d8585858585611a69565b600061075b6114ef611be8565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061154187878787611d0f565b91509150610c8381611dfc565b600084815260016020819052604082209061156887610d58565b600781111561157957611579612af6565b146115d25760405162461bcd60e51b815260206004820152602360248201527f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460448201526269766560e81b6064820152608401610799565b604080516020810190915281546001600160401b0316908190526000906115fa9087906112ff565b905061160887878784611fb7565b856001600160a01b03167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4888784886040516116479493929190613196565b60405180910390a29695505050505050565b60008061166583612136565b9050600481600781111561167b5761167b612af6565b146116865792915050565b600061169184611133565b90508061169f575092915050565b600560009054906101000a90046001600160a01b03166001600160a01b031663c1a287e26040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117169190612e30565b6117209082612e5f565b4210611730575060069392505050565b5060059392505050565b6000610d7185858585612242565b60025460408051918252602082018390527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a1600255565b600554604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b6060610d9b8484846040518060600160405280602981526020016132896029913961235d565b600081116118785760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f7253657474696e67733a20766f74696e6720706572696f6420604482015266746f6f206c6f7760c81b6064820152608401610799565b60035460408051918252602082018390527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a1600355565b604051630748d63560e31b81526001600160a01b038381166004830152602482018390526000917f000000000000000000000000000000000000000000000000000000000000000090911690633a46b1a890604401602060405180830381865afa15801561192b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130b9190612e30565b60045460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600455565b60006064600754604051632394e7a360e21b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638e539e8c90602401602060405180830381865afa1580156119fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a209190612e30565b611a2a91906131be565b61075b91906131dd565b60006001600160e01b0319821663bf26d89760e01b148061075b57506301ffc9a760e01b6001600160e01b031983161461075b565b6000611a7486611133565b905060008111611ae05760405162461bcd60e51b815260206004820152603160248201527f476f7665726e6f7254696d656c6f636b436f6d706f756e643a2070726f706f73604482015270185b081b9bdd081e595d081c5d595d5959607a1b6064820152608401610799565b600554611af6906001600160a01b03163461247a565b60005b8551811015611bdf5760055486516001600160a01b0390911690630825f38f90889084908110611b2b57611b2b612e77565b6020026020010151878481518110611b4557611b45612e77565b6020026020010151878581518110611b5f57611b5f612e77565b6020026020010151866040518563ffffffff1660e01b8152600401611b879493929190612e8d565b6000604051808303816000875af1158015611ba6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611bce91908101906131ff565b50611bd881612ef5565b9050611af9565b50505050505050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015611c4157507f000000000000000000000000000000000000000000000000000000000000000046145b15611c6b57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611d465750600090506003611df3565b8460ff16601b14158015611d5e57508460ff16601c14155b15611d6f5750600090506004611df3565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611dc3573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611dec57600060019250925050611df3565b9150600090505b94509492505050565b6000816004811115611e1057611e10612af6565b1415611e195750565b6001816004811115611e2d57611e2d612af6565b1415611e7b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610799565b6002816004811115611e8f57611e8f612af6565b1415611edd5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610799565b6003816004811115611ef157611ef1612af6565b1415611f4a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610799565b6004816004811115611f5e57611f5e612af6565b14156107ab5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610799565b60008481526008602090815260408083206001600160a01b0387168452600381019092529091205460ff161561203f5760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c726561604482015266191e4818d85cdd60ca1b6064820152608401610799565b6001600160a01b03841660009081526003820160205260408120805460ff1916600117905560ff168360ff16141561209057818160000160008282546120859190612e5f565b9091555061127d9050565b60ff8316600114156120b057818160010160008282546120859190612e5f565b60ff8316600214156120d057818160020160008282546120859190612e5f565b60405162461bcd60e51b815260206004820152603560248201527f476f7665726e6f72566f74696e6753696d706c653a20696e76616c69642076616044820152746c756520666f7220656e756d20566f74655479706560581b6064820152608401610799565b6000818152600160205260408120600281015460ff161561215a5750600792915050565b6002810154610100900460ff16156121755750600292915050565b600061218084610c8d565b9050806121cf5760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c2069640000006044820152606401610799565b4381106121e0575060009392505050565b60006121eb856111d4565b90504381106121ff57506001949350505050565b61220885612598565b8015612227575060008581526008602052604090208054600190910154115b1561223757506004949350505050565b506003949350505050565b600080612251868686866125cf565b9050600061225e82611133565b90508015610c835760005b875181101561233a5760055488516001600160a01b039091169063591fcdfe908a908490811061229b5761229b612e77565b60200260200101518984815181106122b5576122b5612e77565b60200260200101518985815181106122cf576122cf612e77565b6020026020010151866040518563ffffffff1660e01b81526004016122f79493929190612e8d565b600060405180830381600087803b15801561231157600080fd5b505af1158015612325573d6000803e3d6000fd5b505050508061233390612ef5565b9050612269565b506000828152600660205260409020805467ffffffffffffffff19169055610c83565b6060824710156123be5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610799565b843b61240c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610799565b600080866001600160a01b03168587604051612428919061326c565b60006040518083038185875af1925050503d8060008114612465576040519150601f19603f3d011682016040523d82523d6000602084013e61246a565b606091505b5091509150610d4d8282866126db565b804710156124ca5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610799565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114612517576040519150601f19603f3d011682016040523d82523d6000602084013e61251c565b606091505b50509050806125935760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610799565b505050565b6000818152600860205260408120600281015460018201546125ba9190612e5f565b6125c66106fe85610c8d565b11159392505050565b6000806125de86868686611284565b905060006125eb82610d58565b9050600281600781111561260157612601612af6565b141580156126215750600681600781111561261e5761261e612af6565b14155b801561263f5750600781600781111561263c5761263c612af6565b14155b61268b5760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a2070726f706f73616c206e6f74206163746976650000006044820152606401610799565b60008281526001602052604090819020600201805461ff001916610100179055517f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c90610ba89084815260200190565b606083156126ea57508161130b565b8251156126fa5782518084602001fd5b8160405162461bcd60e51b815260040161079991906127af565b60006020828403121561272657600080fd5b81356001600160e01b03198116811461130b57600080fd5b60006020828403121561275057600080fd5b5035919050565b60005b8381101561277257818101518382015260200161275a565b838111156111ce5750506000910152565b6000815180845261279b816020860160208601612757565b601f01601f19169290920160200192915050565b60208152600061130b6020830184612783565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715612800576128006127c2565b604052919050565b60006001600160401b03821115612821576128216127c2565b5060051b60200190565b6001600160a01b03811681146107ab57600080fd5b600082601f83011261285157600080fd5b8135602061286661286183612808565b6127d8565b82815260059290921b8401810191818101908684111561288557600080fd5b8286015b848110156128a957803561289c8161282b565b8352918301918301612889565b509695505050505050565b600082601f8301126128c557600080fd5b813560206128d561286183612808565b82815260059290921b840181019181810190868411156128f457600080fd5b8286015b848110156128a957803583529183019183016128f8565b60006001600160401b03821115612928576129286127c2565b50601f01601f191660200190565b60006129446128618461290f565b905082815283838301111561295857600080fd5b828260208301376000602084830101529392505050565b600082601f83011261298057600080fd5b8135602061299061286183612808565b82815260059290921b840181019181810190868411156129af57600080fd5b8286015b848110156128a95780356001600160401b038111156129d25760008081fd5b8701603f810189136129e45760008081fd5b6129f5898683013560408401612936565b8452509183019183016129b3565b60008060008060808587031215612a1957600080fd5b84356001600160401b0380821115612a3057600080fd5b612a3c88838901612840565b95506020870135915080821115612a5257600080fd5b612a5e888389016128b4565b94506040870135915080821115612a7457600080fd5b50612a818782880161296f565b949793965093946060013593505050565b803560ff81168114612aa357600080fd5b919050565b600080600080600060a08688031215612ac057600080fd5b85359450612ad060208701612a92565b9350612ade60408701612a92565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052602160045260246000fd5b6020810160088310612b2e57634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215612b4757600080fd5b823591506020830135612b598161282b565b809150509250929050565b60008060408385031215612b7757600080fd5b82359150612b8760208401612a92565b90509250929050565b60008083601f840112612ba257600080fd5b5081356001600160401b03811115612bb957600080fd5b602083019150836020828501011115612bd157600080fd5b9250929050565b60008060008060608587031215612bee57600080fd5b84359350612bfe60208601612a92565b925060408501356001600160401b03811115612c1957600080fd5b612c2587828801612b90565b95989497509550505050565b60008060008060808587031215612c4757600080fd5b84356001600160401b0380821115612c5e57600080fd5b612c6a88838901612840565b95506020870135915080821115612c8057600080fd5b612c8c888389016128b4565b94506040870135915080821115612ca257600080fd5b612cae8883890161296f565b93506060870135915080821115612cc457600080fd5b508501601f81018713612cd657600080fd5b612ce587823560208401612936565b91505092959194509250565b600060208284031215612d0357600080fd5b813561130b8161282b565b60008060008060608587031215612d2457600080fd5b8435612d2f8161282b565b93506020850135925060408501356001600160401b03811115612c1957600080fd5b60008060408385031215612d6457600080fd5b8235612d6f8161282b565b946020939093013593505050565b60208082526018908201527f476f7665726e6f723a206f6e6c79476f7665726e616e63650000000000000000604082015260600190565b600181811c90821680612dc857607f821691505b60208210811415612de957634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526021908201527f476f7665726e6f723a2070726f706f73616c206e6f74207375636365737366756040820152601b60fa1b606082015260800190565b600060208284031215612e4257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612e7257612e72612e49565b500190565b634e487b7160e01b600052603260045260246000fd5b60018060a01b038516815283602082015260a06040820152600060a082015260c060608201526000612ec260c0830185612783565b905082608083015295945050505050565b600060208284031215612ee557600080fd5b8151801515811461130b57600080fd5b6000600019821415612f0957612f09612e49565b5060010190565b600082821015612f2257612f22612e49565b500390565b60208082526021908201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e67746040820152600d60fb1b606082015260800190565b60006001600160401b03808316818516808303821115612f8a57612f8a612e49565b01949350505050565b600081518084526020808501945080840160005b83811015612fcc5781516001600160a01b031687529582019590820190600101612fa7565b509495945050505050565b600081518084526020808501945080840160005b83811015612fcc57815187529582019590820190600101612feb565b600081518084526020808501808196508360051b8101915082860160005b8581101561304f57828403895261303d848351612783565b98850198935090840190600101613025565b5091979650505050505050565b60006101208b8352602060018060a01b038c16818501528160408501526130858285018c612f93565b91508382036060850152613099828b612fd7565b915083820360808501528189518084528284019150828160051b850101838c0160005b838110156130ea57601f198784030185526130d8838351612783565b948601949250908501906001016130bc565b505086810360a08801526130fe818c613007565b94505050505061311960c08401876001600160401b03169052565b6001600160401b03851660e084015282810361010084015261313b8185612783565b9c9b505050505050505050505050565b60808152600061315e6080830187612f93565b82810360208401526131708187612fd7565b905082810360408401526131848186613007565b91505082606083015295945050505050565b84815260ff84166020820152826040820152608060608201526000610e2c6080830184612783565b60008160001904831182151516156131d8576131d8612e49565b500290565b6000826131fa57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561321157600080fd5b81516001600160401b0381111561322757600080fd5b8201601f8101841361323857600080fd5b80516132466128618261290f565b81815285602083850101111561325b57600080fd5b610d71826020830160208601612757565b6000825161327e818460208701612757565b919091019291505056fe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a2646970667358221220b9815ede10c72fac176c41fa7af7be8418aa1ce94ab041add289b6c389c4cd4964736f6c634300080a0033";
class GovernorTimelockCompoundMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(name_, token_, votingDelay_, votingPeriod_, timelock_, quorumNumerator_, overrides) {
        return super.deploy(name_, token_, votingDelay_, votingPeriod_, timelock_, quorumNumerator_, overrides || {});
    }
    getDeployTransaction(name_, token_, votingDelay_, votingPeriod_, timelock_, quorumNumerator_, overrides) {
        return super.getDeployTransaction(name_, token_, votingDelay_, votingPeriod_, timelock_, quorumNumerator_, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.GovernorTimelockCompoundMock__factory = GovernorTimelockCompoundMock__factory;
GovernorTimelockCompoundMock__factory.bytecode = _bytecode;
GovernorTimelockCompoundMock__factory.abi = _abi;
//# sourceMappingURL=GovernorTimelockCompoundMock__factory.js.map