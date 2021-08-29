const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'show user avatar',
    options: [
  {
    name: "user",
    description: "mention that user",
    type: "USER",
    required: false
  }
],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {*} color
     */
  run: async (client, interaction, args, color) => {
  await interaction.deferReply({
            ephemeral: false
        });
 const user = interaction.options.getUser("user");
 let member;
 if(user) member = interaction.guild.members.cache.get(user.id);
 else member = interaction.member;

  let avs = new MessageEmbed()
      .setAuthor(
        `Avatar from: ${member.user.tag}`,
        member.user.displayAvatarURL({ dynamic: true }),
        "https://discord.gg/DisBotlist")
     
      .setColor(client.config.Bot.Color)
      .setURL(
        member.user.displayAvatarURL({
          dynamic: true }))
      .setImage(
        member.user.displayAvatarURL({
          dynamic: true,
          size: 512 }));

      interaction.followUp({embeds : [avs]})
  },
};
