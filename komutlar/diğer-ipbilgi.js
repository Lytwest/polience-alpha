const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send(`\<a:yldz:758934530844524554>  ${message.author} Sunucu IP Adresini Yazınız.`)
    const API = await fetch(`http://mcapi.tc/?${args[0]}/json`)
    const Data = await API.json();
    if (Data.status === "offline") {
        const embed2 = new Discord.MessageEmbed()
            .setColor("AQUA")
            .setAuthor(args[0])
            .setDescription(`\<a:yldz:758934530844524554>  Girdiğiniz IP'deki Sunucu Aktif Değildir,Tekrar Deneyiniz.`)
            .setFooter("Poliéncé");
        message.channel.send(embed2)
    } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(args[0])
            .addField(`\<a:yldz:758934530844524554>  Sunucu IP Adresi`, Data.hostname, true)
            .addField(`\<a:yldz:758934530844524554>  Ping`, Data.ping, true)
            .addField(`\<a:yldz:758934530844524554>  Oyuncu Sayısı`, `${Data.players}/${Data.max_players}`, true)
            .addField(`\<a:yldz:758934530844524554>  Versiyon`, Data.version, true)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
            .setFooter("Poliéncé IP Bilgi Sistemi - PLAPI 7/24");
        message.channel.send(embed)
    }

};
exports.conf = {
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: 'ipbilgi',
};