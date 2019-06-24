var i = 0;

module.exports = {
run: function(message) {
	if (message.content === "!ping") {
		message.channel.send("pong");
	}
	if (message.content === "!test") {
		message.channel.send("test").then((msg)=>{
			setInterval(function() {
				msg.edit("test" + i);
				i++;
			}, 500);
		});
	}
}
}
