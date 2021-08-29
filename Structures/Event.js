const { Client } = require("discord.js");
const fs = require("fs");
const path = require("path");


/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {
  
    let EventsDir = path.join(__dirname, "..", "Events");
        fs.readdir(EventsDir, (err, files) => {
            if (err) console.log(err);
            else
            files.forEach((file) => {
                const event = require(EventsDir + "/" + file);
                client.on(file.split(".")[0], event.bind(null, client));
                console.log("Event Loaded: " + file.split(".")[0]);
            });
      });
    };
