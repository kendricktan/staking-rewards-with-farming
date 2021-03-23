/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { StakingRewardsWithFarmingSUSD } from "../StakingRewardsWithFarmingSUSD";

export class StakingRewardsWithFarmingSUSD__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    _yieldRecipient: string,
    _rewardsToken: string,
    _stakingToken: string,
    _nonRecoverableTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingRewardsWithFarmingSUSD> {
    return super.deploy(
      _owner,
      _yieldRecipient,
      _rewardsToken,
      _stakingToken,
      _nonRecoverableTokens,
      overrides || {}
    ) as Promise<StakingRewardsWithFarmingSUSD>;
  }
  getDeployTransaction(
    _owner: string,
    _yieldRecipient: string,
    _rewardsToken: string,
    _stakingToken: string,
    _nonRecoverableTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _yieldRecipient,
      _rewardsToken,
      _stakingToken,
      _nonRecoverableTokens,
      overrides || {}
    );
  }
  attach(address: string): StakingRewardsWithFarmingSUSD {
    return super.attach(address) as StakingRewardsWithFarmingSUSD;
  }
  connect(signer: Signer): StakingRewardsWithFarmingSUSD__factory {
    return super.connect(signer) as StakingRewardsWithFarmingSUSD__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewardsWithFarmingSUSD {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakingRewardsWithFarmingSUSD;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_yieldRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_nonRecoverableTokens",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "RewardsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "depositToFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gauge",
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
    name: "getBalanceOfStaking",
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
    name: "getDepositableToFarm",
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
    name: "getDepositedToFarm",
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
    name: "getHarvestableFromFarm",
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
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardForDuration",
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
    name: "harvestFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
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
    name: "lastUpdateTime",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "nonRecoverableTokens",
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
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "periodFinish",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
    name: "rewardsDuration",
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
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_rewardsDuration",
        type: "uint256",
      },
    ],
    name: "setRewardsDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFromFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldRecipient",
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
];

