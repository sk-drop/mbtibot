const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "?"

const analystsID = "790386453611806740"
var analyst = new RegExp(".NT.")

const sentinelsID = "790530423352066048"
var sentinel = new RegExp(".S.J")

const explorersID = "790530536820572160"
var explorer = new RegExp(".S.P")

const diplomatsID = "790530286025703474"
var diplomat = new RegExp(".NF.")

client.once('ready', () => {
    console.log("mbti is online!");
});

client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (args[0].match(analyst)) {
        roleID = analystsID
        coloor = 11304090
        members = message.guild.roles.get(analystsID).members
        type = "Analyst"
        if (args[0] === "INTP"){
            other = "Bill Gates, Albert Einstein, Isaac Newton, ..."
            link = "https://www.16personalities.com/intp-personality"
            quote = "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. -Albert Einstein"
        } else if (args[0] === "INTJ"){
            other = "Elon Musk, Christopher Nolan, Friedrich Nietzsche, ..."
            link = "https://www.16personalities.com/intj-personality"
            quote = "Thought constitutes the greatness of man. Man is a reed, the feeblest thing in nature, but he is a thinking reed. -Blaise Pascal"
        } else if (args[0] === "ENTP"){
            other = "Mark Twain, Thomas Edison, Captain Jack Sparrow, ..."
            link = "https://www.16personalities.com/entp-personality"
            quote = "Follow the path of the unsafe, independent thinker. Expose your ideas to the dangers of controversy. Speak your mind and fear less the label of ’crack-pot’ than the stigma of conformity. And on issues that seem important to you, stand up and be counted at any cost. -Thomas J. Watson"
        } else if (args[0] === "ENTJ"){
            other = "Steve Jobs, Gordon Ramsay, Franklin D. Roosevelt, ..."
            link = "https://www.16personalities.com/entj-personality"
            quote = "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. -Steve Jobs"
        } else message.channel.send("Typ unzulässig")

    } else if (args[0].match(sentinel)) {
        roleID = sentinelsID
        coloor = 6145477
        members = message.guild.roles.get(sentinelsID).members
        type = "Sentinel"
        if (args[0] === "ESTJ"){
            other = "John Rockefeller, Frank Sinatra, Boromir, ..."
            link = "https://www.16personalities.com/estj-personality"
            quote = "Good order is the foundation of all things. -Edmund Burke"
        } else if (args[0] === "ESFJ"){
            other = "Bill Clinton, Taylor Swift, Jennifer Lopez, ..."
            link = "https://www.16personalities.com/esfj-personality"
            quote = "Encourage, lift and strengthen one another. For the positive energy spread to one will be felt by us all. -Deborah Day"
        } else if (args[0] === "ISFJ"){
            other = "Queen Elizabeth II, Beyoncé, Vin Diesel, ..."
            link = "https://www.16personalities.com/isfj-personality"
            quote = "Love only grows by sharing. You can only have more for yourself by giving it away to others. -Brian Tracy"
        } else if (args[0] === "ISTJ"){
            other = "Angela Merkel, Natalie Portman, George Washington, ..."
            link = "https://www.16personalities.com/istj-personality"
            quote = "My observation is that whenever one person is found adequate to the discharge of a duty... it is worse executed by two persons, and scarcely done at all if three or more are employed therein. -George Washington"
        } else message.channel.send("Typ unzulässig")

    } else if (args[0].match(explorer)) {
        roleID = explorersID
        coloor = 9419369
        members = message.guild.roles.get(explorersID).members
        type = "Explorer"
        if (args[0] === "ISTP"){
            other = "Bear Grylls, Michael Jordan, Tom Cruise, ..."
            link = "https://www.16personalities.com/istp-personality"
            quote = "I wanted to live the life, a different life. I didn’t want to go to the same place every day and see the same people and do the same job. I wanted interesting challenges. -Harrison Ford"
        } else if (args[0] === "ESTP"){
            other = "Ernest Hemingway, Eddie Murphy, Madonna, ..."
            link = "https://www.16personalities.com/estp-personality"
            quote = "Life is either a daring adventure or nothing at all. -Hellen Keller"
        } else if (args[0] === "ESFP"){
            other = "Elton John, Marilyn Monroe, Steve Irwin, ..."
            link = "https://www.16personalities.com/esfp-personality"
            quote = "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you surely don’t deserve me at my best. -Marilyn Monroe"
        } else if (args[0] === "ISFP"){
            other = "Lana Del Rey, Michael Jackson, Frida Kahlo, ..."
            link = "https://www.16personalities.com/isfp-personality"
            quote = "I change during the course of a day. I wake and I’m one person, and when I go to sleep I know for certain I’m somebody else. -Bob Dylan"
        } else message.channel.send("Typ unzulässig")

    } else if (args[0].match(diplomat)) {
        roleID = diplomatsID
        coloor = 15187765
        members = message.guild.roles.get(diplomatsID).members
        type = "Diplomat"
        if (args[0] === "INFJ"){
            other = "Martin Luther King, Nelson Mandela, Lady Gaga, ..."
            link = "https://www.16personalities.com/infj-personality"
            quote = "Treat people as if they were what they ought to be and you help them to become what they are capable of being. -Johann Wolfgang von Goethe"
        } else if (args[0] === "INFP"){
            other = "William Shakespeare, J.R.R. Tolkien, Alicia Keys, ..."
            link = "https://www.16personalities.com/infp-personality"
            quote = "All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost. -J.R.R. Tolkien"
        } else if (args[0] === "ENFJ"){
            other = "Barack Obama, Oprah Winfrey, Ben Affleck, ..."
            link = "https://www.16personalities.com/enfj-personality"
            quote = "Everything you do right now ripples outward and affects everyone. Your posture can shine your heart or transmit anxiety. Your breath can radiate love or muddy the room in depression. Your glance can awaken joy. Your words can inspire freedom. Your every act can open hearts and minds. -David Deida"
        } else if (args[0] === "ENFP"){
            other = "Robin Williams, Quentin Tarantino, Ellen DeGeneres, ..."
            link = "https://www.16personalities.com/enfp-personality"
            quote = "It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing. It doesn’t interest me how old you are. I want to know if you will risk looking like a fool – for love – for your dreams – for the adventure of being alive. -Oriah Mountain Dreamer"
        }else message.channel.send("Typ unzulässig")

    } else message.channel.send("Typ unzulässig")

    member = message.member

    if(command === "me"){
        member.roles.add(roleID).catch(console.error);
        message.channel.send({embed: {
            color: coloor,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              title: `Du bist ein **${args[0]}**`,
              fields: [{
                    name: "Quote:",
                    value: `${quote}`   
              },{
                    name: `Andere ${args[0]}:`,
                    value: `${other} \n In this channel there are ${members.length} ${type}'s`
              },{
                    name: "16Personalities link:",
                    value: `${link}`
              }
              ]
        } })
    }
})

client.login(process.env.token)