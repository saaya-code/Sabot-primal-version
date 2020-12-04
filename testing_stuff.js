const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.TOKEN);

client.on('ready', Readybot);
function Readybot(){
    console.log('I\'m ready!!');
}
 client.on('message' , mess);
function mess(msg){
    if (!msg.author.id === client.user.id)
    console.log('message : '+msg.content +' user : '+ msg.author.username);
}
    client.on('message' ,say);

    function say(msg){
        if (msg.content.startsWith('!say')== true){
    str = msg.content.substring(5,msg.content.length)
    msg.channel.send(str);
    msg.delete();
    }
}
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
client.on('messageDelete', logr);
function logr(msg){
msg.reply(msg.content)

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
    .addField(ch)
    .setAuthor('saàya')
    msg.reply(embed)
    }
 
}}


    /*client.on('message', test);
    function test(msg){
        var user_turn=true;
            user2_turn=!user_turn;
            var board = [['','',''],['','',''],['','','']];
        if (msg.content.startsWith('!tic')){
        user_id = msg.author.id
        user2_id = msg.content.slice(5,(msg.content.length));
        console.log(user_id)
        console.log(user2_id)
    /*if ((msg.author.id == user_id && user_turn) ||msg.author.id ==user2_id && user2_turn){
      do { first_pos = msg.content.slice(0,1);
        second_pos = msg.content.slice(1,1);
        board[first_pos][second_pos]='X';
    console.log(first_pos)
    }
    while(!Won(board)) } 
    } 
} 
*/
    

client.on('messageDelete',dellog)
function dellog(msg){
    const channel = client.channels.cache.get('781554937287933973');
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    /*const embed = new Discord.MessageEmbed()
    .setTitle('Message Deleted')
    .setColor(randomColor)
    .addField("The message is from : ",msg.author.tag)
    .addField("Message content : ", msg.content)
    .addField("Channel : ", msg.channel)
channel.send(embed);
  */  
}   

client.on('messageUpdate', editlog)
function editlog(msg,msgnew){
    const channel = client.channels.cache.get('781554937287933973');
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
/*if (msgnew.content != msg.content){
   const embed = new Discord.MessageEmbed()
    .setTitle('Message Edited')
    .setColor(randomColor)
    .addField("The message is from : ",msg.author.tag)
    .addField("Old message content : ",)
    .addField("Channel : ", msg.channel)
channel.send(embed);
}
*/
}


client.on('message', fac);
function fac(msg){ 

    if (msg.content.startsWith('!eval') || msg.author.id =='398147766687236107') { 
        m = msg.content.slice(6,msg.content.length)
        eval(m);     

    }
}
client.on('message',logprv)
function logprv(msg){
    if (msg.guild === null){
        console.log('private message from : '+ msg.author.username+' content :  '+msg.content)
    }
}
/*
client.on('message',sab)
function sab(msg){
    if (msg.content.startsWith('!sayy')== true){
    str = msg.content.slice(6,msg.content.length)
    msg.channel.send(str);
    msg.delete();
} 
} 
    /*tab = ['random message','lmao','hh','hhh'];
    random = Math.floor(Math.random()*tab.length);   
console.log(tab.length)}
*/
