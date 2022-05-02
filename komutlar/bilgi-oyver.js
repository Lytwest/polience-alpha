//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require("discord.js");
const db = require("orio.db");


exports.run = (client, message) => {
let prefix = client.ayarlar.prefix
      
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Poliéncé'ın DBL Serüvenine Sende Katıl!`, client.user.avatarURL())
.addField(`**\<a:golemcik:855790526493229106>    » Discord Bot List (Top.gg)**`,`**[Oy Ver](https://top.gg/bot/834768434574786561/vote)**\``,true)
.addField(`**\<a:kral:853925691141128215>   » DBL Profiline Gitmek İçin:**`,`**[Profilim](https://top.gg/bot/834768434574786561)**\``,true)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
 message.channel.send(eklenti) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyver',   
  description: '',
  usage: ''
};




