function getcoords(elem) {
    return [parseFloat(elem.style.left) + parseFloat(elem.style.width) / 2, parseFloat(elem.style.bottom) + parseFloat(elem.style.height) / 2];
}

keysmap = {};

areyawinningson = false;

velocity_up = 0;
velocity_right = 0;

scrollscreen = document.createElement("DIV");
scrollscreen.style.opacity = "0";
scrollscreen.style.bottom = "47.5vmin"; scrollscreen.style.left = "47.5vmin";
scrollscreen.style.width = "400vmin"; scrollscreen.style.height = "400vmin";
scrollscreen.style.position = "absolute";
scrollscreen.id = "scrollscreen";
gamescreen.appendChild(scrollscreen);
scrollscreen_fake = document.createElement("DIV");
scrollscreen_fake.style.opacity = "0";
scrollscreen_fake.style.bottom = "47.5vmin"; scrollscreen_fake.style.left = "47.5vmin";
scrollscreen_fake.style.width = "400vmin"; scrollscreen_fake.style.height = "400vmin";
scrollscreen_fake.style.position = "absolute";
scrollscreen_fake.id = "scrollscreen_fake";
gamescreen.appendChild(scrollscreen_fake);

leftbound = DOMgame.newRectPiece(scrollscreen, 10, 400, -5, 200, "");
rightbound = DOMgame.newRectPiece(scrollscreen, 10, 400, 405, 200, "");
topbound = DOMgame.newRectPiece(scrollscreen, 400, 10, 200, 405, "");
bottombound = DOMgame.newRectPiece(scrollscreen, 400, 10, 200, -5, "");
rightbound.setAttribute("class", "platform"); leftbound.setAttribute("class", "platform");
topbound.setAttribute("class", "platform"); bottombound.setAttribute("class", "platform");

player = DOMgame.newRectPiece(scrollscreen, 5, 5, 2.5, 2.5, "");
player.setAttribute("id", "player");

scope = DOMgame.newImgPiece(scrollscreen, 10, 10, getcoords(player)[0] + 5, getcoords(player)[1] + 5, "scope.png");
scope.setAttribute("id", "scope");
scopebox = DOMgame.newRectPiece(scrollscreen, 25, 25, getcoords(player)[0], getcoords(player)[1], "");
scopebox.setAttribute("id", "scopebox");
aiming = 1;

build_level();

scrollscreen.style.animation = "fadein 2s";
scrollscreen_fake.style.animation = "fadein 2s";
scrollscreen.style.opacity = "1";
scrollscreen_fake.style.opacity = "1";

keydownlistener = function(e) { keysmap[e.key] = true; }
keyuplistener = function(e) { keysmap[e.key] = false; };
document.addEventListener("keydown", keydownlistener);
document.addEventListener("keyup", keyuplistener);

function main() {

    if (aiming == 1) {
        if (keysmap.ArrowUp && getcoords(scope)[1] < getcoords(player)[1] + 12.5) {
            scope.changeYpos(0.1);
        }
        if (keysmap.ArrowLeft && getcoords(scope)[0] > getcoords(player)[0] - 12.5) {
            scope.changeXpos(-0.1);
        }
        if (keysmap.ArrowRight && getcoords(scope)[0] < getcoords(player)[0] + 12.5) {
            scope.changeXpos(0.1);
        }
        if (keysmap.ArrowDown && getcoords(scope)[1] > getcoords(player)[1] - 12.5) {
            scope.changeYpos(-0.1);
        }
        if (keysmap.x) {
            aiming = 0;
            velocity_up = (getcoords(scope)[1] - getcoords(player)[1]) / 40;
            velocity_right = (getcoords(scope)[0] - getcoords(player)[0]) / 90;
            scopebox.remove();
            scope.remove();
            timegap = 0;
        }
    }
    else {
        if (timegap == 0) {
            launch_script();
        }
    }

    movingplatformsscript();

    scrollscreen.setXpos(250 - getcoords(player)[0]);
    scrollscreen.setYpos(250 - getcoords(player)[1]);
    scrollscreen_fake.setXpos(250 - getcoords(player)[0]);
    scrollscreen_fake.setYpos(250 - getcoords(player)[1]);

    if (areyawinningson) {
        scrollscreen.style.animation = "fadeout 2s";
        scrollscreen_fake.style.animation = "fadeout 2s";
        scrollscreen.style.opacity = "0";
        scrollscreen_fake.style.opacity = "0";
        setTimeout(function() {
            scrollscreen.remove();
            scrollscreen_fake.remove();
            endscreen = DOMgame.newSpritePiece(gamescreen, 100, 100, 50, 50, "displayscreens.jpg", 100, 400, -300, 0);
            endscreen.style.animation = "fadeinout 5s";
            endscreen.style.opacity = "0";
            document.removeEventListener("keydown", keydownlistener);
            document.removeEventListener("keyup", keyuplistener);
            setTimeout(function() {
                gamescreen.innerHTML = "";
                startscreen = DOMgame.newSpritePiece(gamescreen, 100, 100, 50, 50, "displayscreens.jpg", 100, 400, 0, 0);
                startscreen.style.animation = "fadein 1s";
                document.addEventListener("keydown", keyfunc);
                mainmenu();
            }, 5500);
        }, 2500);
    } else {
        setTimeout(main, 1);
    }
}
main();