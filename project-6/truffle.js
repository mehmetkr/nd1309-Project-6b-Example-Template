const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "4c4ba6b58af04ca78ad57696da3cc0cd";
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();


module.exports = {
  networks: {
//    development: {
//      host: "127.0.0.1",
//      port: 8545,
//      network_id: "*" // Match any network id
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
        network_id: 11155111,     
        gas: 4500000,       
        gasPrice: 10000000000
    }
  },
  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};