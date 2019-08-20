require('./web1.js');

const { CommandoClient } = require("discord.js-commando");

const client_module = require("./client/import.js");

const config = require("/app/config/main.js");

const client = new CommandoClient({
    commandPrefix: config.prefix,
    owner: [config.owner.id],
    invite: config.guild.main.url,
    unknownCommandResponse: false,
});

client.registry
    .registerGroups([
        ["bot", "通常のbotコマンド"],
        ["iogame", ".ioゲームサーバーコマンド"],
        ["dev", "デバロッパーコマンド"],
    ])
    .registerDefaultTypes()
    .registerCommandsIn(`${__dirname}/commands/`);

bot_on = false;
client.once("ready", () => {
    client_module.ready.index(client, config);
    bot_on = true;
});

//client.on("guildMemberAdd", member =>
//    client_module.guild.member.add(client, member)
//);

// botの問題系
client.on("error", error =>
    client_module.error.index(client, error, config.channel_id, bot_on)
);
client.on("warn", warn =>
    client_module.warn.index(client, warn, config.channel_id, bot_on)
);
client.on("debug", debug =>
    client_module.debug.index(client, debug, config.channel_id, bot_on)
);
client.on("disconnect", event =>
    client_module.connect.disconnect(client, event, config.channel_id, bot_on)
);
client.on("reconnecting", () =>
    client_module.connect.reconnecting(client, config.channel_id, bot_on)
);

client.login(config.token);
