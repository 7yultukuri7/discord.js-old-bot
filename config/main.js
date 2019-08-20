const { CommandoClient } = require("discord.js-commando");
const client = new CommandoClient();
module.exports = {
    token  : process.env.TOKEN,
    prefix : process.env.BOT_PREFIX,
    var    : "1.2.0 +plus (beta)",
    owner  : {
        id   : "352394784440320020",
    },
    bot    : {
        name : "580339102331699209",
        id   : "580339102331699209",
    },
    guild: {
        main: {
            id: "573350684372762624",
            url: "https://discord.gg/6EhyV5u",
            channel: {
                readme: "560404647999963137",
            },
            role: {
                member: "543632136708554760",
            },
        },
    },
    channel_id: {
        startup_log: "612627235874275363",
        error: "612627254194733067",
        warn: "612627271487979520",
        debug: "612627290047774740",
        disconnect: "612627309974781955",
    },
};
