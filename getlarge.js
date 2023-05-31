import web3 from '@solana/web3.js';
import dotenv from "dotenv";

dotenv.config();

// Path: getAccountInfo.js

const solana = new web3.Connection(`$api${process.env.HELIUS_API_KEY}`);

solana.getLargestAccounts().then((tx) => {
    console.log(tx);
});
