const discord = require('discord.js');
const config = require("/app/config");

module.exports = (client, message) => {
if (message.guild.id === '543615084618842132'){
    if (message.author.id == "159985870458322944" || message.author.id == "352394784440320020") {//me6
  const args = message.content.slice(config.prefix).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
   if(message.content.startsWith("io!levelup")) {
      const tx = args.join(' ');
        var embedabout = new discord.RichEmbed()
           .setAuthor("レベルアップ！")
           .setDescription("<@"+args[1].replace(/[\\<>@#&!]/g, "")+"> さん、レベル `"+args[0]+"` に上がっています！！！")
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setFooter(message.guild.name, message.guild.iconURL)
          .setTimestamp()
      message.channel.send(embedabout);
     const memberid = message.guild.members.get(args[1].replace(/[\\<>@#&!]/g, ""));
        switch (args[0]) {
          case "1": 
            memberid.addRole("543616130149908540").catch(console.error);
            ; break
          case "5": 
            memberid.addRole("543616135527137300").catch(console.error);
            ; break    
          case "10": 
            memberid.addRole("543616146922799115").catch(console.error);
            ; break     
          case "15": 
            memberid.addRole("543616134331629568").catch(console.error);
            ; break     
          case "20": 
            memberid.addRole("543616132813422628").catch(console.error);
            ; break     
          case "25": 
            memberid.addRole("543616131299147778").catch(console.error);
            ; break    
}
        message.delete(10000)
      }
}
}
};