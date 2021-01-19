const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fetch = require("node-fetch")
client.login(process.env.TOKEN);
client.on('ready', Readybot);
function Readybot(){
    console.log('I\'m ready!!');
}
client.on('message',msg=>{
    try{
        arr2=[]
        var role = msg.guild.roles.cache.find(role => role.id === "759106390517743696");
        role.members.forEach(mbr=>{
            arr2.push(mbr.id)
        })
        if (arr2.includes(msg.author.id) && (msg.content.startsWith("!spam"))){
      arr = msg.content.split(" ")
      console.log(arr)
      userid = arr[1].substring(3,arr[1].length-1) 
      console.log(userid)
      user = client.users.cache.find(u=>u.id==userid)
      msg.channel.send(`Spammed ${user} ${arr[2]} times requested by ${msg.author.tag}`)
     for(let i=0;i<arr[2];i++){
         user.send(arr[3])
         console.log(msg.content)

     } 
     msg.delete()
    }
    else if(msg.content.startsWith("!spam") && !msg.member.roles.cache.find(r=> r.id =="657575771392704514")){
        msg.reply("You don't have permission to use this command.")
        msg.react('❌')

   }
}catch(err){console.error(err)}
}) 




    client.on('message',logprv)
    function logprv(msg){
        if (msg.guild === null && !msg.author.bot && msg.author.id != "398147766687236107"){
           client.users.cache.get("398147766687236107").send("**User : "+msg.author.tag+" sent : "+msg.content+"**");
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
             console.log('!select in '+msg.channel.name)
             console.log('Option : '+option)
             console.log('Things : '+array)

}
    } 



client.on('message',say)
function say(msg){
    if (msg.content.startsWith('!say')&& !msg.author.bot){
        said = msg.content.slice(5,msg.content.length)
        msg.channel.send(said)
        msg.delete();
        console.log('!say '+msg.channel.name)
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
    console.log('!game in '+msg.channel.name)
    }
 
}

client.on('message',appeal)
function appeal(msg){
    if (msg.channel.id == "787653955119349760" && !msg.author.bot){
        msg.react('👍')
        msg.react('👎')
         }
         client.user.setActivity("Running on 10 servers -- version 1.0.1");
    }

    client.on('message',sendmsg)
    function sendmsg(msg){ 
        try{ 
        if (msg.guild === null && !msg.author.bot && msg.author.id =='398147766687236107' && msg.content.startsWith('!send')){
        senderid = msg.content.substring(6,(msg.author.id).length+6)
        contenu = msg.content.substring(senderid.length+6,msg.content.length)
        const user = client.users.cache.get(senderid);
       useridname = client.users.cache.find(user => user.id == senderid)
        user.send(contenu)
        msg.reply('** sent : **"'+contenu+'" to : **'+ useridname.tag+"**")

    }
}catch(err){console.error(err);}
    
    }

client.on('message',msg=>{
    try{
    let symbols =  ["❤️","💛","💚","💙","💜","🖤","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈️","♉️","♊️","♋️","♌️","♍️","♎️","♏️","♐️","♑️","♒️","♓️","🆔","⚛️","🉑","☢️","☣️","📴","📳","🈶","🈚️","🈸","🈺","🈷️","✴️","🆚","💮","🉐","㊙️","㊗️","🈴","🈵","🈹","🈲","🅰️","🅱️","🆎","🆑","🅾️","🆘","❌","⭕️","🛑","⛔️","📛","🚫","💯","💢","♨️","🚷","🚯","🚳","🚱","🔞","📵","🚭","❗️","❕","❓","❔","‼️","⁉️","🔅","🔆","〽️","⚠️","🚸","🔱","⚜️","🔰","♻️","✅","🈯️","💹","❇️","✳️","❎","🌐","💠","Ⓜ️","🌀","💤","🏧","🚾","♿️","🅿️","🈳","🈂️","🛂","🛃","🛄","🛅","🚹","🚺","🚼","🚻","🚮","🎦","📶","🈁","🔣","ℹ️","🔤","🔡","🔠","🆖","🆗","🆙","🆒","🆕","🆓","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔢","#️⃣","*️⃣","▶️","⏸","⏯","⏹","⏺","⏭","⏮","⏩","⏪","⏫","⏬","◀️","🔼","🔽","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","🔄","🔃","🎵","🎶","➕","➖","➗","✖️","💲","💱","™️","©️","®️","〰️","➰","➿","🔚","🔙","🔛","🔝","🔜","✔️","☑️","🔘","⚪️","⚫️","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","🔳","🔲","▪️","▫️","◾️","◽️","◼️","◻️","⬛️","⬜️","🔈","🔇","🔉","🔊","🔔","🔕","📣","📢","👁‍🗨","💬","💭","🗯","♠️","♣️","♥️","♦️","🃏","🎴","🀄️","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"]
    random = Math.floor(Math.random()*symbols.length)
    rnd = Math.floor(Math.random()*25)
    if (!msg.author.bot && rnd=="5" && msg.guild != null && msg.channel.id != "787653955119349760" && msg.content !="!listen" && msg.content !="!stop" ){
        msg.react(symbols[random])
        console.log('reacted on '+ msg.author.tag+"'s message in "+ msg.channel.name+" / content : "+msg.content)
    }

}
catch(err){console.error(err)}
} )

