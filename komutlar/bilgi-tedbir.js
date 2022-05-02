const Discord = require("discord.js");
const message = require("quick.db");
exports.run = (client, message, guild) => {
  const addentcodeOS = new Discord.MessageEmbed()

    .setAuthor("Virüs Tedbir Bilgi")
    .setDescription(
      "**Virüsler; bağışıklık sistemini savunmasız hale getiren, vücuda hızlı bir şekilde yayılan ve birtakım hastalıkların oluşmasına neden olan gözle görülemeyecek kadar ufak bir yapıdır. Virüslerden korunma yolları ile vücudunuz için bir savunma sistemi yaratabilirsiniz.**"
    )
    .addField("🔱 **Kişinin kendini izole etmesi, el hijyenine önem göstermesi kadar aynı zamanda beslenmesine dikkat etmesi gerekmektedir.**")
    .addField("⚡ **Virüsün vücut ile temas etmemesi ve hücrelere ulaşmaması için öncelikle hijyene dikkat edilmelidir.**")
    .addField("🍬 **Kalabalık ortamlarda bulunmamalı ve hasta kişilerle yakın temas kurmamak gerekmektedir.**")
    .addField("🌐 **Yiyeceklerimizi güzelce yıkamalı ve bulunduğumuz yerin havalandırılmasına, dezenfekte edilmesine katkı sağlamalıyız.**")
    .addField("👤 **Virüslerin bazıları havada kalır bazıları ise yoğunluğundan dolayı yere çöker. Hasta kişilerle aynı ortamda bulunmamak virüslere karşı korunmak için en etkili yollardan biridir.**")
    .addField("💬 **Tek kullanımlık mendiller kullanılmalı ve sonrasında çöpe atılması gerekmektedir.**")
    .addField("💎 **Virüs ellerimize bulaştığı zaman eğer ağzımıza, burnumuza ya da gözümüze ellerimizi sürersek virüsün vücudumuza enfekte olmasına neden olur.**")
    .addField("👑 **Bunun yanı sıra hasta kişilerin öksürme ya da hapşırma sırasında ağzını kapatması gerekmektedir.**")
    

    .addField("🎄 Kaynakça", ("**https://yeniloji.com/viruslerden-korunma-yollari-nelerdir-neler-yapmaliyiz**")
    )

	.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png')
.setColor('A18A62')
    .setFooter("❃ Poliéncé Virüs Bilgi");

  message.channel.send(addentcodeOS);
};

exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["tedbir"],
  permlevel: 0
};

exports.help = {
  name: "tedbir",
  description: "tedbir",
  usage: "tedbir"
};