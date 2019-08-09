//--------------------------------------------
var web = require('./web1.js');
const config = require("./config");
//--------------------------------------------
// Discord bot implements(Discord botを実装する)
const async = require('async');
const discord = require('discord.js');
const Ecstar = require("ecstar");
const fs = require("fs");
const os = require( 'os' );

//--------------------------------------------
//ecstar メインファイル
const client = new Ecstar.client({
  prefix: config.prefix,
  command: `${__dirname}/commands`,
  log: true
});

//--------------------------------------------
//discord.js
client.on("message", async message => {
  if (message.author.bot) return;
    require("./system/channel-counter")(client, message);
  if (message.author.id == "352394784440320020") {
  	if (message.content === 'io!remove-remove-543615084618842132') {
  		client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
  	}
  	if (message.content === 'io!join-join-543615084618842132') {
	  	client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	  }
  } 
});

client.on('guildMemberAdd', async member => {
if (member.guild.id === '543615084618842132'){
  require("./system/canvas-member-join")(client, member);
};
});

client.on('guildMemberRemove', async member => {
  require("./system/canvas-member-remove")(client, member);
});

//--------------------------------------------
//Discord bot token
client.on('ready', message =>
{
	console.log('bot is ready!(ボットの準備はできています！)');
  client.user.setActivity('サーバーによって、プレフィクス, コマンドが異なります。')
});
var pjson = require('./package.json');
if(process.env.DISCORD_BOT_TOKEN == undefined)
{
  console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}
client.login(config.token);

//--------------------------------------------