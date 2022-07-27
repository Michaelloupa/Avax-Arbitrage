// SPDX-License-Identifier: MIT

pragma solidity >=0.6.12 <0.9.0;
import "../contracts/Withdrawal.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockArbitrage is Withdrawable {}