client.on('message',msg =>{
    try{        
       var dude=[];
    arr = ["belehy ridh ","ti fok 3ad","mala amghat fi hal serveur","blhy la3ad tagini","farah bhima"]
    random = Math.floor(Math.random()*arr.length);
  str = msg
    if(msg.mentions.has(client.user) && (!msg.content.includes("@here") && !msg.content.includes("@everyone")) && msg.guild.id =="757362247734657065" &&! msg.author.bot){
        msg.reply(arr[random])
        dude.push(msg.author.id)
        console.log(dude.includes(msg.author.id))
      
    }
  

   
} catch(err){console.error(err)}
})

client.on('ready', ()=> {
    client.user.setPresence({
        status:'dnd',
    })

})

client.on('message', async msg =>{
    try{
if (msg.content.startsWith('!gif')){
    let word = 'Random'
    word = msg.content.slice(5,msg.content.length) 
    let link =  `https://api.tenor.com/v1/search?q=${word}&key=${process.env.TENOR}&contentfilter=high`
    respone = await fetch(link)
    let file = await respone.json()
    random = Math.floor(Math.random()*file.results.length)
    msg.reply(`Here's a gif of ${word} as you requested 😉`);
    msg.channel.send(file.results[random].url)
    console.log('!gif in '+msg.channel.name)
    console.log(file.results[random].url)
    
}
if (msg.content == '!joke'){
let link = `https://official-joke-api.appspot.com/random_joke`
response = await fetch(link)
json = await response.json()
msg.reply(json.setup)
setTimeout(() => {
msg.channel.send(json.punchline)
console.log('!joke in '+msg.channel.name)
console.log(json.setup+" "+json.punchline)
}, 5000);

   }
if (msg.content == '!icon'){
    guild = msg.guild;
    msg.reply(guild.iconURL());
}
if (msg.content.startsWith('!avatar')) {
    const user = msg.mentions.users.first() || msg.author;
    var color = msg.member.displayHexColor;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(user.username)
        .setImage(user.displayAvatarURL())
  msg.channel.send(avatarEmbed);
}
if (msg.content.startsWith("!unclash") && msg.author.id == "398147766687236107"){
    RoleId = "655464948717060117";
    Role = msg.guild.roles.cache.get(RoleId)
   Role.members.forEach(member=>{
       member.roles.remove(Role)
   });
   msg.channel.send('Succesfully removed Clash roaster')
  arr = [];
}
if (msg.content.startsWith('!clash') && msg.author.id == "398147766687236107"){
    var members = msg.content.substr(7,msg.contentlength)
   var arr = members.split(' ');
   clasharr=[];
   RoleId = "655464948717060117";
   Role = msg.guild.roles.cache.get(RoleId)
guild = client.guilds.cache.get("646801258891706369")
    console.log(arr)
    for (i=0;i<arr.length;i++){
        arr[i] = arr[i].substring(3,arr[i].length-1) 
        clash = guild.members.cache.get(arr[i])
        clasharr.push(clash);
        clash.roles.add(RoleId);  
     }
     setInterval(function(){
        var date = new Date(); 
        if(date.getHours() === undefined && date.getMinutes() === undefined){
           Role.members.forEach(mbr=>mbr.send('Clash Reminder'))
        client.channels.cache.get("800366666663854100").send(`<@&${RoleId}> It's ${date.getHours()}:${date.getMinutes()} which means it's time to c-clash!`)           
        }
    }, 60000);

msg.channel.send("Successfully added clash Roaster")
}
if (msg.content == '!roaster' ){
    var color = msg.member.displayHexColor;
    i=1;
    RoleId = "655464948717060117";
    Role = msg.guild.roles.cache.get(RoleId)
    const min = new Discord.MessageEmbed()
    .setTitle('Clash Roaster')
     .setColor(color)
    Role.members.forEach((member)=>{
    
    min.addField(`Player ${i}` ,member)
    i++;
    })
    msg.channel.send(min);
}


   if (msg.content == '!quote'){
    const url = "https://api.quotable.io/random";
    response = await fetch(url)
    json = await response.json();
    const embed = new Discord.MessageEmbed()
    .setFooter(json.author)
    .addField('Quote : ',json.content)
    .setColor("#00FFFF")
    .setImage('https://lh3.googleusercontent.com/AlSLYTv0cCe4oLJw7mHeZ8jGD65e6IR8V3MGtXFgbWlAjg0PrpGTGASk1PsRc4bufMiBgXe38ZShWPDdEIo1cLJJjQ=w640-h400-e365-rj-sc0x00ffffff');
    msg.channel.send(embed)
    console.log('!quote in '+msg.channel.name)
    console.log(json.content)


}
if (msg.content.startsWith('!meme')){
    word = msg.content.slice(6,msg.content.length)
    const url = `https://meme-api.herokuapp.com/gimme/${word}`
    response = await fetch(url);
    json = await response.json();
    console.log(word)
    if (json.code == '404'){
        msg.channel.send(json.message)
    }
    else{
    await msg.delete();
   msg.reply('Here\'s a meme from /r/'+json.subreddit)
   msg.channel.send(json.url)
   console.log('!meme in '+msg.channel.name)
}}

}
catch(err){
    msg.react('❌')
    console.error(err)
}
})
client.on('guildMemberAdd', (guildMember) => {
    try{
    guildMember.roles.add(guildMember.guild.roles.cache.find(role => role.id == "699670910973771848"));
}
catch(err){    msg.react('❌')
console.error(err)
}
});