import {ethers} from "hardhat";
import {ModifiedEIP712__factory} from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const contract = await new ModifiedEIP712__factory(signer).deploy();
  console.log(contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });