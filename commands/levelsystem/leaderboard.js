const { command } = require("ecstar");
const Discord = require('discord.js');

const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "ランキング",
            args: {
              tx: "text"
            },
        });
    }
  async run(message, {tx}) {

  const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 1;").all(message.guild.id);
    // Now shake it and show it! (as a nice embed, too!)
  const embed = new Discord.RichEmbed()
    .setTitle("リーダーボード")
    .setAuthor(this.client.user.username, this.client.user.avatarURL)
    .setDescription("レベル、ポイントが高い人TOP10")
    .setColor(0x00AE86);
 
  for(const data of top10) {
    let tag = this.client.users.get(data.user) ? this.client.users.get(data.user).tag : "unknown user";
        embed.addField(tag, `${data.points}ポイント (レベル${data.level})`);
  }
  return message.channel.send({embed});


  }
}