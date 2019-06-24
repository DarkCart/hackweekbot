module.exports = {
run: function(message) {
	if (message.content == "!connectfour") {
		var board = ["1111111\n","1111111\n","1111111\n","1111111\n","1111111\n","1111111"];
		//posting board
		message.channel.send(board[0].replace(/1/g, '⚪') + board[1].replace(/1/g, '⚪') + board[2].replace(/1/g, '⚪') + board[3].replace(/1/g, '⚪') + board[4].replace(/1/g, '⚪') + board[5].replace(/1/g, '⚪')).then((msg) => {
			//reacting with columns
			msg.react('🇦')
				.then(() => msg.react('🇧'))
				.then(() => msg.react('🇨'))
				.then(() => msg.react('🇩'))
				.then(() => msg.react('🇪'))
				.then(() => msg.react('🇫'))
				.then(() => msg.react('🇬'));
		});
		//awaiting reactions
		var filter = (reaction) => {
			return ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬'].includes(reaction.emoji.name);
		};
		
		msg.awaitReactions(filter, {time: 60000})
			.then(collected => {
				message.channel.send (collected.size + " reactions collected");
			})
		.catch(console.error);
	}
}
}
