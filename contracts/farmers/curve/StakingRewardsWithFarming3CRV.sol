// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

import "./StakingRewardsWithFarmingCurve.sol";

contract StakingRewardsWithFarming3CRV is StakingRewardsWithFarmingCurve {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    constructor(
        address _owner,
        address _yieldRecipient,
        address _rewardsToken,
        address _stakingToken,
        address[] memory _nonRecoverableTokens
    )
        StakingRewardsWithFarmingCurve(
            Constants.CURVE_3CRV_GAUGE,
            _owner,
            _yieldRecipient,
            _rewardsToken,
            _stakingToken,
            _nonRecoverableTokens
        )
    {}

    // Harvests the farm and gives yield to recipient
    function harvestFarm() public override {
        // CRV
        ICurveMintr(Constants.CURVE_MINTR).mint(gauge);
        uint256 _crv = IERC20(Constants.CRV).balanceOf(address(this));
        if (_crv > 0) {
            IERC20(Constants.CRV).safeTransfer(yieldRecipient, _crv);
        }
    }
}
