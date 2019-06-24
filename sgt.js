module.exports = {
run: function(message) {
	if (message.content === "!ping") {
		message.channel.send("pong");
	}
	if (message.content === "!test") {
		message.content.send("test").then((msg)=>{
			msg.edit("test2");
		});
	}
}
}
