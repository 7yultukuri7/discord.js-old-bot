const { Command } = require("discord.js-commando");

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: "ping",
            group: "bot",
            memberName: "ping",
            description: "Pingを表示します",
            guildOnly: true,
        });
    }

    run(message) {
        const ping = this.client.ws.ping;
        return message.say(`${ping}ms`);
    }
};