const { command } = require("ecstar");

module.exports = class extends command {
    constructor(clientiogame,clientzatukomu) {
        super(clientiogame || clientzatukomu,  {
            name: "ping",
        });
    }
    run(message) {
        message.channel.send(`Pinging...`).then(sent => {
        sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
};