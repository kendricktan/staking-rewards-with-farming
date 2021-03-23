// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

import "../../StakingRewardsWithFarming.sol";
import "../../Constants.sol";

import "../../interface/ICurve.sol";

contract StakingRewardsWithFarmingCurve is StakingRewardsWithFarming {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address public gauge;

    constructor(
        address _gauge,
        address _owner,
        address _yieldRecipient,
        address _rewardsToken,
        address _stakingToken,
        address[] memory _nonRecoverableTokens
    ) StakingRewardsWithFarming(_owner, _yieldRecipient, _rewardsToken, _stakingToken, _nonRecoverableTokens) {
        gauge = _gauge;
    }

    // How much have we deposited into the farm
    function getDepositedToFarm() public view override returns (uint256) {
        return ICurveGauge(gauge).balanceOf(address(this));
    }

    // How much can we harvest from the farm
    // Use `eth_call` on this
    function getHarvestableFromFarm() public returns (uint256) {
        return ICurveGauge(gauge).claimable_tokens(address(this));
    }

    // Deposits tokens into the farm
    function depositToFarm() public override {
        uint256 _depositable = getDepositableToFarm();

        if (_depositable > 0) {
            stakingToken.safeApprove(gauge, 0);
            stakingToken.safeApprove(gauge, _depositable);
            ICurveGauge(gauge).deposit(_depositable);
        }
    }

    // Withdraws _amount from the farm
    function withdrawFromFarm(uint256 _amount) public override {
        ICurveGauge(gauge).withdraw(_amount);
    }
}
