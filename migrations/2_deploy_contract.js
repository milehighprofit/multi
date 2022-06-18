const Wallet = artifacts.require("Wallet");

module.exports = async function(deployer, _network, accounts) {
  await deployer.deploy(Wallet, ["0xAE8029fBc1F4099aD20c6Fad95622bd756d3F1dD", "0x02838296906D53eEe4e6BF986D1ec062d3eC743f", "0xA0Dd2d4D9030699163766b04D356e8F220201421"], 2);
  const wallet = await Wallet.deployed();
  await web3.eth.sendTransaction({from: accounts[0], to: wallet.address, value: 10000});
};
