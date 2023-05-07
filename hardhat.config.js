require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config()

const GOERLI_URL=process.env.GOERLI_URL
const PRIVATE_KEY=process.env.PRIVATE_KEY


module.exports = {
  solidity: "0.8.18",
  networks:{
    mumbai:{
      url:GOERLI_URL,
      chainId: 80001,
      accounts:[`${PRIVATE_KEY}`]  
    }

  }
};
