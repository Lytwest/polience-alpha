const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

const erkekroleID = await data.fetch(`erkek.${message.guild.id}`);
const yetkiliroleID = await data.fetch(`jail.yetkilirole.${message.guild.id}`);
const jailRoleID = await data.fetch(`jail.karantinarole.${message.guild.id}`);
const nn = new Discord.MessageEmbed().setThumbnail();
if(!args[0] || !message.mentions.members.first()) return message.channel.send(nn.setTitle('Bir Hata Oluştu!').setColor('#000001').setDescription(`\<a:nokta:830441156151214090> Karantinadan Çıkacak Kişiyi Etiketleyiniz.`)).then(a => a.delete({timeout: 10000}));


let member = message.mentions.members.first();
let erkek = message.guild.roles.cache.get(erkekroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let jailled = message.guild.roles.cache.get(jailRoleID);
if(!erkek || !yetkili || jailled) return;

if(!message.member.roles.cache.has(yetkiliroleID)) return message.channel.send(nn.setDescription(`\<a:nokta:830441156151214090> ${yetkili} | Rolüne Sahip Değilsin!`));
member.roles.remove(jailRoleID);
member.roles.add(erkekroleID);
data.add(`say.erkek.${message.author.id}.${message.guild.id}`, 1);
message.channel.send(new Discord.MessageEmbed()

.setDescription(`\<a:nokta:830441156151214090> ${member} Kullanıcısına ${erkek} Rolü Verilerek **Karantinadan** Çıkarıldı.`)
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-kaldır'
};