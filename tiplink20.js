import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default async function get(dbName, collectionName) {
    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Find the latest 20 records
        collection.find().sort({ _id: -1 }).limit(20).toArray(function (err, docs) {
            if (err) {
                console.error('Failed to fetch records:', err);
                return;
            }

            // Print the records to the console
            console.log('Latest 20 records:');
            console.log(docs);
        });
    } finally {
        await client.close();
    }
}
get('solana', 'tiplink');