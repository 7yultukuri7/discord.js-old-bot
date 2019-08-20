const { Command } = require("discord.js-commando");
const { RichEmbed, discord } = require('discord.js');


const config = require("/app/config/main.js");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "memory",
            aliases: ["メモリー"],
            group: "dev",
            memberName: "memory",
            description: "ボットが使用中のメモリーを表示します。",
            guildOnly: true,
        });
    }

    run(message) {
        message.channel.send('Cheking...').then(sent => {
      sent.edit(`ボットが使用中のメモリー${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`);
    });
        return
  }
};
