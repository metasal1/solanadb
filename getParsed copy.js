import web3 from '@solana/web3.js';
import moment from 'moment';
import fs from 'fs';
import jsonpath from 'jsonpath';

const red = "\x1b[31m";  // ANSI escape sequence for red color
const reset = "\x1b[0m";  // ANSI escape sequence to reset color

const solana = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));

// ABC Collection 
const abc_collection = 'ES2iF5ctjqvtopPn4n6K7c9fdHjYg41rYXL2XzJK37jF'
const abc_creator1 = 'GVkb5GuwGKydA4xXLT9PNpx63h7bhFNrDLQSxi6j5NuF'
const abc_creator2 = 'CMAWeiRp4sYJVDJA7XAy4qyvX2ovLX848x4Qj5H3nK7D' // use this

// Mad Lads
const mad_creator_1 = '5XvhfmRjwXkGp3jHGmaKpqeerNYjkuZZBYLVQYdeVcRv'
const mad_creator_2 = '2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW' // use this
const mad_creator_coll = 'J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w'

const publicKey = new web3.PublicKey(abc_creator2);

solana.getSignaturesForAddress(publicKey, { limit: 1 }).then((tx) => {
    const sig = tx[0].signature;
    // console.log(sig);
    solana.getParsedTransaction(sig, { maxSupportedTransactionVersion: 0 }).then((tx) => {
        console.dir(tx);
        fs.writeFileSync(`parsed.json`, JSON.stringify(tx));
        // const mintAddress = tx.meta.innerInstructions[0].instructions[0].parsed.info.mint // for ABC
        // console.log(`Mint: ${mintAddress}`)

        const mints = jsonpath.query(tx, '$..mint');
        console.log(mints);
    });
});
