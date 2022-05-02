const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.js");
const ms = require("ms")
const fs = require("fs");
const db = require("orio.db");
const disbut = require('discord-buttons');
disbut(client);
const chalk = require("chalk");
const express = require("express");

const app = express()


app.get('/', (req, res) => res.send('Poliéncé Başarıyla Aktif Oldu!')) 
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))
///////////////////////////////////////////////////////////////////////////////////
let cstoken;
if (ayarlar.TOKEN) {
  cstoken = ayarlar.TOKEN;
}
if (process.env.TOKEN) {
  cstoken = process.env.TOKEN;
}
if (cstoken) {
  client.login(ayarlar.TOKEN || process.env.TOKEN); //Bot VDS'de İse Sadece ayarlar.token //pulse
} else {
  console.log("Bu Projede TOKEN Bulunmamaktadır,Kontrol Ediniz. Pulse");
}


client.ayarlar = ayarlar

    client.on("message", async message => {
      let client = message.client;
      if (message.author.bot) return;

      let prefix = ayarlar.prefix;

      if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0].slice(prefix.length);
      let params = message.content.split(" ").slice(1);
      let cmd;
      if (client.commands.has(command)) {
        cmd = client.commands.get(command);
      } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
      }
      if (cmd) {
        cmd.run(client, message, params);
      }
    });


    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    fs.readdir("./komutlar/", (err, files) => {
      if (err) console.error(err);
      console.log(`Toplamda ${files.length} Komut Var!`);
      files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        console.log(`${props.help.name} İsimli Komut Aktif!`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
      });
    });

    client.reload = command => {
      return new Promise((resolve, reject) => {
        try {
          delete require.cache[require.resolve(`./komutlar/${command}`)];
          let cmd = require(`./komutlar/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
            if (cmd === command) client.aliases.delete(alias);
          });
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };

    client.load = command => {
      return new Promise((resolve, reject) => {
        try {
          let cmd = require(`./komutlar/${command}`);
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };

    client.unload = command => {
      return new Promise((resolve, reject) => {
        try {
          delete require.cache[require.resolve(`./komutlar/${command}`)];
          let cmd = require(`./komutlar/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
            if (cmd === command) client.aliases.delete(alias);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };
    
  


client.on("ready", function() {
  if(db.get("csticket")){
  Object.entries(db.get("csticket")).map(e => {
    const sunucu = client.guilds.cache.get(e[1].sunucuID)
       if(!sunucu){
      db.delete("csticket."+e[1].sunucuID)
    } else {
    const kanal = sunucu.channels.cache.get(e[1].kanal)
       if(!kanal){
      db.delete("csticket."+e[1].sunucuID)
    } else {
    const data = kanal.messages.fetch(e[1].mesajID)
    if(!data){
      db.delete("csticket."+e[1].sunucuID)
    } else {
  
      data.then(mr => {
        if(mr){
          mr.reactions.removeAll()
        mr.react("📨");
        }
      })
    }
    }
    }
  });
}
});

client.on("messageReactionAdd", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.members.cache.get(user.id);
  const data = db.get("csticket."+messageReaction.message.guild.id)
  
  if(data){
      if (data.mesajID === messageReaction.message.id) {
        if (messageReaction.emoji.name === "📨") {
     messageReaction.users.remove(user.id)
            const prefixx = client.ayarlar.prefix
let csrol = messageReaction.message.guild.roles.cache.get(data.rolID)
    let onl;
          let listedChannels = []
    messageReaction.message.guild.members.cache.forEach(p => {
      if (p.roles.cache.has(csrol.id)) {
        if (messageReaction.message.guild.members.cache.get(p.id).user.presence.status === "idle") onl = "\<:poliencebosta:909451597547991100> " 
        if (messageReaction.message.guild.members.cache.get(p.id).user.presence.status === "dnd") onl = "\<:poliencerahatsizetme:909451597329887262>"
        if (messageReaction.message.guild.members.cache.get(p.id).user.presence.status === "online") onl = "\<:poliencecevrimici:909451597115969546> "
        if (messageReaction.message.guild.members.cache.get(p.id).user.presence.status === "offline") onl = "\<:poliencekapali:909451596520390698> "

        listedChannels.push(`\`${p.user.tag}` + "\` " + onl );
      }
    });
    if (!messageReaction.message.guild.channels.cache.find(xx => xx.name === "「🔱」Poliéncé Destek")) {
       messageReaction.message.guild.channels.create(`「🔱」Poliéncé Destek`, { type: 'category'});
    }
    let a = messageReaction.message.guild.channels.cache.find(xxx => xxx.name === "「🔱」Poliéncé Destek");
    if (messageReaction.message.guild.channels.cache.some(
        kk =>
          kk.name ===
          `destek-${messageReaction.message.guild.members.cache.get(member.id).user.username.toLowerCase() +
            messageReaction.message.guild.members.cache.get(member.id).user.discriminator}`
      ) == true
    )
      return messageReaction.message.channel.send(`\<:poliencehayir:909451596033839104>  **<@${user.id}>, Destek Sistemi Açma İşlemi Başarısız! \nSebep: \`Açılmış Zaten 1 Tane Destek Talebiniz Var.\`**`).then(mr => mr.delete({timeout:10000}))
    messageReaction.message.guild.channels.create(`destek-talebi-${member.user.tag}`)
      .then(async c => {
      if(a){
        c.setParent(a)
      }
      const gdl = client.guilds.cache.get(messageReaction.message.guild.id)
    if(gdl.roles.cache.get(data.rolID)){
      await c.createOverwrite(gdl.roles.cache.get(data.rolID), {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      });
    }
      await c.createOverwrite(gdl.roles.cache.find(r => r.name === '@everyone'), {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
      });
      await c.createOverwrite(member, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      });
    

        const embed = new Discord.MessageEmbed()  
          .setColor("A18A62")
          .setImage("https://media.discordapp.net/attachments/892799946527502356/905808490264662056/image0-1-1-1-1-2.gif")
          .setAuthor(`${client.user.username} | Destek Sistemi`)
          .addField(
            `\<a:renklii:827563786939531314> Selam ${user.username}!`,
            `\<a:RainbowSonsuzGif:758921799873724426> Sunucu Destek Ekibi **Kısa Süre** İçinde Seninle İlgilenecektir.\n \<a:resmi:830441166704869388>  Destek Talebini Kapatmak İçin **${prefixx}kapat** Yazabilirsin!  `
          )
          .addField(`\<:polienceacik:909451596415516672> Destek Talebi Açan Kullanıcı:`, `<@${user.id}>`)
          .addField(
            `**Destek Rolündeki Yetkililer;**`,          
`${listedChannels.join(`\n`) || "\<a:renklii:827563786939531314>  Kimse Yok"}`
          )
          .setFooter(`${client.user.username} | Sunucu Destek Sistemi ⭐`)

          .setTimestamp();
        c.send(embed);




        
      })
      .catch(console.error);
  }
          
        }
      }
 
  }
});



client.on("message", message => {
  const cprefix = client.ayarlar.prefix
  if (message.content.toLowerCase().startsWith(cprefix + `kapat`)) {
    if (!message.channel.name.startsWith(`destek-`))
      return message.channel.send(
        `\<a:yldz:758934915197829141>  Bu Komut Sadece Destek Talebi Kanallarında Mevcuttur.`
      );

    var deneme = new Discord.MessageEmbed()
      .setColor("A18A62")
      .setAuthor(`Destek Talebi Kapatma`)
      .setDescription(
        `\<a:yldz:758934915197829141>  Destek Talebini Kapatmak İçin **10** Saniye İçinde \`kapat\` Yazınız!`
      )
      .setFooter(`${client.user.username} | Destek Sistemi`);
    message.channel.send(deneme).then(m => {
      message.channel
        .awaitMessages(response => response.content === "kapat", {
          max: 1,
          time: 10000,
          errors: ["time"]
        })
        .then(collected => {
          message.channel.delete(); 
        })
        .catch(() => {
          m.edit("\<a:yldz:758934915197829141> Kapatma İşlemi Zaman Aşımında Uğradı,Tekrar Deneyiniz.").then(
            m2 => {
              m2.delete({timeout:100});
            },
            5000
          );
        });
    });
  }
});



//////////////////

/////////////////////////////ETİKET PREFİX

client.on('message', async msg => {
  let prefix = ayarlar.prefix 
  if(msg.content == `<@!935467462080729109>`) return msg.channel.send(`> uykum var efendim abi?`);
});

//////////////////////////////////////////////////////////////


////////////////////////////////////////////////////
///////////////////////CELESTIAİ VALLA

//client.on("message", async message => {
//message.react('\<a:kedos:853005008588636200>')
//});

///////////////////// EKLENİNCE LOG

client.on('guildCreate', async guild => { client.channels.get('889581955044237352').send(`\<a:donenkartanesi:918137633132146739> ${guild} ** Adlı Sunucuya Eklendim. **Bu Harika!** \<a:RainbowSonsuzGif:758921799873724426> \n > \<a:isiltilar:918137617059561513> Toplam Sunucu Sayımı ** " ${client.guilds.cache.size} "** Olarak Güncelledim! \<a:kedos:879022113560879155>`)})


///////////////////////////////// DM MESAJ LOGU

client.on("message", msg => {
  var dm = client.channels.cache.get("889581748327952394");
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} DM Sistemi`)
      .setTimestamp()
      .setColor("A18A62")
      .setThumbnail(msg.author.avatarURL())
      .addField("Gönderen:", msg.author.username)
      .addField("Gönderen ID:", msg.author.id)
      .addField("Gönderilen Mesaj:", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});

////////////////////////////////////////  EKLENİNCE SUNUCU SAHİP DM ------------- BOZUK

client.on("guildCreate", async guild => {
  guild.owner.send("\<a:kedos:879022113560879155> **-- BU BİR REKLAM DEĞİLDİR! --** \n \<a:RainbowSonsuzGif:758921799873724426> Beni Sunucuna Eklediğin İçin **Teşekkürler!** \n \<a:ZplayanimenGif:758921846045016076> Botun **Duyuruları** vs. İçin: https://discord.gg/zgDVN4wyxM \n \<a:siyahtik:826968830848270376> **Bu Mesaj Sadece Sunucu Sahiplerine Gönderilir.**");
});

/////////////////////////////////////// AFK SİSTEMİ

//client.on("message", async (message) => {
//
//    if (message.channel.type == "dm") return false;
//
//    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;

//    let kullanıcı = message.mentions.users.first() || message.author;
//    let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
//    let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
//    let sebep = afkkullanıcı;

//    if (message.author.bot) return;
//    if (message.content.includes(`${prefix}afk`)) return;
//
//    if (message.content.includes(`<@!${kullanıcı.id}>`)) {
//      if (afkdkullanıcı) {
//        message.channel.send(
//          `\`${message.author.tag}\` Adlı Kullanıcı AFK Değil.`
 //       );
 //         db.delete(`afk_${message.author.id}`);
 //       }
 //       if (afkkullanıcı)
 //         return message.channel.send(
 //           `${message.author}\`${kullanıcı.tag}\` Şu anda Klavyeden Uzakta. Sebep : \`${sebep}\``
  //        );
 //     }
 // 
  //    if (!message.content.includes(`<@!${kullanıcı.id}>`)) {
  //  //      if (afkdkullanıcı) {
  //        let rMember = message.guild.members.cache.get(message.author.id);
 //         var nic = db.get(`${message.author.id}nick`);
  //        var nick = nic;
  //        rMember.setNickname(nick);
  //        message.reply(` Adlı Kullanıcı Artık Klavyeden Uzakta Değil.`);
  //        db.delete(`afk_${message.author.id}`);
  //      }
 //     }
 //   });

//////////////////////// Lytwest - Klouqz Etiket Engel 

//////////SİLİNDİ GÜVENLİK
//////////////////////////////  DOĞRULAMA LİBERTUS

client.on('message', async (message) => {
  if (message.content.startsWith('*doğrula')) {
    
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Libertus Botlist Doğrulama")
    .setThumbnail(client.user.avatarURL())
    .setDescription('\<a:silah:840135137722630164>  Aşağıdaki Butona Tıklayarak Hesabını Doğrulayabilirsin.')


    let button = new disbut.MessageButton()
    .setStyle('green') 
    .setLabel(`🚀 Doğrula`)
    .setID('button_1')
    client.ws.on('INTERACTION_CREATE', async interaction => {
        
        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: {
                    content: "\<a:silah:840135137722630164>  Hesabını Başarıyla Doğruladım,İyi Eğlenceler..", 
                    flags: "64" 
                  }
              }
          }) 
     });

      message.channel.send({
        buttons: [button],
        embed: embed
       }
       );
  }
});

