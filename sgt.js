var i = 0;
var intervalTimer;

module.exports = {
run: function(message) {
	if (message.content === "!ping") {
		message.channel.send("pong");
	}
	if (message.content === "!test") {
		message.channel.send("test").then((msg)=>{
			intervalTimer = setInterval(function() {
				msg.edit("test" + i);
				i++;
			}, 1500);
		});
	}

	if (message.content === "!stop") {
		message.channel.send("Stopping.");
		clearInterval(intervalTimer);
	}

	if (message.content == "!load") {
		var filename = message.content.split(" ")[1];
		splitVideo(filename);
		message.channel.send("Loaded file '" + filename + "' and split into frames.");
	}
}
}

function splitVideo(filename) {
     try {
        var process = new ffmpeg(filename);
        process.then(function (video) {
            video.fnExtractFrameToJPG("frames", {
                every_n_frames : 1
            }, myCallbackFunction())
        }, function (err) {
            console.log('Error: ' + err);
        });
    } catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }
}
