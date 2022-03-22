import {Client, Intents} from 'discord.js';
import onMessage from './message';
const token = process.env.DISCORD_RIN_TOKEN;

const starbot = new Client({
    intents: [
        "GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES",
    ],
    partials: [
        "CHANNEL",
    ],
});

starbot.on('ready', async (starbot) => {
    const invite = await starbot.generateInvite({
        scopes: ['bot']
    });
    console.log(`Starbot online! Invite: ${invite}`);
});

starbot.on('messageCreate', async msg => onMessage(msg));

starbot.login(token);