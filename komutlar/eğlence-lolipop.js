const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("815852928148963350")
  message.react("🍭")
  message.channel.send("🍭 • *Lolipop Uzaklardan Gelen Tepki İle Teslim Edildi! ^^* **| *eğlence **")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "lolipop"
}