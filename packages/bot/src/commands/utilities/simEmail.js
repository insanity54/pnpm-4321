import { SlashCommandBuilder } from 'discord.js';


  

export default {
	data: new SlashCommandBuilder()
		.setName('sim-email')
		.setDescription('Simulate an incoming platform notification e-mail'),
	async execute(interaction) {

		await interaction.reply();
	},
};
