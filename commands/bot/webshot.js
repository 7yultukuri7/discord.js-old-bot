const { Command } = require("discord.js-commando");
const discord = require('discord.js');
const webshot = require('webshot');
const puppeteer = require('puppeteer');
const path = require('path');
const moment = require("moment-timezone");

 const config = require("/app/config/main.js");

 module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "webshot",
            aliases: ["ウェブショット"],
            group: "bot",
            memberName: "webshot",
            description: "ウェブショットをします。",
            ownerOnly: true,
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
/*(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
//    executablePath: path.resolve('/user/bin/chromium-browser'),
    headless: false
  });
  var page = await browser.newPage();
  				page.on("error", error => {
					message.channel.send(`:warning: ${error.message}`);
				});
  await page.setViewport({with: 1920, hight: 1080});
  await page.goto(url);
  var screenshot = await page.screenshot({type: 'png'});
  await browser.close();
     const attachment = message.channel.send({
      files: [{
        attachment: screenshot,
        name: 'web.jpg'
      }]
    });
    message.channel.send(`webshot`, attachment);
})();*/
const grabPage = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    
  });
	const page = await browser.newPage()
	await page.goto(url)
/*	const el = await page.$('#contents')
	const buffer = await el.screenshot({ path: `${Date.now()}.png` })*/
	const buffer = await page.screenshot({ path: `${Date.now()}.png` })

	await browser.close()
	return buffer
}
(async () => {
		console.log('message matches, fetching')
		// We can create embeds using the MessageEmbed constructor
		// Read more about all that you can do with the constructor
		// over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
		const buffer = await grabPage()
		const embed = new discord.RichEmbed()
			// Set the title of the field
			.setTitle('A slick little embed')
			// Set the color of the embed
			.setColor(0xff0000)
			// Set the main content of the embed
			.setDescription('Hello, this is a slick embed!')
			.attachFile(buffer)
		console.log('message sent')
		// Send the embed to the same channel as the message
		message.channel.send(embed)  
})();
        return
  }
};
