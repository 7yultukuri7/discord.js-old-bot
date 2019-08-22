const { command } = require("ecstar");
const async = require('async');

module.exports = class extends command {
    constructor(clientiogame) {
        super(clientiogame, {
            name: "typing",
        });
    }
    run(message) {
if (message.guild.id === '543615084618842132'){
async.series([
  function(callback) {
    //処理1
        message.channel.startTyping(1000);
            message.channel.send("typing入力中(5秒間)!");
    //…
    setTimeout(callback, 5000);
  }, function(callback) {
    //処理2
            message.channel.stopTyping(5000);
            message.channel.send("typing終了(5秒間)!");
    //...
  }
], function(err, results) {
  if (err) {
    return console.log('err[' + err + ']');
  }
});
    }
}
};

