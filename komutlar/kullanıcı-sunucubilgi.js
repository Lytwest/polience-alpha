//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require("discord.js");

exports.run = (client, message) => {
  let pulseproject = new Discord.MessageEmbed()
    .setAuthor("Sunucu Bilgi", message.guild.iconURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/880755255497867274/885222446964277248/poliencepp.png")
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
    .addField("\<a:siyahtik:826968830848270376>   Sunucu İsmi", message.guild.name)
    .addField("\<a:siyahtik:826968830848270376>   Sunucu ID'si", message.guild.id)
    .addField("\<a:siyahtik:826968830848270376>   Sunucu Bölgesi", message.guild.region)
    .addField(
      "\<a:beyaztik:861361647925723147>   Roller:",
      message.guild.roles.cache.map(role => role.name).join(", "),
      true
    )
    .addField("\<a:kirmizitik:861361656209735681>    AFK kanalı:", `${message.guild.afkChannel}`, true)
    .addField("\<a:kirmizitik:861361656209735681>    AFK zaman aşımı:", message.guild.afkTimeout, true)
    .addField("\<a:kirmizitik:861361656209735681>    Oluşturma tarihi:", message.guild.createdAt, true)
    .setTimestamp()
    .setFooter("Poliéncé Sunucu Bilgi", message.guild.iconURL());

  return message.channel.send(pulseproject);

};

module.exports.conf = {
  aliases: ["sunucu-bilgi"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "sunucu-bilgi",
  description: "",
  usage: "sunucu-bilgi"
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
