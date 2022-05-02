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
.setAuthor(`✾ Poliéncé Açık BETA Premium Sistemi`, client.user.avatarURL())
.setColor('AQUA')
.setTitle("Premium Sistemi Nedir?")
 .setDescription(`
🚀 **Premium Harika!**
**4₺** Olarak Aylık, **40₺** Olarak da Sınırsız **Premium** Edinin!
`)
.addField(`\<a:nokta:830441156151214090>   **Sunucu Özel Komutlar**`,` \**Selam,Hoşgeldin** Gibi Oto Cevap Komutlarını Kullanabilirsin.`,true)
.addField(`\<a:nokta:830441156151214090>  **Özel Kayıt Sistemi**`,`\**Butonlu Kayıt Sistemi** İle Basitçe Kayıt Yapma İmkanına Sahip Ol.`,true)
.addField(`\<a:nokta:830441156151214090>  **BETA Kullanıcı**`,`\ Özel Kanalda Söyleyeceğimiz Komutları Önceden **Deneme Hakkı** Kazan.\ `,true)
.addField(`\<a:nokta:830441156151214090>   **Özel Sunucu Rolü**`,`\Botun Destek Sunucusunda Özel **Premium** Rolüne Sahip Ol. `,true)
.addField(`\<a:nokta:830441156151214090>  **Premium Listesi**`,`\Premium Satın Alanlar Listesine **Adını Koyma** Şansını Yakala.`,true)
.addField(`\<a:nokta:830441156151214090>  **[YAKINDA] Özel Bot**`,`\Poliéncé'ın **Premium** Sürümünü Sununa Ekleme Şansı (Sana Ayarlı)\ `,true)
	.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png',true)
	.setTimestamp();
  message.react("\<a:beyaztik:861361647925723147>",)

 message.channel.send(eklenti) 

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'premium',   
  description: '',
  usage: ''
};
//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
