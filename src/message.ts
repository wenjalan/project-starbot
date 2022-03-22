import { Message } from 'discord.js';
const config = require('../config.json');

export default async function onMessage(msg: Message) {
    // skip bot messages
    if (msg.author.bot) {
        return;
    }

    // if the message was a dm
    if (msg.channel.type === "DM") {
        // if message was sent from an admin
        if (config.admin.includes(msg.author.id)) {
            let query = msg.content.toLowerCase();

            // commands
            if (query.startsWith('commands ')) {
                query = query.substring('commands '.length);
                
                // redeploys global commands
                if (query.startsWith('redeploy')) {
                    // TODO: Redeploy global slash commands here
                }
            }
        }
    }
}