module.exports = async function (msg) {
    try{
    msg.channel.send("Loading data..").then(async msg1=>{

        msg.reply(`Your client ping is ${msg1.createdTimestamp - msg.createdTimestamp}`)
        await msg1.delete()

    })
} catch(err){console.log(err)
    msg.react("❌")}
}
