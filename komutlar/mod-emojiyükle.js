const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_EMOJIS")) {

            return message.channel.send(`> \<a:duyuru3:872720101177196564> Gerekli iznin yok! (Emojileri yönet)`)

        }

        const emoji = args[0];

        if (!emoji) return message.channel.send(`> \<a:duyuru3:872720101177196564> Eklemek İstediğin Emojiyi Yaz. **Örnek:** *emojiekle 🍭 [Standart Olmamalıdır.]`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {

            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${

              customemoji.animated ? "gif" : "png"

            }`;

            const name = args.slice(1).join(" ");

            message.guild.emojis.create(

                `${Link}`,

                `${name || `${customemoji.name}`}`

            ).catch(error => {

                console.log(error)

            })

            const Added = new MessageEmbed()

                .setTitle(`Emojiyi Sunucuya Ekledim. ^^`)

                .setColor("AQUA" )

                .setDescription(

                    `**\<a:beyaztik:861361647925723147>  Emoji eklendi!** | **\<a:RainbowOkGif:758921831654228000>  İsim:** \`${name || `${customemoji.name}`}\` | **\<a:YklenmeGif:758921848137973801>  Ön İzleme:** [Bana Tıkla](${Link})`

                );

            return message.channel.send(Added).catch(e => {

                console.log(e)

            })

        } else {

            let CheckEmoji = parse(emoji, {

                assetType: "png"

            });

            if (!CheckEmoji[0])

                return message.channel.send(`> \<a:duyuru3:872720101177196564> Lütfen Geçerli Olacak Şekilde Emojiyi Yazınız.`);

            message.channel.send(

                `> \<a:duyuru3:872720101177196564> Standart Emojileri Sunucunuza Ekleyemezsiniz.`

            );

        }
}

exports.conf = {
    aliases: ["emoji-yükle"]
}

exports.help = {
    name: "emojiyükle",
    description: "Başka sunucudan kullandığınız emojiyi sunucuya ekler",
    usage: "emojiyükle <özel emoji>"
}