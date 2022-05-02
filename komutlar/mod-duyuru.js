//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
  
const Discord = require('discord.js');

exports.run = (client, message, args) => {
       if (message.author.id !== "847828666671038464") return message.channel.send("\<a:yldz:830441156432887858> Bu Komutu **Güvenlik** Amacıyla Sadece **Geliştirici** Kullanabilir.");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('\<a:Toplar:759436448163823617>   Lütfen Duyuru Metnini Giriniz. | Örnek: **.duyuru Herkese Selamlar...**');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'duyuru',
  usage: 'in'
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
