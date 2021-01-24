function build_platform(width, height, x, y, type, xvariation, yvariation) {
    newplatform = DOMgame.newRectPiece(scrollscreen, width, height, x, y, "");
    newplatform.style.mixBlendMode = "screen";
    newplatform.setAttribute("class", "platform");
    newplatform.dataset.type = type;
    if (type == "normal") {
        newplatform.style.outline = "0.5vmin #FFFF00 solid";
        newplatform.style.outlineOffset = "-0.5vmin";
        newplatform.style.filter = "drop-shadow(0 0 0.5vmin #FFFF00) drop-shadow(0 0 1vmin #FFFF00)";
    }
    if (type == "ice") {
        newplatform.style.outline = "0.5vmin #00BBFF solid";
        newplatform.style.outlineOffset = "-0.5vmin";
        newplatform.style.filter = "drop-shadow(0 0 0.5vmin #00BBFF) drop-shadow(0 0 1vmin #00BBFF)";
    }
    if (type == "moving") {
        newplatform.style.outline = "0.5vmin #FF8800 solid";
        newplatform.style.outlineOffset = "-0.5vmin";
        newplatform.style.filter = "drop-shadow(0 0 0.5vmin #FF8800) drop-shadow(0 0 1vmin #FF8800)";
        newplatform.dataset.xdirection = "right";
        newplatform.dataset.ydirection = "down";
        newplatform.dataset.rightbound = x + xvariation;
        newplatform.dataset.leftbound = x - xvariation;
        newplatform.dataset.topbound = y + yvariation;
        newplatform.dataset.bottombound = y - yvariation;
        newplatform.className += " moving";
    }
    if (type == "spring") {
        newplatform.style.outline = "0.5vmin #FF99FF solid";
        newplatform.style.outlineOffset = "-0.5vmin";
        newplatform.style.filter = "drop-shadow(0 0 0.5vmin #FF99FF) drop-shadow(0 0 1vmin #FF99FF)";
    }
}

