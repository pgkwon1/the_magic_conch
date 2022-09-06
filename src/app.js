require('dotenv').config()
const {
    Client,
    GatewayIntentBits,
} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})
const prefix = "마법의소라고동님"
const answerList = [
    "그래", "해도 돼", "그래 해도돼", "당연하지", "그래 좋아", "특별히 허락해주지", "안되는건 안되는거야", "당장 시작해", "당근이지",
    "아니", "안돼", "하지마", "응 안돼", "나중에 해", "다음에 해", "어쩌라고", "절대 안돼", "안 들려", "그러지 마", "허락 못해", "그만해", "절대 하지 마", "가만히 있어"
]
client.login(process.env.DISCORD_SECRET_KEY)
client.on('ready', () => {
    console.log(`ready complete`)
})

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false
    if (msg.content.startsWith(prefix)) {
        const randomNum = Math.floor(
            Math.random() * answerList.length
        )
        await msg.channel.send({
            files : [
                "https://c.tenor.com/Y_dBpTURBncAAAAd/magic-conch-spongebob.gif"
            ]
        })
        setTimeout(() => {
            msg.reply(answerList[randomNum])
        },4000)
    }
})