require("@nomiclabs/hardhat-waffle");
require("hardhat-abi-exporter");
require("@typechain/hardhat");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const PRIVATE_KEY = process.env.PRIVATE_KEY;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "local",
  networks: {
    hardhat: {},
    local: {
      url: "HTTP://127.0.0.1:8545",
      accounts: [PRIVATE_KEY],
    },
    bscmain: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [PRIVATE_KEY],
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [PRIVATE_KEY],
    },
  },
  typechain: {
    outDir: "src/types",
    target: "web3-v1",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  },
};
