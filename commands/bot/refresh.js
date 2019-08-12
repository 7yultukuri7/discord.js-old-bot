const { command } = require("ecstar");
const async = require('async');

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "refresh",
        });
    }
    run(message,client) {
        //実行する内容
    if (message.author.id == "352394784440320020") {
async.series([
  function(callback) {
    //処理1
    message.channel.send(`3秒後 システム再起動中.....`)
    //…
    setTimeout(callback, 3000);
  }, function(callback) {
    //処理2
        process.exit();
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
    }
};