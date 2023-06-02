import { Metaplex } from "@metaplex-foundation/js";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import fs from 'fs';
// import getNFT from "./getNFT";

async function getNFT() {
    const mint = "5Qoj5FYkj9uL8bt3dVJWWKq4W3nCzqYgSsyT3CDew5dp"
    console.log('mint', mint)
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const metaplex = new Metaplex(connection);
    const mintAddress = new PublicKey(mint);
    const nft = await metaplex.nfts().findByMint({ mintAddress });
    console.log(nft)
    fs.writeFileSync('nft.json', JSON.stringify(nft))
}


getNFT()