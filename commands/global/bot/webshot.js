const { command } = require("ecstar");
const webshot = require('webshot');

module.exports = class extends command {
    constructor(clientiogame,clientzatukomu) {
        super(clientiogame || clientzatukomu,  {
      name: "webshot",
      args: {
        tx: "text"
      },
    });
  }

  async run(message, {tx}) {
    const options = {
      screenSize: {
        width: 1920,
        height: 1080
      },
      shotSize: {
        width: 1920,
        height: 'all'
      },
      userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
    };
    
    const attachment = message.channel.send({
      files: [{
        attachment: webshot(tx, options),
        name: 'web.jpg'
      }]
    });
    message.channel.send(`webshot`, attachment);
  }
};
