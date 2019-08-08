//--------------------------------------------
var web = require('./web1.js');
const config = require("./config");
//--------------------------------------------

// Discord bot implements(Discord botを実装する)
const async = require('async');
const Canvas = require('canvas');
const discord = require('discord.js');
const Ecstar = require("ecstar");
const fs = require("fs");
const moment = require("moment-timezone");


//--------------------------------------------
//ecstar メインファイル
const client = new Ecstar.client({
  prefix: config.prefix,
  command: `${__dirname}/commands`,
  log: true
});

//--------------------------------------------
//Discord bot token
if(process.env.DISCORD_BOT_TOKEN == undefined)
{
  console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}
client.login(config.token);

//--------------------------------------------