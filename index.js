const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Raspian is up in ${client.guilds.size} guild(s) with ID ${client.user.id}`);
});

client.on('guildMemberAdd', member => {
	let welcomeChannel = member.guild.channels.filter(channel => channel.type === 'text').find('name', 'welcome');
	if (!welcomeChannel) return console.log('no welcome channel found');
	
	let ranksRole = member.guild.roles.find('name', 'Ranks');
	if (!ranksRole) return console.log('no ranks role found');

	let ranksChannel = member.guild.channels.find('name', 'mains-and-ranks');
	
	welcomeChannel.send(`Welcome ${member.toString()}!`, { embed: {
		color: 0xffa500,
		description: `Please mention ${ranksRole.toString()}${ranksChannel ? ` in ${ranksChannel.toString()} ` : ' '}with your Overwatch mains and rank so we can give you the proper roles, thanks!`
	}}).catch(console.error);
});

client.login(config.token).catch(console.error);