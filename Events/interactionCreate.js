
const { MessageEmbed } = require("discord.js")
module.exports = async (client, interaction) => {
	
 let prefix = client.prefix;
 let color = client.config.Bot.Color;
     
     if(interaction.isCommand()) {
        const SlashCommands = client.slashCommands.get(interaction.commandName);
        if(!SlashCommands) return;
        try {
            SlashCommands.run(client, interaction, prefix);
        } catch (error) {
            if(interaction.replied) {
                await interaction.editReply({
                    content: `An unexcepted error occured.`
                }).catch(() => {});
            } else {
                await interaction.followUp({
                    ephemeral: true,
                    content: `An unexcepted error occured.`
                }).catch(() => {});
            }
            console.error(error);
        };
    } else return;
}
   