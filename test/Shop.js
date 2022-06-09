const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("When contract is deployed", function () {
  beforeEach(async () => {
    const Shop = await ethers.getContractFactory("shop");
    const shop = await shop.deploy("");
  });
  it("Should record shop token address as native payment token", () => {});
  it("Should record non-shop token tx fee", () => {});
  it("Should allow to mint and set price", () => {});
  it("Should emit event on item is minted", () => {});
  it("Should allow to transfer ownership", () => {});
  it("Should allow to change base token with current token owners signature", () => {});
  it("Should allow to change non native payments fee with current native payment token owners signature", () => {});

  describe("When articules are being minted", () => {
    describe("When items with id already minted", () => {
      it("Should increase capacity of token id by mint amount", () => {});
    });
    it("Should mint token if Id does not exist", () => {});
    it("Should emit event on item is minted", () => {});
    it("Should throw if price is not set", () => {});
    it("Should throw if uri is not set", () => {});
    it("Should throw if ammount not specified", () => {});
    it("Should allow to purchase item", () => {});
  });
  describe("When individual item is being purchased", () => {
    it("Should thow if item does not exist", () => {});
    it("Should throw if amount is over the supply", () => {});
    it("Should throw if payment amount is incorrect", () => {});
    it("Should deduct supply by amount on success", () => {});
    it("Should emit on success", () => {});
  });
  describe("When multiple items (shopping cart) is being purchased", () => {
    it("Should thow if one of items does not exist", () => {});
    it("Should throw if one of items amount is over the supply", () => {});
    it("Should throw if payment amount is incorrect", () => {});
    it("Should not deduct any supply if transaction fails", () => {});
    it("Should deduct supply of each item by amount on success", () => {});

    it("Should emit on success", () => {});
  });

  it("should not allow to purchase for incorrect price", () => {});
});