client.on("clickButton", async (button) => {
if (button.id === "button_1") {
  button.clicker.member.roles.add("865248122808565791")  // Member
  button.clicker.member.roles.remove("833718835524665345") // Doğrulanmamış Üye
  
}});

//////////////////////////////// DOĞRULAMA POLIENCEÖZELSW

client.on('message', async (message) => {
  if (message.content.startsWith('*doğrulapl')) {
    
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Poliéncé Resmi Discord Sunucusu Doğrulama")
    .setThumbnail(client.user.avatarURL())
    .setDescription('\<a:silah:840135137722630164>  Aşağıdaki Butona Tıklayarak Hesabını Doğrulayabilirsin.')


    let button = new disbut.MessageButton()
    .setStyle('green') 
    .setLabel(`🚀 Doğrula`)
    .setID('button_1')
    client.ws.on('INTERACTION_CREATE', async interaction => {
        
        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: {
                    content: "\<a:silah:840135137722630164>  Hesabını Başarıyla Doğruladım,İyi Eğlenceler.. ", 
                    flags: "64" 
                  }
              }
          }) 
     });

      message.channel.send({
        buttons: [button],
        embed: embed
       }
       );
  }
});

client.on("clickButton", async (button) => {
if (button.id === "button_1") {
  button.clicker.member.roles.add("836593633300971580")  // Member
  button.clicker.member.roles.remove("752567629394346026") // Doğrulanmamış Üye
  
}});
/////////////////////////////////////////////////// YOUTUBE AKTİVİTE
const { Client } = require("discord.js");
const fetch = require("node-fetch");
const PREFIX = "*";

