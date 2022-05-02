const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**\<:poliencedogrulama:903323939089043496>  Üzgünüm Bu Komutu Kullanmak İçin `Kanalları Yönet` Yetkisine Sahip Değilsin!**");
let reason = args.slice(1).join(' ')
 
var kanal = message.mentions.channels.first() 


if (args[0] == "sıfırla") {
  db.delete(`önerikanal_${message.guild.id}`)
  return message.channel.send("\<:poliencedogrulama:903323939089043496>  **Önerilerin Gönderileceği Kanal Sıfırlandı!**")
} else if (!kanal) {
  return message.channel.send("\<:poliencedogrulama:903323939089043496>  **Lütfen Bir Kanal Etiketle!**")
} else {
  db.set(`önerikanal_${message.guild.id}`, kanal.id)
  return message.channel.send(`\<:poliencedogrulama:903323939089043496>  **Önerilerin Gönderileceği Kanal ${kanal} Olarak Ayarlandı!**\n\n\<:poliencedogrulama:903323939089043496> Öneri Kanalını Sıfırlamak İçin; ***önerikanal sıfırla**`)
}

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["istekayarla","önerikanal"],
 permLevel: 4
}
exports.help = {
 name: 'öneriayarla',
 description: 'ö',
 usage: 'ö'
}