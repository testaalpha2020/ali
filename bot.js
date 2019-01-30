const Discord = require("discord.js");
const client = new Discord.Client();
 
 

 

 
 
 
 
 
 
 







 
 client.on('message', message => {
    if (message.content.startsWith("*link")) {
 
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






























 
 
 
client.login(process.env.BOT_TOKENN);
