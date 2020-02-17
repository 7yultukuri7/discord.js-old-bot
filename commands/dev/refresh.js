const { Command } = require("discord.js-commando");
const async = require('async');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "refresh",
            aliases: ["リフレッシュ", "再起動"],
            group: "dev",
            memberName: "refresh",
            description: "このBotの再起動します。",
            ownerOnly: true,
        });
    }

    run(message) {
    if (message.author.id == "352394784440320020") {
async.series([
  function(callback) {
    //処理1
    message.channel.send(`3秒後 システム再起動中.....`)
    //…
    setTimeout(callback, 3000);
  }, function(callback) {
    //処理2
        process.exit(1);
    //…
  }
], function(err, results) {
  if (err) {
    return console.log('err[' + err + ']');
  }
});
}       else
        {
       message.reply("このコマンドはbot管理者のみ実行可能です。");
        }
        return
  }
};