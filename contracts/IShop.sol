//SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

interface IShop is IERC165 {
    event ItemsAdded(string articule, string uri, uint256 amount, uint256 id);
    event ItemsPurchased(
        uint256 id,
        uint256 amount,
        string purchaseDataChiper,
        string purchaseDataHash
    );

    function mintAndSetPrice(
        string memory _articule,
        uint256 amount,
        uint256 id,
        uint256 newPrice
    ) external;

    function purchaseItem(
        uint256 id,
        string memory purchaseDataChiper,
        string memory purchaseDataHash,
        uint256 amount
    ) external payable;

    function withrawFunds(uint256 value, address payable to) external;
}
