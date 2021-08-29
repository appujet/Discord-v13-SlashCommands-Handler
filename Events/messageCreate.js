const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    if(!message.guild || message.author.bot) return;
    
    let prefix = client.prefix;
    const Mention = new RegExp(`^<@!?${client.user.id}> `);
    prefix = message.content.match(Mention) ? message.content.match(Mention)[0] : prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let color = client.config.Bot.Color;

    const cmd = client.commands.get(command) || client.commands.find((x) => x.aliases && x.aliases.includes(command));

    if(!cmd) return;
    cmd.run(client, message, args, prefix, color);

}