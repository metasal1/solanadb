import fetch from 'node-fetch';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();


const address = '76ZWtzTG6e6yxXTVQaxRfPD6Nmr2SBonbGTx2nBPGdo4';
const endpoint = clusterApiUrl('mainnet-beta');
// const endpoint = `https://${process.env.RPC}?api-key=${process.env.API_KEY}`

const connection = new Connection(endpoint, 'confirmed');



async function getAllSignaturesForAddress(address) {
    let allSignatures = [];
    let config = { limit: 1000 }; // Maximum limit, can be adjusted as per your requirements

    try {
        while (true) {

            // wait 1 second
            await new Promise(resolve => setTimeout(resolve, 400));

            const signatures = await connection.getSignaturesForAddress(new PublicKey(address), config);

            if (signatures.length === 0) {
                break;
            }

            allSignatures = allSignatures.concat(signatures);
            console.log('signatures', allSignatures.length);
            const lastSignature = signatures[signatures.length - 1];
            config.before = lastSignature.signature;
        }
    } catch (error) {
        console.error('Error retrieving signatures:', error);
    }

    return allSignatures;
}

// Usage example
getAllSignaturesForAddress(address)
    .then(signatures => {
        fs.writeFileSync('txs_vanta.json', JSON.stringify(signatures, null, 2));
        console.log('Signatures:', signatures);
        console.log('Total Signatures:', signatures.length);
    })
    .catch(error => {
        console.error('Error:', error);
    });
