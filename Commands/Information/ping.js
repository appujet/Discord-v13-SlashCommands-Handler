const { MessageEmbed, Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["p"],
    description: "A simple ping command.",
    category: "Informations",
    example: ["ping"],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     */

    run: async (client, message, args, prefix, color) => {
       await message.reply({ content: "Pinging..." }).then(async (msg) => {
            const ping = msg.createdAt - message.createdAt;
            const api_ping = client.ws.ping;

            const PingEmbed = new MessageEmbed()
            .setAuthor("Pong", client.user.displayAvatarURL())
            .setColor(color)
            .addField("Bot Latency", `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, true)
            .addField("API Latency", `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, true)
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .setTimestamp();
            
            await msg.edit({
                content: "**PINGED**",
                embeds: [PingEmbed]
            })
        }).catch((error) => { client.oops(message.channel, error.message) })
    }
}