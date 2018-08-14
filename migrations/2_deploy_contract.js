// 引入我们编写的合约
const SenCoin = artifacts.require("./SenCoin.sol")
const SenCoinCrowdsale = artifacts.require("./SenCoinCrowdsale.sol")
module.exports = function(deployer, network, accounts) { 
 // 设定参数，此处的参数即使传入合约构造方法的参数，与你自己编写的合约保持一致
const ifSuccessfulSendTo = accounts[0] // 当前以太坊网络中的默认账户
const fundingGoalInEthers = 1000
const durationInMinutes = 36000000
const etherCostOfEachToken = 0.01
// 这里的 Promise 可以保证我们在发布完 token 合约之后再发布 ICO 合约，并将已发布 token 的地址作为参数传入
deployer.deploy(SenCoin).then(function () {
    return deployer.deploy(SenCoinCrowdsale, ifSuccessfulSendTo, fundingGoalInEthers, durationInMinutes, etherCostOfEachToken, SenCoin.address);
});
};