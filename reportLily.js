import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import discorder from './discorder.js';
import { CronJob } from 'cron';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


// every hour
const job = new CronJob('0 * * * *', async () => {

    console.log(new Date().toLocaleString())
    const collection = 'Lily'
    const lastHourObjectId = ObjectId.createFromTime(Math.floor(Date.now() / 1000) - 3600);

    const query = { collection: collection, _id: { $gte: lastHourObjectId } }
    console.log(lastHourObjectId)

    async function report(db, table, data) {
        try {
            await client.connect();
            // only provide count
            const count = await client.db(db).collection(table).countDocuments(query)
            console.log(`There are currently ${count} documents in the ${collection} collection`);
            // perform actions on the collection object
            const docs = await client.db(db).collection(table).find(query).toArray();


            const data = {
                collection: collection,
                count: count,
                volume: docs.reduce((a, b) => a + b.salesPrice, 0),
                average: docs.reduce((a, b) => a + b.salesPrice, 0) / docs.length
            }

            await discorder(process.env.DISCORD_LILY_WEBHOOK, data)

        } finally {
            await client.close();
        }
    }
    report('nft', 'sales')
});

job.start();


