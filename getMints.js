import fetch from 'node-fetch';
import getParsedTx from './getParsedTx.js';
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('txs_vanta.json'));

const getMint = async (tx) => {
    const mint = await getParsedTx(tx);
    return mint;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const delayBetweenCalls = 100; // 0.1 second
const maxRequestsPer10Seconds = 40;
const maxConcurrentConnections = 40;
const maxDataPer30Seconds = 100 * 1024 * 1024; // 100 MB in bytes

const executeSequentiallyWithDelay = async () => {
    let requestCount = 0;
    let concurrentConnections = 0;
    let dataTransfer = 0;

    for (let i = 0; i < data.length; i++) {
        const tx = data[i];
        const startTime = Date.now();

        // Check rate limiting rules
        if (
            requestCount >= maxRequestsPer10Seconds ||
            concurrentConnections >= maxConcurrentConnections ||
            dataTransfer >= maxDataPer30Seconds
        ) {
            // Wait until the rate limits reset
            await delay(10000); // Wait for 10 seconds
            requestCount = 0;
            concurrentConnections = 0;
            dataTransfer = 0;
        }

        // Wait for available connection slot
        while (concurrentConnections >= maxConcurrentConnections) {
            await delay(100); // Wait for 0.1 second
        }

        // Perform the API call
        await delay(i * delayBetweenCalls);
        concurrentConnections++;
        requestCount++;

        getMint(tx.signature)
            .then((mint) => {
                console.log(`Signature ${tx.signature} mint is ${mint}`);
                fs.appendFileSync('txs_vanta_mints.json', JSON.stringify({ signature: tx.signature, mint: mint }) + ',\n');
                concurrentConnections--;
                const endTime = Date.now();
                dataTransfer += (endTime - startTime);
            })
            .catch((error) => {
                console.error(`Error occurred for signature ${tx.signature}: ${error}`);
                concurrentConnections--;
                const endTime = Date.now();
                dataTransfer += (endTime - startTime);
            });
    }
};

executeSequentiallyWithDelay();
