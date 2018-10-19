const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "502913270508683267"; 
var channel = "502946002983059459";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('yousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7i00')
    },305);
})


client.on('message',function(message) {
    let prefix = "!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});

client.on('ready',async () => {
  let GUILDID = '502913270508683267';
  let CHANNELID = '502963206730416129'; 
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
