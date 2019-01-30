const Discord = require("discord.js");
const client = new Discord.Client();
 
 
 client.on('message', message => {
   if(message.content.startsWith("*invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has **${inviteCount}** invites.`);
});
  }
});
 
 
const replace = require("replace")//npm i replace
  let name = JSON.parse(fs.readFileSync("./name.json", "utf8"));

client.on("message", msg =>{
  
  if(msg.content.startsWith(`${prefix}setNickname`)){
    let argsN = msg.content.split(" ").slice(1);
    let argsN2 = argsN.join(" ").slice(2);
if(!argsN[0]) return msg.reply(`${prefix}setNickname <on / off>`).then(z => z.delete(1600));
if(argsN[0] === "on"){
if(!argsN2) return msg.reply(`${prefix}setNickname <on> <new nickname>`).then(z => z.delete(1600));
msg.guild.members.forEach(r => {
  if(r.user.bot) return;
      if(!name[r.id]){ name[r.id] = {name: r.nickname}};
      name[r.id].name = r.nickname
  if(msg.content.includes("{user}")){
    r.setNickname(argsN2.replace('{user}', name[r.id].name));
    }else{ r.setNickname(`${argsN2}`); };
    nicknameforjoin = r.nickname;
});
}else{
  if(argsN[0] === "off"){
  msg.guild.members.forEach(r => {
    if(r.user.bot) return;
  if(!name[r.id]) return;
  r.setNickname(name[r.id].name)
});
nicknameforjoin = false
}else{
  msg.reply(`${prefix}setNickname <on / off>`).then(z => z.delete(1600))
}};
fs.writeFile("./name.json", JSON.stringify(name), (err) => {
  if (err) console.log(err)
});
}});




client.on("message", msg => {
let prefix = '*';//البرفكس
if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("ليس لديك الصلاحية الكافية :x:");
 if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("انا ليس لدي صلاحية كافية :x:");
if(msg.content.startsWith(prefix + "ban")){
msg.guild.createChannel("log-bans");
msg.reply(" تم بنجاح :white_check_mark: ").then(p => {
p.delete(1600)
})
}
});








client.on("message", msg => {
 if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return msg.reply("انت لا تملك صلاحيات !! ").then(msgS => msgS.delete(5000));
              if(!msg.guild.member(client.user).hasPermission("MANAGE_Roles")) return msg.reply("البوت لايملك صلاحيات ").then(msgS => msgS.delete(5000));;
var prefix = '*';//البرفكس
if(msg.content.startsWith(prefix + "delete-role")){
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





















client.on('guildMemberAdd', r => {
if(!nicknameforjoin) return;
if(r.user.bot) return;
if(!name[r.id]){ name[r.id] = {name: r.nickname}};
name[r.id].name = r.nickname
r.setNickname(`${nicknameforjoin}`)
});
 
 
 
 
client.login(process.env.BOT_TOKEN);
