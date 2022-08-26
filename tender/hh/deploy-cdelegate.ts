import hre from "hardhat";

import { readFileSync, writeFileSync } from "fs";

const outputFilePath = `./deployments/${hre.network.name}.json`;

export async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log(`>>>>>>>>>>>> Deployer: ${deployer.address} <<<<<<<<<<<<\n`);

  const CErc20Delegate = await  hre.ethers.getContractFactory("CErc20Delegate");

  const deployments = JSON.parse(readFileSync(outputFilePath, "utf-8"));

  const deployedCErc20Delegate = await CErc20Delegate.deploy()
  console.log("deployed CErc20Delegate", deployedCErc20Delegate.address)
    
  try {
      await hre.run("verify:verify", {
          contract: "contracts/CErc20Delegate.sol:CErc20Delegate",
          address: deployedCErc20Delegate.address,
      })
    } catch (e) {
      //  Delegates are all the same so if you run this twice it will error the second time.
      console.error("Could not verify delegate", deployedCErc20Delegate.address);
      console.error(e);
    }

    // upgrade
    // const address = "0x03FCED65cdde966555dB96bF2A5E9A97564dBe05"
    // const implementation = deployedCErc20Delegate.address
    // const allowResign = true
    // const data = Buffer.from([0x0])  
    // const delegator = await hre.ethers.getContractAt(
    //   "CErc20Delegator",
    //   address
    // );
    // console.log("setting implementation on", address, "to", implementation)
    // await delegator._setImplementation(implementation, allowResign, data)
    // console.log("Set implementation")


    // Save to output
    deployments["delegate"]  = deployedCErc20Delegate.address
    writeFileSync(outputFilePath, JSON.stringify(deployments, null, 2));

}

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });