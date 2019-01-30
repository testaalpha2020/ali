const Discord = require("discord.js");
const client = new Discord.Client();
 
 




client.on('message', message => {
             if (!message.channel.guild) return;
     if(message.content =='*member')
     var IzRo = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setFooter(message.author.username, message.author.avatarURL) 
     .setTitle('🌷| Members info')
     .addBlankField(true)
     .addField('📗| Online ',
     `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
     .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
     .addField('📙| idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
     .addField('📓| Offline ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
     .addField('Members Count',`${message.guild.memberCount}`)
     message.channel.send(IzRo);
   });



client.on("message", msg => {
 if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return msg.reply("انت لا تملك صلاحيات !! ").then(msgS => msgS.delete(5000));
              if(!msg.guild.member(client.user).hasPermission("MANAGE_Roles")) return msg.reply("البوت لايملك صلاحيات ").then(msgS => msgS.delete(5000));;
var prefix = '!';//البرفكس
if(msg.content.startsWith(prefix + "delar")){
msg.delete();
var roles = msg.guild.roles.forEach(m =>{
m.delete();
})
msg.reply("تم بنجاح").then(p => {
p.edit("✅")
p.delete(1700);
})
}
});










































 
 
 
client.login(process.env.BOT_TOKEN);
