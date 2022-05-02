const snekfetch = require("snekfetch");

exports.run = async (bot, message, args) => {
    snekfetch.get("https://blockchain.info/ticker").then((body) => {
        message.channel.send({
            embed: {
                title: "Bitcoin Piyasa Değerleri",
                description: "Değerlerin Her Biri,Ülkeden Ülkeye Farklılık Gösterebilir.",
                	Image:"https://media.discordapp.net/attachments/631918698285891634/852832773555224596/a6bb66dae6d054414c1da0074166690f.gif",
                color:"#0044ff",
                fields: Object.keys(body.body).map((c) => {
                    return {
                        name: c,
                        value: "**Fiyat**: " + body.body[c].symbol + body.body[c].buy + "\n**Satış Değeri**: " + body.body[c].symbol + body.body[c].sell,
                        inline: true
                    }
                })
            }
        })
    }).catch((error) => {
        message.channel.send({
            embed: {
                title: "Hata!",
                color: 10038562,
                description: "Bitcoin fiyatlarını alırken beklenmeyen bir hata oluştu."
            }
        })
        console.error("Bitcoin Bilgisi alınamadı!", error.message)
        
    })
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bc"],
  permLevel: 0
};

module.exports.help = {
  name: 'bitcoin',
  description: 'Ülkelerin bitcoin değerlerini gösterir',
  usage: 'bitcoin'
};
