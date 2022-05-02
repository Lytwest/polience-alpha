const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.public`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **> \<a:silah:872719436799442964> **6** Saat Arayla Kullanılabilir.**`)).then(m => m.delete({timeout: 6000}));
data.set(`${message.author.id}.zaman.public`, Date.now()+ms('6h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **\<a:silah:872719436799442964>  DM'den Gönderdim,DM Kutunu Kontrol Et!**`));
message.author.send(`> \<a:silah:872719436799442964> **1** Tane J4J Teması Mevcut! ^^

> 😇 İyi Günlerde Kullan! \<a:silah:872719436799442964> 

https://discord.new/JC9Hc2PryRAn`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("> \<a:silah:872719436799442964> Mesaj Gönderemedim,Büyük Olasılıkla DM Kutun Kapalı .d")));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'j4jtema'
};