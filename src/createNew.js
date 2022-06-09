import Web3 from "web3";
const provider = "HTTP://0.0.0.0:8545";
const address = "0x530CDebe179D7deDC842617C6E520fe010190e0F";
// import { shop } from "./types/shop";
// import { AbiItem } from "web3-utils";
// import shopAbi from "../abi/contracts/shop.sol/shop.json";
import shopAbi from "../abi/contracts/shop.sol/shop.json" assert { type: "json" };
// const shopAbi = _shopAbi;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

async function main() {
  console.log("createNew!");
  const web3 = new Web3(provider);

  const shop = new web3.eth.Contract(shopAbi, address);
  web3.eth.accounts.wallet.add(PRIVATE_KEY);

  const gasAmount = await shop.methods
    .mintAndPrice("banana", 100, 1, 10)
    .estimateGas({ from: "0x94EB8C1f3662059E3a7B51c1383e584EE3a11484" });

  await shop.methods.mintAndPrice("banana", 100, 1, 10).send({
    from: "0x94EB8C1f3662059E3a7B51c1383e584EE3a11484",
    gas: gasAmount,
  });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
