const { Command } = require("discord.js-commando");
const { RichEmbed, discord } = require('discord.js');
const puppeteer = require('puppeteer');


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
(async () => {
  // const browser = await puppeteer.launch({ defaultViewport: null, headless: false, slowMo: 300 });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'out.png', fullPage: true});

  await browser.close();
})();
        return
  }
};
