const { command } = require("ecstar");
const moment = require("moment-timezone");
const pageMenu = require('/app/system/pagemenu');

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "botguilds",
        });
    }
  async run(message) {
            function checkBots(guild) {
                let botCount = 0
                guild.members.forEach(member => {
                    if(member.user.bot) botCount++
                })
             return botCount
           }

            const checkMembers = guild => {
                let memberCount = 0;
                guild.members.forEach(member => {
                   if (!member.user.bot) memberCount++;
                });
             return memberCount;

          };
      let pMenu = new pageMenu(message,
        [
            { title: "ドキュメントビューア / botguilds", description: `サーバーの数: ${this.client.guilds.size}` },
        ]);
        this.client.guilds.map(guilds => {
        var guildicon = `${guilds.iconURL ? `${guilds.iconURL}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEHwdFr-qHQXHhlFHq6M4usrzkNArdo67AaypS8PZ48cAi0PGcdTy4zQt"}`;
        var createdAt = moment(guilds.createdAt).tz("Asia/Tokyo").format("YYYY年MM月DD日 HH時mm分ss秒");
            pMenu.addPages([{
                title: `サーバーの情報(${guilds.name})`,
                description: `id: ${guilds.id}`,
                thumbnail: guildicon,
                fields: [
                    {
                        name: "名前",
                        value: guilds.name,
                    },
                    {
                        name: "ID",
                        value: guilds.id,
                    },
                    {
                        name: "サーバーのオーナー",
                        value: guilds.owner.user.tag,
                    },
                    {
                        name: "チャンネルの数",
                        value: guilds.channels.size,
                    },
                    {
                        name: "役職の数",
                        value: guilds.roles.size,
                    },
                    {
                        name: "絵文字の数",
                        value: guilds.emojis.size,
                    },
                    {
                        name: "ユーザーの数",
                        value: guilds.memberCount,
                    },
                    {
                        name: "メンバー",
                        value: checkMembers(guilds),
                    },
                    {
                        name: "ボット",
                        value: checkBots(guilds),
                    },
                    {
                        name: "AFKチャンネル",
                        value: guilds.afkChannel
                            ? guilds.afkChannel.name
                            : "なし",
                    },
                    {
                        name: "不適切な表現フィルターレベル",
                        value: guilds.explicitContentFilter,
                    },
                    {
                        name: "認証レベル",
                        value: guilds.verificationLevel,
                    },
                    {
                        name: "サーバーの作成日",
                        value: createdAt,
                    },
                    {
                        name: "オンラインメンバー",
                        value: guilds.members.filter(m => m.user.presence.status == "online").size,
                        inline: true
                    },
                    {
                        name: "退席中メンバー",
                        value: guilds.members.filter(m => m.user.presence.status == "idle").size,
                        inline: true
                    },
                    {
                       name: "取り込み中メンバー",
                       value: guilds.members.filter(m => m.user.presence.status == "dnd").size,
                       inline: true
                   },
                   {
                       name: "オフラインメンバー",
                       value: guilds.members.filter(m => m.user.presence.status == "offline").size,
                       inline: true
                   },
                ],
                color: Math.floor(Math.random() * 16777214) + 1,
              }]);
           });
      pMenu.run();
  }
}