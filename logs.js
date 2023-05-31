import WebSocket from 'ws';
import dotenv from 'dotenv';
import saveToMongo from './saveToMongo.js';
import discorder from './discorder.js';

console.log('RUNNING started @ ' + new Date());

const log = {
    "jsonrpc": "2.0",
    "method": "logsNotification",
    "params": {
        "result": {
            "context": {
                "slot": 196522894
            },
            "value": {
                "signature": "4m8roiZZjRPArH3VTDBjYaFa2LJdiY9YX4ydbPxEyTY77MKfDB1oS18v3NNYiMYqJvsaReB5n7HaYSk5UzGCKw8u",
                "err": null,
                "logs": [
                    "Program BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY invoke [1]",
                    "Program log: Instruction: Transfer",
                    "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV invoke [2]",
                    "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV consumed 39 of 186521 compute units",
                    "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV success",
                    "Program cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK invoke [2]",
                    "Program log: Instruction: ReplaceLeaf",
                    "Program log: Attempting to fill in proof",
                    "Program consumption: 170484 units remaining",
                    "Program log: Active Index: 6",
                    "Program log: Rightmost Index: 108772",
                    "Program log: Buffer Size: 64",
                    "Program log: Leaf Index: 55577",
                    "Program log: Fast-forwarding proof, starting index 6",
                    "Program consumption: 167445 units remaining",
                    "Program consumption: 167341 units remaining",
                    "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV invoke [3]",
                    "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV consumed 39 of 157637 compute units",
                    "Program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV success",
                    "Program cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK consumed 19265 of 176393 compute units",
                    "Program cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK success",
                    "Program BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY consumed 43952 of 200000 compute units",
                    "Program BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY success"
                ]
            }
        },
        "subscription": 19890641
    }
}

dotenv.config();

let socket = null; // Declare socket variable


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

            if (data.id !== 1) {
                // await saveToMongo('solana', process.env.NAME, { timestamp: new Date(), data: data.params });
                await discorder(process.env.DISCORD_TIPLINK_WEBHOOK, { timestamp: new Date(), title: data.params.result.value.pubkey, url: `https://explorer.solana.com/address/${data.params.result.value.pubkey}` });
            }
        });
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket closed');
        connectWebSocket();
    });
};

connectWebSocket();
