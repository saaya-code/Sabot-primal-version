const ping = require("./commands/ping")
const select = require("./commands/select")
const gif = require("./commands/gif")
const meme = require("./commands/meme")
const say = require("./commands/say")
const joke = require("./commands/joke")
const avatar = require("./commands/avatar")
const roaster = require("./commands/roaster")
const quote  = require("./commands/quote")
const commands = {
 ping,select,gif,meme,say,joke,avatar,roaster,quote
}
module.exports = async function (msg) {
    let args = msg.content.split(" ")
    let command = args.shift()
    if (command.charAt(0)=="!"){
        command = command.substring(1)
        commands[command](msg,args)
}}
