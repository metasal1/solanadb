import web3 from '@solana/web3.js';
const solana = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));

export default async (creator) => {
    const publicKey = new web3.PublicKey(creator);
    const tx = await solana.getSignaturesForAddress(publicKey, { limit: 1 });
    return tx[0].signature;

}
