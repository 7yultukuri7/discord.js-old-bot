const { command } = require("ecstar");
const config = require("/app/config");
const discord = require('discord.js');

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "about",
        });
    }
    run(message) {
        var embedabout = new discord.RichEmbed()
           .setAuthor("概要")
           .setDescription("このBotの概要を表示しています。")
          .addField("❯ バージョン","`var."+config.var+"`")
          .addField("❯ 更新情報","`var.1.0.0 +plus` ドキュメントビューアを追加しました。\n(Dev: ドキュメントビューア, ecstar, dotenv のライブラリを追加。comaandを分割して、管理しやすいよう変更。)\n"+
                   "`var.1.1.0 +plus` botguilds, speedtest, levelup, webshotを追加しました。\n(Dev: webshot, speedtest-net のライブラリを追加。)")
          .addField("❯ 製作者","7yultukuri7(id: 352394784440320020)")
          .addField("❯ メインライブラリ","`javascript`, `node.js`, `discord.js`, `ecstar`")
          .addField("❯ サブライブラリ","`async`, `canvas`, `dotenv`, `fs`, `http`, `moji`, `moment-timezone`, `webshot`, `speedtest-net`")
          .addField("❯ オリジナルライブラリ","`ドキュメントビューア`, `キャンバス-参加・退出`, `カウントシステム`")
          .addField("❯ Discordサーバー数",`${message.client.guilds.size}`,true)
          .addField("❯ 全サーバーチャンネル数",`${message.client.channels.size}`,true)
          .addField("❯ 全サーバーユーザー数",`メンバー: ${message.member.guild.memberCount}`+
                    `\nユーザー: ${message.guild.members.filter(member => !member.user.bot).size} ボット: ${message.guild.members.filter(member => member.user.bot).size}\n`+
                    `<:Online:608614124758368256>: ${message.guild.members.filter(member => member.presence.status === 'online').size} <:Idle:608614090738499594>: ${message.guild.members.filter(member => member.presence.status === 'idle').size} <:dnd:608614113513439252>: ${message.guild.members.filter(member => member.presence.status === 'dnd').size} <:Offline:608614103099113483>: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`)
          .addField("❯ Botの導入",`非公開`)
          .addField("❯ サポートサーバー",`未作成\n** **\n** **\n** **\n** **`)
          .addField("❯ Tips","`"+config.prefix+"help` でヘルプを表示できます。")
          .setColor("#63c6e1")
          .setFooter(message.guild.name, message.guild.iconURL)
          .setTimestamp()
      message.channel.send(embedabout);
    }
};