logoimage = DOMgame.newImgPiece(gamescreen, 100, 100, 50, 50, "logoimage.jpg");
logoimage.style.opacity = "0";
logoimage.style.animation = "fadeinout 5s";
count = 0;
keyfunc = function(){ k = event.key; };
k = "";
selection = 0;
var startscreen;
var creditposter;
function intro() {
	
	if ( count < 2020 ) {
		count++;
		setTimeout(intro, 1);
	}
	else {
		startscreen = DOMgame.newSpritePiece(gamescreen, 100, 100, 50, 50, "displayscreens.jpg", 100, 400, 0, 0);
		startscreen.style.animation = "fadein 1s";
		document.addEventListener("keydown", keyfunc);
		mainmenu();
		logoimage.remove();
	}
	
}
function actuallyStartTheGame() {
	document.removeEventListener("keydown", keyfunc);
	k = "";
	startscreen.remove();
	var mainscript = document.createElement("script");
	mainscript.src = "main.js";
	document.body.appendChild(mainscript);
}
function creditsscreen() {
	if (k == "Enter") {
		k = "";
		creditposter.remove();
		mainmenu();
	}
	else { setTimeout(creditsscreen, 1); }
}
function mainmenu() {
	if (k == "Enter") {
		k = "";
		if (selection == 0) {
			startscreen.style.animation = "fadeout 1s";
			startscreen.style.opacity = "0";
			setTimeout(actuallyStartTheGame, 999);
		}
		else if (selection == 1) {
			creditposter = DOMgame.newImgPiece(gamescreen, 100, 100, 50, 50, "creditsscreen.jpg");
			creditsscreen();
		}
		else if (selection == 2) {
			window.close();
		}
	}
	else {
		setTimeout(mainmenu, 1);
	}
	if (k == "ArrowDown" && selection < 2) {
		k = "";
		selection++;
		startscreen.children[0].style.top = (parseFloat(startscreen.children[0].style.top) - 100).toString() + "vmin";
	}
	else if (k == "ArrowUp" && selection > 0) {
		k = "";
		selection -= 1;
		startscreen.children[0].style.top = (parseFloat(startscreen.children[0].style.top) + 100).toString() + "vmin";
	}
}
intro();