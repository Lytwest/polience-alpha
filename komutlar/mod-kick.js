const Discord = require('discord.js');
exports.run = async (client, message, args) => {          
   
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`\<a:beyaztik:861361647925723147> Bu Komutu Kullanmak İçin **Gereken İzinlere** Sahip Değilsin!`);

    let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');

  if (message.mentions.users.size < 1) return message.channel.send(`\<a:beyaztik:861361647925723147> Sunucudan Atılacak Kişiyi Yazmalısın! **Örnek:** *kick <@834768434574786561> Gürültü Yapıyor.\ `);
  if (user.id === message.author.id) return message.channel.send('\<a:beyaztik:861361647925723147> Birini Atmam İçin Atılacak Kullanıcıyı Etiketleyerek Kullan.');
if (user.position > message.member.roles.highest.position) return message.channel.send(`\<a:beyaztik:861361647925723147> Bu Kullanıcının Rolü,Senin Rolünden Daha Yüksek!`);
                if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`\<a:kirmizitik:861361656209735681> Etiketlediğin Kullanıcı Sunucuda Değil.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`\<a:kirmizitik:861361656209735681> Etiketlediğin Kullanıcı Sunucuda Değil.`)

if (!message.guild.member(user).bannable) return message.channel.send(`\<a:beyaztik:861361647925723147> Bu Kişiyi Sunucudan Atamıyorum. **Sebep:** Benden **Yüksek** Bir Rolde ya da Gereken **İzinlere** Sahip Değilim.\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('\<a:beyaztik:861361647925723147> Sunucudaki Yetkilileri Atamam. ^^');
    message.guild.member(user).kick(reason);
message.channel.send(`\<a:beyaztik:861361647925723147> <@${user.id}> Adlı Kullanıcı **Sunucudan** Atıldı! **Sebep:** \`${reason}\``)


};
exports.conf = {
name: "kick",
  aliases: ["at","sunucudanat","sunucudan-at"]
}
exports.help = {
  name: "kick",
  description: "",
  usage: "kick"
};