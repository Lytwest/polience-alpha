const Discord = require('discord.js')
exports.run = function(client, message, args) {

let user = message.author
const embed = new Discord.MessageEmbed()
.setTimestamp()
.setDescription(`**${user.username} Tokenimi İstemişsin,Al Sana Token;**`)
.setImage('https://cdn.discordapp.com/attachments/718426718490329210/815971992410521620/fcd1bf40ff299e5e7fdcdf2bdccca15f.jpg')
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["token"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tokenv2'
  };