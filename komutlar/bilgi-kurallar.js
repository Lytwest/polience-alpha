//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require("discord.js");

exports.run = (client, message, guild) => {
  const pulseproject = new Discord.MessageEmbed()

    
.setColor('A18A62')
    .setAuthor("❃ Poliéncé Sunucu Kuralları")
    .setDescription(
      ""
    )
    .addField("\<a:resmi:830441166704869388>   Küfür", "**Herhangi Birine Küfür,Ailevi Küfür,Hakaret Etmek Yasaktır!**")
    .addField("\<a:resmi:830441166704869388>   Reklam", "**Herhangi Bir İnternet Sitesinin,Discord Serverinin Linkini Atmak Yasaktır!**")
    .addField("\<a:resmi:830441166704869388>    Ticaret", "**Oyun Hesabı vb. Satışı Yapmak Yasaktır!**")
    .addField("\<a:resmi:830441166704869388>   Spam", "**Herhangi Bir Odada Spam Ya Da Flood Yapmak Yasaktır!**")
    .addField("\<a:resmi:830441166704869388>   Siyaset / Din / Irk Ayrımcılığı", "**Siyasi Konuşmalar Dil / Din / Irk Ayrımcılığı Yapmak Yasaktır!**")
    .addField("\<a:resmi:830441166704869388>   Yetkili Gibi Davranmak", "**Sunucuda Yetkinizin Olmadığı Halde Yetkili Gibi Davranmak Yasaktır**")
    .addField("\<a:resmi:830441166704869388>   Rahatsız Etmek", "** Herhangi Bir İnsanın Hoşlanmadığı Birşeyi Yapmak Yasaktır!**")
    .addField("\<a:resmi:830441166704869388>   Ses", "**Sesli Odalarda Bass Açmak,Küfürlü Şarkılar Açmak Yasaktır!**")
    .addField("\<a:resmi:830441166704869388>   +18", ("**Sohbet'te +18 Şeyler Konuşmak Yasaktır!**")
    )
    .setThumbnail("https://cdn.discordapp.com/attachments/880755255497867274/885222446964277248/poliencepp.png")
	.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png')
.setColor('#0044ff')
    
    .setFooter("❃ Poliéncé");

  message.channel.send(pulseproject);
};

exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["rules, kurallar"],
  permlevel: 0
};

exports.help = {
  name: "kurallar",
  description: "kurallar",
  usage: "kurallar"
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

