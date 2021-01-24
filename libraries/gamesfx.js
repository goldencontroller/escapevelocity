SFX = {
	playsound: function(source) {
		var audio = new Audio(source);
		audio.play();
	},
	playmusic: function(source) {
		if (document.body.contains(document.getElementById("musicfromsfxlibrary___plznocopyhtsidnameplzzz"))) {
			msource = document.getElementById("musicfromsfxlibrary___plznocopyhtsidnameplzzz").getElementsByTagName("source")[0];
			if (msource.src != source) {
				this.stopmusic();
				document.body.innerHTML += "<audio loop id='musicfromsfxlibrary___plznocopyhtsidnameplzzz' controls style='display: none;' autoplay='autoplay'><source src='" + source + "'></audio>";
			}
		}
		else {
			document.body.innerHTML += "<audio loop id='musicfromsfxlibrary___plznocopyhtsidnameplzzz' controls style='display: none;' autoplay='autoplay'><source src='" + source + "'></audio>";
		}
	},
	stopmusic: function() {
		document.getElementById("musicfromsfxlibrary___plznocopyhtsidnameplzzz").remove();
	}
}