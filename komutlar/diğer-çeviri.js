const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.reply("\<a:beyaztik:861361647925723147> Sanırım Hata Mevcut!")
  if(!google) return message.reply("\<a:beyaztik:861361647925723147> **Çevirmek İstediğin Kelimeyi ya da Cümleyi Yazmalısın.**")
        let embed = new Discord.MessageEmbed()
    
    .setColor("0xe2ff00")
    .setTimestamp()
    
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
.setFooter('Poliéncé Çeviri ~ powered by Google Translate')    
          
    message.channel.send(embed);

  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çeviri'],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
};