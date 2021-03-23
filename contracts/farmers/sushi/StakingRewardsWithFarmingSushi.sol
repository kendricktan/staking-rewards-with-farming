// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

import "../../StakingRewardsWithFarming.sol";
import "../../Constants.sol";

import "../../interface/IMasterchef.sol";

contract StakingRewardsWithFarmingSushi is StakingRewardsWithFarming {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    uint256 public poolId;

    address public masterchef = Constants.SUSHI_MASTERCHEF;

    constructor(
        uint256 _poolId,
        address _owner,
        address _yieldRecipient,
        address _rewardsToken,
        address _stakingToken,
        address[] memory _nonRecoverableTokens
    ) StakingRewardsWithFarming(_owner, _yieldRecipient, _rewardsToken, _stakingToken, _nonRecoverableTokens) {
        poolId = _poolId;
    }

    // How much have we deposited into the farm
    function getDepositedToFarm() public view override returns (uint256) {
        (uint256 amount, ) = IMasterchef(masterchef).userInfo(poolId, address(this));
        return amount;
    }

    // How much can we harvest from the farm
    // Use `eth_call` on this
    function getHarvestableFromFarm() public view returns (uint256) {
        return IMasterchef(masterchef).pendingSushi(poolId, address(this));
    }

    // Deposits tokens into the farm
    function depositToFarm() public override {
        uint256 _depositable = getDepositableToFarm();

        if (_depositable > 0) {
            stakingToken.safeApprove(masterchef, 0);
            stakingToken.safeApprove(masterchef, _depositable);
            IMasterchef(masterchef).deposit(poolId, _depositable);
        }
    }

    // Withdraws _amount from the farm
    function withdrawFromFarm(uint256 _amount) public override {
        IMasterchef(masterchef).withdraw(poolId, _amount);
    }
}
