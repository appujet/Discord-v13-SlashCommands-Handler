const { Client } = require("discord.js");
const fs = require("fs");

/**
 * @param {Client} client
 */

module.exports = async (client) => {


const data = [];
    fs.readdirSync("./SlashCommands/").forEach((dir) => {
        const slashCommandFile = fs.readdirSync(`./SlashCommands/${dir}/`).filter((files) => files.endsWith(".js"));
    
        for (const file of slashCommandFile) {
            const slashCommand = require(`../SlashCommands/${dir}/${file}`);

            if(!slashCommand.name) return console.error(`SlashCommandNameError: ${slashCommand.split(".")[0]} application command name is required.`);

            if(!slashCommand.description) return console.error(`SlashCommandDescriptionError: ${slashCommand.split(".")[0]} application command description is required.`);

            client.slashCommands.set(slashCommand.name, slashCommand);
            console.log(`Client SlashCommands Command (/) Loaded: ${slashCommand.name}`);
            data.push(slashCommand);
        }
    });

    client.on("ready", async () => {
        await client.application.commands?.set(data).then(() => console.log(`Client SlashCommand (/) Registered.`)).catch((e) => console.log(e));
    });
}
