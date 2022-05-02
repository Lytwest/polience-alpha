//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor("AQUA")
    .setTitle('\<a:kral:853925691141128215>   Zarın: ' + pulseproject ()));

    function pulseproject() {
        var rand = ['\<a:Toplar:759436448163823617>  1', '\<a:Toplar:759436448163823617>  2', '\<a:Toplar:759436448163823617>  3', '\<a:Toplar:759436448163823617>  4', '\<a:Toplar:759436448163823617>  5', '\<a:Toplar:759436448163823617>  6','\<a:resmi:830441166704869388>  Zar Yere Düştü!'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['zar'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: 'zar'
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
