//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let csgopng = "https://cdn.glitch.com/179a6733-5f54-4195-ba10-6e8aee416397%2F72dd122e428d9387435e482c3b72dba5.jpg?v=1615962897508"
    var kasadancikanlar = [
        "\<a:ZplayanimenGif:758921846045016076>    Köylü İle Takas Yaptın! \n **10 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Kurt Evcilleştirdin! \n **5 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>   Tahta Buldun! \n **1 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>   Creeper Öldürdün! \n **25 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Kapı Yaptın! \n **2 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>  İskelet Öldürdün! \n **2 Zümrüt Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    İnek Çiftleştirdin! \n **1 Altın Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>   Balta Yaptın!  \n **1 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Demir Erittin! \n **1 Altın Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Fırın Yaptın! \n  **1 Elmas Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Süt İçtin! \n **1 Can Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>   Yüksekten Atladın! \n **Vefat Ettin! ^^**",
        "\<a:ZplayanimenGif:758921846045016076>  Elmas Buldun! \n **2 Elmas Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>   Zombi Öldürdün! \n **2 Altın Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Papağan Sahiplendin! \n **7 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Kılıç Yaptın! \n **5 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>    Tarım Yaptın! \n **2 Demir Kazandın!**",
        "\<a:ZplayanimenGif:758921846045016076>   Merdiven Yaptın! \n **1 Demir Kazandın!**"
    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
    const embed  = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/857571491221471253/857574867222003712/1057747-sunlight-reflection-sky-Minecraft-shaders-screenshot-computer-wallpaper-waterway-ecosystem-b.png")
    .setAuthor(`Kazanan Kişi ${message.author.tag}`, message.author.avatarURL)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`${kasadancikanlar}`)
    .addField(`İşte Kazandıkların!`,  
    `Buradan Kazandıkların Gerçek Hesabına Eklenmez,Eğlence Amaçlıdır.Anı Olabilir ^^`)
    .setFooter(" ❃ Muntine Minecraft | Tüm Hakları Saklıdır.")
.setColor('A18A62');

    return message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k-a'],
  permLevel: 0
};
exports.help = {
  name: 'kazan',
  description: 'Pulse',
  usage: 'kazan'
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject

