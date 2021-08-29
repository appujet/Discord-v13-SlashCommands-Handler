const Discord = require('discord.js');
const chalk = require("chalk");
module.exports = async (client) => {
 
   client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "Discord v 13 / command",
                type: "WATCHING"
            }
        ]
    });
    console.log(`[API] Logged in as ${client.user.tag}.`);
}