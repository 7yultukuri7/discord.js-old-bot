//--------------------------------------------
require('./web1.js');
const config = require("./config");
//--------------------------------------------
// Discord bot implements(Discord botを実装する)
const async = require('async');
const discord = require('discord.js');
const { Client } = require('discord.js');
const Ecstar = require("ecstar");

//--------------------------------------------
//ecstar メインファイル
const clientiogame = new Ecstar.client({
  prefix: config.server.iogame.prefix,
  command: `${__dirname}/commands`,
  log: true
});
const clientzatsukomu = new Ecstar.client({
  prefix: config.server.zatsukomu.prefix,
  command: `${__dirname}/commands`,
  log: true
});
//--------------------------------------------
//discord.js
const client = new discord.Client();
client.on("message", async message => {
    require("./system/mee6-levelup")(client, message);
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

//{player}さんは、レベル ``{level}`` に上がっています！ 
client.on('guildMemberAdd', async member => {
  require("./system/canvas-member-join")(client, member);
});

client.on('guildMemberRemove', async member => {
  require("./system/canvas-member-remove")(client, member);
});

//--------------------------------------------

//--------------------------------------------
//Discord bot token
client.on('ready', message =>
{
	console.log(new Date().toLocaleString()+' bot is ready!(ボットの準備はできています！)');
  client.user.setActivity("コードを1から書き直しています。")//'サーバーによって、プレフィクス, コマンドが異なります。'
  client.guilds.forEach(guild => console.log(guild.name+"  "+guild.id));
});
if(config.token == undefined)
{
  console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}
clientiogame.login(config.token);
clientzatsukomu.login(config.token);

//--------------------------------------------