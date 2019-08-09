const { command } = require("ecstar");
const config = require("/app/config");
const os = require( 'os' );
const async = require('async');
const Canvas = require('canvas');
const moment = require("moment-timezone");
const discord = require("discord.js");

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