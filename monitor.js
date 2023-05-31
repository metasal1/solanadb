import WebSocket from 'ws';
import dotenv from 'dotenv';
import getSig from "./getSig.js";
import getParsed from "./getParsedTx.js";
import getNFT from "./getNFT.js";
import discord from './discord.js';
import mongo from './mongo.js';

dotenv.config();

let socket = null; // Declare socket variable

export default async function connectWebSocket(name, creator) {
    socket = new WebSocket(`wss://${process.env.RPC}?api-key=${process.env.API_KEY}`);

    socket.addEventListener('open', () => {
        console.log(`WebSocket open @ ${(new Date()).toLocaleString()} | Name = ${name} | Creator = ${creator}`);
        socket.send(JSON.stringify({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "accountSubscribe",
            "params": [
                creator,
                {
                    "encoding": "jsonParsed",
                    "commitment": "finalized"
                }
            ]
        }));
        socket.addEventListener('message', async (event) => {
            const data = JSON.parse(event.data);
            if (data.id !== 1) {
                console.log(creator, data);
                const signature = await getSig(creator);
                const mint = await getParsed(signature);
                const nft = await getNFT(mint);
                await mongo('solana', name, { nft, signature, mint, creator, date: new Date() })
                await discord(process.env.DISCORD_ABC_WEBHOOK, { signature, mint, nft, creator });
                console.log(nft)
                return creator;
            }
        });

    });

    socket.addEventListener('close', () => {
        console.log('WebSocket closed');
        connectWebSocket();
    });
}

// connectWebSocket();