function build_level() {
    controls = DOMgame.newImgPiece(scrollscreen, 36, 24, 30, 40, "controls.png");
    controls.style.filter = "drop-shadow(0 0 0.5vmin #FF00FF) drop-shadow(0 0 1vmin #FF00FF)";
    controls.style.mixBlendMode = "screen";
    build_platform(20, 20, 50, 10, "normal");
    build_platform(20, 30, 100, 15, "normal");
    build_platform(20, 30, 175, 15, "normal");
    build_platform(10, 5, 137.5, 15, "normal");
    build_platform(15, 5, 250, 17.5, "normal");
    build_platform(15, 5, 280, 22.5, "normal");
    build_platform(15, 5, 310, 27.5, "normal");
    build_platform(15, 5, 340, 32.5, "normal");
    build_platform(15, 5, 370, 37.5, "normal");
    build_platform(7.5, 5, 396.25, 42.5, "normal");
    build_platform(7.5, 5, 375, 55, "normal");
    build_platform(7.5, 5, 396.25, 70, "normal");
    build_platform(7.5, 5, 375, 85, "normal");
    build_platform(20, 10, 340, 85, "ice");
    build_platform(7.5, 5, 305, 85, "normal");
    build_platform(20, 7, 275, 85, "moving", 15, 0);
    build_platform(20, 5, 240, 85, "ice");
    build_platform(25, 3, 200, 85, "normal");
    build_platform(10, 3, 170, 85, "normal");
    build_platform(10, 3, 150, 90, "normal");
    build_platform(10, 3, 130, 80, "normal");
    build_platform(25, 5, 85, 80, "ice");
    build_platform(7, 3, 50, 85, "normal");
    build_platform(3, 50, 30, 120, "normal");
    build_platform(7, 3, 30, 75, "normal");
    build_platform(7, 3, 3.5, 86.5, "normal");
    build_platform(7, 3, 25, 96.5, "normal");
    build_platform(7, 3, 3.5, 106.5, "normal");
    build_platform(7, 3, 25, 116.5, "normal");
    build_platform(7, 3, 3.5, 126.5, "normal");
    build_platform(7, 3, 25, 136.5, "normal");
    build_platform(7, 3, 3.5, 146.5, "normal");
    build_platform(25, 5, 35, 150, "normal");
    build_platform(15, 2.5, 72, 150, "spring");
    build_platform(25, 5, 109, 150, "normal");
    build_platform(20, 20, 150, 150, "normal");
    build_platform(6, 3, 182, 175, "ice");
    build_platform(30, 30, 200, 175, "normal");
    build_platform(20, 4, 240, 180, "spring");
    build_platform(20, 5, 275, 195, "moving", 0, 25);
    build_platform(20, 5, 300, 195, "normal");
    build_platform(10, 10, 330, 195, "ice");
    build_platform(10, 10, 340, 205, "ice");
    build_platform(10, 10, 350, 215, "ice");
    build_platform(10, 10, 360, 225, "ice");
    build_platform(10, 10, 350, 245, "spring");
    build_platform(10, 10, 340, 255, "spring");
    build_platform(10, 10, 330, 265, "spring");
    build_platform(15, 5, 305, 265, "normal");
    build_platform(4, 4, 280, 265, "normal");
    build_platform(4, 4, 260, 260, "normal");
    build_platform(4, 4, 235, 267, "normal");
    build_platform(4, 4, 212, 263, "normal");
    build_platform(4, 4, 200, 264, "normal");
    build_platform(4, 4, 170, 260, "normal");
    build_platform(4, 4, 145, 266, "normal");
    build_platform(4, 4, 110, 264, "normal");
    build_platform(4, 4, 90, 262, "normal");
    build_platform(4, 4, 75, 265, "normal");
    build_platform(4, 4, 40, 269, "normal");
    build_platform(4, 4, 3, 285, "normal");
    build_platform(10, 5, 20, 305, "ice");
    build_platform(10, 5, 30, 325, "ice");
    build_platform(7.5, 3, 75, 325, "spring");
    build_platform(7.5, 3, 95, 325, "spring");
    build_platform(12, 3, 111, 325, "spring");
    build_platform(15, 5, 150, 325, "ice");
    build_platform(3, 3, 195, 325, "normal");
    build_platform(15, 5, 229.5, 325, "ice");
    build_platform(20, 4, 280, 325, "normal");
    build_platform(10, 3, 320, 325, "spring");
    build_platform(20, 3, 355, 325, "ice");
    build_platform(10, 3, 395, 340, "normal");
    build_platform(6.5, 3, 395, 360, "normal");
    build_platform(3, 3, 395, 380, "normal");
    build_platform(10, 3, 360, 380, "normal");
    build_platform(8, 3, 325, 380, "normal");
    build_platform(6, 3, 290, 380, "normal");
    build_platform(4, 3, 255, 380, "normal");
    build_platform(2, 3, 220, 380, "normal");
    build_platform(5, 5, 180, 375, "moving", 20, 0);
    build_platform(15, 5, 150, 380, "normal");
    build_platform(5, 5, 120, 380, "normal");
    build_platform(30, 3, 75, 380, "ice");
    build_platform(3, 3, 30, 369, "normal");
    build_platform(10, 3, 5, 380, "normal");
    door = DOMgame.newRectPiece(scrollscreen, 6, 8, 5, 385.5);
    door.setAttribute("id", "exit");
    door.style.outline = "0.5vmin #55FF55 solid";
    door.style.outlineOffset = "-0.5vmin";
    door.style.filter = "drop-shadow(0 0 0.5vmin #55FF55) drop-shadow(0 0 1vmin #55FF55) drop-shadow(0 0 2vmin #55FF55)";
    door.style.mixBlendMode = "screen";
}