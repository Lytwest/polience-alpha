//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
        let user = msg.mentions.users.first() || msg.author;
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.status = user.presence.status.toString()       .replace("dnd", `\<:rahatszetmeyin:759436631169171456> Rahatsız Etmeyin`)
        .replace("online", `\<:online:759436630867050507> Çevrimiçi`)
        .replace("idle", `\<:bota:759436592757866566> Boşta`)
        .replace("offline", `\<:blok:846390816008437800> Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `\<:carpi:819119104181927946> Hayır`)
        .replace("true", `\<:onay:819119104299630653>  Evet`)
        userinfo.sonmesaj = user.lastMessage || "Son Yazılan Mesaj Bulunamadı." || "Son Yazılan Mesaj Gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        const uembed = new Discord.MessageEmbed()
        .setTitle(user.tag)
        .addField(`Durum :`, userinfo.status, false)
        .setColor('AQUA')
        .addField(`\<a:Yldz:759436465289297951>  Katılım Tarihi (Sunucu) :`, userinfo.dctarihkatilma, false)
        .addField(`\<a:Yldz:759436465289297951>   Katılım Tarihi (Discord) :`, userinfo.dctarih, false)
        .addField(`\<a:Yldz:759436465289297951>   Kimlik :`, userinfo.id, true)
        .addField(`\<a:Yldz:759436465289297951>   Bot Mu? :`, userinfo.bot, true)
        .addField(`\<a:Yldz:759436465289297951>  Roller :`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu Kullanıcıda Hiç Rol Bulunmuyor!**"}`, false)
        .addField(`\<a:Yldz:759436465289297951>   Son Gönderdiği Mesaj :`, userinfo.sonmesaj, false)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcı-bilgim','kullanıcıbilgi','kb'],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgim',
  description: 'Klouqz Özel Bot',
  usage: 'kullanıcıbilgim'
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
