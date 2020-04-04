const { Command } = require("discord.js-commando");
const config = require("/app/config/main.js");

const inline = args => {
    return `\`${args}\``;
};

const disambiguation = items => {
    const item_list = items.map(item => `\`${item["name"]}\``).join(",");
    return `いくつかのコマンドが見つかりました、詳しく入力してください。
(もしかして : ${item_list})`;
};

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: "help",
            group: "bot",
            aliases: ["commands",""],
            memberName: "help",
            description: "helpを表示します",
            guildOnly: true,
            args: [
                {
                    key: "command",
                    prompt: "どのようなコマンドのヘルプを表示しますか？",
                    type: "string",
                    default: "",
                },
            ],
        });
    }

    run(message, args) {
        const groups = this.client.registry.groups;
        const commands = this.client.registry.findCommands(
            args.command,
            false,
            message
        );
        const showAll = args.command && args.command.toLowerCase() === "all";
        const prefix = this.client.commandPrefix;

        if (args.command && !showAll) {
            if (commands.length === 1) {
                const help = {
                    embed: {
                        title: `__**${commands[0].name}**__ コマンドの説明`,
                        description: `${commands[0].description}${
                      commands[0].guildOnly ? " (サーバーのみ)" : ""}${
                      commands[0].ownerOnly ? " (BOT開発者のみ)" : ""}${
                      commands[0].nsfw ? " (NSFW)" : ""}`,
                        fields: [
                            {
                                name: "使い方",
                                value: inline(
                                    `${prefix}${commands[0].name} ${
                                        commands[0].format
                                            ? ` ${commands[0].format}`
                                            : ""
                                    }`
                                ),
                            },
                        ],
                        color: 0xf5a623,
                    },
                };
                if (commands[0].aliases.length > 0)
                    help.embed.fields.push({
                        name: "エイリアス",
                        value: commands[0].aliases.join(", "),
                    });
                if (commands[0].details)
                    help.embed.fields.push({
                        name: "詳細",
                        value: commands[0].details,
                    });
                if (commands[0].examples)
                    help.embed.fields.push({
                        name: "例",
                        value: commands[0].examples.join("\n"),
                    });

                // prettier-ignore
                help.embed.fields.push({
                    name: "権限",
                    value: `${
                        commands[0].isUsable(message)
                            ? "利用できます"
                            : `利用できません ${
                                message.guild
                                    ? "(権限が不足しています)"
                                    : "(サーバーで試してください)"
                            }`
                    }`,
                });

                message
                    .say(
                        `<a:loading:482420749668188170> | ${commands[0].name}のヘルプを送信しています...`
                    )
                    .then(edit_message =>
                        message.channel
                            .send(help)
                            .then(() => {
                                edit_message.edit(
                                    `:envelope_with_arrow: | ${commands[0].name}コマンドのヘルプを送信しました`
                                );
                            })
                            .catch(() => {
                                edit_message.edit(
                                    ":x: | メッセージ送信に失敗しました。"
                                );
                            })
                    );
                return;
            } else if (commands.length > 15) {
                return message.say(
                    "たくさんのコマンドが見つかりました、詳しく入力してください"
                );
            } else if (commands.length > 1) {
                return message.say(disambiguation(commands));
            } else {
                return message.say(
                    `コマンドが見つかりませんでした。${inline(
                        `${prefix}help`
                    )}と入力して確認してください`
                );
            }
        } else {
            const help_content = {
                prefix: `Prefix : ${inline(prefix)} or ${inline(
                    `@${this.client.user.tag}`
                )}`,
                cmd: `
                ${inline(`${prefix}help [コマンド]`)} でコマンドの詳細が見れます。
                ${inline(`${prefix}help all`)} ですべてのコマンドを表示します。
                `,
                show: ` ${
                    showAll
                        ? "__**コマンド一覧**__"
                        : `__**「${message.guild ||
                              "DM"}」であなたが利用できるコマンド一覧**__`
                }`,
            };
            const help_list = {
                embed: {
                    author: {
                        name: `${this.client.user.username} の使い方`,
                        icon_url: this.client.user.avatarURL(),
                    },
                    title:
                        config.ver,
                    description: `
                    ${help_content.prefix}
                    ${help_content.cmd}
                    ${help_content.show}
                    `,//DM では、Prefix なしでも反応します
                    fields: [],
                    footer: {
                        icon_url:
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Info_Simple.svg/800px-Info_Simple.svg.png",
                        text:
                            "質問、意見、問題報告 等は 7yultukuri7 (userid:352394784440320020) のDM で受付ています。",
                    },
                    color: Math.floor(Math.random() * 16777214) + 1,
                },
                split: true,
            };

            // prettier-ignore
            (showAll ? groups : groups.filter(group =>
                group.commands.some(command => command.isUsable(message))
            )).map(group => {

                const list_cmd = `${
                    (showAll ? group.commands : group.commands.filter(command =>
                        command.isUsable(message) 
                    )).map(command =>
                        `${inline(command.name)} : ${command.description} ${
                            command.guildOnly ? "" : ""} ${
                            command.ownerOnly ? "※BOT開発者のみ" : ""} ${
                            command.nsfw ? "※NSFW" : ""}
                            `).join("")
                }`;


                help_list.embed.fields.push({
                    name: `❯ **${group.id}** (${group.name})`,
                    value: list_cmd || "None",
                    inline:true,
                });
            });

            message
                .say(
                    "<:loading:482420749668188170> | ヘルプを送信します"
                )
                .then(edit_message =>
                    message.channel
                        .send(help_list)
                        .then(() => {
                            edit_message.edit(
                                ":envelope_with_arrow: | ヘルプを送信しました"
                            );
                        })
                        .catch(() => {
                            edit_message.edit(
                                ":x: | メッセージ送信に失敗しました。"
                            );
                        })
                );
        }
    }
};