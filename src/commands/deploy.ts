import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const config = require('../../config.json');
const token = process.env.DISCORD_RIN_TOKEN || "missing token";

// commands to deploy
const commands: SlashCommandBuilder[] = [];
commands.push(
    new SlashCommandBuilder()
    .setName('ping')
    .setDescription('pong')
);

// deploys commands
export default function redeploy() {
    // deploys commands
    const rest = new REST({ version: '9' }).setToken(token);
    rest.put(Routes.applicationCommands(config.clientId), {
        body: commands.map(command => command.toJSON())
    })
    .then(() => {
        console.log('Redeployed slash commands');
    })
    .catch((err) => {
        console.error('Encountered an error redeploying commands: ' + err.message);
    }); 
}