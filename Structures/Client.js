const { Collection, MessageEmbed, Client, Intents } = require("discord.js");
const mongoose = require("mongoose");

class Erica extends Client {
    	constructor(intents) {
        super(intents);
        
        this.commands = new Collection;
        this.slashCommands = new Collection;
        this.config = require("../config");
        this.prefix = this.config.Bot.BotPrefix;
        mongoose.connect(this.config.Mongoose, {
          useUnifiedTopology : true,
          useNewUrlParser : true,
          //useFindAndModify: false,
        }).then(() => {
          console.log(`Connected to Mongoose Data Base.`)
        })
    }
    
    start(token) {
    if(!token) return console.error(`You forgot to provide the token of the bot.`)
		this.login(token);
	}
}

module.exports = Erica;