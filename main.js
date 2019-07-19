//
var web = require('./web1.js');

// Discord bot implements(Discord botを実装する)
const discord = require('discord.js');
const client = new discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js');
const async = require('async');
const fs = require("fs");
const Canvas = require('canvas');
client.on('ready', message =>
{
	console.log('bot is ready!(ボットの準備はできています！)');
  client.user.setActivity('サーバーによって、動作(prefix,command)が異なります。')
});

client.on('message', message =>{
//.ioゲーム
if (message.guild.id === '543615084618842132'){

let prefix = 'io!';
let args = message.content.slice(prefix.length).trim().split(/ +/g);
let command = args.shift().toLowerCase();

  if(command === "eval") {
    try {
      const tx = args.join(' ');
      if (message.author.id == "352394784440320020") {
        message.channel.send(eval(tx));
      } else{
        message.channel.send('特定のユーザーのみ可能なコマンドです。');
      }
    } catch (e) {
      message.channel.send('エラー[ ' + e.toString() +' ]\n```' + e.stack + '```');
    }
  }
//完全一致
if (command === `${prefix}ping`) {
	message.channel.send('Pong.');
} else if (command === `${prefix}beep`) {
	message.channel.send('Boop.');
}

//コマンド
  

  
};
});


client.on('guildMemberAdd', async member => {
if (member.guild.id === '573350684372762624'){
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {
    Canvas.registerFont("03_Smart_Font_UI.ttf", {family: "allfonts"});
    ctx.font = `${fontSize -= 10}px allfonts`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

	const channel = member.guild.channels.find(ch => ch.name === '27yultukuri7-bot-member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage("https://raw.githubusercontent.com/discordjs/guide/master/code-samples/popular-topics/canvas/wallpaper.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

    Canvas.registerFont("03_Smart_Font_UI.ttf", {family: "allfonts"});
  ctx.font = '28px allfonts';
	ctx.fillStyle = '#ffffff';
	ctx.fillText("雑コムへようこそ！,", canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new discord.Attachment(canvas.toBuffer(), "welcome-image.png");

	channel.send(`サーバーへようこそ, ${member}!`, attachment);
};
});

client.on('message', async message => {
	if (message.content === '!join') {
		client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
});

client.on('message', message=>{
//.ioゲーム
if (message.guild.id === '543615084618842132'){
	console.log('にゃー');
    message.guild.channels.find("id","581651678642700332").setName(`メンバーカウント: ${message.member.guild.memberCount}`);
    message.guild.channels.find("id","581819606226829325").setName(`オンラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'online').size}`);
    message.guild.channels.find("id","581829557351481345").setName(`退席中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'idle').size}`);
    message.guild.channels.find("id","581829539328688147").setName(`取り込み中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'dnd').size}`);
    message.guild.channels.find("id","581827830967435274").setName(`オフラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`);
    message.guild.channels.find("id","581833625545474048").setName(`ボットカウント: ${message.guild.members.filter(member => member.user.bot).size}`);
    message.guild.channels.find("id","581834860126273556").setName(`ユーザーカウント: ${message.guild.members.filter(member => !member.user.bot).size}`);
}
});


//Discord bot token
if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );
