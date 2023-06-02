import { Metaplex, PublicKey } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const auctionHouseKey = ""
const creator = "GVkb5GuwGKydA4xXLT9PNpx63h7bhFNrDLQSxi6j5NuF"
const mint = "So11111111111111111111111111111111111111112"

const connection = new Connection("https://rpc.hellomoon.io/3eb66d11-4519-43a4-8aae-633da0d47fe6");
const metaplex = new Metaplex(connection);

const auctionHouse = await metaplex
    .auctionHouse()
    .findByCreatorAndMint({
        creator: new PublicKey(creator),
        treasuryMint: new PublicKey(mint)
    });

console.log(auctionHouse)
