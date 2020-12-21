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
        var coloor = 11304090
        var members = message.guild.roles.cache.get(analystsID).members
        var type = "Analyst"
        var role = message.guild.roles.cache.find(r => r.name === "Analysts");
        var likes = "Rational, Kontrovers, Einzelgänger, ..."
        if (args[0] === "INTP"){
            var other = "Bill Gates, Albert Einstein, Isaac Newton, ..."
            var link = "https://www.16personalities.com/de/intp-personlichkeit"
            var quote = "Lerne von gestern, lebe für heute, hoffe für morgen. Das Wichtigste ist, nicht aufzuhören, Fragen zu stellen. -Albert Einstein"
        } else if (args[0] === "INTJ"){
            var other = "Elon Musk, Christopher Nolan, Friedrich Nietzsche, ..."
            var link = "https://www.16personalities.com/de/intj-personlichkeit"
            var quote = "Sie haben kein Recht auf Ihre Meinung. Sie haben ein Recht auf Ihre fundierte Meinung. Niemand ist berechtigt zur Ignoranz. -Harlan Ellison"
        } else if (args[0] === "ENTP"){
            var other = "Mark Twain, Thomas Edison, Captain Jack Sparrow, ..."
            var link = "https://www.16personalities.com/de/entp-personlichkeit"
            var quote = "Schlagen Sie den gefährlichen Weg des unabhängigen Denkers ein. Setzen Sie Ihre Ideen den Gefahren der Kontroverse aus. Bringen Sie Ihre Meinung ein und fürchten Sie nicht das Etikett des ’Spinners’, denn der Makel der Konformität ist viel schlimmer. Und treten Sie in Grundsatzfragen unerschrocken für Ihre Überzeugungen ein, koste es was es wolle. -Thomas J. Watson"
        } else if (args[0] === "ENTJ"){
            var other = "Steve Jobs, Gordon Ramsay, Franklin D. Roosevelt, ..."
            var link = "https://www.16personalities.com/de/entj-personlichkeit"
            var quote = "Ihre Zeit ist begrenzt. Vergeuden Sie sie nicht darauf, das Leben anderer zu leben. Lassen Sie sich nicht von Dogmen einsperren. Dies würde bedeuten, nach den Schlussfolgerungen anderer zu leben. Gestatten Sie es dem Lärm der öffentlichen Meinung nicht, ihre eigene innere Stimme mundtot zu machen. Und haben Sie immer den Mut, Ihrem Herzen und Ihrer Intuition zu folgen. Ihr Herz und Ihre Intuition haben ein untrügliches Gefühl dafür, was Sie im Leben werden wollen. Alles andere ist zweitrangig. -Steve Jobs"
        } else message.channel.send("Typ unzulässig")

    } else if (args[0].match(sentinel)) {
        var coloor = 6145477
        var members = message.guild.roles.cache.get(sentinelsID).members
        var type = "Sentinel"
        var role = message.guild.roles.cache.find(r => r.name === "Sentinels");
        var likes = "Kooperativ, Vorsichtig, Bodenständig, ..."
        if (args[0] === "ESTJ"){
            var other = "John Rockefeller, Frank Sinatra, Boromir, ..."
            var link = "https://www.16personalities.com/de/estj-personlichkeit"
            var quote = "Ordnung ist das Fundament aller Dinge. -Edmund Burke"
        } else if (args[0] === "ESFJ"){
            var other = "Bill Clinton, Taylor Swift, Jennifer Lopez, ..."
            var link = "https://www.16personalities.com/de/esfj-personlichkeit"
            var quote = "Sich gegenseitig ermutigen, fördern und stärken. Die positive Energie, die auf einen von uns einwirkt, wird von uns allen empfunden. -Deborah Day"
        } else if (args[0] === "ISFJ"){
            var other = "Queen Elizabeth II, Beyoncé, Vin Diesel, ..."
            var link = "https://www.16personalities.com/de/isfj-personlichkeit"
            var quote = "Liebe wächst nur, indem man Liebe gibt. Man kann nur mehr für sich selbst haben, indem man es mit anderen teilt. -Brian Tracy"
        } else if (args[0] === "ISTJ"){
            var other = "Angela Merkel, Natalie Portman, George Washington, ..."
            var link = "https://www.16personalities.com/de/istj-personlichkeit"
            var quote = "Wenn ein Mensch eine Aufgabe bewältigen kann, so wird diese Aufgabe … schlechter von zwei Menschen ausgeführt und so gut wie überhaupt nicht von drei oder mehr Menschen. -George Washington"
        } else message.channel.send("Typ unzulässig")

    } else if (args[0].match(explorer)) {
        var coloor = 9419369
        var members = message.guild.roles.cache.get(explorersID).members
        var type = "Explorer"
        var role = message.guild.roles.cache.find(r => r.name === "Explorers");
        var likes = "Spontan, schnell im Denken, schnell gelangweilt, ..."
        if (args[0] === "ISTP"){
            var other = "Bear Grylls, Michael Jordan, Tom Cruise, ..."
            var link = "https://www.16personalities.com/istp-personlichkeit"
            var quote = "Ich wollte das Leben erleben, ein anderes Leben. Ich wollte nicht jeden Tag zum gleichen Ort gehen, die gleichen Leute sehen und die gleiche Arbeit verrichten. Ich wollte interessante Herausforderungen. -Harrison Ford"
        } else if (args[0] === "ESTP"){
            var other = "Ernest Hemingway, Eddie Murphy, Madonna, ..."
            var link = "https://www.16personalities.com/estp-personlichkeit"
            var quote = "Das Leben ist entweder ein kühnes Abenteuer oder gar nichts. -Hellen Keller"
        } else if (args[0] === "ESFP"){
            var other = "Elton John, Marilyn Monroe, Steve Irwin, ..."
            var link = "https://www.16personalities.com/esfp-personlichkeit"
            var quote = "Ich bin egoistisch, ungeduldig und ein wenig unsicher. Ich mache Fehler, gerate außer Kontrolle und manchmal ist es schwer für andere, mit mir umzugehen. Wer jedoch in meiner schlimmsten Gemütslage nicht mit mir umgehen kann, verdient mich auch in meiner besten nicht. -Marilyn Monroe"
        } else if (args[0] === "ISFP"){
            var other = "Lana Del Rey, Michael Jackson, Frida Kahlo, ..."
            var link = "https://www.16personalities.com/isfp-personlichkeit"
            var quote = "Ich ändere mich im Laufe eines Tages. Ich wache auf, und ich bin jemand, und wenn ich schlafen gehe, weiß ich genau, dass ich jemand anderes bin. -Bob Dylan"
        } else message.channel.send("Typ unzulässig")

    } else if (args[0].match(diplomat)) {
        var coloor = 15187765
        var members = message.guild.roles.cache.get(diplomatsID).members
        var type = "Diplomat"
        var role = message.guild.roles.cache.find(r => r.name === "Diplomats");
        var likes = "An tiefen Konversationen interessiert, Tagträumer, Kreativ, ..."
        if (args[0] === "INFJ"){
            var other = "Martin Luther King, Nelson Mandela, Lady Gaga, ..."
            var link = "https://www.16personalities.com/de/infj-personalichkeit"
            var quote = "Jeder Mensch muss entscheiden, ob er sich im Licht des schöpferischen Altruismus oder in der Dunkelheit des zerstörerischen Egoismus bewegen will. -Martin Luther King"
        } else if (args[0] === "INFP"){
            var other = "William Shakespeare, J.R.R. Tolkien, Alicia Keys, ..."
            var link = "https://www.16personalities.com/de/infp-personlichkeit"
            var quote = "Es glänzt nicht alles, was Gold ist. Nicht alle, die wandern, haben sich verirrt. Das Alte, das stark ist, verdirbt nicht. Tiefe Wurzeln sind sicher vor dem Frost. -J.R.R. Tolkien"
        } else if (args[0] === "ENFJ"){
            var other = "Barack Obama, Oprah Winfrey, Ben Affleck, ..."
            var link = "https://www.16personalities.com/de/enfj-personlichkeit"
            var quote = "Alle Ihre Handlungen wirken nach außen und beeinflussen Ihre Umgebung. Ihr Verhalten kann Herzlichkeit vermitteln oder Angst übertragen. Ihre Ausstrahlung kann Zuneigung erzeugen oder Bedrückung auslösen. Ihr Blick kann Freude wecken. Ihre Worte können den Wunsch nach Freiheit inspirieren. Jede Tat von Ihnen kann Verstand und Herzen öffnen. -David Deida"
        } else if (args[0] === "ENFP"){
            var other = "Robin Williams, Quentin Tarantino, Ellen DeGeneres, ..."
            var link = "https://www.16personalities.com/de/enfp-personlichkeit"
            var quote = "Es interessiert mich nicht, womit du dein Geld verdienst. Ich möchte wissen, wonach du strebst, ob du zu träumen wagst, die Sehnsüchte deines Herzens zu erfüllen. Es interessiert mich nicht, wie alt du bist. Ich möchte wissen, ob du riskierst, für einen Narren gehalten zu werden: für deine Liebe, für deine Träume, für das Abenteuer deines Lebens. -Oriah Mountain Dreamer"
        }else message.channel.send("Typ unzulässig")

    } else message.channel.send("Typ unzulässig")

    member = message.member

    if(command === "me"){
        member.addRole(role).catch(console.error);
        message.channel.send({embed: {
            color: coloor,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
            title: `Du bist ein **${args[0]}**`,
            fields: [{
                name: "Quote:",
                value: `*${quote}*`   
            },{
                name: `Damit bist du ein ${type}`,
                value: `Auf diesem Server gibt es ${members.length} ${type}'s`
            },{
                name: "Du bist wahrscheinlich:",
                value: `${likes}`
            },{
                name: `Andere ${args[0]}:`,
                value: `${other}`
            },{
                name: "16Personalities link:",
                value: `${link}`
            }],
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: "© poorlydisguised"
            }
        } })
    }
})

client.login(process.env.token)