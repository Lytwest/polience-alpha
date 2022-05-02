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
.addField(`\<a:ileriok:836115367910834206>  **Minecraft Skin**`,` \Minecraft Avatarınızı İncelemek İçin ***mcskin** Yazabilirsin.`,true)
.addField(`\<a:ileriok:836115367910834206>  **Zar Atmaca**`,`\ Zar Attırmak İçin ***zarat** Yazabilirsin.\ `,true)
.addField(`\<a:ileriok:836115367910834206>  **Şifre Oluşturma**`,`\Şifre Oluşturmak İçin ***şifre** Yazabilirsin.  `,true)
.addField(`\<a:ileriok:836115367910834206>   **Düello Yapma**`,`\Düello Yapmak İçin ***düello** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>  **Tokenimi Al**`,`\Tokenimi Almak İçin ***tokenv2** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>   **Balık Tut**`,`\Balık Tutmak İçin ***balıktut** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>   **Minecraft Kazan**`,`\Elmas veya Zümrüt İçin ***azan** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>   **Bitcoin Bilgi**`,`\Bilgi Almak İçin ***bitcoin** Yazabilirsin. `,true)
.addField(`\<a:ileriok:836115367910834206>  **Lolipop Tepkisi**`,`\Mesajın Altına Lolipop Koyması İçin ***lolipop** Yazabilirsin. `,true)
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
  name: 'eğlence',   
  description: '',
  usage: ''
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
