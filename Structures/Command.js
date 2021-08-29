const fs = require("fs");
const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {
  fs.readdirSync('./Commands/').forEach(dir => {
          const commands = fs.readdir(`./Commands/${dir}/`, (errN, files) => {
            if(errN) return console.log(errN);
            else
            files.forEach((file) => {
              let cmd = require(`../Commands/${dir}/${file}`)
              if (!cmd.name || !cmd.description || !cmd.run) return console.log(`Unable to load ${file.split(".")[0]} command.`);
              client.commands.set(file.split(".")[0], cmd);
              console.log("Command Loaded: " + file.split(".")[0]);
            });
    
          });
        });
      };
