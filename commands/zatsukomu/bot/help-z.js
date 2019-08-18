const { command } = require("ecstar");
const pageMenu = require('/app/system/pagemenu');
const config = require("/app/config");

module.exports = class extends command {
    constructor(clientzatsukomu) {
        super(clientzatsukomu, {
            name: ["help"],
        });
    }

    run(message) {
if (message.guild.id === '560663701028339713'){
        const description1 = message.guild.name+"のコマンドのプレフィックスは`"+config.prefix+"`です。";
        const client = this.client;
        let pMenu = new pageMenu(message,
        [
            {//pagemenu help
                title: "ドキュメントビューア / ヘルプ",
                description: "注意: ｢ドキュメントビューア｣は、使ったあとは⏹をクリック・タップしてください。",
                color: Math.floor(Math.random() * 16777214) + 1,
              	author: {
              		name: `${message.author.tag} / ${message.author.id}`,
              		icon_url: message.author.avatarURL,
              	},
                fields: [
                    {
                        name: "プレフィクス・コマンドについて",
                        value: "このサーバーのコマンドのプレフィックスは`"+config.server.iogame.prefix+"`です。\nhelpに載ってある全てのコマンドは`"+config.server.iogame.prefix+"`で使用出来ます。\nサーバーによって、`プレフィクス`, `コマンド` が異なります。\n**\n**",
                    },
                    {
                        name: "⏮",
                        value: "最初のページへ移動します。",
                    },
                    {
                        name: "⏪",
                        value: "5ページ前へ移動します。",
			                  inline: true,
                    },
                    {
                        name: "◀",
                        value: "1ページ前へ移動します。",
			                  inline: true,
                    },
                    {
                        name:"⏹",
                        value: "ドキュメントビューアを終了します。",
                    },
                    {
                        name: "▶",
                        value: "1ページ次へ移動します。",
			                  inline: true,
                    },
                    {
                        name: "⏩",
                        value: "5ページ次へ移動します。",
			                  inline: true,
                   },
                    {
                        name: "⏭",
                        value: "最後のページへ移動します。",
                    },
                    {
                        name: "⏭",
                        value: "一つの操作に3秒～10秒程度の時間がかかります。\n~~目次は2ページ目にあります。~~\n**\n**",
                    },
                ]
            },
            {//p1
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "help",
                        value: "このコマンド",
                    },
                    {
                        name: "ping",
                        value: "反応時間を測る",
                    },
                    {
                        name: "about",
                        value: "このBotの概要を表示する",
                    },
                    {
                        name: "debug",
                        value: "このBotのCPUの状態(だけ)を表示する",
                    },
                    {
                        name: "speedtest",
                        value: "https://www.speedtest.net/",
                    }
                ]
            },

            {//p2
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: message.client.user.tag,
                    icon_url: message.client.user.avatarURL,
                },
                fields: [
                    {
                        name: "levelup",
                        value: "mee6とbot開発者のみ実行可能(レベルアップと役職を与える)",
                    },
                    {
                        name: "refresh",
                        value: "bot開発者のみ実行可能(このBotの再起動)",
                    },
                    {
                        name: "eval",
                        value: "bot開発者のみ実行可能",
                    }
                ]
            },

            {//p3
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },

            {//p4
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },

            {//p4
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },

            {//p6
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },
            {//p7
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },
            {//p8
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },
            {//p9
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },
            {//p10
                title: "ドキュメントビューア / ヘルプ",
                description: description1,
                color: Math.floor(Math.random() * 16777214) + 1,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                fields: [
                    {
                        name: "none",
                        value: "none",
                    },
                ]
            },
        ]);
        pMenu.run();
    }
}
};