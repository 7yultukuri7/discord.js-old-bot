// Response for Uptime Robot(アップタイムロボットに対する応答)
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now');
}).listen(3000);

// Discord bot implements(Discord botを実装する)
const discord = require('discord.js');
const client = new discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js');
const async = require('async');
const { prefix } = require('./config.json');
const fs = require("fs");
let messagesu = JSON.parse(fs.readFileSync("./messagesu.json", "utf8"));
let banmessagesu = JSON.parse(fs.readFileSync("./banmessagesu.json", "utf8"));
let GCcommands = 0;

client.on('ready', message =>
{
	console.log('bot is ready!(ボットの準備はできています！)');
  client.user.setActivity('24時間起動中! .ioゲーム discord.js')
});

client.on('message', message =>{
  
//完全一致
if (message.content === `${prefix}ping`) {
	message.channel.send('Pong.');
} else if (message.content === `${prefix}beep`) {
	message.channel.send('Boop.');
}
  
//スタートが一致
if (message.content.startsWith(`${prefix}ping`)) {
	message.channel.send('Pong.S');
} else if (message.content.startsWith(`${prefix}beep`)) {
	message.channel.send('Boop.S');
}

//コマンド

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (command === 'user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (command === 'info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		} else if (args[0] === 'ioゲーム') {
  		return message.channel.send('準備中');
  	}

		message.channel.send(`First argument: ${args[0]}`);
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		message.channel.send(avatarList);
	} 
  
});

client.on('message', message=>{
	console.log('にゃー');
    message.guild.channels.find("id","581651678642700332").setName(`メンバーカウント: ${message.member.guild.memberCount}`);
    message.guild.channels.find("id","581819606226829325").setName(`オンラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'online').size}`);
    message.guild.channels.find("id","581829557351481345").setName(`退席中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'idle').size}`);
    message.guild.channels.find("id","581829539328688147").setName(`取り込み中ユーザー: ${message.guild.members.filter(member => member.presence.status === 'dnd').size}`);
    message.guild.channels.find("id","581827830967435274").setName(`オフラインユーザー: ${message.guild.members.filter(member => member.presence.status === 'offline').size}`);
    message.guild.channels.find("id","581833625545474048").setName(`ボットカウント: ${message.guild.members.filter(member => member.user.bot).size}`);
    message.guild.channels.find("id","581834860126273556").setName(`ユーザーカウント: ${message.guild.members.filter(member => !member.user.bot).size}`);
});


