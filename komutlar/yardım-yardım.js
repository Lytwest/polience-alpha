//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require("discord.js");
const db = require("orio.db");
exports.run = async(client, message, args) => {
var sunucu = client.guilds.cache.get("751404001614102568" /*SUNUCU ID*/)
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
.addField(`\<a:ileriok:836115367910834206>  **Moderasyon Komutları**`,` \Moderasyon Komutlarına Erişmek İçin ***moderasyon** Yazabilirsin.`,true)
.addField(`\<a:ileriok:836115367910834206>   **Aktivite Komutları ON**`,`\ Discord'a **BETA** Olarak Eklenen Özellikler İçin ***aktivite** Yazabilirsin.\ `,true)
.addField(`\<a:ileriok:836115367910834206>  **Kullanıcı Komutları**`,`\Kullanıcı Komutlarına Erişmek İçin ***kullanıcı** Yazabilirsin.  `,true)
.addField(`\<a:ileriok:836115367910834206>   **Sistem Komutları**`,`\Öneri ve Destek Sistemi Gibi Özellikler İçin ***sistem** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>   **Eğlence Komutları**`,`\Eğlence ve Daha Fazlası İçin ***eğlence** Komutunu Kullan.\` `,true)
.addField(`\<a:ileriok:836115367910834206>   **Akinatör Komutları**`,`\Akinatör Sistemine Erişmek İçin ***akisistem** Komutunu Kullan.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Davet Komutları**`,`\Davet Sistemini Kurmak İçin ***davet** Komutunu Kullan.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Çekiliş Komutları**`,`\Çekiliş Sistemi Gibi Özellikler İçin ***çekiliş** Yazabilirsin.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Karantina Komutları**`,`\Jail mi Lazım? ***jail** Tam da Sana Göre.\ `,true)
.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png',true)
	.setFooter(`⚡ powered by Poliéncé ~ https://discord.gg/nQAfHPK2bK`)
.setTimestamp();
  message.react("\<a:beyaztik:861361647925723147>")

 message.channel.send(eklenti) 

};
exports.conf = {
name: "yardım",
  aliases: ['help','yardım','poliéncé']
}


exports.help = {
  name: "helpssdsfdsf",
  category: "helpsasdf",
  description: "helpdsf"
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
