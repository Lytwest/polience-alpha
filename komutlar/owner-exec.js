const exec = require('child_process').exec;
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
          if (message.author.id !== "847828666671038464") return message.channel.send("\<a:yldz:830441156432887858> Bu Komutu **Güvenlik** Amacıyla Sadece **Geliştirici** Kullanabilir.");
    if (!args.join(" ")) return message.channel.send("\<a:yldz:830441156432887858> Çalıştırılacak Komutu Giriniz.")
    exec(`${args.join(' ')}`, (error, stdout) => {
        const response = (error || stdout);
        let embed = new Discord.MessageEmbed()
            .setTitle(`Poliéncé Komut Girdisi -  Uzaktan Kontrol Sistemi`)
            .setURL("https://discord.gg/ATgjur7p7S")
            .setDescription('Komut Girdisini Sadece Yetkisi Olan Kişiler Kullanabilir!')
            .addField("\<a:yldz:830441156432887858>   Giriş - Yazılan Komut", `\`\`\`asciidoc\n${args.join(" ")}\n\`\`\``)
            .addField("\<a:yldz:830441156432887858>   Çıkış - Bot Log Bilgisi", `\`\`\`js\n${response}\n\`\`\``)
.setImage('https://cdn.discordapp.com/attachments/852636146613354526/888135640863109140/Baslksz5_20210831153108__2_-removebg-preview.png',true)
	.setFooter(`⚡ powered by Poliéncé ~ https://discord.gg/nQAfHPK2bK`)
.setColor('#0044ff')

        message.channel.send(embed);
    });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['lytwest', 'klouqz'],
    permLevel: 0
};

exports.help = {
    name: "."
};