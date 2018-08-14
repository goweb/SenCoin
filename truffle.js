/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require("truffle-hdwallet-provider"); 
// 在这里我们需要通过 js 调用以太坊钱包，通过 npm install truffle-hdwallet-provider 安装这个库
var infura_apikey = "c8651a77080c492d81246eeffe028c36"; // infura 为你提供的 apikey 请与你申请到的 key 保持一致，此处仅为示例
var mnemonic = "plunge better cricket enter melt survey rib promote lunch shiver father glad";
 // 你以太坊钱包的 mnemonic ，可以从 Metamask 当中导出，mnemonic 可以获取你钱包的所有访问权限，请妥善保存，在开发中切勿提交到 git
 module.exports = {
networks: {
  development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*"
  },
  ropsten: {
    provider: function () {
      return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey)
    },
    network_id: 3,
    gas: 21000,
    gasPrice: 0.39
  },
  main: {
    provider: function () {
      return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/" + infura_apikey)
    },
    network_id: 3,
    gas: 3012388,
    gasPrice: 1000000000
  }
},
solc: {
  optimizer: {
    enabled: true,
    runs: 200
  }
}
};

