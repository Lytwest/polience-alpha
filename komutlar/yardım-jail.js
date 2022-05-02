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
.addField(`\<a:ileriok:836115367910834206>   **Jail Log Açma**`,` \Log Kanalını Açmak İçin ***jail-log #kanal** Yazabilirsin.`,true)
.addField(`\<a:ileriok:836115367910834206>   **Jail Yetkili Rolü**`,`\ Yetkili Rolünü Ayarlamak İçin ***jail-yetkili-rol @Rol** Yazabilirsin.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Jail Karantina Rolü**`,`\Karantina Rolünü Ayarlamak İçin ***jail-karantina-rol @Rol** Yazabilirsin.  `,true)
.addField(`\<a:ileriok:836115367910834206>   **Jail Kullanımı**`,`\Jail Komutunu Kullanmak İçin ***karantina @Kullanıcı** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>   **Jail Kaldırma**`,` \Kullanıcıyı Karantinadan Kaldırmak İçin ***jail-kaldır @Kullanıcı** Yazabilirsin.`,true)
.addField(`\<a:ileriok:836115367910834206>   **Diğer Komutlar**`,`\Başka Komutlar mı Lazım, ***diğer** Tam da Sana Göre.\ `,true)
.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png',true)
	.setFooter(`⚡ powered by Poliéncé ~ https://discord.gg/nQAfHPK2bK`)
.setTimestamp();
  message.react("\<a:beyaztik:861361647925723147>")

 message.channel.send(eklenti) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jailsistemi','jail-sistem'],
  permLevel: 0
};

exports.help = {
  name: 'jail',   
  description: '',
  usage: ''
};
