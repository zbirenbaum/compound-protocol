import hre from "hardhat";
import { copyFileSync } from "fs";

import { main as DeployProtocol } from "./deploy-protocol";
import { main as DeployJumpModel } from "./deploy-jumprate-model";
import { main as DeployCDToken } from "./deploy-cdelegator";
import { main as GLPOracle } from "./deploy-glp-oracle";

import { main as DeployMockOracle } from "./deploy-mock-price-oracle";
import { main as DeployLens } from "./deploy-lens";
import { main as DeployIrModel } from "./deploy-ir-model";
// import { main as DeployCToken } from "./deploy-ctoken";
// import { main as SetMockOraclePrice } from "./set-mock-oracle-price";
import { main as SetCollateralFactor } from "./set-cf";


const outputFilePath = `./deployments/${hre.network.name}.json`;

const ADMIN_PUBLIC_KEY = process.env.PUBLIC_KEY || "";

if (ADMIN_PUBLIC_KEY === "") {
  console.error("Please define your PUBLIC_KEY in .env");
  process.exit(1);
}

// fs.copyFileSync(src, dest, mode)

async function main() {
  // backup deployment address file
  copyFileSync(outputFilePath, outputFilePath.replace(".json", `${Date.now()}.json`));

  // console.log("deploying mock oracle")
  // Need oracle deployed first to set on unitroller in DeployProtocol,
  // await DeployMockOracle();

  console.log("deploy protocol")
  await DeployProtocol();

  // await DeployLens();

  // console.log("Deploy Jump Model")
  // await DeployJumpModel(ADMIN_PUBLIC_KEY);
  // await DeployIrModel();


  // Depends on previous deployments
  // await DeployCToken();

  // console.log("deploying GLPOracle")
  // await GLPOracle();

  console.log("deploying CDelegators")
  await DeployCDToken()

  // SetCollateralFactor requires the price to be set first
  // await SetCollateralFactor();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });