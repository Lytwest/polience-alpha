const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir Hata Oluştu!').setDescription(`\<a:silah:872719436799442964> Bu Komutu Kullanmak İçin **Moderasyon** İzinlerine Sahip Olman Gerekiyor!`));
  if(!message.mentions.channels.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setTitle('Bir Hata Oluştu!').setDescription('\<a:nokta:830441156151214090> Kanal Etiketleyiniz. **Örnek:** ***jail-log #jail-log**'));
  let mentionChannel = message.mentions.channels.first();
  data.set(`jail.log.${message.guild.id}`, mentionChannel.id);
  message.channel.send(new Discord.MessageEmbed().setTitle('Sistemi Başarıyla Ayarladın!').setDescription(`\<a:nokta:830441156151214090> Jail Log Kanalını Başarıyla ${mentionChannel} Olarak Ayarladın!`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-log'
};