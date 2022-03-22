import { CommandInteraction } from "discord.js";

// handles a command interaction
export default async function onCommand(command: CommandInteraction) {
    // ping
    if (command.commandName === 'ping') {
        await command.reply('pong');
    }
}