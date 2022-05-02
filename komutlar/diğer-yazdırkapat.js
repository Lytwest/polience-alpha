const Discord = require('discord.js'); //discord.js modül
//Yazdırmayı Kapatmaya Yarar,Nasıl Kapatırız Diye Sorma Öylesine Ama Gerekli Gibi. ^-^
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("\<a:cokmutlu:854294007072686092> **Umm.** Kullanmak İçin Yetkin Bulunmuyor.")
    message.react("\<a:beyaztik:861361647925723147>  ")  /// Bot React Emoji Atar,Kapatılabilir. 
    message.channel.send("\<a:resmi:830441166704869388>   **Yazı Yazma Sistemi Başarıyla Kapatıldı. Bot Yazı Yazıyor Gözükmeyecek.** - **✾ Poliéncé**")
message.channel.stopTyping()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3 /// Sadece Moderatörler Yazabilir - ////2 Olsa da Yazabilir.
};

exports.help = {
  name: 'yazdırkapat',
  description: "Bota Yazdırmayı Kapatır"
};