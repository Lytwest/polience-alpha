//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require("discord.js");
const db = require("orio.db");
exports.run = async(client, message, args) => {
var sunucu = client.guilds.cache.get("760511134079254619" /*SUNUCU ID*/)
var kişi = sunucu.members.cache.get(message.author.id)
if(!kişi) return message.channel.send({embed: {description: "Bu komutu kullanmak için sunucumuzda bulunmalısın!"}})
};
exports.conf = {
aliases: [],
permLevel: 0
};
exports.help = {
name: "komut"
};

exports.run = (client, message) => {
let prefix = client.ayarlar.prefix
      
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`✾ Selam Ben Poliéncé Burada Komutlarımı Görebilirsin :3`, client.user.avatarURL())
.setColor('#0044ff')
 .setDescription(`
\<a:nokta:830441156151214090> **Yeni Komutlar**
Botun Arayüzü ve Komutları Baştan Aşağıya Değişti,Keyifle Kullanabilirsiniz.
`)
.addField(`\<a:ileriok:836115367910834206>   **YouTube Oynatıcı**`,` \YouTube'u Açmak İçin ***oynat KANALID YouTube** Yazabilirsin.`,true)
.addField(`\<a:ileriok:836115367910834206>   **Fishington**`,`\ Fishington'u Açmak İçin ***oynat KANALID Fishington** Yazabilirsin.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Betrayal**`,`\Betrayal'ı Açmak İçin ***oynat KANALID Betrayal** Yazabilirsin.  `,true)
.addField(`\<a:ileriok:836115367910834206>  **Poker**`,`\Poker'i Açmak İçin ***oynat KANALID Poker** Yazabilirsin. `,true)
.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png',true)
	.setFooter(`⚡ powered by Poliéncé ~ https://discord.gg/nQAfHPK2bK`)
.setTimestamp();
  message.react("\<a:beyaztik:861361647925723147>")

 message.channel.send(eklenti) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'aktivite',   
  description: '',
  usage: ''
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
