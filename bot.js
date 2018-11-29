const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
حيآك ب سيرفرنا ي الغالي :black_heart:
, تقديم اداره نظام انفايت على كريدت 
, لو واجهتك مشكله تكلم مع الاداره ياقلبي.
, اتمنى انك ماتردني 
, حيآك بالدخول الى سيرفر ماجيك..
                               [ https://discord.gg/MTFqBrX ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);