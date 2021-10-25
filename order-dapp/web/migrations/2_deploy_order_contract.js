const Order = artifacts.require('../contracts/Order.sol')

module.exports = function (deployer) {
  deployer.deploy(Order)
}
