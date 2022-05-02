//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require("discord.js");
const db = require("orio.db");

exports.run = (client, message) => {

let addent = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/880755255497867274/885222446964277248/poliencepp.png")
.addField("__**Botun İstatistik Verileri**__", `\<a:ileriok:836115367910834206>  **Toplam Sunucu Sayısı** **|**  **${client.guilds.cache.size}** 
\n \<a:ileriok:836115367910834206>  **Toplam Kullanıcı Sayısı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** 
\n  \<a:ileriok:836115367910834206>  **Toplam Kanal Sayısı** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştirici Bilgileri**__", `\ \<a:ileriok:836115367910834206>   **Geliştiriciler**  
<@847828666671038464> <@348927498488250369>  \n`)
.addField("__**Bot Sistem Bilgileri**__", `\<a:ileriok:836115367910834206>  **İşlemci & Ram**  
AMD Ryzen 5 3600X **|** 6144MB Ram  \n`)
.addField("__**Botun JavaScript Sürümleri**__", `\<a:ileriok:836115367910834206>  **Discord.js Sürümü** **|**  **v${Discord.version}** 
\n \<a:ileriok:836115367910834206>   **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikme & Ping [MS]**__", `\<a:ileriok:836115367910834206>  **${client.ws.ping}** *ms* TR Sunucusu`,true)
.addField("**__Sponsor:__**", `\ \<a:RainbowSonsuzGif:758921799873724426> **Pulse Art & Design** **|** *PoliéncéCloud™*`)
	.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png')
.setColor('#0044ff')
message.channel.send(addent)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["botbilgi", "botbilgi"]
};

exports.help = {
  name: "botbilgi",
  description: "Bot Bilgi Kanalı",
  usage: "info"
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
