//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require('discord.js');
exports.run = (client, message, args) => {   

 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('\<a:yldz:758934530844524554> Lütfen Cilt Adı Belirtiniz. | **Poliéncé**')
 if (mesaj == member) {
   message.channel.send('\<a:yldz:758934530844524554> Lütfen Cilt Adı Belirtiniz. | **Poliéncé**')
 } else {
 const pulseproject = new Discord.MessageEmbed()
   .setTitle(`Poliéncé - Minecraft Premium Cilt Bilgileri`)
   .setDescription(`
   \<a:resmi:830441166704869388>  Cilt Bilgileriniz Yanda Yer Almaktadır. **>>>>>>>>>**
   \<a:resmi:830441166704869388>  Eğer Cildiniz (Skin) Gözükmüyorsa Premium Değildir.
   \<a:resmi:830441166704869388>  Premium Olup da Gözükmüyor İse Kontrol Ediniz.
   \<a:resmi:830441166704869388> **MuntineHQ - Cilt Sistemi**`)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
   .setThumbnail(body)
   .setFooter(`Poliéncé - AtlantisNetwork Minecraft Sunucusu | API İle Güncellenmektedir.`)

 message.channel.send(pulseproject);
 }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  permLevel: 0
};

exports.help = {
  name: "mcskin"
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
