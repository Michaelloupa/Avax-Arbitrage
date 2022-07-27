//SPDX-License-Identifier: MIT

pragma solidity >=0.6.12 <0.9.0;
import "@openzeppelin/contracts@3.0.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@3.0.0/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts@3.0.0/access/Ownable.sol";

/**
This contract is used to withdraw tokens from the contract used to carry out the flash loan arbitrage.
 */

contract Withdrawable is Ownable {
    using SafeERC20 for ERC20;

    address constant ETHER = address(0);

    event Withdrawal(
        address indexed _from,
        uint256 assetAddress,
        uint256 amount
    );

    /**/
    /// @dev withdraw asset
    /// @param _assetAddress of the asset to be withdrawn*/

    function withdraw(address _assetAddress) public onlyOwner {
        uint256 assetBalance;
        if (_assetAddress == ETHER) {
            address _myAddress = address(this);
            assetBalance = _myAddress.balance;
            msg.sender.transfer(assetBalance);
        } else {
            assetBalance = ERC20(_assetAddress).balanceOf(address(this));
            ERC20(_assetAddress).safeTransfer(msg.sender, assetBalance);
        }

        emit Withdrawal(msg.sender, _assetAddress, assetBalance);
    }
}
