module.exports = {
run: function(message) {
	if (message.content == "!board-test") {
		var board = ["1111111\n","1111111\n","1111111\n","1111111\n","1111111\n","1111111"];
		message.channel.send(board[0] + board[1] + board[2] + board[3] + board[4] + board[5]).replace(1, '⚪');
	}
}
}
