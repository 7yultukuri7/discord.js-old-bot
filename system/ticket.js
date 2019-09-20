const { RichEmbed, discord, client } = require("discord.js");
const prefixfc = "!fc ";

module.exports = async (client, message) => {
if (message.guild.id === '543615084618842132'){
const args = message.content.slice(prefixfc.length).trim().split(/ +/g);
const commandfc = args.shift().toLowerCase();
  
if (message.channel.id === '565893617760337935') { 
    if (commandfc === 'help') {
        message.channel.send("**フリーカテゴリー**\n\n**編集用チャンネルで実行可能なコマンド <#565893617760337935>**\n``!fc create <voice|text> [チャンネル名]`` チャンネルを作成します。");
    }
 
    if (commandfc === 'create') {
      if (args[0] === 'text') {
        if (!message.guild.roles.exists("name", "＊フリーカテゴリー")) return message.channel.send(`:warning: このサーバーには \`＊フリーカテゴリー\` 役職が作成されていないため、チャンネルが作成できません。`);
        if (message.guild.channels.exists("name", args[1])) return message.channel.send(`:warning: すでにチャンネルが作成されています。`);
        message.guild.createChannel(args[1], "text").then(c => {
            let muted = message.guild.roles.find("name", "Muted");
            let freecate = message.guild.roles.find("name", "＊フリーカテゴリー");
            let everyone = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(muted, {
                SEND_MESSAGES  : false,
                EXTERNAL_EMOJIS: false,
                ADD_REACTIONS  : false,
                CONNECT        : false,
                SPEAK          : false
            });
            c.overwritePermissions(everyone, {
                READ_MESSAGES: false
            });
            c.overwritePermissions(freecate, {
                READ_MESSAGES: true
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                MANAGE_ROLES_OR_PERMISSIONS: true,
                MANAGE_CHANNELS: true
            });
     const membercarl = message.guild.members.get("235148962103951360");
            c.overwritePermissions(membercarl, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                MANAGE_ROLES_OR_PERMISSIONS: true,
                MANAGE_CHANNELS: true
            });
          
    let category = message.guild.channels.find(c => c.id == "565893616023896104" && c.type == "category");

    c.setParent(category.id);
            message.channel.send(`:white_check_mark: チャンネルを作成しました。 <#${c.id}>`); 
        }).catch(console.error); // Send errors to console
      }
      else if (args[0] === 'voice') {
        if (!message.guild.roles.exists("name", "＊フリーカテゴリー")) return message.channel.send(`:warning: このサーバーには \`＊フリーカテゴリー\` 役職が作成されていないため、チャンネルが作成できません。`);
        if (message.guild.channels.exists("name", args[1])) return message.channel.send(`:warning: すでにチャンネルが作成されています。`);
        message.guild.createChannel(args[1], "voice").then(c => {
            let muted = message.guild.roles.find("name", "Muted");
            let freecate = message.guild.roles.find("name", "＊フリーカテゴリー");
            let everyone = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(muted, {
                SEND_MESSAGES  : false,
                EXTERNAL_EMOJIS: false,
                ADD_REACTIONS  : false,
                CONNECT        : false,
                SPEAK          : false
            });
            c.overwritePermissions(everyone, {
                READ_MESSAGES: false
            });
            c.overwritePermissions(freecate, {
                READ_MESSAGES: true
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                MANAGE_ROLES_OR_PERMISSIONS: true,
                MANAGE_CHANNELS: true
            });
     const membercarl = message.guild.members.get("235148962103951360");
            c.overwritePermissions(membercarl, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                MANAGE_ROLES_OR_PERMISSIONS: true,
                MANAGE_CHANNELS: true
            });
          
    let category = message.guild.channels.find(c => c.id == "565893616023896104" && c.type == "category");

    c.setParent(category.id);
            message.channel.send(`:white_check_mark: チャンネルを作成しました。 <#${c.id}>`); 
        }).catch(console.error); // Send errors to console
      }
    }
};
};
};