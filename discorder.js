import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

export default async function postToDiscord(webhook, data) {


    try {

        const embed = {
            title: `${data.collection} | Sales in the last hour`,
            // description: 'This is an example embed with styling.',
            color: 0xff0000, // Hex color code (red)
            fields: [
                {
                    name: 'Sales',
                    value: data.count,
                    inline: true,
                },
                {
                    name: 'Average Price',
                    value: `${data.average.toFixed(2)} SOL`,
                    inline: true,
                },
                {
                    name: 'Volume',
                    value: `${data.volume.toFixed(2)} SOL`,
                    inline: true,
                }
            ],
            footer: {
                text: 'On-chain data brought to you by nftmate_',
            },
        };

        const payload = {
            embeds: [embed],
        };
        console.log(payload)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }

        const req = await fetch(webhook, options);
        const res = await req.text()
        console.log('Posted to Discord successfully:', res);
    } catch (error) {
        console.error('Error posting to Discord:', error.message);
    }
}

