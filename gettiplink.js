import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
// Connection URL
const url = process.env.MONGODB_URI;

// Database and collection names
const dbName = 'solana'
const collectionName = 'tiplink'

// Connect to the MongoDB server
MongoClient.connect(url, function (err, client) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }

    console.log('Connected successfully to MongoDB');

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

        // Close the MongoDB connection
        client.close();
    });
});
