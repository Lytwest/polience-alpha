//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**\<a:maviates:853004986028130306>   Bug Bildirmek için Bir Bug Yazınız.**')

const embed = new Discord.MessageEmbed()
.setTitle("Poliéncé Bug Bildirme Sistemi ")
	.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png')
.setColor('#0044ff')
.setDescription(`**\<a:maviates:853004986028130306>   Bug Kanalı** ${message.channel.name} \n **\<a:maviates:853004986028130306>   Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **\<a:maviates:853004986028130306>   Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **\<a:maviates:853004986028130306>   Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('855342875499298827').send(embed) //BUG-ID
  
message.channel.reply("\<a:maviates:853004986028130306>   Bug Bildiriminiz İletildi,Teşekkürler.").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'bug belirtmeye yarar',
  usage: 'bug-bildir <bug>'
}

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
