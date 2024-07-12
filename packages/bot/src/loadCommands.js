import path from 'node:path';
import fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


export default async function loadCommands() {
    const commands = [];
    // console.log('Grab all the command folders from the commands directory you created earlier')
    const foldersPath = path.join(__dirname, 'commands');
    const commandFolders = fs.readdirSync(foldersPath);

    for (const folder of commandFolders) {
        // console.log('Grab all the command files from the commands directory you created earlier')
        // console.log(`foldersPath=${foldersPath}, folder=${folder}`);
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        // console.log(`commandFiles=${commandFiles}`)
        // console.log(`Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment`)
        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = (await import(filePath)).default;
            // console.log(command)
            if ('data' in command && 'execute' in command) {
                commands.push(command.data.toJSON());
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }
    return commands
}