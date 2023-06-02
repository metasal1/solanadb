import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { Metaplex } from "@metaplex-foundation/js";
import jsonpath from 'jsonpath';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

// const endpoint = clusterApiUrl('mainnet-beta');
const endpoint = `https://${process.env.RPC}`
const solana = new Connection(endpoint, 'confirmed');

// setup metaplex
const metaplex = new Metaplex(solana);

async function gettx() {
    const sig = await solana.getParsedTransaction('3y4m6QGdiBcaYhMx32T4c3MfN6oyKq2F89zHKphtqvfPJoUJGYe7pBzTmdRujk8L84CnAvmvXReBW1VEs9AbNGkd', { maxSupportedTransactionVersion: 0 });
    const mintAddress = new PublicKey(sig.meta.innerInstructions[0].instructions[0].parsed.info.mint)
    const nft = await metaplex.nfts().findByMint({ mintAddress });
    fs.writeFileSync('nft.json', JSON.stringify(nft))
}

gettx()