const Discord = require('discord.js');
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("\<a:cokmutlu:854294007072686092> **Umm.** Kullanmak İçin Yetkin Bulunmuyor.")
    message.react("\<a:beyaztik:861361647925723147> ")   
    message.channel.send("\<a:resmi:830441166704869388>   **Yazı Yazma Sistemi Başarıyla Açıldı. Bot Yazı Yazıyor Gözükecek.** - **Kapatmak İçin:** ***yazdırkapat**")
message.channel.startTyping()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'yazdır',
  description: "Bot Yazdır"

};