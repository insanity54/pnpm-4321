import 'dotenv/config';
import { Client, Collection, Events, GatewayIntentBits, Partials } from 'discord.js';
import loadCommands from './loadCommands.js';
import deployCommands from './deployCommands.js';


if (!process.env.DISCORD_TOKEN) throw new Error("DISCORD_TOKEN was missing from env");
if (!process.env.DISCORD_CHANNEL_ID) throw new Error("DISCORD_CHANNEL_ID was missing from env");


async function setup() {

	const channelId = ''+process.env.DISCORD_CHANNEL_ID
	console.log(`channelId is ${channelId}`)
	
	// Create a new client instance
	const client = new Client({ 
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.GuildMessageReactions,
		],
		partials: [
			Partials.Message,
			Partials.Channel,
			Partials.Reaction,
		]
	});
	
	
	client.on(Events.InteractionCreate, interaction => {
		if (!interaction.isChatInputCommand()) return;
	
		const { commandName } = interaction;
	
		if (commandName === 'donger') {
			donger.execute(interaction)
		} else if (commandName === 'sim-email') {
			simEmail.execute(interaction)
		}
	});
	// When the client is ready, run this code (only once).
	// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
	// It makes some properties non-nullable.
	client.once(Events.ClientReady, readyClient => {
		console.log(`Ready! Logged in as ${readyClient.user.tag} coño!`);
		// client.channels.cache.get(process.env.DISCORD_CHANNEL_ID).send('testing 123');
		// readyClient.channels.fetch(channelId).then(channel => {
		//     channel.send('generic welcome message!')
		// });
		// console.log(readyClient.channels)
		// const channel = readyClient.channels.cache.get(process.env.DISCORD_CHANNEL_ID);
		// channel.send('testing 135');
	});
	
	
	client.on(Events.InteractionCreate, async interaction => {
		if (!interaction.isChatInputCommand()) return;
	
		const { commandName } = interaction;
	
		if (commandName === 'react') {
			const message = await interaction.reply({ content: 'You can react with Unicode emojis!', fetchReply: true });
			message.react('😄');
		}
	})
	
	client.on(Events.MessageReactionAdd, async (reaction, user) => {
		// When a reaction is received, check if the structure is partial
		if (reaction.partial) {
			// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
			try {
				await reaction.fetch();
			} catch (error) {
				console.error('Something went wrong when fetching the message:', error);
				// Return as `reaction.message.author` may be undefined/null
				return;
			}
		}
	
		// Now the message has been cached and is fully available
		console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
		// The reaction is now also fully available and the properties will be reflected accurately:
		console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
	});
	
	
	// Log in to Discord with your client's token
	client.login(process.env.DISCORD_TOKEN);
	
}

async function main() {
	const commands = await loadCommands()
	await deployCommands(commands)
	console.log(`${commands.length} commands registered: ${commands.map((c) => c.name).join(', ')}`)
	setup()
}

main()
