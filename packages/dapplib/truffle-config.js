require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot notable renew stereo social coral light army gas'; 
let testAccounts = [
"0x179a6fa44941b467b70a544f470e8fedb997a17386fb59dba97d7bcbfbbf64d9",
"0xe41bd38d23e245c2a6eb99720dd99a8107fb1b423b5dc9a491f1bb15eb6c374f",
"0xe4fcaa9d10b56f44f564113f1e5f79d373a9fdf48cd5b27b8fb1b7dfb97437ac",
"0x0527fb4c62f6088616c63564f7f929656ea46f602fd306178244bad11492e4a5",
"0x5b4e9dfebb44c91594f1d123223edf2dc560f402ae425eb94b7dde9aeec2cd6a",
"0x644ae4729efac599b201b29b8b4ad13c1a289059099f0ae80470f15b5dbb5ab2",
"0x007a1cd4658000d23ac619a7d98a639976b41d5a5fa9c45fcbe888348059f8c9",
"0xb71cafa5008cfb5e8c21e5c66cdc25df870483b4836a4239141d3602d9bec4c9",
"0xb1d8bc6383c70081485eead78682bb1b510f83fe2f951a5d52a04c7582ff5f77",
"0x863504631a44fa3556d1f2b0892ee65ad2f0d5ecf53690e1863cb4df8d8a7249"
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


