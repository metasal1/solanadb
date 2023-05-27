import * as solanaWeb3 from "@solana/web3.js";
import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
const startBlock = process.argv[2];
let endBlock = process.argv[3];

for (let requestedBlock = Number(startBlock); requestedBlock <= Number(endBlock); requestedBlock++) {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "jsonrpc": "2.0", "id": 1,
            "method": "getBlock",
            "params": [
                requestedBlock,
                {
                    "encoding": "json",
                    "maxSupportedTransactionVersion": 0,
                    "transactionDetails": "full",
                    "rewards": false
                }
            ]
        })
    };

    // wait for 1 second
    // await new Promise(resolve => setTimeout(resolve, 100));

    const url = `https://${process.env.RPC}?api-key=${process.env.API_KEY}`;
    const req = await fetch(url, options)
    const block = await req.json();
    console.log(block)
    const transactionsPerBlock = block.result.transactions.length;
    const line = `${requestedBlock}, ${transactionsPerBlock}\n`
    fs.appendFileSync('blocks.csv', line);
}