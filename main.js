//
var web = require('./web1.js');

// Discord bot implements(Discord botを実装する)
const discord = require('discord.js');
const client = new discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js');
const async = require('async');
const fs = require("fs");
const Canvas = require('canvas');
const moment = require("moment-timezone");
client.on('ready', message =>
{
	console.log('bot is ready!(ボットの準備はできています！)');
  client.user.setActivity('サーバーによって、動作(prefix,command)が異なります。')
});

const starttypingch = '543647930704330755';

client.on('message', message =>{
//.ioゲーム
if (message.guild.id === '543615084618842132'){

let prefix = 'io!';
let args = message.content.slice(prefix.length).trim().split(/ +/g);
let command = args.shift().toLowerCase();

  if(command === "eval") {
    try {
      const tx = args.join(' ');
      if (message.author.id == "352394784440320020") {
        message.channel.send(eval(tx));
      } else{
        message.channel.send('特定のユーザーのみ可能なコマンドです。');
      }
    } catch (e) {
      message.channel.send('エラー[ ' + e.toString() +' ]\n```' + e.stack + '```');
    }
  }
  if(command === "help") {
    var embedhelp = new discord.RichEmbed()
       .setAuthor("ヘルプ")
       .setDescription(
        "このサーバーのコマンドのプレフィックスは`io!`です。\n"+
       "")
      .addField("❯ Bot","`help`, `ping`, `about`")
      .addField("❯ Management","\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **\n** **")
       .setColor("#63c6e1")
       .setFooter(message.guild.name, message.guild.iconURL)
       .setTimestamp()
message.channel.send('Loading...').then(sent => {
    sent.edit(embedhelp);
});}

  if(command === "ping") {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
});}
  if(command === "memory") {
message.channel.send('Cheking...').then(sent => {
    sent.edit(`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`);
});}
  if(command === "about") {
    var embedabout = new discord.RichEmbed()
       .setAuthor("概要")
       .setDescription(
        "このBotの概要を表示しています。\n"+
       "")
      .addField("❯ バージョン","var.1.5.0(たぶん？)")
      .addField("❯ 更新情報","不明")
      .addField("❯ 製作者","7yultukuri7(id: 352394784440320020)")
      .addField("❯ ライブラリ","`javascript`, `node.js`, `discord.js`, `canvas`, `async`, `moment-timezone`, `fs`, `http`, `moji`, ``")
      .addField("❯ Discordサーバー数",`${message.client.guilds.size}`,true)
      .addField("❯ 全サーバーチャンネル数",`${message.client.channels.size}`,true)
      .addField("❯ 全サーバーユーザー数",`${message.member.guild.memberCount}`+
                `\nユーザー: ${message.guild.members.filter(member => !member.user.bot).size} ボット: ${message.guild.members.filter(member => member.user.bot).size}\n`+
                `オンライン: ${message.guild.members.filter(member => member.presence.status === 'online').size} 退席中: ${message.guild.members.filter(member => member.presence.status === 'idle').size} 取り込み中: ${message.guild.members.filter(member => member.presence.status === 'dnd').size} オフラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`)
      .addField("❯ Botの導入",`非公開`)
      .addField("❯ サポートサーバー",`未作成\n** **\n** **\n** **\n** **`)
      .addField("❯ Tips","`"+prefix+"help` でヘルプを表示できます。")
       .setColor("#63c6e1")
       .setFooter(message.guild.name, message.guild.iconURL)
       .setTimestamp()
message.channel.send('Loading...').then(sent => {
    sent.edit(embedabout);
});}
//コマンド
  

	const forevertyping1 = message.guild.channels.find(ch => ch.id === '543647930704330755');
    if(command === `forevertyping`){
        forevertyping1.startTyping();
/*        setTimeout(()=>{
        message.channel.startTyping();
            message.channel.send("Testing to ForeverTyping!");
            message.channel.stopTyping();
        },2000)*/
    } else if(command === `stoptyping`){
      message.channel.stopTyping();
    }
  
};
});