const ACTIVITIES = {
    "poker": {
        id: "755827207812677713",
        name: "Poker Night"
    },
    "betrayal": {
        id: "773336526917861400",
        name: "Betrayal.io"
    },
    "youtube": {
        id: "755600276941176913",
        name: "YouTube Together"
    },
    "fishington": {
        id: "814288819477020702",
        name: "Fishington.io"
    }
};
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);


});

const log = message => {
  console.log(` ${message}`);
};


client.on("ready", () => console.log("Bot Aktif!"));
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    const args = message.content.slice(PREFIX.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") return message.channel.send(`Pong! \`${client.ws.ping}ms\``);

    if (cmd === "yttogether") {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("> \<a:yldz:758934530844524554>  Geçersiz Kanal Belirtildi,Kontrol Et! ^^");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("> \<a:yldz:758934530844524554> **Davet Oluşturma** İznine İhtiyacım Var,Tekrar Dene.");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "830427926482255902", // youtube together
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("> \<a:yldz:758934530844524554> YouTube Birlikte Başlatılamadı!");
                message.channel.send(`> \<a:yldz:758934530844524554> Muntaine'in Aktivitelerini Başlatmak İçin Tıklayın! ${channel.name}: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("> \<a:yldz:758934530844524554>  Aktivite Başlatılırken Hata Meydana Geldi!");
            })
    }
   
    
   

    // or use this
    if (cmd === "oynat") {
        const channel = message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("CREATE_INSTANT_INVITE iznine ihtiyacım var");
        const activity = ACTIVITIES[args[1] ? args[1].toLowerCase() : null];
        if (!activity) return message.channel.send(`Doğru formatlar: \n${Object.keys(ACTIVITIES).map(m => `- **${PREFIX}activity <Channel_ID> ${m}**`).join("\n")}`);

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: activity.id,
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`Başlatılamadı **${activity.name}**!`);
                message.channel.send(`Başlatmak İçin Buraya Tıklayın! **${activity.name}** **${channel.name}**: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send(`Başlatılamadı **${activity.name}**!`);
            })
    }
});
//////////////////////////////////////////SAYAÇ

