import web3 from '@solana/web3.js';

// Path: getAccountInfo.js

const solana = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));

const publicKey = new web3.PublicKey("CMAWeiRp4sYJVDJA7XAy4qyvX2ovLX848x4Qj5H3nK7D");

solana.getAccountInfoAndContext(publicKey, { encoding: 'jsonParsed' }).then((tx) => {
    console.log(tx);
});
