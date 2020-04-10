const { Command } = require("discord.js-commando");
const { discord } = require('discord.js');
const wiki = require("wikijs").default({
  apiUrl : 'http://wikipedia.org/w/api.php'
});

 const config = require("/app/config/main.js");

 module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "wikipedia-en",
            aliases: ["wikipedia-en-us"],
            group: "wiki",
            memberName: "wikipedia-en",
            description: "[Wikipedia(英語)](http://wikipedia.org)で検索(完全一致)をします。",
            guildOnly: true,
            args: [
                {
                    key: "search",
                    prompt: "Wikipedia(英語)で実行したい検索(完全一致)を入力してください",
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
                title: `${search}の検索結果(Wikipedia)`,
                description: summary,
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL(),
                    text: `実行者: ${message.author.tag}`,
                },
                thumbnail: {
                    url: noi2
                },
                fields: [
                    {
                        name: "links",
                        value: 'http://wikipedia.org/wiki/'+search,
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