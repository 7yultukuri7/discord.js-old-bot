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

client.on("message", async message => {
  function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.get(mention);
	}
}
    if (message.author.id == "159985870458322944") {//me6
  const args = message.content.slice(config.prefix).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
   if(message.content.startsWith("io!levelup")) {
      const tx = args.join(' ');
      if (message.author.id == "352394784440320020") {
        var embedabout = new discord.RichEmbed()
           .setAuthor("レベルアップ！")
           .setDescription(args[1]+" さん、レベル `"+args[0]+"` に上がっています！！！")
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setFooter(message.guild.name, message.guild.iconURL)
          .setTimestamp()
      message.channel.send(embedabout);
     const memberid = message.guild.members.get(getUserFromMention(args[1]).id);
        switch (args[0]) {
          case "1": 
            memberid.addRole("543616130149908540").catch(console.error);
            ; break
          case "5": 
            memberid.addRole("543616135527137300").catch(console.error);
            ; break    
          case "10": 
            memberid.addRole("543616146922799115").catch(console.error);
            ; break    
}
        message.delete(10000)
      }
  }
}});
//{player}さんは、レベル ``{level}`` に上がっています！ 
client.on('guildMemberAdd', async member => {
if (member.guild.id === '543615084618842132'){
  require("./system/canvas-member-join")(client, member);
};
});

client.on('guildMemberRemove', async member => {
  require("./system/canvas-member-remove")(client, member);
});

//--------------------------------------------

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