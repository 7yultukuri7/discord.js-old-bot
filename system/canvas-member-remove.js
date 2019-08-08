const discord = require('discord.js');
const Canvas = require('canvas');
const moment = require("moment-timezone");
const async = require('async');

module.exports = async (client, message, member) => {
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
};