const OrderMaker = artifacts.require('../contracts/OrderMaker.sol')

module.exports = function (deployer) {
  deployer.deploy(OrderMaker)
}
