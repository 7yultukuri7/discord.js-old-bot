const { RichEmbed, discord } = require('discord.js');
const counter = function(str,seq){
    return str.split(seq).length - 1;
}

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
if (message.guild.id === '573350684372762624'){
if (11 <= counter(message.content,"\n")){
 console.log(message.content+":"+counter(message.content,"\n"));
        const embedada = new discord.RichEmbed()
          .setAuthor('1')
          .setDescription('11')
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setFooter(message.guild.name, message.guild.iconURL)
          .setTimestamp();
      message.channel.send("embedada");
};
};
  
};