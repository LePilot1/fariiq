//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: LePilot_
//copyright © LePilot_ // Faris Al-Harbi

const Discord = require("discord.js");
const myid = ['759660764230713375'];
const client = new Discord.Client();
-------------------------------------------------
client.login(process.env.TOKEN);
---------------------------------------------
client.on('message', message => {
  if (message.content === '$Rilsey') {
message.channel.send('هون ريلسي منيك')
  }
 -----------------------------------------------
  if(message.content.startsWith("$say")) {
 
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
------------------------------------------------------------------
client3.on('message', message => {
  if(message.content === '$Bastic'){
message.channel.send('فخآمة باستك ولا.')
  }
 
