import web3 from '@solana/web3.js';

// Path: getAccountInfo.js

const solana = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));

solana.getInflationRate().then((tx) => {
    console.log(tx.total * 100);
});
