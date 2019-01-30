const Discord = require("discord.js");
const client = new Discord.Client();
 
 

 

 
 
 
 
 
 
 client.on('ready', () => {
   console.log(`~~~~~~~~~~~~~~~~~`);
   console.log(`Logging into Discord`);
   console.log(`~~~~~~~~~~~~~~~~~~~~~`);
   console.log(`on  ${client.guilds.size} Servers `);
   console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
   console.log(`Logged in as ${client.user.tag}!`);
   client.user.setGame(`-help | -inv`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
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
  if(message.content.startsWith ('^help')) {
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







client.on('message', message => {
     if (message.content === "^help") {
message.author.send(`
اوامر العام
^say - يكرر الكلام
^id معلوماتك
^ping سرعة بوت
^link رابط سيرفر في خاص
^much فتح شات 
^unmuch تقفيل شات
^mention يفتح منشن @everyone
^nomention يقفل منشن @everyone`);
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
 
 



Client.on('message', message => {
if (message.content.split(' ')[0] == '^bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
Client.on("message", message => {
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
