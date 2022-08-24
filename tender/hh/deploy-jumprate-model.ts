import hre from "hardhat";
import { readFileSync, writeFileSync } from "fs";
import { numToWei } from "../utils/ethUnitParser";
import { toBn } from "../utils/bn";

const outputFilePath = `./deployments/${hre.network.name}.json`;

// IR Model Params
const params = {
  blocksPerYear: "17000000",
  baseRate: "1",
  kink: "0",
  multiplierPreKink: "10",
  multiplierPostKink: "1000",
  // admin: "0x51129c8332A220E0bF9546A6Fe07481c17D2B638",
};

export async function main(adminWallet: string) {
  const [deployer] = await hre.ethers.getSigners();
  console.log(`>>>>>>>>>>>> Deployer: ${deployer.address} <<<<<<<<<<<<\n`);

  const deployments = JSON.parse(readFileSync(outputFilePath, "utf-8"));

  const jumpMultiplier = getJumpMultiplier(
    params.kink,
    params.multiplierPreKink,
    params.multiplierPostKink
  );

  const baseRateWei = numToWei(toBn(params.baseRate).div(100), 18);
  const kinkWei = numToWei(toBn(params.kink).div(100), 18);
  const multiplierWei = numToWei(toBn(params.multiplierPreKink).div(100), 18);
  const jumpMultiplierWei = numToWei(toBn(jumpMultiplier).div(100), 18);

  const JumpRateModelV2 = await hre.ethers.getContractFactory(
    // "JumpRateModel"
    "JumpRateModelV2"
  );
  const jumpRateModelV2 = await JumpRateModelV2.deploy(
    // params.blocksPerYear,
    baseRateWei,
    multiplierWei,
    jumpMultiplierWei,
    kinkWei,
    adminWallet
  );
  await jumpRateModelV2.deployed();

  console.log(`JumpRateModelV2 deployed to: ${jumpRateModelV2.address}.`);

  try {
    console.log(`Verifying JumpRateModelV2 deployed to: ${jumpRateModelV2.address}.`);

    await verifyContract(jumpRateModelV2.address, [
      baseRateWei,
      multiplierWei,
      jumpMultiplierWei,
      kinkWei,
      adminWallet
    ]);
  } catch (e) {
    console.error("Error verifying cErc20Immutable", jumpRateModelV2.address);
    console.error(e);
  }

  // save data
  if (!deployments["IRModels"]) deployments["IRModels"] = {};
  if (!deployments["IRModels"]["JumpRateModelV2"])
    deployments["IRModels"]["JumpRateModelV2"] = {};

  deployments["IRModels"]["JumpRateModelV2"][
    `${params.baseRate}__${params.kink}__${params.multiplierPreKink}__${params.multiplierPostKink}`
  ] = jumpRateModelV2.address;
  writeFileSync(outputFilePath, JSON.stringify(deployments, null, 2));
}

const getJumpMultiplier = (
  kink: string,
  multiplierPreKink: string,
  multiplierPostKink: string
): string => {
  return toBn(multiplierPostKink)
    .minus(multiplierPreKink)
    .div(toBn(100).minus(kink))
    .times(100)
    .toFixed();
};

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const verifyContract = async (
  contractAddress: string,
  constructorArgs: any
) => {
  await hre.run("verify:verify", {
    contract: "contracts/CErc20Immutable.sol:CErc20Immutable",
    address: contractAddress,
    constructorArguments: constructorArgs,
  });
};