import {
  JsonRpcSigner,
  JsonRpcProvider,
  ExternalProvider,
} from "@ethersproject/providers";
import { CTokenContract, GmxTokenContract } from "./contract_helpers/Token";
import { ComptrollerContract } from "./contract_helpers/Comptroller";
import { OracleContract } from "./contract_helpers/PriceOracle";
import { getWallet, getAbiFromArbiscan, resetNetwork } from "./utils/TestUtil";
import * as hre from "hardhat";
import * as ethers from "ethers";
import { Contract, BigNumber } from "ethers";
import { expect } from "chai";
import { formatAmount, getUnderlyingBalance } from "./utils/TokenUtil";
import * as tokenClasses from "./contract_helpers/Token";
const hreProvider = hre.network.provider;

const provider = new ethers.providers.Web3Provider(hreProvider as any);
// USE THE DELEGATOR FILE INSTEAD OF THE CETHER AND CERC20!!!!

const tests = [
  {
    symbol: "tUSDC",
    contractName: "CErc20",
    mintAmount: "4",
    borrowAmount: "1",
    redeemAmount: "1",
    redeemUnderlyingAmount: "1",
    contractClass: CTokenContract,
    liquidate: "yes",
  },
  //{
  //  symbol: "tEth",
  //  contractName: "CEther",
  //  mintAmount: "0.001",
  //  redeemAmount: "all",
  //  borrowAmount: "0.0005",
  //  contractClass: CTokenContract,
  //},

  // {
  //   symbol: 'tGMX',
  //   contractName: 'CErc20DelegatorGmx',
  //   mintAmount: '0.01',
  //   borrowAmount: '1',
  //   redeemAmount: '1',
  //   redeemUnderlyingAmount: '1',
  //   contractClass: GmxTokenContract,
  //   deploymentFilePath: '../../deployments/gmx.json',
  //   walletAddress: '0x5B33EC561Cb20EaF7d5b41A9B68A690E2EBBc893',
  // }
];

const testOptionalDefaults = {
  contractClass: CTokenContract,
  deploymentFilePath: "../../deployments/arbitrum.json",
  walletAddress: "0x52134afB1A391fcEEE6682E51aedbCD47dC55336",
};

const verifyTestParameters = (test) => {
  for (let [key, val] of Object.entries(testOptionalDefaults)) {
    test[key] = test[key] ? test[key] : val;
  }
  return test;
};

let erc20Contract: CTokenContract;
let comptrollerContract: ComptrollerContract;
let uContractAddress: string;
let uContract: Contract;
let wallet: JsonRpcSigner;
let admin: JsonRpcSigner;

let uBalanceProvider: Contract | JsonRpcProvider;

const walletAddress = "0x52134afB1A391fcEEE6682E51aedbCD47dC55336";
const adminAddress = "0x85abbc0f8681c4fb33b6a3a601ad99e92a32d1ac";

describe("Erc20", () => {
  before(async () => {
    resetNetwork();
    wallet = await getWallet(walletAddress, provider);
    admin = await getWallet(adminAddress, provider);
  });

  after(async () => {
    resetNetwork();
  });

  for (let test of tests) {
    describe(test.symbol, () => {
      before(async () => {
        test = verifyTestParameters(test);
        // if(wallet._address != test.walletAddress) {
        //   console.log('impersonating: ', test.walletAddress);
        //   wallet = await getWallet(test.walletAddress, provider);
        // }
        erc20Contract = new test["contractClass"](
          test.symbol,
          test.contractName,
          wallet
        );
        comptrollerContract = new ComptrollerContract(admin);
      });
      if (test["mintAmount"]) {
        describe("Mint", () => {
          it("Should have more tTokens and fewer uTokens", async () => {
            const tBalance = await erc20Contract.balanceOf(wallet._address);
            const uBalance = await erc20Contract.getUnderlyingBalance(
              wallet._address
            );

            await erc20Contract.supply(test.mintAmount);

            const tBalanceTest = (
              await erc20Contract.balanceOf(wallet._address)
            )
              .sub(tBalance)
              .gt(0);
            const uBalanceTest = (
              await erc20Contract.getUnderlyingBalance(wallet._address)
            )
              .sub(uBalance)
              .lt(0);

            expect(tBalanceTest).to.be.true;
            expect(uBalanceTest).to.be.true;
          });
        });
      }
      if (test["redeemAmount"]) {
        describe("redeem", () => {
          it("Should have less tTokens and more uTokens", async () => {
            let redeemAmount;

            const tBalance = await erc20Contract.balanceOf(wallet._address);
            const uBalance = await erc20Contract.getUnderlyingBalance(
              wallet._address
            );

            if (test["redeemAmount"] == "all") {
              redeemAmount = tBalance;
            } else {
              redeemAmount = formatAmount(
                test["redeemAmount"],
                await erc20Contract.decimals()
              );
            }

            await erc20Contract.approve(wallet._address, redeemAmount);
            await erc20Contract.redeem(redeemAmount);

            const tBalanceTest = (
              await erc20Contract.balanceOf(wallet._address)
            )
              .sub(tBalance)
              .lt(0);
            const uBalanceTest = (
              await erc20Contract.getUnderlyingBalance(wallet._address)
            )
              .sub(uBalance)
              .gt(0);

            expect(tBalanceTest).to.be.true;
            expect(uBalanceTest).to.be.true;
          });
        });
      }
      if (test["redeemUnderlyingAmount"]) {
        describe("redeemUnderlying", () => {
          it("Should have less tTokens and more uTokens", async () => {
            const tBalance = await erc20Contract.balanceOf(wallet._address);
            const uBalance = await erc20Contract.getUnderlyingBalance(
              wallet._address
            );

            const redeemUnderlyingAmount = formatAmount(
              test["redeemUnderlyingAmount"],
              erc20Contract.uDecimals
            );

            await erc20Contract.approve(
              wallet._address,
              redeemUnderlyingAmount
            );
            await erc20Contract.redeem(redeemUnderlyingAmount);

            const tBalanceTest = (
              await erc20Contract.balanceOf(wallet._address)
            )
              .sub(tBalance)
              .lt(0);
            const uBalanceTest = (
              await erc20Contract.getUnderlyingBalance(wallet._address)
            )
              .sub(uBalance)
              .gt(0);

            expect(tBalanceTest).to.be.true;
            expect(uBalanceTest).to.be.true;
          });
        });
      }
      if (test["borrowAmount"]) {
        describe("Borrow", () => {
          // it('Should have more tTokens and fewer uTokens', async () => {
          //   let borrowBalance = await erc20Contract.borrowBalanceStored()
          //   console.log(borrowBalance.toString())
          //   await erc20Contract.borrow(formatAmount(.0005));
          //   borrowBalance = await erc20Contract.borrowBalanceStored()
          //   console.log(borrowBalance.toString())
          // });
        });
      }
    });
  }
});
