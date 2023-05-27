import WebSocket from 'ws';
import dotenv from 'dotenv';
import saveToMongo from './saveToMongo.js';

console.log('RUNNING started @ ' + new Date());

dotenv.config();

let socket = null; // Declare socket variable

const connectWebSocket = () => {
    socket = new WebSocket(`wss:/${process.env.RPC}?api-key=${process.env.API_KEY}`);

    socket.addEventListener('open', () => {
        console.log('WebSocket connection established');

        const startTime = new Date();

        // subscribe to collection
        const subscribe = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "accountSubscribe",
            "params": [
                "ATDB6H3M3pzS7iTNiBeqxGbxmwx9nJZWLsvHjC8J7QrX",
                {
                    "encoding": "jsonParsed",
                    "commitment": "finalized"
                }
            ]
        }

        try {
            socket.send(JSON.stringify(subscribe));
        } catch (error) {
            console.log(error);
        }

        // Handle incoming messages
        socket.addEventListener('message', async (event) => {
            const endTime = new Date();
            const responseTime = endTime - startTime;

            console.log('\n------------------------\n', new Date() + " | ResTime = " + responseTime + " | " + event.data, '\n------------------------\n');
            const data = JSON.parse(event.data);
            if (data.id !== 1) {
                await saveToMongo('solana', 'lily', { time: new Date(), data: data.params });
            }
        });
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed');
        connectWebSocket();
    });
};

connectWebSocket();