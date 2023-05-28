import WebSocket from 'ws';
import dotenv from 'dotenv';
import saveToMongo from './saveToMongo.js';
import discorder from './discorder.js';

console.log('RUNNING started @ ' + new Date());

dotenv.config();

let socket = null; // Declare socket variable

const logs = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "logsSubscribe",
    "params": [
        {
            "mentions": [process.argv[3]],
        },
        {
            "commitment": "finalized"
        }
    ]
}

const program = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "programSubscribe",
    "params": [
        process.argv[3],
        {
            "encoding": "jsonParsed"
        }
    ]
}

const account = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "accountSubscribe",
    "params": [
        process.argv[3],
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
        console.log(`WebSocket open @ ${startTime} | ${process.argv[2]} | ${process.argv[3]} `);

        // subscribe to collection

        try {
            if (process.argv[2] === 'logs') socket.send(JSON.stringify(logs));
            if (process.argv[2] === 'account') socket.send(JSON.stringify(account));
            if (process.argv[2] === 'program') socket.send(JSON.stringify(program));

        } catch (error) {
            console.log(error);
        }

        // Handle incoming messages
        socket.addEventListener('message', async (event) => {
            const endTime = new Date();
            const responseTime = endTime - startTime;

            console.log('\n------------------------\n', new Date() + " | ResTime =  " + responseTime + " | " + event.data, '\n------------------------\n');

            const data = JSON.parse(event.data);
            if (data.id !== 1) {
                // await saveToMongo('solana', process.env.NAME, { timestamp: new Date(), data: data.params });
                await discorder(process.env.DISCORD_TIPLINK_WEBHOOK, { timestamp: new Date(), title: data.params.result.value.pubkey });
            }
        });
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket closed');
        connectWebSocket();
    });
};

connectWebSocket();
