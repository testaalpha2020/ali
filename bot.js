const Discord = require("discord.js");
const client = new Discord.Client();
 
 

 
client.on('message', message => {

    if(message.content === prefix + "^unmuch") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "^much") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});
 
 
 
 
 
 client.on('message', message => {
    if (message.content.startsWith(prefix + '^clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
 
   
   
   var prefix = "^"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**سبب طرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
  
   
   
   var prefix = "^"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', message => {
    var prefix = "^"
    if (message.content === prefix + 'createT') {
        if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
         message.guild.createChannel('اسم الروم الكتابي', 'text')
         message.guild.createChannel('اسم الروم الصوتي', 'voice')
    
    message.channel.sendMessage('**Text Channel Was Succsesfluy Created**')
    }
    });





client.on('message', message => {
    if (!message.channel.guild) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("***  ليس معك صلاحيات  ***")
    var prefix = "^";
       if (message.content ===   prefix + "addrole") {
    message.channel.send("<@" + message.author.id + ">  ***  جاري اعطاء الرتبة للاعضاء كما امرت  *** ")
    message.guild.members.forEach(m => {
    m.addRole(message.guild.roles.find('name', 'اسم الرتبة'))
    })
    }
    
       if (message.content ===   prefix + "remove role") {
    message.channel.send("<@" + message.author.id + ">  ***  جاري اعطاء الرتبة للاعضاء كما امرت  *** ")
    message.guild.members.forEach(m => {
    m.removeRole(message.guild.roles.find('name', 'اسم الرتبة'))
    })
    }
    
    });




client.on("message", message => {
    const prefix = "^"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

















 







 
 client.on('message', message => {
    if (message.content.startsWith("^link")) {
 
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Done  🔗|🔗  on DM")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("This link will stay with you 24 hours 🔗")
      message.author.sendEmbed(Embed11)
    }
});







client.on('message', message => {
     if (message.content === "^ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('Bot Ping is' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 
  message.channel.sendEmbed(embed);
    }
});
 




 


 
var prefix = "^";
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
 
 
 
if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }
 
 
});
 




 
client.on('message', function(msg) {
         var prefix = "^"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type **',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** Roles**',`[** __{msg.guild.roles.size}__ **]`,true)
      .addField(':pencil:**Text Channel**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**Voice Channel **',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**owner**',`**${msg.guild.owner}**`,true)
      .addField(':id:**Server ID**',`**${msg.guild.id}**`,true)
      msg.channel.send({embed:embed});
    }
  });
 
 
 

        client.on('message', message => {
    if(message.content == '^server') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**   📗  online:  **__${message.guild.members.filter(m=>m.presence.status == 'online').size}__
 
**   📕  dnd:      **__${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__
 
**   📙  idle:     **__${message.guild.members.filter(m=>m.presence.status == 'idle').size} __  
 
**   📓   offline:  **__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__
 
**   🔖   all: **__${message.guild.memberCount}__`)      
 
         message.channel.send({embed});
 
    }
  });
    
 






client.on("message", msg => {
           var prefix = "^";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: This command for servers **');        
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  name", `__**[ ${msg.author.username}#${msg.author.discriminator} ]**__`, true)
          .addField(":id:  id", `__**[ ${msg.author.id} ]**__`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  status', `__**[ ${msg.author.presence.status.toUpperCase()} ]**__`, true)
          .addField(':satellite_orbital:   playing', `__**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**__`, true)
          .addField(':military_medal:  role', `__**[ ${msg.member.roles.filter(r => r.name).size} ]**__`, true)
          .addField(':robot:  bot?  ', `__**[ ${msg.author.bot.toString().toUpperCase()} ]**__`, true);
      msg.channel.send({embed: embed})
  }
});
 
 






client.on('message', message => {
  if(message.content.startsWith ("^help")) {
      if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('#044812')
          .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
 
    .setDescription(`**[ تــــــــم الارســــال بالخـــــــاص ]** `)
        message.channel.send()
 
message.channel.sendEmbed(embed)
}
});




client.on('ready', () => {
   console.log(`~~~~~~~~~~~~~~~~~`);
   console.log(`Logging into Discord`);
   console.log(`~~~~~~~~~~~~~~~~~~~~~`);
   console.log(`on  ${client.guilds.size} Servers `);
   console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
   console.log(`Logged in as ${client.user.tag}!`);
   
   client.user.setStatus("dnd")
});


client.on('message', message => {
     if (message.content === "^help") {
message.author.send(`
         **general**
^say - يكرر الكلام
^id معلوماتك
^ping سرعة بوت
^link رابط سيرفر في خاص
         **Adminastor**
^bc برودكاست
^kick طرد مع سبب
^ban باند مع سبب
^unmuch تقفيل شات
^much فتح شات
^image صورة السيرفر
^createT يسوي روم صوتي او روم كتابة
^addrole اشافة رتبة والاسم الي تبيه





**سيتم اضافة موقع بدل هاذا هيلب ف ترقبو البوت في بداية**`);
    }
});




client.on('message', message => {
var prefix = "^";
 
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("```**-bc <message>**```");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('✍ المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                        .addField('---------------------------')
            .addField('📩 الرسالة : ', args)
                                    .addField('---------------------------')
                        .addField('✨ السيرفر :', `${message.guild.name}`)
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
 
 



client.on('message', message => {
if (message.content.split(' ')[0] == '^bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {
 
                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
 
 




client.on('message', message => {
 
       if(message.content === prefix + "^much") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **No🌚**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
 
              }).then(() => {
              message.channel.send('__**Done 🔒**__')            
              });
                }
//فتح الشات
    if(message.content === prefix + "^unmuch") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No🌚**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
 
              }).then(() => {
              message.channel.send('__**Done 🔓**__')        
              });
                }
               
         
       
});
 




client.on('message', message => {
 
       if(message.content === prefix + "^nomention") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **No🌚**');
              message.channel.overwritePermissions(message.guild.id, {
            MENTION_EVERYONE: false
 
              }).then(() => {
              message.channel.send('__**Done 🔒**__')            
              });
                }
//فتح الشات
    if(message.content === prefix + "^mention") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No🌚**');
              message.channel.overwritePermissions(message.guild.id, {
            MENTION_EVERYONE: true
 
              }).then(() => {
              message.channel.send('__**Done 🔓**__')
              });
                }
               
         
       
});





 
 
 
client.login(process.env.BOT_TOKENN);
