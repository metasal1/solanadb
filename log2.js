import WebSocket from 'ws';
import dotenv from 'dotenv';
import saveToMongo from './saveToMongo.js';
import discorder from './discorder.js';
import solana from '@solana/web3.js';
console.log('RUNNING started @ ' + new Date());

dotenv.config();


// Postion 1 = Program
// Position 5 = Buyer

let socket = null; // Declare socket variable

const log = { "jsonrpc": "2.0", "method": "logsNotification", "params": { "result": { "context": { "slot": 196546970 }, "value": { "signature": "Qhx278DnjJcQAjihBPB1AeA1AeSQkv4mfNn84LGfHKuRriiYLwP2RWbCYvfYPPFoATnNnku5BRQAREDoVDS8eja", "err": null, "logs": ["Program BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY invoke [1]", "Program log: Instruction: Transfer", "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV invoke [2]", "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV consumed 39 of 182021 compute units", "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV success", "Program cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK invoke [2]", "Program log: Instruction: ReplaceLeaf", "Program log: Attempting to fill in proof", "Program consumption: 165982 units remaining", "Program log: Active Index: 21", "Program log: Rightmost Index: 108772", "Program log: Buffer Size: 64", "Program log: Leaf Index: 96740", "Program log: Fast-forwarding proof, starting index 21", "Program consumption: 162921 units remaining", "Program consumption: 162817 units remaining", "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV invoke [3]", "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV consumed 39 of 153113 compute units", "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV success", "Program cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK consumed 19289 of 171893 compute units", "Program cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK success", "Program BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY consumed 48476 of 200000 compute units", "Program BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY success"] } }, "subscription": 88014511 } }
const logs = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "logsSubscribe",
    "params": [
        {
            "mentions": [process.argv[2]],
        },
        {
            "commitment": "finalized"
        }
    ]
}
const connectWebSocket = () => {
    socket = new WebSocket(`wss://${process.env.RPC}?api-key=${process.env.API_KEY}`);

    socket.addEventListener('open', () => {
        const startTime = new Date();
        console.log(`WebSocket open @ ${startTime} | ${process.argv[2]}`);

        // subscribe to collection

        socket.send(JSON.stringify(logs));

        // Handle incoming messages
        socket.addEventListener('message', async (event) => {
            const endTime = new Date();
            const responseTime = endTime - startTime;

            const data = JSON.parse(event.data);
            console.log(event.data);

            // Send heartbeat every 59 seconds
            setInterval(() => {
                socket.send(JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'ping' }));
            }, 59000);

            if (data.id !== 1) {
                // await saveToMongo('solana', process.env.NAME, { timestamp: new Date(), data: data.params });
                // await discorder(process.env.DISCORD_TIPLINK_WEBHOOK, { timestamp: new Date(), title: data.params.result.value.pubkey, url: `https://explorer.solana.com/address/${data.params.result.value.pubkey}` });
            }

            if (data.params?.result?.value?.signature) {
                const signature = data.params.result.value.signature;
                console.log(signature);
                const connection = new solana.Connection('https://api.mainnet-beta.solana.com');
                const transaction = await connection.getTransaction(signature, { maxSupportedTransactionVersion: 1 });
                const buyer = transaction.transaction.message.accountKeys[5].toBase58();
                console.log(buyer);
                await discorder(process.env.DISCORD_TIPLINK_WEBHOOK, { title: `New cNFT transferred`, description: `Buyer ${buyer}`, url: `https://explorer.solana.com/address/${buyer}` });

            }

        });
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket closed');
        connectWebSocket();
    });
};

connectWebSocket();
