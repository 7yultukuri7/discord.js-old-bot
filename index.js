require('./web1.js');
process.on('unhandledRejection', console.dir);
const { CommandoClient } = require("discord.js-commando");
const os = require( 'os' );
const client_module = require("./client/import.js");

const config = require("/app/config/main.js");

const client = new CommandoClient({
    commandPrefix: config.prefix,
    owner: [config.owner.id],
    unknownCommandResponse: false,
});

client.registry
    .registerGroups([
        ["bot", "通常のbotコマンド"],
        ["wiki", "MediawikiベースのWikiのためのコマンド"],
        ["dev", "デバロッパーコマンド"],
    ])
    .registerDefaultTypes()
    .registerCommandsIn(`${__dirname}/commands/`);


//--------------------------------------------
//test
function calcCPU(){
  var cpus = os.cpus();
  var total_all = 0;
  var total_idle = 0;
  
  for(var i = 0, len = cpus.length; i < len; i++) {
    console.log("CPU %s:", i);
    var cpu = cpus[i], total = 0;
    
    for(var type in cpu.times) {
        total += cpu.times[type];
    }

    for(type in cpu.times) {
        console.log("\t", type, Math.round(100 * cpu.times[type] / total));
    }
    
    total_all += total;
    total_idle += cpu.times.idle;
  }

  console.log("total idle:",  Math.round(100 * total_idle / total_all));
}
function calcMemory(){
  var memory = {};
  memory.free = os.freemem();
  memory.total = os.totalmem();
  memory.freepercent = memory.free / memory.total * 100;
  console.log("Free Mem:" + memory.free + ", Total Mem:" + memory.total + ", Free(%):" + memory.freepercent);
}

//--------------------------------------------

//--------------------------------------------
//discord.js
client.on('ready', async message =>
{ 
  const guild = client.guilds.get("543615084618842132")
  let ccount = ""
  const cjson  = []
  //*
  guild.channels.forEach(channel  =>{
  if(channel.type === "category"){
    ccount++
    cjson.push(channel)
  }
  })//*/
  for (  var i = 0;  i < ccount ;  i++  ) {
    cjson.forEach( function( value ) {
 if(value.position=== i){console.log(value.name)}
    
});
//console.log(cjson.position[i])
    
 // 繰り返し処理
//
}//console.log(cjson )
	console.log('bot is ready!');
  client.user.setActivity(`nya!`)
});
client.on("message", async message => {
  if (message.channel.type == 'dm') return;
    require("./system/mee6-levelup")(client, message);
  if (message.author.bot) return;
    require("./system/ticket")(client, message);
    require("./system/channel-counter")(client, message);
    require("./system/enter-ad-block")(client, message);
  if (message.author.id == "352394784440320020") {
  	if (message.content === 'io!remove-remove-543615084618842132') {
  		client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
  	}
  	if (message.content === 'io!join-join-543615084618842132') {
	  	client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	  }
  } 
});

const responseObject = {
    "Quick Response 1": "Reply 1",
    "Quick Response 2": "Reply 2",
    "Quick Response 3": "Reply 3",
    "Quick Response 4": "Reply 4",
    "Quick Response 5": "Reply 5",
    "Quick Response 6": "Reply 6",
    "Quick Response 7": "Reply 7",
    "Quick Response 8": "Reply 8",
    "Quick Response 9": "Reply 9",
    "Quick Response 10": "Reply 10"
};
client.on("message", (message) => {
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }
});

//{player}さんは、レベル ``{level}`` に上がっています！ 
client.on('guildMemberAdd', async member => {
  require("./system/canvas-member-join.js")(client, member);
});

client.on('guildMemberRemove', async member => {
  require("./system/canvas-member-remove.js")(client, member);
});

/*
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
*/
client.login(config.token);
