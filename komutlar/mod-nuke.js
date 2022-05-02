//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const pulseproject = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription('`Yetersiz Yetki!`')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(pulseproject)

let channel = message.mentions.channels.first() || message.channel;

const uyg = new Discord.MessageEmbed()
.setColor("YELLOW")
.setDescription("🦋 Hızlıca Uygulanıyor,Lütfen Bekleyiniz.")
 message.channel.send(uyg);
  
  const nuke = new Discord.MessageEmbed()
    .setAuthor(`Yeniden Oluşturma İşlemi Başarılı ✅`)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
    .setTimestamp()
    .setFooter("Poliéncé - Tüm Hakları Saklıdır.")
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send(nuke);
});
}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
