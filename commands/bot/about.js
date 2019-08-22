const { Command } = require("discord.js-commando");
const { RichEmbed, discord } = require('discord.js');


const config = require("/app/config/main.js");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "about",
            aliases: ["info", "bot情報", "botinfo"],
            group: "bot",
            memberName: "about",
            description: "このbotの情報を表示します",
            guildOnly: true,
        });
    }

    run(message) {
      const embed = new RichEmbed()
          .setAuthor("概要")
          .setDescription("このBotの概要を表示しています。")
          .addField("❯ バージョン","`ver."+config.ver+"`")
          .addField("❯ 更新情報","`ver.1.0.0 +plus global` ドキュメントビューアを追加しました。\n(Dev: ドキュメントビューア, ecstar, dotenv のライブラリを追加。comaandを分割して、管理しやすいよう変更。)\n"+
                   "`ver.1.1.0 +plus global` botguilds, speedtest, levelup, webshotを追加しました。\n(Dev: webshot, speedtest-net のライブラリを追加。)\n"+
                   "`ver.1.2.0 +plus global` roleinfo, serverinfo, userinfoを追加しました。\n(Dev: cheerio-httpcli, sequelize, sqlite3 のライブラリを追加。 ecstar → discord.js-commando に移行)")
          .addField("❯ 製作者","7yultukuri7(id: 352394784440320020)")
          .addField("❯ メインライブラリ","`javascript`, `node.js`, `discord.js`, `discord.js-commando`")
          .addField("❯ サブライブラリ","`async`, `canvas`, `dotenv`, `fs`, `http`, `moji`, `moment-timezone`, `webshot`, `speedtest-net`, `cheerio-httpcli`, `sequelize`, `sqlite3`")
          .addField("❯ オリジナルライブラリ","`ドキュメントビューア`, `キャンバス-参加・退出`, `カウントシステム`")
          .addField("❯ Discordサーバー数",`${message.client.guilds.size}`,true)
          .addField("❯ 全サーバーチャンネル数",`${message.client.channels.size}`,true)
          .addField("❯ このサーバーユーザー数",`メンバー: ${message.guild.members.size}`+
                    `\nユーザー: ${message.guild.members.filter(member => !member.user.bot).size} ボット: ${message.guild.members.filter(member => member.user.bot).size}\n`+
                    `<:Online:608614124758368256>: ${message.guild.members.filter(member => member.presence.status === 'online').size} <:Idle:608614090738499594>: ${message.guild.members.filter(member => member.presence.status === 'idle').size} <:dnd:608614113513439252>: ${message.guild.members.filter(member => member.presence.status === 'dnd').size} <:Offline:608614103099113483>: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`)
          .addField("❯ Botの導入",`非公開`)
          .addField("❯ サポートサーバー",`未作成\n** **\n** **\n** **\n** **`)
          .addField("❯ Tips","`"+config.prefix+"help` でヘルプを表示できます。")
          .setColor("#63c6e1")
          .setFooter(message.guild.name, message.guild.iconURL)
          .setTimestamp()
        return message.say(embed);
  }
};
