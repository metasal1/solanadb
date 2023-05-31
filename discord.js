import axios from "axios";

export default async function postToDiscord(discordWebhook, data) {

    const { signature, mint, nft, creator, date } = data;

    const payload = {
        embeds: [
            {
                author: {
                    name: `${nft.symbol} Collection`
                },
                title: `${nft.nft.name} → SOLD`,
                url: nft.uri,
                timestamp: date,
                fields: [
                    {
                        name: "Price",
                        value: `${nft.uri} S◎L`
                    },
                    {
                        name: "Seller",
                        value: 'seller',
                        inline: true
                    },
                    {
                        name: "Buyer",
                        value: 'buyer',
                        inline: true
                    },
                    {
                        name: "Mint Token",
                        value: 'mint',
                        inline: true
                    },
                    {
                        name: "Transaction ID",
                        value: signature
                    }
                ],
                thumbnail: {
                    url: 'image'
                },
                footer: {
                    text: 'exchangeName',
                    icon_url: 'favicon'
                }
            }
        ]
    };

    return axios
        .post(discordWebhook, payload)
        .catch(e => console.log("postToDiscord Error:", e, "\nSignature:", signature));
};
