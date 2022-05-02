//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require("discord.js");
const db = require("orio.db");

exports.run = async (client, message, args) => {
let prefix = client.ayarlar.prefix
      
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`✾ Selam Ben Poliéncé Burada Komutlarımı Görebilirsin :3`, client.user.avatarURL())
.setColor('#0044ff')
 .setDescription(`
\<a:nokta:830441156151214090> **Yeni Komutlar**
Botun Arayüzü ve Komutları Baştan Aşağıya Değişti,Keyifle Kullanabilirsiniz.
`)
.addField(`\<a:ileriok:836115367910834206>   **Mesaj Temizleme**`,` \Mesaj Silmek İçin ***sil <max120>** Yazabilirsin.`,true)
.addField(`\<a:ileriok:836115367910834206>   **Yavaşmod**`,`\ Yavaşmodu Açmak İçin ***yavaşmod** Yazabilirsin.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Ban Sistemi**`,`\Birilerini Banlamak İçin ***ban <kişi>** Yazabilirsin.  `,true)
.addField(`\<a:ileriok:836115367910834206>   **Nuke Sistemi**`,`\Kanal Sıfırlamak İçin ***nuke** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>   **Kurallar**`,`\Embedli Kurallar İçin ***kurallar** Komutunu Kullan.\` `,true)
.addField(`\<a:ileriok:836115367910834206>  **Emoji Yükleme**`,`\Emoji Yüklemek İçin ***emojiyükle <emoji>** Tam da Sana Göre.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Üye Durum**`,`\Üyelerin Durumunu Görmek İçin ***üyedurum** Tam da Sana Göre.\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **İstatistik**`,`\Bot İstatistikleri İçin ***botbilgi** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>  **Kanala Yazdırma**`,`\Kanala Yazdırmak İçin ***yazdır  *yazdırkapat** Yazabilirsin. `,true)
.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png',true)
	.setFooter(`⚡ powered by Poliéncé ~ https://discord.gg/nQAfHPK2bK`)
.setTimestamp();
  message.react("\<a:beyaztik:861361647925723147>")

 message.channel.send(eklenti) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',   
  description: '',
  usage: ''
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
