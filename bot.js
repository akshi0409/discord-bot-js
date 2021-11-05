console.log('Quoter');
require("dotenv").config();
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);
client.on('ready', replybot);

function replybot() {
    console.log('reply');
}

client.on('message', replymsg);

async function replymsg(msg) {
    console.log(msg.content);
    if(msg.content=='!help')
    {
        msg.reply("Type '!quoter' to get a beautiful random quote!");
    }
    if (msg.content == '!quoter') {
        let url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
        let response = await fetch(url)
        let json = await response.json()
        msg.reply(json.quoteText);
        if (json.quoteText == '') {
            let response = await fetch(url)
            let json = await response.json()
            msg.reply(json.quoteText);
        }
    }

}