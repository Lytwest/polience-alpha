//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require("discord.js");
const db = require("orio.db");

exports.run = async (client, message, args) => {
let prefix = client.ayarlar.prefix
      
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`✾ Selam Ben Poliéncé Burada Komutlarımı Görebilirsin :3`, client.user.avatarURL())
.setColor('#0044ff')
 .setDescription(`
\<a:nokta:830441156151214090> **Yeni Komutlar**
Botun Arayüzü ve Komutları Baştan Aşağıya Değişti,Keyifle Kullanabilirsiniz.
`)
.addField(`\<a:ileriok:836115367910834206>   **Profil İnceleme**`,` \Profil İncelemek İçin ***profil** Yazabilirsin.`,true)
.addField(`\<a:ileriok:836115367910834206>  **Bug Bildirme**`,`\ Bug Bildirmek İçin ***bugbildir <bug>** Yazabilirsin.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Sunucu Bilgi**`,`\Sunucu Bilgisi İçin ***sunucubilgi** Yazabilirsin.  `,true)
.addField(`\<a:ileriok:836115367910834206>   **Kullanıcı Bilgi**`,`\Kullanıcı Bilgisi İçin ***kb** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>   **İstatistik**`,`\Bot İstatistikleri İçin ***botbilgi** Yazabilirsin. `,true)
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
  name: 'kullanıcı',   
  description: '',
  usage: ''
};
//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
