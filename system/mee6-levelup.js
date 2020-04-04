const discord = require('discord.js');
const config = require("/app/config/main.js");

module.exports = (client, message) => {
if (message.guild.id === '543615084618842132'){
    if (message.author.id == "159985870458322944" || message.author.id == "352394784440320020") {//me6
  const args = message.content.slice(config.prefix).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
   if(message.content.startsWith("io!levelup")) {
      const tx = args.join(' ');
        var embedabout = new discord.MessageEmbed()
           .setAuthor("レベルアップ！")
           .setDescription("<@"+args[1].replace(/[\\<>@#&!]/g, "")+"> さん、レベル `"+args[0]+"` に上がっています！！！")
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setFooter(message.guild.name, message.guild.iconURL())
          .setTimestamp()
      message.channel.send(embedabout);
     const memberid = message.guild.members.cache.get(args[1].replace(/[\\<>@#&!]/g, ""));
        switch (args[0]) {
          case "1": 
            memberid.roles.add("543616130149908540").catch(console.error);
            ; break
          case "5": 
            memberid.roles.add("543616135527137300").catch(console.error);
            ; break    
          case "10": 
            memberid.roles.add("543616146922799115").catch(console.error);
            ; break     
          case "15": 
            memberid.roles.add("543616134331629568").catch(console.error);
            ; break     
          case "20": 
            memberid.roles.add("543616132813422628").catch(console.error);
            ; break     
          case "25": 
            memberid.roles.add("543616131299147778").catch(console.error);
            ; break    
          case "30": 
            memberid.roles.add("543616128354877441").catch(console.error);
            ; break    
          case "35": 
            memberid.roles.add("543618423108927530").catch(console.error);
            ; break    
          case "40": 
            memberid.roles.add("543618416657825795").catch(console.error);
            ; break    
          case "45": 
            memberid.roles.add("543618414065877002").catch(console.error);
            ; break    
          case "50": 
            memberid.roles.add("543618418662834177").catch(console.error);
            ; break    
}
        message.delete({ timeout: 5000, reason: 'mee6 levelup message delete' })
      }
}
}
};