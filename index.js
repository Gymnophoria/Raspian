const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Raspian is up in ${client.guilds.size} guild(s) with ID ${client.user.id}`);
});

client.on('guildMemberAdd', member => {
	let welcomeChannel = member.guild.channels.filter(channel => channel.type === 'text').find('name', 'welcome');
	if (!welcomeChannel) return;
	
	let ranksRole = member.guild.roles.find('name', 'Ranks');
	
	welcomeChannel.send({ embed: {
		color: 0xffa500,
		description: `Welcome ${member.toString()}! Please mention ${ranksRole.toString()} with your Overwatch mains and rank so we can give you the proper roles, thanks!`
	}});
});

client.login(config.token).catch(console.error);