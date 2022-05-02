const Discord = require('discord.js')

exports.run = async (cleint, message, bot, args) => {

let sadecebot = message.guild.members.cache.filter(m => m.user.bot).size;
let sadeceüye = message.guild.memberCount;
let totalüye = sadeceüye - sadecebot;

const kullanıcıdurumu = new Discord.MessageEmbed()

	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
.setDescription(`
\<:online:759436630867050507>  Aktif Modunda Olanlar: **${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}**
\<:bota:759436592757866566>  Boşta Modunda Olanlar: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** 
\<:rahatszetmeyin:759436631169171456> Rahatsız Etmeyin Modunda Olanlar: **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** 
\<:yaynda:759436636072312962>  Toplam Bot Sayısı: **${sadecebot}**  
\<:offline:881233691261665280>  Toplam Çevrimdışı Sayısı: **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** 
\<a:siyahtik:826968830848270376> Toplam Kullanıcı Sayısı: ${totalüye}
`)
.setFooter(`powered by Poliéncé ~ Celestia <3 Libertus`)
message.channel.send(kullanıcıdurumu)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['üye-durum','sunucuüye','sunucu-durum','kullanıcıistatistik','sunucuistatistik','üyebilgi','üye-bilgi'],
    permLevel: 0
}
exports.help = {
    name: "üyedurum",
     description: 'Sunucudaki kullanıcı istatistiklerini sergiler.',
    usage: 'üyedurum',
}