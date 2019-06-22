// Response for Uptime Robot(アップタイムロボットに対する応答)
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now');
}).listen(3000);

// Discord bot implements(Discord botを実装する)
const discord = require('discord.js');
const client = new discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js');
const async = require('async');
const { prefix } = require('./config.json');
const fs = require("fs");

client.on('ready', message =>
{
	console.log('bot is ready!(ボットの準備はできています！)');
  client.user.setActivity('24時間起動中! .ioゲーム discord.js')
});

client.on('message', message =>{
  
//完全一致
if (message.content === `${prefix}ping`) {
	message.channel.send('Pong.');
} else if (message.content === `${prefix}beep`) {
	message.channel.send('Boop.');
}

//コマンド

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (command === 'user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (command === 'info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		} else if (args[0] === 'ioゲーム') {
  		return message.channel.send('準備中');
  	}

		message.channel.send(`First argument: ${args[0]}`);
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		message.channel.send(avatarList);
	} 
  
});

client.on('message', message=>{
	console.log('にゃー');
    message.guild.channels.find("id","581651678642700332").setName(`メンバーカウント: ${message.member.guild.memberCount}`);
    message.guild.channels.find("id","581819606226829325").setName(`オンラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'online').size}`);
    message.guild.channels.find("id","581829557351481345").setName(`退席中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'idle').size}`);
    message.guild.channels.find("id","581829539328688147").setName(`取り込み中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'dnd').size}`);
    message.guild.channels.find("id","581827830967435274").setName(`オフラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`);
    message.guild.channels.find("id","581833625545474048").setName(`ボットカウント: ${message.guild.members.filter(member => member.user.bot).size}`);
    message.guild.channels.find("id","581834860126273556").setName(`ユーザーカウント: ${message.guild.members.filter(member => !member.user.bot).size}`);
});


//Discord bot token
if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );
