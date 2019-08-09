const { command } = require("ecstar");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "points",
            args: {
              tx: "text"
            },
        });
    }
  async run(message, {tx}) {
   const member = message.mentions.members.first() || message.guild.members.get(tx) || message.author;
  let score;
    score = this.client.getScore.get(member.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }

  return message.channel.send(`${member.tag}が持ってるポイントは${score.points}ポイントです。\nレベルは${score.level}です。`);
  }
}