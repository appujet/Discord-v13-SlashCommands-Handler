const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "ping",
    description: "🏓 pong",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
        await interaction.editReply({ content: "Pinging..." }).then(async () => {
            const ping =  ++client.ws.ping
            const api_ping = client.ws.ping;

            await interaction.editReply({
                content: `**${interaction.member.user.toString()} PINGED**`,
                embeds: [new MessageEmbed().setAuthor(`Pong`, client.user.displayAvatarURL({ dynamic: true })).setColor(client.config.Bot.Color).setFooter(`Requested by ${interaction.member.user.username}`, interaction.member.user.displayAvatarURL({ dynamic: true })).addFields([{ name: "Bot Latency", value: `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, inline: true }, { name: "API Latency", value: `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, inline: true }]).setTimestamp()]
            });
        })
    }
}