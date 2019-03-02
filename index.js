const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client();

//ATIVAR BOT
client.login(process.env.TOKEN)
client.on("ready",() =>{
    console.log("BOT DIFERENCIADO ativado com sucesso.")
    client.user.setActivity("pedra no lago")
})        

//TESTE DE ATIVIDADE
client.on("message", async (msg, args) =>{
    if(msg.author.bot === true) return;
    if(msg.content === "!teste") {
        const embed = new Discord.RichEmbed()
        .setAuthor("BOT DIFERENCIADO", "https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-ae4e17f5b9624e2f-24x18.png")
        .setDescription("**Tudo certo por aqui!!**")
        .setFooter("Comando ultilizado por: " + msg.author.tag, msg.author.avatarURL)
        .setColor("#FAE3E3")
        client.channels.get("549948113083826176").send(embed)
    }

//DM CHAT
    if(msg.content === "commands"){
            const embed = new Discord.RichEmbed()
                .setAuthor("BOT DIFERENCIADO", "https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-ae4e17f5b9624e2f-24x18.png")
                .setTitle("**Lista de comandos abaixo.**")
                .setColor("#46CCBF")
                .addField("Para ver as informaçoes do seu perfil digite:", "**!perfil**")
                .addField("Para testar a atividade do bot digite:", "**!teste**")
                .setTimestamp()
            msg.author.send(embed)   
        }

//VOTE SYSTEM

    if(msg.content === "batata") {
        const text = args[1];
        await msg.react('✅')
        await msg.react('❎')
        msg.channel.send(text).then(msg2 => msg2.react('❎'))
    }

//SOBRE O PERFIL
    if(msg.content === "!perfil") {
        if(msg.author.presence.status === "dnd") {
            const embed = new Discord.RichEmbed()
                .setAuthor(msg.author.username, msg.author.avatarURL)
                .setTitle("PERFIL DO USUARIO")
                .addField("NICKNAME:", msg.author.username, true)
                .setThumbnail(msg.author.avatarURL)
                .addField("TAG:", msg.author.tag, true)
                .addField("ID:", msg.author.id, true)
                .addField("STATUS:", msg.author.presence.status.replace("dnd", "Ocupado"), true)
                .addField("GAME:", msg.author.presence.game, true)
                .setColor("#EA3B2E")
                .setTimestamp()
            msg.channel.send(embed);
        } else if(msg.author.presence.status === "online") {
            const embed = new Discord.RichEmbed()
                .setAuthor(msg.author.username, msg.author.avatarURL)
                .setTitle("PERFIL DO USUARIO")
                .addField("NICKNAME:", msg.author.username, true)
                .setThumbnail(msg.author.avatarURL)
                .addField("TAG:", msg.author.tag, true)
                .addField("ID:", msg.author.id, true)
                .addField("STATUS:", msg.author.presence.status.replace("online", "Online"), true)
                .addField("GAME:", msg.author.presence.game, true)
                .setColor("#74F900")
                .setTimestamp()
            msg.channel.send(embed)
          } else if(msg.author.presence.status === "offline") {
                const embed = new Discord.RichEmbed()
                    .setAuthor(msg.author.username, msg.author.avatarURL)
                    .setTitle("PERFIL DO USUARIO")
                    .addField("NICKNAME:", msg.author.username, true)
                    .setThumbnail(msg.author.avatarURL)
                    .addField("TAG:", msg.author.tag, true)
                    .addField("ID:", msg.author.id, true)
                    .addField("STATUS:", msg.author.presence.status.replace("offline", "Offline"), true)
                    .addField("GAME:", msg.author.presence.game, true)
                    .setColor("#4A5759")
                    .setTimestamp()
                msg.channel.send(embed)
        } else if(msg.author.presence.status === "idle") {
            const embed = new Discord.RichEmbed()
                .setAuthor(msg.author.username, msg.author.avatarURL)
                .setTitle("PERFIL DO USUARIO")
                .addField("NICKNAME:", msg.author.username, true)
                .setThumbnail(msg.author.avatarURL)
                .addField("TAG:", msg.author.tag, true)
                .addField("ID:", msg.author.id, true)
                .addField("STATUS:", msg.author.presence.status.replace("idle", "Ausente"), true)
                .addField("GAME:", msg.author.presence.game, true)
                .setColor("#FEC601")
                .setTimestamp()
            msg.channel.send(embed)
    }
}
})