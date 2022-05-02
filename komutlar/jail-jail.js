const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const logChannel = await data.fetch(`jail.log.${message.guild.id}`);
const jailYetkili = await data.fetch(`jail.yetkilirole.${message.guild.id}`);
const karantinaRole = await data.fetch(`jail.karantinarole.${message.guild.id}`);
if(!logChannel) return;
if(!jailYetkili) return;
if(!karantinaRole) return;

const errorEmbed = new Discord.MessageEmbed()
.setColor('#00001');
const errorEmbed2 = new Discord.MessageEmbed()
.setTitle('Bir Hata Oluştu!');

if(!message.member.permissions.has(jailYetkili)) return message.channel.send(errorEmbed.setDescription(`\<a:nokta:830441156151214090>  ${message.guild.roles.cache.get(muteYetkili)} | Rolüne Sahip Değilsin.`));
if(!args[0]) return message.channel.send(errorEmbed.setTitle('Bir Hata Oluştu!').setDescription(`\<a:nokta:830441156151214090> Kullanıcıyı Etiketleyiniz.`));

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first();
} else if(args[0]) {
member = message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(errorEmbed.setTitle('Bir Hata Oluştu!').setDescription(`\<a:nokta:830441156151214090> Kullanıcıyı Etiketleyiniz.`));
}

if(message.author.id === member.id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Agaa beeeeeeeee!').setDescription(`O kadar yürekli olamazsın.. 🙄`))
if(member.permissions.has('ADMINISTRATOR')) return message.channel.send(errorEmbed2.setDescription('Yönetici bir kullanıcıya karışamam!'));

message.channel.send(new Discord.MessageEmbed().setTitle('\<a:nokta:830441156151214090> Karantinaya Gönderildi!').setDescription(`\<a:nokta:830441156151214090>  ${member} Adlı Kullanıcı Karantinaya Sokuldu.`));
member.roles.cache.forEach(s => member.roles.remove(s.id));
member.roles.add(karantinaRole);
message.guild.channels.cache.get(logChannel).send(new Discord.MessageEmbed().setColor('#00001').setTitle('\<a:nokta:830441156151214090> Karantinaya Bir Üye Eklendi!')
.setDescription(`\<a:nokta:830441156151214090> ${member} Adlı Kullanıcının Tüm Rolüne El Koyuldu!.

\<a:nokta:830441156151214090>${message.guild.roles.cache.get(karantinaRole)} Adlı Karantina Rolü Tarafından Rolü Kısıtlandı!`).setImage('https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif')
.setFooter(`${message.author.username} Tarafından Başarıyla Karantinaya Alındı! ~ powered by Poliéncé `, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setThumbnail("https://cdn.discordapp.com/avatars/834768434574786561/8afa059e2cfb6b665d9baa9cf55867de.webp"))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['cezalı', 'Cezalı'],
  permLevel: 0
}

exports.help = {
  name: 'karantina'
};