client.on('message', message => {

  let args = message.content.trim().split(/ +/g);
  let command = args.shift();
  
  /*メッセージカウント*/
  let Mchannelid;
  let Mok = 0;
  if(message.content == prefix + "m setup"){
    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == '352394784440320020'){
  let server = message.guild;
        server.createChannel(`MessageCount: 0`, 'voice', [{
            id: message.guild.id, //@everyone
            deny: ['CONNECT']
        }]).then(channel => {
          Mchannelid = channel.id;
          //let category = server.channels.find(c => c.id ==
            //'543954520867340318' && c.type == "category");
          //if(!category) throw new Error("Category channel does not exist");
         // channel.setParent(category.id);
          Mok = 1;
          if(Mok == 1){
            messagesu.push({
              "channelid"    : Mchannelid,
              "messagecount" : 0,
              "guildname"    : message.guild.name,
              "guildid"      : message.guild.id,
              "messagename"  : "Message Count"
            });
            Mok = 0;
          }
          fs.writeFile("./messagesu.json", JSON.stringify(messagesu), (err) => {
            if(err) console.error(err)
          });
          message.reply("作成しました。この機能は管理者権限が必須となります、動かない場合は管理者権限を与えてください");
        }).catch(
          e => message.channel.send("エラーが発生しました、チャンネルを作成する権限があるかどうか確認してください")
        );
    }else{
      message.channel.send("管理者権限を持ってる人のみ実行可能です");
    }
  }
  
  
  if(!banmessagesu[message.channel.id]) banmessagesu[message.channel.id] = {
    banmessage : 0
  }
  let BCM = banmessagesu[message.channel.id];
  if(message.content == prefix + "m cban"){
    if(message.member.hasPermission("ADMINISTRATOR")){
    if(BCM.banmessage == 0){
      BCM.banmessage = 1;
      message.channel.send("<#" + message.channel.id + ">をメッセージカウント無効にしました");
    }else{
    BCM.banmessage = 0;
      message.channel.send("<#" + message.channel.id + ">をメッセージカウント有効にしました");
    }
    }else{
      message.channel.send("管理者権限を持ってる人のみ実行可能です");
    }
  }
  let MCok = 1;
  if(BCM.banmessage == 0){
    for(let abc in messagesu){
      MCok = 1;
     // let MC;
      if(messagesu[abc].guildid == message.guild.id && client.channels.get(messagesu[abc].channelid)){
        //message.channel.send("てすと");
        MCok = 0;
       // MC = client.channels.get(messagesu[abc].channelid);
      }else{
        //message.channel.send("テストで");
      }
        
      if(messagesu[abc].guildid == message.guild.id && MCok == 0){
        messagesu[abc].messagecount++;
        MCok = 1;
      }
    }
  }
  
  for(let bbb in messagesu){
    if(client.channels.get(messagesu[bbb].channelid)){
      //messagesu[bbb].guildid = 1;
      let CGGG = client.channels.get('591886142014750721');
      //CGGG.send(messagesu[bbb].guildname + "を削除しました");
    }
  }
  
  
  for(let abc in messagesu){
    
    let MC;
    if(client.channels.get(messagesu[abc].channelid) == false){
      messagesu[abc].guildid = 0;
    }
    if(client.channels.get(messagesu[abc].channelid)){
    if(messagesu[abc].guildid == message.guild.id){
      MC = client.channels.get(messagesu[abc].channelid);
      MC.edit({
        name: messagesu[abc].messagename +": " + messagesu[abc].messagecount
      })
    }else{
      //message.channel.send("エラー"); 
    }
    }
  }
  
  
  let okok;
  let Mname = 0;
  for(let cccc in messagesu){
    okok = 0;
    if(messagesu[cccc].guildid == message.guild.id && client.channels.get(messagesu[cccc].channelid)){
      okok = 1;
      if(messagesu[cccc].guildid == message.guild.id && MCok == 1){
        Mname = messagesu[cccc];
        okok = 0;
      }
    }  
  }
  
  
  if(command == prefix + "mname"){
    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == '352394784440320020'){
      if(Mname !== 0){
      if(args[0]){
        if(args[1]){
          if(args[2]){
            if(args[3]){
              if(args[4]){}else{
                message.channel.send("```"+`${args[0]} ${args[1]} ${args[2]} ${args[3]}: 数値`+"```に変更しました");
                Mname.messagename = `${args[0]} ${args[1]} ${args[2]} ${args[3]}`;
              }
            }else{
              message.channel.send("```"+`${args[0]} ${args[1]} ${args[2]}: 数値`+"```に変更しました");
              Mname.messagename = `${args[0]} ${args[1]} ${args[2]}`;
            }
          }else{
            message.channel.send("```"+`${args[0]} ${args[1]}: 数値`+"```に変更しました");
            Mname.messagename = `${args[0]} ${args[1]}`;
          }
        }else{
          message.channel.send("```"+`${args[0]}: 数値`+"```に変更しました");
          Mname.messagename = `${args[0]}`;
        }
      }
      }else{
        message.channel.send("変更できるメッセージチャンネルが見つかりませんでした");
      }
    }else{
      message.channel.send("管理者権限を持っている人のみ実行可能です");
    }
  }
  
});
  fs.writeFile("./messagesu.json", JSON.stringify(messagesu), (err) => {
    if(err) console.error(err)
  });
//Discord bot token
if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set(設定してください) ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );
