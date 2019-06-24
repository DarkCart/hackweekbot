module.exports = {
run: function(message) {
	if (message.content == "!board-test") {
		var board = ["1111111\n","1111111\n","1111111\n","1111111\n","1111111\n","1111111"];
		message.channel.send(board[0].replace(1, ⚪) + board[1].replace(1, ⚪) + board[2].replace(1, ⚪) + board[3].replace(1, ⚪) + board[4].replace(1, ⚪) + board[5].replace(1, ⚪));
	}
}
}
