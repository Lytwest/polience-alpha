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
.addField(`\<a:ileriok:836115367910834206>   **Çekiliş Başlat**`,` \Çekilişi Başlatmak İçin ***çekilişbaşlat** Yazabilirsin. **[YAKINDA]**`,true)
.addField(`\<a:ileriok:836115367910834206>   **Çekiliş Durdur**`,`\Çekilişi Durdurmak İçin ***çekilişdurdur** Yazabilirsin. **[YAKINDA]**\ `,true)
.addField(`\<a:ileriok:836115367910834206>   **Çekiliş Listesi**`,`\Sunucudaki Tüm Çekilişlere Bakmak İçin ***çekilişlistesi** Yazabilirsin. **[YAKINDA]** `,true)
.addField(`\<a:ileriok:836115367910834206>  **Çekiliş Bitir**`,`\Çekilişi Bitirmek İçin ***çekilişbitir** Yazabilirsin. **[YAKINDA]** `,true)
.addField(`\<a:ileriok:836115367910834206>  **Kazanan Yenileme**`,`\Başka Birisini Seçmek İçin ***çekilişyenile** Yazabilirsin. **[YAKINDA]** `,true)
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
  name: 'çekiliş',   
  description: '',
  usage: ''
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
