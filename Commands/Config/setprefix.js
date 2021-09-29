const { MessageEmbed, Message, Client } = require("discord.js");
const pre = require("../../Detabase/prefix.js");
const mongoose = require('mongoose')
module.exports = {
    name: "setprefix",
    aliases: ["prefix"],
    description: "change custom prefix in multiple guild",
    category: "Informations",
    example: ["prefix"],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     */

    run: async (client, message, args, color) => {

      const res = await pre.findOne({ guildid: message.guild.id })
      let prefix = args.join(" ");
      let p;
      if (!res) p = ">"
      else p = res.prefix;
      const noperms = new MessageEmbed()
        .setColor("#651FFF")
        .setDescription(`The prefix for this server is \`${p}\``)

      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ content: "You need `ADMINISTRATOR` permission to use this command"});
      let newprefix = args.join(" ");
      if (!args[0]) return message.channel.send({embeds: [noperms]});
      else {
        pre.findOne({ guildid: message.guild.id }).then(result => {
          let duck = new pre({
            _id: new mongoose.Types.ObjectId(),
            guildid: message.guild.id,
            prefix: prefix
          })
          let send = new MessageEmbed()
            .setDescription(`Changed prefix to \`${newprefix}\``)
            .setTimestamp()
            .setColor("#651FFF")
          message.channel.send({embeds: [send]});
          if (!result || result == []) {
            duck.save().catch(console.error);
          } else {
            pre.deleteOne({ guildid: message.guild.id }).catch(console.error)
            duck.save().catch(console.error)
          }
      })}
   }
}
