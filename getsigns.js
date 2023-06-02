import web3 from '@solana/web3.js';
import moment from 'moment';
import fs from 'fs';
const red = "\x1b[31m";  // ANSI escape sequence for red color
const reset = "\x1b[0m";  // ANSI escape sequence to reset color

const solana = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));

// ABC Collection 
const abc_collection = 'ES2iF5ctjqvtopPn4n6K7c9fdHjYg41rYXL2XzJK37jF'
const abc_creator1 = 'GVkb5GuwGKydA4xXLT9PNpx63h7bhFNrDLQSxi6j5NuF'
const abc_creator2 = 'CMAWeiRp4sYJVDJA7XAy4qyvX2ovLX848x4Qj5H3nK7D' //use this

// Mad Lads
const mad_creator_1 = '5XvhfmRjwXkGp3jHGmaKpqeerNYjkuZZBYLVQYdeVcRv'
const mad_creator_2 = '2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW' // use this
const mad_creator_coll = 'J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w'

// Gamerplex
const gp_creator_1 = "48qMBUmHcpQvDBbJbfRbK8ifvA787F2ckgMXLPe2RzD4"
const gp_creator_2 = "7g71M17m4riZnQdQmiKhGpNGXVQgQR9RUXdPECxGveT2"
const gp_creator_coll = null;

// Okay Bears

const okay_creator_1 = "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9"

const publicKey = new web3.PublicKey(okay_creator_1);


const txs = await solana.getSignaturesForAddress(publicKey, { limit: 10 });
console.log('first tx', txs[0], `${red} ${moment(txs[0].blockTime * 1000).fromNow()} ${reset}`);
console.log('txs', txs.length);
fs.writeFileSync('txs_creator_2.json', JSON.stringify(txs, null, 2));