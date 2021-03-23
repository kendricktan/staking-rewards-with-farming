// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

import "./StakingRewards.sol";

abstract contract StakingRewardsWithFarming is StakingRewards {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address public yieldRecipient;

    constructor(
        address _owner,
        address _yieldRecipient,
        address _rewardsToken,
        address _stakingToken,
        address[] memory _nonRecoverableTokens
    ) StakingRewards(_owner, _rewardsToken, _stakingToken, _nonRecoverableTokens) {
        yieldRecipient = _yieldRecipient;
    }

    // **** Overrides **** //

    // Withdraw from StakingRewards -> User (NOT FARM)
    function withdraw(uint256 _amount) public override nonReentrant updateReward(msg.sender) {
        // If user wants to withdraw and there isn't enough in the contract
        // we need to withdraw some stuff from the farm
        uint256 _depositable = getDepositableToFarm();
        if (_depositable < _amount) {
            withdrawFromFarm(_amount.sub(_depositable));
        }
        super.withdraw(_amount);
    }

    // **** Views **** //

    // Get total balance of our staking token (both in farm and outside farm)
    function getBalanceOfStaking() public view returns (uint256) {
        return getDepositedToFarm().add(getDepositableToFarm());
    }

    // How much can we deposit into the farm
    function getDepositableToFarm() public view returns (uint256) {
        return stakingToken.balanceOf(address(this));
    }

    // How much have we deposited into the farm
    function getDepositedToFarm() public view virtual returns (uint256) {}

    // **** State Changing **** //

    // Harvests the farm
    function harvestFarm() public virtual {}

    // Deposits depositable into the farm
    function depositToFarm() public virtual {}

    // Withdraws _amount from the farm
    function withdrawFromFarm(uint256 _amount) public virtual {}
}
