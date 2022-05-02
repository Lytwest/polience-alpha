//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject


const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');
const discord = require('discord.js');
const client = new discord.Client(); 

exports.run = async (client, message, args)=> {

  let muser = message.mentions.users.first(); //memberuser muser pulse
let userid;
if(isNaN(args[0])){
  if(!muser){
    userid = message.author.id;
  }else{
    userid = muser.id;
  }
}else{
  userid = args[0];
} try {
  let user = await client.users.fetch(userid);
  let avatar = user.displayAvatarURL({dynamic: true, size: 4096})
 
  const butto1n = new MessageButton()
  .setLabel('🚀・ İşte Profiliniz!')
  .setStyle('url')
  .setURL(message.author.displayAvatarURL({ dynamic: true, size: 4096, format: 'gif' }));




    if(avatar.endsWith(".gif?size=4096")) {

      let pulseproject = new Discord.MessageEmbed()
      .setAuthor(user.tag + '', user.displayAvatarURL())
      .setImage(user.displayAvatarURL({dynamic: true, size: 4096})) 
      .setColor("RANDOM")
      message.channel.send({
        buttons: [butto1n],
        embed: pulseproject
       }
       );
      
      } else {
      
        let pulseproject1 = new Discord.MessageEmbed()
      .setAuthor(user.tag + '', user.displayAvatarURL())
      .setImage(user.displayAvatarURL({dynamic: true, size: 4096}))
      .setColor("RANDOM")
      message.channel.send({
        buttons: [butto1n],
        embed: pulseproject1
       }
       );
      
      }

    }catch{
      message.channel.send(new Discord.MessageEmbed().setColor("AQUA").setDescription("Kullanıcıyı Bulamadım!"));
      return;
    }

}



 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil', "profil"],
  permLevel: 0
};

exports.help = {
  name: 'profil',
  description: '',
  usage: 'profil [@kullanıcı]'
};

//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject//PulseProject
