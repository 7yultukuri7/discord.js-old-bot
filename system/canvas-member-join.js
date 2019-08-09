const discord = require('discord.js');
const Canvas = require('canvas');
const moment = require("moment-timezone");
const async = require('async');

module.exports = async (client, member) => {
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