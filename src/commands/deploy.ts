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
export default async function redeploy() {
    // deploys commands
    const rest = new REST({ version: '9' }).setToken(token);
    await rest.put(Routes.applicationCommands(config.clientId), {
        body: commands.map(command => command.toJSON())
    });
}