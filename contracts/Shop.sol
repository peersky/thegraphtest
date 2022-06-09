//SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "hardhat/console.sol";

contract Shop is ERC1155, Ownable, ERC1155Holder {

    mapping (uint256 => uint256) private _prices;

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC1155, ERC1155Receiver)
        returns (bool)
    {
        return
            interfaceId == type(IERC1155).interfaceId ||
            interfaceId == type(IERC1155Receiver).interfaceId ||
            super.supportsInterface(interfaceId);
    }


     constructor(string memory uri_) ERC1155(uri_) {
    }

    event ItemsAdded(string articule, uint256 amount, uint256 id);
    event ItemsPurchased(uint256 id, uint256 amount, string purchaseDataChiper, string purchaseDataHash);
    event PriceChanged(uint256 price, uint256 id);

    function setItemPrice(uint256 price, uint256 id) private onlyOwner
    {
        _prices[id] = price;
        emit PriceChanged(price, id);
    }

    function mintItems(string memory _articule, uint256 amount, uint256 id) private onlyOwner
    {
        _mint(address(this), id, amount, "");
        emit ItemsAdded(_articule,amount,id);
    }

    function mintAndSetPrice(string memory _articule, uint256 amount, uint256 id, uint256 newPrice) external onlyOwner
    {
        setItemPrice(newPrice, id);
        mintItems(_articule, amount, id);
    }

    function purchaseItem(uint256 id, string memory purchaseDataChiper, string memory purchaseDataHash, uint256 amount) external payable
    {
        require(msg.value >= _prices[id], "Tx value is below set price");
        require(balanceOf(address(this), id) >= amount, "Shop has not enough supply for this order");
        _burn(address(this), id, amount);
        emit ItemsPurchased(id, amount, purchaseDataChiper, purchaseDataHash);
    }

    function withrawFunds(uint256 value, address payable to) external onlyOwner
    {
        require(value<=address(this).balance, "Not enough balance");
        to.transfer(value);
    }
}
