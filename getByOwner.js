import { Metaplex } from "@metaplex-foundation/js";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Connection(`https://${process.env.RPC}?api-key=${process.env.API_KEY}`);
const metaplex = new Metaplex(connection);

const mintAddress = new PublicKey('GaxVqiQyJKQDRu6H4pfy9V6Xq19pHGr6HQKDQDv911Y4');

const nft = await metaplex.nfts().findAllByOwner({ mintAddress });
fs.writeFileSync(`salim.json`, JSON.stringify(nft));
