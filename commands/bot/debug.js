const { command } = require("ecstar");
const os = require( 'os' );
const config = require("/app/config");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "debug",
        });
    }
    run(message) {
        var data = os.cpus();
      message.channel.send('Cheking...').then(sent => {
      sent.edit(`CPU1: ${config.cpu1.model}\nSpeed1: ${config.cpu1.speed}\nnice1: ${config.cpu1.nice}\nsys1: ${config.cpu1.sys}\nidle1: ${config.cpu1.idle}\nirq1: ${config.cpu1.irq}\n`+
                `CPU2: ${config.cpu2.model}\nSpeed2: ${config.cpu2.speed}\nnice2: ${config.cpu2.nice}\nsys2: ${config.cpu2.sys}\nidle2: ${config.cpu2.idle}\nirq2: ${config.cpu2.irq}\n`+
                `CPU3: ${config.cpu3.model}\nSpeed3: ${config.cpu3.speed}\nnice3: ${config.cpu3.nice}\nsys3: ${config.cpu3.sys}\nidle3: ${config.cpu3.idle}\nirq3: ${config.cpu3.irq}\n`);
    });
    }
};