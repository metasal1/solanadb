import { Connection, clusterApiUrl } from '@solana/web3.js';
import jsonpath from 'jsonpath';

const solana = new Connection(clusterApiUrl("mainnet-beta"));

export default async (tx) => {
    const sig = await solana.getParsedTransaction(tx, { maxSupportedTransactionVersion: 0 });
    const mints = jsonpath.query(sig, '$..mint');
    const mint = mints[0];
    return mint;
}