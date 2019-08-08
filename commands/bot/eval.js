const { command } = require("ecstar");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "eval",
            args: {
              tx: "text"
            },
        });
    }
    run(message, {tx}) {
    if (message.author.id == "352394784440320020") {
      try {
        message.channel.send(eval(tx)).catch(error => message.reply(`${error}`));
      } catch (err) {
        message.channel.send('エラー[ ' + err.toString() +' ]\n```' + err.stack + '```');
      }
        }
       else
        {
       message.reply("このコマンドはbot管理者のみ実行可能です。");
        }
    }
};