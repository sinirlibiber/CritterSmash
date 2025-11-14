// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SmashToken is ERC20 {
    mapping(address => uint256) public lastClaim;
    mapping(bytes32 => bool) public usedNonces;

    constructor() ERC20("Smash Token", "SMASH") {
        _mint(msg.sender, 1_000_000 * 1e18);
    }

    function claim(bytes32 nonce) external {
        require(!usedNonces[nonce], "Nonce used");
        // Backend'den nonce doğrula (off-chain)
        // Bu örnekte sadece mint
        usedNonces[nonce] = true;
        _mint(msg.sender, 10 * 1e18);
    }
}
