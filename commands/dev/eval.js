const { Command } = require("discord.js-commando");
const Canvas = require('canvas');
const moment = require("moment-timezone");
const async = require('async');
const { discord } = require('discord.js');
const config = require("/app/config/main.js");
const os = require( 'os' );

module.exports = class EvalCommand extends Command {
    constructor(client) {
        super(client, {
            name: "eval",
            group: "dev",
            memberName: "eval",
            description: "evalを実行します。",
            ownerOnly: true,
            args: [
                {
                    key: "code",
                    prompt: "実行したいコードを入力してください",
                    type: "string",
                },
            ],
        });
    }

    run(message, { code }) {
        const client = this.client;

        const eval_log_channel = client.channels.cache.get("612639809542029315");

        try {
            const evaled = eval(code);

            message.say(evaled);

            const embed = {
                title: ":white_check_mark:",
                color: 0x4a90e2,
                fields: [
                    { name: "code", value: code },
                    { name: "結果", value: `${evaled}` },
                ],
                timestamp: new Date(),
            };

            eval_log_channel.send({ embed });
        } catch (error) {
            message.say(":octagonal_sign: | エラーが発生しました");

            const embed = {
                title: ":x:",
                color: 0xd0021b,
                fields: [
                    { name: "code", value: code },
                    { name: "エラー", value: `${error.stack}` },
                ],
                timestamp: new Date(),
            };

            eval_log_channel.send({ embed });
        }

        return;
    }
};