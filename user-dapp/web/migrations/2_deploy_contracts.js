const VideoList = artifacts.require("./VideoList.sol");

module.exports = function(deployer) {
  deployer.deploy(VideoList);
};
