//--------------------------------------------
var web = require('./web1.js');
const config = require("./config");
//--------------------------------------------
// Discord bot implements(Discord botを実装する)
const async = require('async');
const discord = require('discord.js');
const Ecstar = require("ecstar");
const fs = require("fs");
const os = require( 'os' );

//--------------------------------------------
//ecstar メインファイル
const client = new Ecstar.client({
  prefix: config.prefix,
  command: `${__dirname}/commands`,
  log: true
});

//--------------------------------------------
//discord.js
client.on("message", async message => {
  if (message.author.bot) return;
    require("./system/channel-counter")(client, message);
  if (message.author.id == "352394784440320020") {
  	if (message.content === 'io!remove-remove-543615084618842132') {
  		client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
  	}
  	if (message.content === 'io!join-join-543615084618842132') {
	  	client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	  }
  } 
});

client.on('guildMemberAdd', async member => {
if (member.guild.id === '543615084618842132'){
  require("./system/canvas-member-join")(client, member);
};
});

client.on('guildMemberRemove', async member => {
  require("./system/canvas-member-remove")(client, member);
});

//--------------------------------------------
//ポイントシステムのなんかあれだよあれ(?)
const SQLite = require("better-sqlite3");
const sql = new SQLite("./scores.sqlite");

client.on("ready", () => {
  // Check if the table "points" exists.
  const table = sql
    .prepare(
      "SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';"
    )
    .get();
  if (!table["count(*)"]) {
    // If the table isn't there, create it and setup the database correctly.
    sql
      .prepare(
        "CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);"
      )
      .run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }

  // And then we have two prepared statements to get and set the score data.
  client.getScore = sql.prepare(
    "SELECT * FROM scores WHERE user = ? AND guild = ?"
  );
  client.setScore = sql.prepare(
    "INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);"
  );
  });

client.on("message", async message => {
  if (message.author.bot) return;
    let score = client.getScore.get(message.author.id, message.guild.id);
  if (!score) {
    score = {
      id: `${message.guild.id}-${message.author.id}`,
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    };
  }

  // Increment the score
  score.points++;

  // Calculate the current level through MATH OMG HALP.
  const curLevel = Math.floor(0.1 * Math.sqrt(score.points));

  // Check if the user has leveled up, and let them know if they have:
  if (score.level < curLevel) {
    // Level up!
    score.level++;
    message.channel.send(`おめでとう、君のレベルは**${curLevel}**になった。`);
  }

  // This looks super simple because it's calling upon the prepared statement!
  client.setScore.run(score);
  });
//--------------------------------------------
//Discord bot token
client.on('ready', message =>
{
	console.log('bot is ready!(ボットの準備はできています！)');
  client.user.setActivity('サーバーによって、プレフィクス, コマンドが異なります。')
});
var pjson = require('./package.json');
if(process.env.DISCORD_BOT_TOKEN == undefined)
{
  console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}
client.login(config.token);

//--------------------------------------------