const _bytecode =
  "0x60806040526000600455600060055562093a806006553480156200002257600080fd5b506040516200251938038062002519833981810160405260a08110156200004857600080fd5b81516020830151604080850151606086015160808701805193519597949692959194919392820192846401000000008211156200008457600080fd5b9083019060208201858111156200009a57600080fd5b8251866020820283011164010000000082111715620000b857600080fd5b82525081516020918201928201910280838360005b83811015620000e7578181015183820152602001620000cd565b5050505090500160405250505073a90996896660decc6e997655e065b23788857849858585858584848484848483838360016000819055506000620001316200021560201b60201c565b600180546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020620024f9833981519152908290a3506001805460ff60a01b19169055600280546001600160a01b038086166001600160a01b03199283161790925560038054928516929091169190911790558051620001c090600d90602084019062000333565b50620001cc8462000219565b5050600e80546001600160a01b039788166001600160a01b031991821617909155600f80549e9097169d169c909c1790945550620003b49e505050505050505050505050505050565b3390565b6200022362000215565b6001600160a01b03166200023662000324565b6001600160a01b03161462000292576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116620002d95760405162461bcd60e51b8152600401808060200182810382526026815260200180620024d36026913960400191505060405180910390fd5b6001546040516001600160a01b03808416921690600080516020620024f983398151915290600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031690565b8280548282559060005260206000209081019282156200038b579160200282015b828111156200038b57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000354565b50620003999291506200039d565b5090565b5b808211156200039957600081556001016200039e565b61210f80620003c46000396000f3fe608060405234801561001057600080fd5b50600436106102315760003560e01c80638cea21de11610130578063cc1a378f116100b8578063df136d651161007c578063df136d651461049c578063e9fad8ee146104a4578063ebe2b12b146104ac578063ef36e2d4146104b4578063f2fde38b146104bc57610231565b8063cc1a378f1461045f578063cc4c5b641461047c578063cd3daf9d14610484578063d1af0c7d1461048c578063de832e921461049457610231565b80639e6ae5a0116100ff5780639e6ae5a0146103f8578063a694fc3a14610415578063a6f19c8414610432578063c1cb88eb1461043a578063c8f33c911461045757610231565b80638cea21de146103d85780638da5cb5b146103e057806397d75459146103e85780639c9f2fb3146103f057610231565b80633f4ba83a116101be5780637b0a47ee116101825780637b0a47ee1461036e57806380faa57d146103765780638456cb591461037e5780638980f11f146103865780638b876347146103b257610231565b80633f4ba83a146102f85780635c975abb1461030057806370a082311461031c578063715018a61461034257806372f702f31461034a57610231565b80632e1a7d4d116102055780632e1a7d4d146102a457806336c5912b146102c3578063386a9525146102cb5780633c6b16ab146102d35780633d18b912146102f057610231565b80628cc262146102365780630700037d1461026e57806318160ddd146102945780631c1f78eb1461029c575b600080fd5b61025c6004803603602081101561024c57600080fd5b50356001600160a01b03166104e2565b60408051918252519081900360200190f35b61025c6004803603602081101561028457600080fd5b50356001600160a01b0316610560565b61025c610572565b61025c610579565b6102c1600480360360208110156102ba57600080fd5b5035610597565b005b61025c610676565b61025c6106f2565b6102c1600480360360208110156102e957600080fd5b50356106f8565b6102c1610944565b6102c1610a69565b610308610ad5565b604080519115158252519081900360200190f35b61025c6004803603602081101561033257600080fd5b50356001600160a01b0316610ae5565b6102c1610b00565b610352610bac565b604080516001600160a01b039092168252519081900360200190f35b61025c610bbb565b61025c610bc1565b6102c1610bd9565b6102c16004803603604081101561039c57600080fd5b506001600160a01b038135169060200135610c43565b61025c600480360360208110156103c857600080fd5b50356001600160a01b0316610ddb565b61025c610ded565b610352610e02565b61025c610e11565b61025c610e5c565b6103526004803603602081101561040e57600080fd5b5035610ebc565b6102c16004803603602081101561042b57600080fd5b5035610ee3565b6103526110b2565b6102c16004803603602081101561045057600080fd5b50356110c1565b61025c611129565b6102c16004803603602081101561047557600080fd5b503561112f565b61035261120c565b61025c61121b565b610352611269565b6102c1611278565b61025c611315565b6102c161131b565b61025c61133c565b6102c1611342565b6102c1600480360360208110156104d257600080fd5b50356001600160a01b031661158a565b6001600160a01b0381166000908152600a6020908152604080832054600990925282205461055a919061055490670de0b6b3a76400009061054e9061052f9061052961121b565b9061168d565b6001600160a01b0388166000908152600c6020526040902054906116ea565b9061174a565b906117b1565b92915050565b600a6020526000908152604090205481565b600b545b90565b60006105926006546005546116ea90919063ffffffff16565b905090565b600260005414156105dd576040805162461bcd60e51b815260206004820152601f6024820152600080516020611fac833981519152604482015290519081900360640190fd5b6002600055336105eb61121b565b6008556105f6610bc1565b6007556001600160a01b0381161561063d57610611816104e2565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b6000610647610e11565b9050828110156106635761066361065e848361168d565b6110c1565b61066c8361180b565b5050600160005550565b600f54604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156106c157600080fd5b505afa1580156106d5573d6000803e3d6000fd5b505050506040513d60208110156106eb57600080fd5b5051905090565b60065481565b61070061198f565b6001600160a01b0316610711610e02565b6001600160a01b03161461075a576040805162461bcd60e51b81526020600482018190526024820152600080516020612039833981519152604482015290519081900360640190fd5b600061076461121b565b60085561076f610bc1565b6007556001600160a01b038116156107b65761078a816104e2565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b60045442106107d5576006546107cd90839061174a565b600555610818565b6004546000906107e5904261168d565b905060006107fe600554836116ea90919063ffffffff16565b6006549091506108129061054e86846117b1565b60055550505b600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561086357600080fd5b505afa158015610877573d6000803e3d6000fd5b505050506040513d602081101561088d57600080fd5b50516006549091506108a090829061174a565b60055411156108f6576040805162461bcd60e51b815260206004820152601860248201527f50726f76696465642072657761726420746f6f20686967680000000000000000604482015290519081900360640190fd5b42600781905560065461090991906117b1565b6004556040805184815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a1505050565b6002600054141561098a576040805162461bcd60e51b815260206004820152601f6024820152600080516020611fac833981519152604482015290519081900360640190fd5b60026000553361099861121b565b6008556109a3610bc1565b6007556001600160a01b038116156109ea576109be816104e2565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b336000908152600a60205260409020548015610a6057336000818152600a6020526040812055600254610a29916001600160a01b039091169083611993565b60408051828152905133917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b50506001600055565b610a7161198f565b6001600160a01b0316610a82610e02565b6001600160a01b031614610acb576040805162461bcd60e51b81526020600482018190526024820152600080516020612039833981519152604482015290519081900360640190fd5b610ad36119ea565b565b600154600160a01b900460ff1690565b6001600160a01b03166000908152600c602052604090205490565b610b0861198f565b6001600160a01b0316610b19610e02565b6001600160a01b031614610b62576040805162461bcd60e51b81526020600482018190526024820152600080516020612039833981519152604482015290519081900360640190fd5b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600180546001600160a01b0319169055565b6003546001600160a01b031681565b60055481565b60006004544210610bd457600454610592565b504290565b610be161198f565b6001600160a01b0316610bf2610e02565b6001600160a01b031614610c3b576040805162461bcd60e51b81526020600482018190526024820152600080516020612039833981519152604482015290519081900360640190fd5b610ad3611a8d565b610c4b61198f565b6001600160a01b0316610c5c610e02565b6001600160a01b031614610ca5576040805162461bcd60e51b81526020600482018190526024820152600080516020612039833981519152604482015290519081900360640190fd5b60005b600d54811015610d2957600d8181548110610cbf57fe5b6000918252602090912001546001600160a01b0384811691161415610d21576040805162461bcd60e51b8152602060048201526013602482015272217265636f76657261626c652d746f6b656e7360681b604482015290519081900360640190fd5b600101610ca8565b506003546001600160a01b0383811691161415610d775760405162461bcd60e51b81526004018080602001828103825260218152602001806120b96021913960400191505060405180910390fd5b610d93610d82610e02565b6001600160a01b0384169083611993565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b60096020526000908152604090205481565b6000610592610dfa610e11565b610554610676565b6001546001600160a01b031690565b600354604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156106c157600080fd5b600f5460408051633313458360e01b815230600482015290516000926001600160a01b031691633313458391602480830192602092919082900301818787803b158015610ea857600080fd5b505af11580156106d5573d6000803e3d6000fd5b600d8181548110610ec957fe5b6000918252602090912001546001600160a01b0316905081565b60026000541415610f29576040805162461bcd60e51b815260206004820152601f6024820152600080516020611fac833981519152604482015290519081900360640190fd5b6002600055610f36610ad5565b15610f7b576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b33610f8461121b565b600855610f8f610bc1565b6007556001600160a01b03811615610fd657610faa816104e2565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b6000821161101c576040805162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015290519081900360640190fd5b600b5461102990836117b1565b600b55336000908152600c602052604090205461104690836117b1565b336000818152600c6020526040902091909155600354611073916001600160a01b03909116903085611b16565b60408051838152905133917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a250506001600055565b600f546001600160a01b031681565b600f5460408051632e1a7d4d60e01b81526004810184905290516001600160a01b0390921691632e1a7d4d9160248082019260009290919082900301818387803b15801561110e57600080fd5b505af1158015611122573d6000803e3d6000fd5b5050505050565b60075481565b61113761198f565b6001600160a01b0316611148610e02565b6001600160a01b031614611191576040805162461bcd60e51b81526020600482018190526024820152600080516020612039833981519152604482015290519081900360640190fd5b60045442116111d15760405162461bcd60e51b8152600401808060200182810382526058815260200180611f546058913960600191505060405180910390fd5b60068190556040805182815290517ffb46ca5a5e06d4540d6387b930a7c978bce0db5f449ec6b3f5d07c6e1d44f2d39181900360200190a150565b600e546001600160a01b031681565b6000600b54600014156112315750600854610576565b610592611260600b5461054e670de0b6b3a764000061125a60055461125a600754610529610bc1565b906116ea565b600854906117b1565b6002546001600160a01b031681565b6000611282610e11565b9050801561131257600f546003546112a8916001600160a01b0391821691166000611b76565b600f546003546112c5916001600160a01b03918216911683611b76565b600f546040805163b6b55f2560e01b81526004810184905290516001600160a01b039092169163b6b55f259160248082019260009290919082900301818387803b15801561110e57600080fd5b50565b60085481565b336000908152600c602052604090205461133490610597565b610ad3610944565b60045481565b600f54604080516335313c2160e11b81526001600160a01b0390921660048301525173d061d61a4d941c39e5453435b6345dc261c2fce091636a62784291602480830192600092919082900301818387803b1580156113a057600080fd5b505af11580156113b4573d6000803e3d6000fd5b5050604080516370a0823160e01b815230600482015290516000935073d533a949740bb3306d119cc777fa900ba034cd5292506370a0823191602480820192602092909190829003018186803b15801561140d57600080fd5b505afa158015611421573d6000803e3d6000fd5b505050506040513d602081101561143757600080fd5b50519050801561146d57600e5461146d9073d533a949740bb3306d119cc777fa900ba034cd52906001600160a01b031683611993565b600f5460408051634274debf60e11b815230600482015290516001600160a01b03909216916384e9bd7e9160248082019260009290919082900301818387803b1580156114b957600080fd5b505af11580156114cd573d6000803e3d6000fd5b5050604080516370a0823160e01b815230600482015290516000935073c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f92506370a0823191602480820192602092909190829003018186803b15801561152657600080fd5b505afa15801561153a573d6000803e3d6000fd5b505050506040513d602081101561155057600080fd5b50519050801561158657600e546115869073c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f906001600160a01b031683611993565b5050565b61159261198f565b6001600160a01b03166115a3610e02565b6001600160a01b0316146115ec576040805162461bcd60e51b81526020600482018190526024820152600080516020612039833981519152604482015290519081900360640190fd5b6001600160a01b0381166116315760405162461bcd60e51b8152600401808060200182810382526026815260200180611fcc6026913960400191505060405180910390fd5b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000828211156116e4576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000826116f95750600061055a565b8282028284828161170657fe5b04146117435760405162461bcd60e51b81526004018080602001828103825260218152602001806120186021913960400191505060405180910390fd5b9392505050565b60008082116117a0576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816117a957fe5b049392505050565b600082820183811015611743576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60026000541415611851576040805162461bcd60e51b815260206004820152601f6024820152600080516020611fac833981519152604482015290519081900360640190fd5b60026000553361185f61121b565b60085561186a610bc1565b6007556001600160a01b038116156118b157611885816104e2565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b600082116118fa576040805162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015290519081900360640190fd5b600b54611907908361168d565b600b55336000908152600c6020526040902054611924908361168d565b336000818152600c6020526040902091909155600354611950916001600160a01b039091169084611993565b60408051838152905133917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a250506001600055565b3390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526119e5908490611c85565b505050565b6119f2610ad5565b611a3a576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611a7061198f565b604080516001600160a01b039092168252519081900360200190a1565b611a95610ad5565b15611ada576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611a7061198f565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611b70908590611c85565b50505050565b801580611bfc575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b158015611bce57600080fd5b505afa158015611be2573d6000803e3d6000fd5b505050506040513d6020811015611bf857600080fd5b5051155b611c375760405162461bcd60e51b81526004018080602001828103825260368152602001806120836036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526119e59084905b6060611cda826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d369092919063ffffffff16565b8051909150156119e557808060200190516020811015611cf957600080fd5b50516119e55760405162461bcd60e51b815260040180806020018281038252602a815260200180612059602a913960400191505060405180910390fd5b6060611d458484600085611d4d565b949350505050565b606082471015611d8e5760405162461bcd60e51b8152600401808060200182810382526026815260200180611ff26026913960400191505060405180910390fd5b611d9785611ea9565b611de8576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611e275780518252601f199092019160209182019101611e08565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611e89576040519150601f19603f3d011682016040523d82523d6000602084013e611e8e565b606091505b5091509150611e9e828286611eaf565b979650505050505050565b3b151590565b60608315611ebe575081611743565b825115611ece5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f18578181015183820152602001611f00565b50505050905090810190601f168015611f455780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe50726576696f7573207265776172647320706572696f64206d75737420626520636f6d706c657465206265666f7265206368616e67696e6720746865206475726174696f6e20666f7220746865206e657720706572696f645265656e7472616e637947756172643a207265656e7472616e742063616c6c004f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e636543616e6e6f7420776974686472617720746865207374616b696e6720746f6b656ea26469706673582212208b11b74324daee91d60702551e1b4eca38af08888ed6329ac3876b0de959335564736f6c634300070300334f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573738be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";
