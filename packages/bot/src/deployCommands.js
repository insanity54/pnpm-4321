import 'dotenv/config';
import { REST, Routes } from 'discord.js';


if (!process.env.DISCORD_APPLICATION_ID) throw new Error('DISCORD_APPLICATION_ID was undefined in env');
if (!process.env.DISCORD_GUILD_ID) throw new Error('DISCORD_GUILD_ID was undefined in env');
if (!process.env.DISCORD_TOKEN) throw new Error('DISCORD_TOKEN was undefined in env');



// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
export default async function deployCommands (commands) {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(proces.env.DISCORD_APPLICATION_ID, process.env.DISCORD_GUILD_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
}
