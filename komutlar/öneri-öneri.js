const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 
    var ökanal = await db.fetch(`önerikanal_${message.guild.id}`)
    var önerikanalı = message.guild.channels.cache.find(channel => channel.id === ökanal)
    if (!ökanal) return message.channel.send("\<:poliencekapali:909451596520390698>    **Maalesef ki Öneri Kanalı Ayarlanmamış.** \<:poliencehediye:903323941014212699> **Örnek:** **+önerikanal #kanal** ")

var oneri = args.join(" ").slice(0)
if (!oneri) {
    message.channel.send("**\<:polienceetiket:903323940015984660> Yanlış Kullandın Ama Yardımcı Olayım; ** \n \<:poliencehediye:903323941014212699>   **Örnek:** **+öneri** Sunucuya Yeni Komutlar Eklensin.")
  
  return
} else {
    const embed = new Discord.MessageEmbed()
    .setTitle("Yeni Bir Öneri Var!")
    .addField("\<:polienceduyuru:903323941391728701>  Öneren Kullanıcı:", `${message.author.tag}`)
    .addField(`\<:polienceetiket:903323940015984660>  Öneri:`, oneri)
  .setColor("WHITE")
     .setTimestamp()
.setImage('https://media.discordapp.net/attachments/892799946527502356/905808490264662056/image0-1-1-1-1-2.gif')
.setThumbnail(client.user.displayAvatarURL()) 
.setFooter(`Poliéncé Öneri Sistemi`)
    
önerikanalı.send(embed).then(m => {
    m.react("\<:onay:832524834315042826> ")
    m.react("\<:red:832524822483173387> ")})
}

  message.channel.send(`\<:poliencedogrulama:903323939089043496>   **Öneriniz Başarıyla Gönderildi!** \n \<:poliencedogrulama:903323939089043496>  Önerin ${önerikanalı} Kanalına Gönderildi!`)

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["istek"],
 permLevel: 0
}
exports.help = {
 name: 'öneri',
 description: 'ö',
 usage: 'ö'
};