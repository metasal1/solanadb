import WebSocket from 'ws';
import dotenv from 'dotenv';
import saveToMongo from './saveToMongo.js';

console.log('RUNNING started @ ' + new Date());

dotenv.config();

let socket = null; // Declare socket variable

const connectWebSocket = () => {
    socket = new WebSocket(`wss://api.mainnet-beta.solana.com`);

    socket.addEventListener('open', () => {
        console.log('WebSocket connection established');

        // subscribe to collection
        const subscribe = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "logsSubscribe",
            "params": [
                {
                    "mentions": ["ipayV3Q9LjwwSLmd7ssPhPTBnWrx1LQyUM8wkEbxJan"]
                },
                {
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
            console.log('\n------------------------\n', new Date() + " " + event.data, '\n------------------------\n');
            const data = JSON.parse(event.data);
            if (data.id !== 1) {
                await saveToMongo('solana', 'tiplink', data);
            }
        });
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed');
        connectWebSocket();
    });
};

connectWebSocket();
