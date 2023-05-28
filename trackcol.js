import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const BASE_URL = 'https://api.helius.xyz';
const API_KEY = process.env.HELIUS_NFTMATE_API_KEY;
const COLLECTION_ADDRESS = 'ATDB6H3M3pzS7iTNiBeqxGbxmwx9nJZWLsvHjC8J7QrX'; // LILY

const createCollectionWebhook = async () => {
    try {
        const mints = await getMints();
        const webhookId = await createWebhook(mints);
        console.log(`Created webhook ${webhookId}!`);
    } catch (ex) {
        console.error('Error occurred: ', ex);
    }
};

const getMints = async () => {
    const url = `${BASE_URL}/v1/mintlist?api-key=${API_KEY}`;
    const { data } = await axios.post(url, {
        query: {
            verifiedCollectionAddresses: [COLLECTION_ADDRESS],
        },
        options: {
            limit: 10_000,
        },
    });
    return data.result.map((x) => x.mint);
};

const createWebhook = async (mints) => {
    const url = `${BASE_URL}/v0/webhooks?api-key=${API_KEY}`;
    const { data } = await axios.post(url, {
        webhookURL: process.env.DISCORD_MADLADS_WEBHOOK,
        transactionTypes: ['NFT_SALE'],
        accountAddresses: mints,
        webhookType: 'enhanced',
    });
    return data.webhookID;
};

createCollectionWebhook();