const discord = require('discord.js');
const client = new discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js');
const config = require("./config");
require('./web1.js');

client.on('ready', message =>
{
	console.log(new Date().toLocaleString()+' bot is ready!(ボットの準備はできています！)');
  client.user.setActivity("コードを1から書き直しています。");
});

client.on('message', message =>{
//Bot自身の発言を無視する呪い
    if(message.author.bot){
        return;
   }

  if (message.content.startsWith("io!")) {
        var embedabout = new discord.RichEmbed()
          .setAuthor("準備中...")
          .setDescription("コードを1から書き直しています。")
          .addField("❯ バージョン","不明")
          .addField("❯ 更新情報","不明")
          .addField("❯ 製作者","7yultukuri7(id: 352394784440320020)")
          .addField("❯ メインライブラリ","`javascript`, `node.js`, `discord.js`, `?`")
          .addField("❯ サブライブラリ","`?`, `?`, `?`, `?`, `?`, `?`, `?`, `?`, `?`, `?`")
          .addField("❯ オリジナルライブラリ","`?`, `?`, `?`")
          .addField("❯ Discordサーバー数",`${message.client.guilds.size}`,true)
          .addField("❯ 全サーバーチャンネル数",`${message.client.channels.size}`,true)
          .addField("❯ このサーバーユーザー数",`メンバー: ${message.guild.members.size}`+
                    `\nユーザー: ${message.guild.members.filter(member => !member.user.bot).size} ボット: ${message.guild.members.filter(member => member.user.bot).size}\n`+
                    `<:Online:608614124758368256>: ${message.guild.members.filter(member => member.presence.status === 'online').size} <:Idle:608614090738499594>: ${message.guild.members.filter(member => member.presence.status === 'idle').size} <:dnd:608614113513439252>: ${message.guild.members.filter(member => member.presence.status === 'dnd').size} <:Offline:608614103099113483>: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`)
          .addField("❯ Botの導入",`非公開`)
          .addField("❯ サポートサーバー",`未作成\n** **\n** **\n** **\n** **`)
          .addField("❯ Tips","コードを1から書き直しています。")
          .setColor("#63c6e1")
          .setFooter(message.guild.name, message.guild.iconURL)
          .setTimestamp()
      message.channel.send(embedabout);
  }
});

if(config.token == undefined)
{
  console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}
client.login(config.token);