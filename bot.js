const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.TOKEN);
client.on('ready', Readybot);
function Readybot(){
    console.log('I\'m ready!!');
}
//info
client.on('message', info);
function info(msg){    
    if (msg.content.startsWith('/info')){

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    const infoEmbed = new Discord.MessageEmbed()
    .setColor(randomColor)
    .setTitle('User info')
    .setAuthor('saàya hh')
    .addField('user Id : ', msg.author.id)
    .addField('user name : ', msg.author.username)
        msg.reply(infoEmbed)


    }}
    //reciever
    client.on('message',logprv)
    function logprv(msg){
        if (msg.guild === null && !msg.author.bot){
           client.users.cache.get("398147766687236107").send("**User : "+msg.author.tag+" sent : "+msg.content+"**");
           client.users.cache.get(msg.author.id).send("your message has been sent to saàya!");
        }
    }

    client.on('message', select)
    function select(msg){
        if (msg.content.startsWith('!select')){
        str = msg.content.substring(8,msg.content.length)
        if (str.includes('(')&&str.includes(')')){
option = str.substring(str.indexOf('(')+1,str.indexOf(')'))
str=str.substring(str.indexOf(')')+2,str.length)
}
else{
    str = msg.content.substring(8,msg.content.length)
 option ='Selection'
}
array = str.split(' ');
random = Math.floor(Math.random()*array.length)
var randomColor = Math.floor(Math.random()*16777215).toString(16);

const Embedd = new Discord.MessageEmbed()
             .setColor(randomColor)
             .setTitle(option)
             .addField("The bot choose",array[random])
             msg.reply(Embedd)

}
    } 



client.on('message',say)
function say(msg){
    if (msg.content.startsWith('!say')&& !msg.author.bot){
        said = msg.content.slice(5,msg.content.length)
        msg.channel.send(said)
        msg.delete();
    }
}
client.on('message', game);
function game(msg){
    ch ='ahla'
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    if(msg.content.startsWith('!game')){
   var  num = Math.floor(Math.random()*100)
  var  userinput=parseInt((msg.content.slice(6,(msg.content.length))))
  
if(Math.abs(num-userinput < 10)){
    ch = 'you won, bot\'s number was '+num+ ' and the difference is  '+ Math.abs(num-userinput)+'';
    }
    if(Math.abs(num-userinput > 10)){ 
       ch = 'you lost, bot\'s number was ' +num+ ' and the difference is  '+ Math.abs(num-userinput)+'';
    }
    const embed = new Discord.MessageEmbed()
    .setColor(randomColor)
    .setTitle('Number games')
    .addField(ch,'The result is')
    .setAuthor('Game by saàya')
    msg.reply(embed)
    }
 
}

client.on('message',appeal)
function appeal(msg){
    if (msg.channel.id == "787653955119349760" && !msg.author.bot){
        msg.react('👍')
        msg.react('👎')
         }
         client.user.setActivity("Serving Master saàya");
    }

    client.on('message',sendmsg)
    function sendmsg(msg){
        if (msg.guild === null && !msg.author.bot && msg.author.id =='398147766687236107' && msg.content.startsWith('!send')){
        senderid = msg.content.substring(6,(msg.author.id).length+6)
        contenu = msg.content.substring(senderid.length+6,msg.content.length)
        
        const user = client.users.cache.get(senderid);
        user.send(contenu)

   }
    }

