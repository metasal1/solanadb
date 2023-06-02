import { Metaplex, PublicKey } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";


// const auctionHouse = "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe"
const auctionHouse = "B4x93Px5YYcQdpvEKmbPMWKGC5a8hytNqpitQFsEAjDx"
const bidder = "joHAqTbC78cz96sLHAqcjcNt7QjPHm38ARWdLxLNJ1b"
const mint = new PublicKey("2rPDdVQokJz57b2CnEvVeCBie4U2L8Sk9hNerSNqgLcD")

const connection = new Connection("https://rpc.hellomoon.io/3eb66d11-4519-43a4-8aae-633da0d47fe6");
const metaplex = new Metaplex(connection);

const auctionHouseClient = metaplex.auctionHouse();

const lily = new PublicKey("B4x93Px5YYcQdpvEKmbPMWKGC5a8hytNqpitQFsEAjDx")
const bids = await auctionHouseClient.findListings({ auctionHouse })

console.log(bids)