const { Command } = require("discord.js-commando");
const moment = require("moment-timezone");
const pageMenu = require('/app/system/pagemenu');


module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "botguilds",
            aliases: ["botギルド"],
            group: "bot",
            memberName: "botguilds",
            description: "このbotが入っているのサーバーを表示します",
            guildOnly: true,
        });
    }

    run(message) {
            function checkBots(guild) {
                let botCount = 0
                guild.members.cache.forEach(member => {
                    if(member.user.bot) botCount++
                })
             return botCount
           }

            const checkMembers = guild => {
                let memberCount = 0;
                guild.members.cache.forEach(member => {
                   if (!member.user.bot) memberCount++;
                });
             return memberCount;

          };
      let pMenu = new pageMenu(message,
        [
            { title: "ドキュメントビューア / botguilds", description: `サーバーの数: ${this.client.guilds.cache.size}` },
        ]);
        this.client.guilds.cache.map(guilds => {
        var guildicon = `${guilds.iconURL() ? `${guilds.iconURL()}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEHwdFr-qHQXHhlFHq6M4usrzkNArdo67AaypS8PZ48cAi0PGcdTy4zQt"}`;
        var createdAt = moment(guilds.createdAt).tz("Asia/Tokyo").format("YYYY年MM月DD日 HH時mm分ss秒");
        switch(guilds.explicitContentFilter) {
          case "DISABLED":
              var explicitContentFilter = "メッセージは一切スキャンしないでください。";
              break
          case "MEMBERS_WITHOUT_ROLES":
              var explicitContentFilter = "役職のないメンバーのメッセージをスキャンします。";
              break
          case "ALL_MEMBERS":
              var explicitContentFilter = "全てのメッセージをスキャンします。";
              break
          default:
              var explicitContentFilter = "エラー";
              break
        }
        switch(guilds.verificationLevel) {
          case "NONE":
              var verificationLevel = "設定しない：無制限";
              break
          case "LOW":
              var verificationLevel = "低：メール認証がされているアカウントのみ";
              break
          case "MEDIUM":
              var verificationLevel = "中：Discordに登録してから5分以上経過したアカウントのみ";
              break
          case "HIGH":
              var verificationLevel = "(╯°□°）╯︵ ┻━┻：このサーバーのメンバーとなってから10分以上経過したメンバーのみ";
              break
          case "VERY_HIGH":
              var verificationLevel = "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻：電話認証がされているアカウントのみ";
              break
          default:
              var verificationLevel = "エラー";
              break
        }
            pMenu.addPages([{
                title: `サーバーの情報(${guilds.name})`,
                description: `id: ${guilds.id}`,
                thumbnail: guildicon,
                fields: [
                    {
                        name  : "名前",
                        value : guilds.name,
                        inline: true,
                    },
                    {
                        name  : "ID",
                        value : guilds.id,
                        inline: true,
                    },
                    {
                        name: "サーバーのオーナー",
                        value: guilds.owner.user.tag,
                        inline: true,
                    },
                    {
                        name: "チャンネルの数",
                        value: guilds.channels.cache.size,
                        inline: true,
                    },
                    {
                        name: "役職の数",
                        value: guilds.roles.cache.size,
                        inline: true,
                    },
                    {
                        name: "絵文字の数",
                        value: guilds.emojis.cache.size,
                        inline: true,
                    },
                    {
                        name: "AFKチャンネル",
                        value: guilds.afkChannel
                            ? guilds.afkChannel.name
                            : "なし",
                        inline: true,
                    },
                    {
                        name: "セキュリティーレベル",
                        value: "不適切な表現フィルター: "+explicitContentFilter+"\n認証: "+verificationLevel,
                        inline: true,
                    },
                    {
                        name: "サーバーの作成日",
                        value: createdAt,
                        inline: true,
                    },
                    {
                        name: "ステータス",
                        value: "ユーザー数: "+guilds.memberCount
                            +"\nメンバー: "+checkMembers(guilds)
                            +"\nボット: "+checkBots(guilds)
                            +"\n<:Online:608614124758368256>: "+guilds.members.cache.filter(m => m.user.presence.status == "online").size
                            +"\n<:Idle:608614090738499594>: "+guilds.members.cache.filter(m => m.user.presence.status == "idle").size
                            +"\n<:dnd:608614113513439252>: "+guilds.members.cache.filter(m => m.user.presence.status == "dnd").size
                            +"\n<:Offline:608614103099113483>: "+guilds.members.cache.filter(m => m.user.presence.status == "offline").size,
                        inline: true
                    },
                ],
                color: Math.floor(Math.random() * 16777214) + 1,
              }]);
           });
      pMenu.run();
  }
}