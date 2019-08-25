const discord = require('discord.js');

module.exports = (client, message) => {
if (message.guild.id === '543615084618842132'){
	console.log('にゃー');
    message.guild.channels.find("id","581651678642700332").setName(`メンバーカウント: ${message.member.guild.memberCount}`);
    message.guild.channels.find("id","581834860126273556").setName(`ユーザーカウント: ${message.guild.members.filter(member => !member.user.bot).size}`);
    message.guild.channels.find("id","581833625545474048").setName(`ボット　カウント: ${message.guild.members.filter(member => member.user.bot).size}`);
    message.guild.channels.find("id","581819606226829325").setName(`オンラインユｰザｰ: ${message.guild.members.filter(member => member.presence.status === 'online').size}`);
    message.guild.channels.find("id","581829557351481345").setName(`退席中　ユーザー: ${message.guild.members.filter(member => member.presence.status === 'idle').size}`);
    message.guild.channels.find("id","581829539328688147").setName(`取り込み中ユｰザｰ: ${message.guild.members.filter(member => member.presence.status === 'dnd').size}`);
    message.guild.channels.find("id","581827830967435274").setName(`オフラインユｰザｰ: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`);
}
};