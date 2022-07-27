const { ethers } = require("hardhat");

const main = async () => {

  const factory = await ethers.getContractFactory("FlashLoan.sol");
  const deployedSwapper = await factory.deploy();

  let data = {
    address: deployedSwapper.address,
    abi: JSON.parse(JSON.stringify(deployedSwapper.interface.format("json"))),
  };

  console.log(data);

};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    process.exit(1);
  });
