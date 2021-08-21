require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stone dash thunder uncover give private foster genuine'; 
let testAccounts = [
"0xbfbf98d76cff543d63ef992279cfb71a4969a000dda2e28e334e177195530033",
"0xb2ba839df6f2b2c22a2ab9f98171e4c3fdeecf6ee0baad07c65b2afc3b20ca94",
"0x80653d1b07674209f21e811950240aa940dca0cd71671b68536462483958ae6c",
"0x6e39f8ca13e21b21aa0898635bb1889e6b721ffcdb600a0bb3245f5f4bda7631",
"0xe7927a95436edef3b07961c60cb411f1d27317ce4905435c452b4da5366cb76b",
"0x7de70432eb3c8ee4d6c197793265f6efd47340cc6aa45ddcc846b7a628f0489a",
"0x6cec25ae6dc64a2effff6843a378e71a065205f07e9838f765fbd73c2b393b82",
"0x0bbad100f221e785a862bde026a4bdc78fb480af611858d66951fe9c6caed2df",
"0x962e5a0dfa3b4f993dfe4e8e06de50d829060d4828e7e859f0ca85b9e1ce1a53",
"0xc35922749e9b26a43aa6d9d93598c6580f6cc8ca28e006fa196be100415bfe52"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