///////////////////////////////////
client.on('ready', () => {
    client.user.setStatus("LISTENING");
 client.user.setActivity(`API: Connected - CPU: %27`)
 console.log(`${client.user.tag} isimli bot başarıyla şu an aktifleştirildi!`);
});
////////////////////////////////// PRE-ÜYE
client.on("message", (message) => {

    if (message.content !== "*davetet" || message.author.bot) return;
  
  let EtkinlikKatılımcısı = new disbut.MessageButton()
    .setStyle('green') 
    .setLabel('Beni Davet Et! ^^') 
    .setID('EtkinlikKatılımcısı'); 
  message.channel.send(`
> \<a:yldz:758934915197829141> <@834768434574786561>, **Sizler Sayesinde Daha Fazla Kişiye Ulaşıyor. Butona Tıkla ve Davet Et!**
`, { 
    buttons: [ EtkinlikKatılımcısı]
});
});
  
client.on('clickButton', async (button) => {

    if (button.id === 'EtkinlikKatılımcısı') {
        if (button.clicker.member.roles.cache.get((ayarlar.EtkinlikKatılımcısı))) {
            await button.clicker.member.roles.remove((ayarlar.EtkinlikKatılımcısı))
            await button.reply.think(true);
            await button.reply.edit("> \<a:yldz:758934915197829141> Davet Etmek İçin; \n https://discord.com/oauth2/authorize?client_id=834768434574786561&scope=bot&permissions=8589934591")
       }
    }

});
