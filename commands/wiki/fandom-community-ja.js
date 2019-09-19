const { Command } = require("discord.js-commando");
const { RichEmbed, discord } = require('discord.js');
const wiki = require("wikijs").default({
  apiUrl : 'http://community.fandom.com/ja/api.php'
});

 const config = require("/app/config/main.js");

 module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "fandom-community-ja",
            aliases: ["fandom-community-ja-jp"],
            group: "wiki",
            memberName: "fandom-community-ja",
            description: "Fandomの[コミュニティセントラル(日本語)](https://community.fandom.com/ja) で検索(完全一致)をします。",
            guildOnly: true,
            args: [
                {
                    key: "search",
                    prompt: "Fandomのコミュニティセントラル(日本語)で実行したい検索(完全一致)を入力してください",
                    type: "string",
                },
            ],
        });
    }

     async run(message, {search}) {
    try {
    const page = await wiki.page(search);
    const summary = await page.summary();
    const images = await page.mainImage();
    const noi = `${images ? `${images}` : "画像が見つかりませんでした。"}`;
    const noi2 = `${images ? `${images}` : "https://sitechecker.pro/wp-content/uploads/2017/12/404.png"}`;
         message.channel.send({
            embed: {
                color: 2500351,
                title: `${search}の検索結果(Fandomのコミュニティセントラル(日本語)`,
                description: summary,
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL,
                    text: `実行者: ${message.author.tag}`,
                },
                thumbnail: {
                    url: noi2
                },
                fields: [
                    {
                        name: "links",
                        value: 'http://community.fandom.com/ja/wiki/'+search,
                    },
                ],
            },
        }).catch(error => message.reply(`${error}のためメッセージを表示できませんでした`));
    } catch (e) {
    await message.channel.send(config.wiki.errormsg);
    }
    return;
  }
};