client.on('guildMemberAdd', async member => {
if (member.guild.id === '543615084618842132'){
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {
    Canvas.registerFont("03_Smart_Font_UI.ttf", {family: "allfonts"});
    ctx.font = `${fontSize -= 10}px allfonts`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

	const channel = member.guild.channels.find(ch => ch.name === '📥ようこそ！・welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage("https://cdn.glitch.com/7771849c-5333-4ddb-99f1-f943ab602551%2Fwtr0053-024.jpg?v=1563802213148");
	ctx.drawImage(background, 0, 0, 700, canvas.height);
/*
	const background1 = await Canvas.loadImage(member.guild.iconURL);
	ctx.drawImage(background1, 250, 0, canvas.width - 250, 500);
	const background2 = await Canvas.loadImage("http://flat-icon-design.com/f/f_business_58/s256_f_business_58_1bg.jpg");
	ctx.drawImage(background2, 225, 0, 250, 250);
	const background3 = await Canvas.loadImage("http://flat-icon-design.com/f/f_business_58/s256_f_business_58_2bg.jpg");
	ctx.drawImage(background3, 450, 0, 250, 250);
*/
  
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

  Canvas.registerFont("03_Smart_Font_UI.ttf", {family: "allfonts"});
  ctx.font = '28px allfonts';
	ctx.fillStyle = '#000000';
	ctx.fillText(`${member.guild.name}へようこそ！`, canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#000000';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

const createdAt =  moment(member.user.createdAt).tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss");  
	ctx.font = applyText(canvas, `123456789012345678901234567890`);
	ctx.fillStyle = '#000000';
	ctx.fillText(`ユーザーID: ${member.id}`, canvas.width / 2.5, canvas.height / 1.4);
	ctx.font = applyText(canvas, `123456789012345678901234567890`);
	ctx.fillStyle = '#000000';
	ctx.fillText(`アカウント作成日: ${createdAt}`, canvas.width / 2.5, canvas.height / 1.23);
	ctx.font = applyText(canvas, `123456789012345678901234567890`);
	ctx.fillStyle = '#000000';
	ctx.fillText(`メンバーカウント: ${member.guild.memberCount}`, canvas.width / 2.5, canvas.height / 1.1);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new discord.Attachment(canvas.toBuffer(), `userid-${member.id}--serverid--${member.guild.id}-welcome-image.png`);

	channel.send(`${member.guild.name}へようこそ!, ${member}`, attachment);
/*${member}*/
async.series([
  function(callback) {
    //処理1
    
    //…
    setTimeout(callback, 1000);
  }, function(callback) {
    //処理2
                const embed1 = new discord.RichEmbed()
                    .setAuthor(".io ゲームへ ようこそ！")
                    .setDescription(
                    "しかし、現状はほとんどのチャンネルが利用できないようになっています。\n"+
                    "<#560404647999963137> をよく読み、「アカウント登録」を済ませてからご参加ください。")
                    .setColor("#11FF00")
                    .setFooter(member.guild.name, member.guild.iconURL)
                    .setTimestamp()
                    	channel.send(embed1);
    //…
  }
], function(err, results) {
  if (err) {
    return console.log('err[' + err + ']');
  }
});
};
});

client.on('message', async message => {
      if (message.author.id == "352394784440320020") {
	if (message.content === 'io!join-join-543615084618842132') {
		client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}} 
});
     

client.on('guildMemberRemove', async member => {
if (member.guild.id === '543615084618842132'){
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {
    Canvas.registerFont("03_Smart_Font_UI.ttf", {family: "allfonts"});
    ctx.font = `${fontSize -= 10}px allfonts`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

	const channel = member.guild.channels.find(ch => ch.name === '📥ようこそ！・welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage("https://cdn.glitch.com/7771849c-5333-4ddb-99f1-f943ab602551%2Fimage.png?v=1565160783957");
	ctx.drawImage(background, 0, 0, 700, canvas.height);
/*
	const background1 = await Canvas.loadImage(member.guild.iconURL);
	ctx.drawImage(background1, 250, 0, canvas.width - 250, 500);
	const background2 = await Canvas.loadImage("http://flat-icon-design.com/f/f_business_58/s256_f_business_58_1bg.jpg");
	ctx.drawImage(background2, 225, 0, 250, 250);
	const background3 = await Canvas.loadImage("http://flat-icon-design.com/f/f_business_58/s256_f_business_58_2bg.jpg");
	ctx.drawImage(background3, 450, 0, 250, 250);
*/
  
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

  Canvas.registerFont("03_Smart_Font_UI.ttf", {family: "allfonts"});
  ctx.font = '28px allfonts';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.guild.name}が退出しました。`, canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

const createdAt =  moment(member.user.createdAt).tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss");  
	ctx.font = applyText(canvas, `123456789012345678901234567890`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`ユーザーID: ${member.id}`, canvas.width / 2.5, canvas.height / 1.4);
	ctx.font = applyText(canvas, `123456789012345678901234567890`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`アカウント作成日: ${createdAt}`, canvas.width / 2.5, canvas.height / 1.23);
	ctx.font = applyText(canvas, `123456789012345678901234567890`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`メンバーカウント: ${member.guild.memberCount}`, canvas.width / 2.5, canvas.height / 1.1);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new discord.Attachment(canvas.toBuffer(), `userid-${member.id}--serverid--${member.guild.id}-see-you-image.png`);

	channel.send(`${member.displayName}が退出しました。`, attachment);
async.series([
  function(callback) {
    //処理1
    
    //…
    setTimeout(callback, 1000);
  }, function(callback) {
    //処理2
                const embed1 = new discord.RichEmbed()
                    .setAuthor("退出...")
                    .setDescription(
                    `${member.displayName}さんが退出しました。ご利用ありがとうございました。`)
                    .setColor("#FF7525")
                    .setFooter(member.guild.name, member.guild.iconURL)
                    .setTimestamp()
                    	channel.send(embed1);
    //…
  }
], function(err, results) {
  if (err) {
    return console.log('err[' + err + ']');
  }
});
};
});
/*${member}*/

client.on('message', async message => {
      if (message.author.id == "352394784440320020") {
	if (message.content === 'io!remove-remove-543615084618842132') {
		client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
	}} 
});

client.on('message', message=>{
//.ioゲーム
if (message.guild.id === '543615084618842132'){
	console.log('にゃー');
    message.guild.channels.find("id","581651678642700332").setName(`メンバーカウント: ${message.member.guild.memberCount}`);
    message.guild.channels.find("id","581819606226829325").setName(`オンラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'online').size}`);
    message.guild.channels.find("id","581829557351481345").setName(`退席中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'idle').size}`);
    message.guild.channels.find("id","581829539328688147").setName(`取り込み中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'dnd').size}`);
    message.guild.channels.find("id","581827830967435274").setName(`オフラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`);
    message.guild.channels.find("id","581833625545474048").setName(`ボットカウント: ${message.guild.members.filter(member => member.user.bot).size}`);
    message.guild.channels.find("id","581834860126273556").setName(`ユーザーカウント: ${message.guild.members.filter(member => !member.user.bot).size}`);
}
});


//Discord bot token
if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );
