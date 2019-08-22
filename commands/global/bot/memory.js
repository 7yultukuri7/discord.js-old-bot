const { command } = require("ecstar");

module.exports = class extends command {
    constructor(clientiogame,clientzatukomu) {
        super(clientiogame || clientzatukomu,  {
            name: "memory",
        });
    }
    run(message) {
        message.channel.send('Cheking...').then(sent => {
      sent.edit(`ボットが使用中のメモリー${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`);
    });
    }
};