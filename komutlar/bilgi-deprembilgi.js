const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args, db) => {
   await fetch(
    `https://api.orhanaydogdu.com.tr/deprem/live.php?limit=10`
  )
    .then(res => res.json())
    .then(json => {
      let cikti = json.result;
      var efe = "";
      const embed = new Discord.MessageEmbed()
        .setAuthor("Türkiyedeki Son 10 Deprem")
	.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png')
.setColor('#0044ff')
        .setThumbnail(
          "https://upload.wikimedia.org/wikipedia/tr/0/0f/Kandilli_Rasathanesi_ve_Deprem_Ara%C5%9Ft%C4%B1rma_Enstit%C3%BCs%C3%BC_logosu.jpg"
        )
        .setFooter(
          `Komut ${message.author.tag} tarafından kullanıldı.`,
          message.author.displayAvatarURL({ dynamic: true })
        );
      for (const ayn of cikti) {
        embed.addField(
          `${ayn.lokasyon}`,
          ` **\<a:beyaztik:861361647925723147>  Zaman:** ${ayn.date} **\<a:siyahtik:861361646391132170>  Büyüklük:** ${ayn.mag} - **\<a:resmi:830441166704869388>  Derinlik:** ${ayn.depth}km \n`
        );
      }

      message.channel.send(embed);

    });
};
exports.conf = {
name: "deprembilgi",
  aliases: []
}
exports.help = {
  name: "deprembilgi",
  description: "Gün içerisinde olan son 10 depremleri gösterir.",
  usage: "deprembilgi"
};