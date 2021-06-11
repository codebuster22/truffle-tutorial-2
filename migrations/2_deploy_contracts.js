const Blah = artifacts.require('Blah');

module.exports = async (deployer) => {
    await deployer.deploy(Blah);
}