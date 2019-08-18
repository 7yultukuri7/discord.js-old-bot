const { command } = require("ecstar");

module.exports = class extends command {
    constructor(clientiogame,clientzatukomu) {
        super(clientiogame || clientzatukomu,  {
      name: "speedtest",
    });
  }

  async run(message) {
      message.channel.send('please wait...');

      const speedTest = require('speedtest-net');
      const test = speedTest();

      const Canvas = require("canvas");
      const snekfetch = require("snekfetch");
      const Discord = require('discord.js');

      test.on('data', data => {
        console.log(data);

        const canvas = Canvas.createCanvas(960, 100);
        const ctx = canvas.getContext("2d");

        //ctx.fillStyle = "#000000";
        //ctx.fillRect(0, 0, canvas.width, canvas.height);

        Canvas.registerFont("/app/03_Smart_Font_UI.ttf", {family: "allfonts"});
        ctx.font = '23px "allfonts"';

        ctx.fillStyle = "#ffffff";
        ctx.fillText('Ping: ' + data.server.ping + ' | Upload: ' +  data.speeds.upload + ' | Download: ' +  data.speeds.download, 20, 40);
        ctx.fillText('Location: ' + data.server.location + ' | cc: ' + data.server.cc, 10, 80);

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'test.png');

        message.channel.send({
          embed: {
            title: '結果(ホスト: ' + data.server.host + ')',
            image: {
              url: 'attachment://test.png'
            },
          },
          files: [attachment]
        });
      });
  }
}