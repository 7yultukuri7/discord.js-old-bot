require('dotenv').config();
const os = require( 'os' );
const datacpu = os.cpus();
module.exports = {
  token  : process.env.DISCORD_BOT_TOKEN,
  prefix : "io!",
  var    : "1.0.0 +plus",
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