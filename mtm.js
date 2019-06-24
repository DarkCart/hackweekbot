module.exports = {
run: function(message) {
	if (message.content == "ping") {
        message.channel.send("No, fuck you.");
    }
	if (message.content === 'pfp') {
        message.channel.send(message.author.avatarURL);
	}
	if (message.content === 'g') {
		var filter = true;
		do{
			const attachment = new Discord.ReactionCollector(message,filter,options).prototype.size;
		}while(attachment != 0);
		message.channel.send(attachment);
	}
}
}
