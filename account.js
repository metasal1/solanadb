import WebSocket from 'ws';
import dotenv from 'dotenv';
import saveToMongo from './saveToMongo.js';
import discorder from './discorder.js';

console.log('RUNNING started @ ' + new Date());

dotenv.config();

let socket = null; // Declare socket variable


const account = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "accountSubscribe",
    "params": [
        process.argv[2],
        {
            "encoding": "jsonParsed",
            "commitment": "finalized"
        }
    ]
}

const connectWebSocket = () => {
    socket = new WebSocket(`wss://${process.env.RPC}?api-key=${process.env.API_KEY}`);

    socket.addEventListener('open', () => {
        const startTime = new Date();
        console.log(`WebSocket open @ ${startTime} | ${process.argv[2]}`);

        socket.send(JSON.stringify(account));

        // Handle incoming messages
        socket.addEventListener('message', async (event) => {
            const endTime = new Date();
            const responseTime = endTime - startTime;

            const data = JSON.parse(event.data);

            console.log(event.data);

            if (data.id !== 1) {
                await saveToMongo('solana', 'abc', { timestamp: new Date(), data: data.params });
                await discorder(process.env.DISCORD_ABC_WEBHOOK, { timestamp: new Date(), title: data.params.result.value.pubkey, url: `https://explorer.solana.com/address/${data.params.result.value.pubkey}` });
            }
        });
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket closed');
        connectWebSocket();
    });
};

connectWebSocket();
