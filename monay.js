module.exports = {
run: function(message) {
	if (message.content == "cool") {
		message.react('🔵');
	}
}
}
