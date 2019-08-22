const { Command } = require("discord.js-commando");
const { RichEmbed, discord } = require('discord.js');
const webshot = require('webshot');


const config = require("/app/config/main.js");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "webshot",
            aliases: ["ウェブショット"],
            group: "bot",
            memberName: "webshot",
            description: "ウェブショットをします。",
            guildOnly: true,
            args: [
                {
                    key: "url",
                    prompt: "実行したいURLを入力してください",
                    type: "string",
                },
            ],
        });
    }

    run(message, {url}) {
    const options = {
      screenSize: {
        width: 1920,
        height: 1080
      },
      shotSize: {
        width: 1920,
        height: 'all'
      },
      userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
    };
    
    const attachment = message.channel.send({
      files: [{
        attachment: webshot(url, options),
        name: 'web.jpg'
      }]
    });
    message.channel.send(`webshot`, attachment);
        return
  }
};
