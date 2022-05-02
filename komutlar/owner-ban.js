const Discord = require('discord.js');
exports.run = async (client, message, args) => {
     if (message.author.id !== "847828666671038464") return message.channel.send("\<a:yldz:758934530844524554> Bu **Ban** Komutu Sadece Geliştirici Ekibi Tarafından **Güvenlik** İçin Kullanabilir.");
  
 let kullanici = message.mentions.users.first()
 if(!kullanici) return message.channel.send("> \<a:yldz:758934530844524554> Banlanacak Kişiyi Etiketleyin.")

const embed = new Discord.MessageEmbed()
.setTitle(`\<a:yldz:758934530844524554> ${kullanici.tag} Adlı Kullanıcıyı Başarıyla Banladım!`)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
message.channel.send(embed)
  message.guild.members.ban(kullanici)
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    kategori: "moderasyon",
    };
      
    exports.help = {
        name: 'ban2',
        description: 'ban2',
        usage: 'ban2',
    
    };