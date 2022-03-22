import {Client, Intents} from 'discord.js';
import onMessage from './listeners/message';
import onCommand from './listeners/command';
const token = process.env.DISCORD_RIN_TOKEN;

const starbot = new Client({
    intents: [
        "GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES",
    ],
    partials: [
        "CHANNEL",
    ],
});

// ready listener
starbot.on('ready', async (starbot) => {
    const invite = await starbot.generateInvite({
        scopes: ['bot']
    });
    console.log(`Starbot online! Invite: ${invite}`);
});

// message listener
starbot.on('messageCreate', async msg => onMessage(msg));

// command listener
starbot.on('interactionCreate', (interaction) => {
    if (interaction.isCommand()) {
        onCommand(interaction);
    }
});

starbot.login(token);