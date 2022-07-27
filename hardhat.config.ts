import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig({ path: `./.env` });

if (
  !process.env.PRIVATE_KEY ||
  !process.env.JSON_RPC

) {
  throw new Error(
    `Please provide your PRIVATE_KEY or PRIVATE_KEY or JSON_RPC  in .env in the project root`
  );
}

module.exports = {
  networks: {
    hardhat: {},
    bsc: {
      url: process.env.JSON_RPC,
      chainId: 56,
      gasPrice: 30 ** 9,
      accounts: [
        process.env.PRIVATE_KEY!.startsWith("0x")
          ? process.env.PRIVATE_KEY
          : process.env.PRIVATE_KEY,
      ],
    },
    snowtrace: {
      url: process.env.TESTNET_RPC,
      chainId: 4,
      gasPrice: 15 * 10 ** 9,
      accounts: [
        process.env.PRIVATE_KEY!.startsWith("0x")
          ? process.env.PRIVATE_KEY
          : `0x${process.env.PRIVATE_KEY}`,
      ],
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
