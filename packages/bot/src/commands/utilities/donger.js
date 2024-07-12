import { SlashCommandBuilder } from 'discord.js';


const dongers = [
    '( ͡ᵔ ͜ʖ ͡ᵔ )',
    '¯\_(ツ)_/¯',
    '(๑>ᴗ<๑)',
    '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)',
    '( ͡° ͜ʖ ͡°)',
    '٩(͡๏̯͡๏)۶',
    'ლ(´◉❥◉｀ლ)',
    '（　ﾟДﾟ）',
    'ԅ( ͒ ۝ ͒ )ᕤ',
    '( ͡ᵔ ͜ʖ ͡°)',
    '( ͠° ͟ʖ ͡°)╭∩╮',
    '༼ つ ❦౪❦ ༽つ',
    '( ͡↑ ͜ʖ ͡↑)',
    '(ভ_ ভ) ރ ／/ ┊ \＼',
    'ヽ(⌐□益□)ﾉ',
    '༼ つ ◕‿◕ ༽つ',
    'ヽ(⚆෴⚆)ﾉ',
    '(つ .•́ _ʖ •̀.)つ',
    '༼⌐■ل͟■༽',
    '┬─┬ノ( ͡° ͜ʖ ͡°ノ)',
    '༼⁰o⁰；༽꒳ᵒ꒳ᵎᵎᵎ',
    '( -_･) ▄︻̷̿┻̿═━一',
    '【 º ᗜ º 】',
    'ᕦ(✧╭╮✧)ᕥ',
    '┗( T﹏T )┛',
    '(Φ ᆺ Φ)',
    '(TдT)',
    '☞(◉▽◉)☞'
  ];
  

export default {
	data: new SlashCommandBuilder()
		.setName('donger')
		.setDescription('Replies with a free donger!'),
	async execute(interaction) {
		await interaction.reply(dongers[Math.floor(Math.random()*dongers.length)]);
	},
};
