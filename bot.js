const Discord = require("discord.js");
const client = new Discord.Client();
 
 client.on('message', message => {
   if(message.content.startsWith("*invite")
                                 invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has **${inviteCount}** invites.`);
});
  }
});
 
 
 

 
 
 
 
client.login(process.env.BOT_TOKEN);
