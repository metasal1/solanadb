import report from './report.js';
import dotenv from 'dotenv';
import { CronJob } from 'cron';

dotenv.config();

// every hour
var cron = process.argv[2] || '0 * * * *'

if (cron === 'now') {
    cron = '0/30 * * * * *'
}
const job = new CronJob(cron, async (coll, webhook) => {

    report('ABC', process.env.DISCORD_ABC_WEBHOOK);
    report('Wolf Capital', process.env.DISCORD_WOLF_CAPITAL_WEBHOOK);
    report('Lily', process.env.DISCORD_LILY_WEBHOOK);
    report('sharx', process.env.DISCORD_SHARX_WEBHOOK);
    report('Mad Lads', process.env.DISCORD_MAD_LADS_WEBHOOK);
    report('Okay Bears', process.env.DISCORD_OKAY_BEARS_WEBHOOK);
    report('Vanta', process.env.DISCORD_VANTA_WEBHOOK);
    report('Samo', process.env.DISCORD_SAMO_WEBHOOK);
    report('Synthexia', process.env.DISCORD_SYNTHEXIA_WEBHOOK);

});

job.start();
console.log(new Date(job.nextDate()))

