const Discord = require("discord.js");
const db = require("orio.db");

exports.run = async (client, message, args) => {
let prefix = client.ayarlar.prefix

  if (!message.member.hasPermission("MANAGE_GUİLD")) return message.channel.send(`**Buna Yetkin Yok!**`);
  if (!["kapat", "aç"].includes(args[0])){
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("A18A62")
        .setDescription(`\n \<a:RainbowSonsuzGif:758921799873724426>  **Poliéncé Destek Sistemi Kurulumu** 
\n \<a:ModernOnayGif:758921894887030794> **${prefix}destek aç** @DestekRolü #Kanal \n \<a:renklii:827563786939531314> Kapatmak İçin: **${prefix}destek kapat** Yazınız.`)
        .setImage('https://media.discordapp.net/attachments/892799946527502356/905808490264662056/image0-1-1-1-1-2.gif')
.setFooter(`Komutu Kullanan: ${message.author.tag}`,`${message.author.avatarURL()}`))
  }
  
  if (args[0] == "kapat") {
    if(!db.get("csticket."+message.guild.id)) return message.reply("**\<a:kirmizitik:861361656209735681>  Destek Sistemi Bu Sunucuda Zaten Kurulu Değil!**")
    const data = db.get("csticket."+message.guild.id)
    db.delete(`csticket.${message.guild.id}`);
    const sunucu = client.guilds.cache.get(data.sunucuID)
       if(!sunucu){
      db.delete("csticket."+data.sunucuID)
    } else {
    const kanal = sunucu.channels.cache.get(data.kanal)
       if(!kanal){
      db.delete("csticket."+data.sunucuID)
    } else {
    const data2 = kanal.messages.fetch(data.mesajID)
    if(!data2){
      db.delete("csticket."+data.sunucuID)
    } else {
      data2.then(mr => mr.delete({timeout:200}))
        let a = message.guild.channels.cache.find(xxx => xxx.name === "「🎉」Poliéncé Destek");
      if(a){
        a.delete()
      }
       message.channel.send(`**\<a:kirmizitik:861361656209735681> Destek Sistemi Başarıyla Kapatıldı!**`);
    }
    }
    }

  }

  if (args[0] == "aç") {
        
    const data = db.get("csticket."+message.guild.id)
    if(data) return message.reply("\<a:ModernOnayGif:758921894887030794>  Zaten Destek Sistemi Bu Sunucuda Açık!\nKapatmak İçin: \`"+prefix+"destek kapat\`")
    
    let role = message.mentions.roles.first() 
    if(!role) return message.reply("**\<a:ModernOnayGif:758921894887030794>  Bir Destek Ekibi Rolü Etiketlemen Gerek!**")

    let akanal = message.mentions.channels.first()
    if(!akanal) return message.reply("**\<a:ModernOnayGif:758921894887030794>  Bir Kanal Etiketlemen Gerek!**")
    
    message.react("\<a:ModernOnayGif:758921894887030794>")   
    message.channel.send("\<a:ModernOnayGif:758921894887030794>  **Destek Paneli Başarıyla Açıldı,Etiketlediğin Kanalı Kontrol Et!** **-** Poliéncé")
    
      akanal.send(new Discord.MessageEmbed()
                 .setTitle(client.user.username+" Destek Sistemi")
                 .setColor("WHITE")
                  .setDescription("<a:yldz:758934530844524554> Destek Talebi Oluşturmak İçin \<a:ModernOnayGif:758921894887030794> Emojisine Tıkla! \n")
                  .setTimestamp()
.                 setFooter(`${message.author.tag}`,`${message.author.avatarURL()}`)
                 ).then(async cs => {
        await cs.react("<a:ModernOnayGif:758921894887030794>")
        db.set("csticket."+message.guild.id, {
          kanal: akanal.id, 
          mesajID: cs.id,
          sunucuID: message.guild.id,
          rolID: role.id
          })
      })
  }
};
exports.conf = {
  aliases: ["ticket","ticket-sistemi"]
};

exports.help = {
  name: "destek"
};
