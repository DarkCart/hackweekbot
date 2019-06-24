const Discord = require("discord.js");
const client = new Discord.Client();

var mtm = require("./mtm.js");
var monay = require("./monay.js");
var sgt = require("./sgt.js");

const token = require("./bot-token.json");

client.on("message", message => {
	if (message.author.bot) {
		return;
	}

	if (message.content === "!restart") {
		process.exit();
	}

	if (message.author.username === "MisterTalkingMachine") {
		mtm.run(message);
	} else if (message.author.username === "sintendo") {
		monay.run(message);
	} else if (message.author.username === "Sgt. Pepper") {
		sgt.run(message);
	}
});

client.login(token.token);

