//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {

fetch(`https://covid19.mathdro.id/api/countries/tr`) //API Kısmıdır //Pulse
.then(response => response.json())
.then(data => {
    let confirmed = data.confirmed.value.toLocaleString()
    let recovered = data.recovered.value.toLocaleString()
    let deaths = data.deaths.value.toLocaleString()
    let kod = "`"
const pulseproject = new Discord.MessageEmbed()
.setTitle(`Türkiye - COVID-19 Toplam İstatistik`)
.addField(' \<a:siyahtik:826968830848270376>   Toplam Vaka Sayısı',`${kod}${confirmed}${kod}`) //\<a:amongusking:857366946328870932> Değişebilir
.addField(' \<a:siyahtik:826968830848270376>    Toplam İyileşen Kişi Sayısı',`${kod}${recovered}${kod}`)
.addField(' \<a:siyahtik:826968830848270376>    Toplam Vefat Sayısı',`${kod}${deaths}${kod}`)
.setFooter(`PoliéncéAPI Sunucusu | Bilgiler (7/24) Anında Yenilenmektedir.`)
	.setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setColor('#0044ff')

     message.reply(pulseproject)
        })
    }

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['corona'],
 permLevel: 0
};
    
exports.help = {
 name: "korona"
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject