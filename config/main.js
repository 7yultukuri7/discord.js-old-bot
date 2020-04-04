const { CommandoClient } = require("discord.js-commando");
const client = new CommandoClient();
const os = require( 'os' );
const datacpu = os.cpus();
module.exports = {
    token  : process.env.TOKEN,
    prefix : "nya!",
    ver    : "1.3.1 +plus",
    owner  : {
        id   : "352394784440320020",
    },
    bot    : {
        fullname : "7yultukuri7 BOT#2425",
        name     : "7yultukuri7 BOT",
        tag      : "#2425",
        id       : "580339102331699209",
    },
    wiki  : {
        errormsg   : 'エラーが発生しました。 \n 確認済みのエラー原因: ```\n 検索: 完全一致じゃないと動作しません。\n データ: データサイズが大きくて動作しない可能性があります。```',
    },
    guild: {
        main: {
            id: "573350684372762624",
            url: "https://discord.gg/sq237Nf",
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
  cpu1: {
    model: datacpu[0].model,
    speed: datacpu[0].speed,
    nice : datacpu[0].times.nice,
    sys  : datacpu[0].times.sys,
    idle : datacpu[0].times.idle,
    irq  : datacpu[0].times.irq,
  },
  cpu2: {
    model: datacpu[1].model,
    speed: datacpu[1].speed,
    nice : datacpu[1].times.nice,
    sys  : datacpu[1].times.sys,
    idle : datacpu[1].times.idle,
    irq  : datacpu[1].times.irq,
  },
  cpu3: {
    model: datacpu[2].model,
    speed: datacpu[2].speed,
    nice : datacpu[2].times.nice,
    sys  : datacpu[2].times.sys,
    idle : datacpu[2].times.idle,
    irq  : datacpu[2].times.irq,
  },
};
