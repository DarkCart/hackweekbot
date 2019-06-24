module.exports = {
run: function(message) {
	if (message.content === "!ping") {
		message.channel.send("pong");
	}
}
}
