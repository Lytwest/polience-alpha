//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const pulseproject = new Discord.MessageEmbed()
  .setTitle("Gecikme Süremi Ölçtüm!")
  .setDescription(`\<a:arma:836113872821289010>  Bot Gecikme Süresi: ${client.ws.ping} ms`)
  message.channel.send(pulseproject)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
 usage: '!ping Pulse'
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
