const Discord = require('discord.js');
const client = new Discord.client();

const prefix = "?"

const analystsID = "790386453611806740"
var analyst = new RegExp(".nt.")

const sentinelsID = "790530423352066048"
var sentinel = new RegExp(".s.j")

const explorersID = "790530536820572160"
var explorer = new RegExp(".s.p")

const diplomatsID = "790530286025703474"
var diplomat = new RegExp(".nf.")

client.once('ready', () => {
    console.log("mbti is online!");
});

client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (args[0].match(analyst)) roleID = "790386453611806740"
    else if (args[0].match(sentinel)) roleID = "790530423352066048"
    else if (args[0].match(explorer)) roleID = "790530536820572160"
    else if (args[0].match(diplomat)) roleID = "790530286025703474"
    else message.channel.send("Typ unzulässig")

    member = message.member

    if(command === me){
        member.addRole(roleID).catch(console.error);
    }
})

client.login(process.env.token)