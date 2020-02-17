const { Client, RichEmbed, discord } = require('discord.js');
const moment = require("moment-timezone");
const counter = function(str,seq){
    return str.split(seq).length - 1;
}

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
if (message.guild.id === '543615084618842132'){
if (message.channel.id === '573682521229885451'){
if (15 <= counter(message.content,"\n")){
        var embedada = {
	color: Math.floor(Math.random() * 16777214) + 1,
	author: {
		name: message.author.username + " (id: " + message.author.id + ")",
		icon_url: message.author.avatarURL,
	},
	description: '送信したメッセージは、5秒後削除されます。\nこの注意メッセージは、15秒後削除されます。',
	fields: [
		{
			name: ':warning: 注意！',
			value: 'このチャンネルは、改行できる回数が制限されています。\n\u200b',
		},
		{
			name: "このチャンネル(#"+message.channel.name + ')が改行できる回数',
			value: '1~15',
			inline: true,
		},
	],
	timestamp: new Date(),
	footer: {
		text: message.guild.name + " (id: " + message.guild.id + ")",
	},
};
                  message.delete(5000)
      message.channel.send({ embed: embedada }).then(sent => { // 'sent' is that message you just sent
                    let msgid = sent.id;
                    let chid = sent.channel.id;
const momentmsg = moment(message.createdAt).tz("Asia/Tokyo").format("HH:mm:ss");
                  sent.delete(15000)
                    client.channels.get("610706001980817418").send("`["+ momentmsg +"]` `[--]` :warning: **"+message.author.tag+"** (ID:"+message.author.id+")\n`[ Reason ]` <#"+message.channel.id+">のチャンネルで、改行回数制限 1~15");
                    });
};
};
};
  
};