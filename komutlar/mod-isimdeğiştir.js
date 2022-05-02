//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Kullanıcı Adlarını Yönet** Yetkisine Sahip Olmalısın.`);
  
let pulseproject = message.mentions.members.first()
if (!pulseproject) return message.channel.send(`\<a:kedos:853005008588636200>   Bir Kullanıcı Etiketlemelisin! Örnek: **.isimdeğiştir @Etiket Volkan**`)

let isim = args.slice(1).join(' ')
if (!pulseproject) return message.channel.send(`\<a:kedos:853005008588636200>  Değiştirilicek İsmi Girin.`)

pulseproject.setNickname(isim)
message.channel.send(`\<a:kedos:853005008588636200>   ${pulseproject} Adlı Kullanıcının Yeni İsmi **${isim}\** Olarak Ayarlandı!`)
}

exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: 'isim değiştir',
  description: 'isim-değiştir'
}

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

