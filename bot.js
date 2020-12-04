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
        if (msg.guild === null){
            console.log('private message from : '+ msg.author.username+' content :  '+msg.content)
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

console.log(option)
console.log(array[random])
var randomColor = Math.floor(Math.random()*16777215).toString(16);

const Embedd = new Discord.MessageEmbed()
             .setColor(randomColor)
             .setTitle(option)
             .addField("The bot choose",array[random])
             msg.reply(Embedd)

}
    } 