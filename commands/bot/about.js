const { Command } = require("discord.js-commando");
const { RichEmbed, discord } = require('discord.js');
const pageMenu = require('/app/system/document/about.js');

const config = require("/app/config/main.js");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "about",
            aliases: ["info", "bot情報", "botinfo"],
            group: "bot",
            memberName: "about",
            description: "このbotの情報を表示します",
            guildOnly: true
        });
    }
    run(message) {
        const client = this.client;
        let pMenu = new pageMenu(message,
        [
            {//pagemenu help
                title: "ドキュメントビューア / about",
                description: "注意: ｢ドキュメントビューア｣は、使ったあとは⏹をクリック・タップしてください。",
                color: Math.floor(Math.random() * 16777214) + 1,
              	author: {
              		name: `${message.author.tag} / ${message.author.id}`,
              		icon_url: message.author.avatarURL,
              	},
                fields: [
                    {
                        name: "📕",
                        value: "このページへ移動します。",
                    },
                    {
                        name: "🔷", 
                        value: "メインへ移動します。",
			                  inline: true,
                    },
                    {
                        name: "🔶", 
                        value: "更新情報へ移動します。",
			                  inline: true,
                    },
                    {
                        name:"⏹",
                        value: "ドキュメントビューアを終了します。",
                    },
                    {
                        name: "❯ Tips",
                        value: "一つの操作に3秒～10秒程度の時間がかかります。",
                    },
                ]
            },
            {//p1
                title: "ドキュメントビューア / about",
                description: "このBotの概要を表示しています。",
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "❯ バージョン",
                        value: "`ver."+config.ver+"`",
                    },
                    {
                        name: "❯ 更新情報",
                        value: "`ver.1.0.0 +plus global` ドキュメントビューアを追加しました。\n"+
                   "`ver.1.1.0 +plus global` botguilds, speedtest, levelup, webshotを追加しました。\n"+
                   "`ver.1.2.0 +plus global` roleinfo, serverinfo, userinfoを追加しました。\n"+
                   "`ver.1.3.0 +plus global` globalプレフィックスを `io!` → `nya!` に変更しました。",
                    },
                    {
                        name: "❯ 製作者",
                        value: "7yultukuri7(id: 352394784440320020)",
                    },
                    {
                        name: "❯ メインライブラリ",
                        value: "`javascript`, `node.js`, `discord.js`, `discord.js-commando`",
                    },
                    {
                        name: "❯ サブライブラリ",
                        value: "`async`, `canvas`, `dotenv`, `fs`, `http`, `moji`, `moment-timezone`, `webshot`, `speedtest-net`, `cheerio-httpcli`, `sequelize`, `sqlite3` etc... 合計273個のライブラリー依存関係(Githubの情報)",
                    },
                    {
                        name: "❯ オリジナルライブラリ",
                        value: "`ドキュメントビューア`, `canvas-welcome･leave-log`, `カウントシステム`, `フリーカテゴリー(local)`",
                    },
                    {
                        name: "❯ Discordサーバー数",
                        value: `${message.client.guilds.size}`,
                        inline: true
                    },
                    {
                        name: "❯ 全サーバーチャンネル数",
                        value: `${message.client.channels.size}`,
                        inline: true
                    },
                    {
                        name: "❯ Botの導入",
                        value: `非公開`,
                        inline: true
                    },
                    {
                        name: "❯ サポートサーバー",
                        value: `未作成**\n**\n**\n**`,
                        inline: true
                    },
                    {
                        name: "❯ Tips",
                        value: "`"+config.prefix+"help` でヘルプを表示できます。"
                    },
                ]
            },

            {//p2
                title: "ドキュメントビューア / about",
                description: "このBotの詳細更新情報を表示しています。",
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "❯ ver.1.0.0 +plus global",
                        value: "・`ドキュメントビューア`を追加しました。\n・その他不具合を修正しました。\n(Dev: `ドキュメントビューア`, `ecstar`, `dotenv` のライブラリを追加。comaandを分割して、管理しやすいよう変更。)",
                    },
                    {
                        name: "❯ ver.1.1.0 +plus global",
                        value: "・`botguilds`, `speedtest`, `levelup`, `webshot`のコマンドを追加しました。\n・その他不具合を修正しました。\n(Dev: `webshot`, `speedtest-net` のライブラリを追加。)",
                    },
                    {
                        name: "❯ ver.1.2.0 +plus global",
                        value: "・`roleinfo`, `serverinfo`, `userinfo`のコマンドを追加しました。\n・その他不具合を修正しました。\n(Dev: `cheerio-httpcli`, `sequelize`, `sqlite3` のライブラリを追加。 `ecstar` → `discord.js-commando` に移行)",
                    },
                    {
                        name: "❯ ver.1.3.0 +plus global",
                        value: "・globalプレフィックスを `io!` → `nya!` に変更しました。\n・その他不具合を修正しました。\n(Dev: None)**\n**\n**\n**",
                    },
                    {
                        name: "❯ ver.0.0.0 local .io",
                        value: "・`メンバーカウント`を追加しました。\n・`canvas-welcome･leave-log`を追加しました。\n(Dev: いろいろなライブラリを追加)",
                    },
                    {
                        name: "❯ ver.1.3.0 +plus local .io",
                        value: "・フリーカテゴリーを追加しました。\n　フリーカテゴリーのコマンドプレフィックスは、`!fc `です。`!fc help` でヘルプを表示できます。\n・その他不具合を修正しました。\n(Dev: None)**\n**\n**\n**",
                    },
                    {
                        name: "❯ Tips",
                        value: "`"+config.prefix+"help` でヘルプを表示できます。",
                    },
                ]
            },
        ]);
        pMenu.run();
    }
};