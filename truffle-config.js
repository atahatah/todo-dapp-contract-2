const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://polygon-mumbai.g.alchemy.com/v2/ItHA6NcoaTnSQygeJ_YuhnzG_DcYsMog`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {},
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "4I1BESUCPYEUK9CSMB2EI8T4PGEE3VZ86T",
    polygonscan: "4I1BESUCPYEUK9CSMB2EI8T4PGEE3VZ86T",
  },
};
