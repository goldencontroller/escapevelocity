
function detect_sensing() {
    out = {
        touching_block_top: false,
        touching_block_bottom: false,
        touching_block_left: false,
        touching_block_right: false,
        touching_ice: false,
        touching_spring: false,
        touching_spring_left: false,
        touching_spring_right: false
    }
    for (block of document.getElementsByClassName("platform")) {
        thecollision = player.directionalCollision(block);
        if (thecollision == "left") {
            out.touching_block_left = true;
            player.setXpos(parseFloat(block.style.left) - 2.5);
        }
        else if (thecollision == "right") {
            out.touching_block_right = true;
            player.setXpos(parseFloat(block.style.left) + parseFloat(block.style.width) + 2.5);
        }
        else if (thecollision == "top") {
            out.touching_block_top = true;
            player.setYpos(parseFloat(block.style.bottom) + parseFloat(block.style.height) + 2.5);
        }
        else if (thecollision == "bottom") {
            out.touching_block_bottom = true;
            player.setYpos(parseFloat(block.style.bottom) - 2.5);
        }
        if (thecollision != false && block.dataset.type == "ice") {
            out.touching_ice = true;
        }
        else if (thecollision != false && block.dataset.type == "spring") {
            out.touching_spring = true;
            if (out.touching_block_left) {
                out.touching_spring_left = true;
            }
            else if (out.touching_block_right) {
                out.touching_spring_right = true;
            }
        }
        if (block.dataset.type == "moving" && (velocity_right > -0.01 && velocity_right < 0.01) && thecollision == "top") {
            block.dataset.type = "normal";
            block.classList = ["platform"];
            block.style.outline = "0.5vmin #FFFF00 solid";
            block.style.filter = "drop-shadow(0 0 0.5vmin #FFFF00) drop-shadow(0 0 1vmin #FFFF00)";
        }
    }
    return out;
}

function movingplatformsscript() {
    for (block of document.getElementsByClassName("moving")) {
        if (block.dataset.xdirection == "right") {
            if (getcoords(block)[0] >= parseFloat(block.dataset.rightbound)) {
                block.dataset.xdirection = "left";
            }
            else {
                block.changeXpos(0.1);
            }
        }
        else if (block.dataset.xdirection == "left") {
            if (getcoords(block)[0] <= parseFloat(block.dataset.leftbound)) {
                block.dataset.xdirection = "right";
            }
            else {
                block.changeXpos(-0.1);
            }
        }
        if (block.dataset.ydirection == "down") {
            if (getcoords(block)[1] <= parseFloat(block.dataset.bottombound)) {
                block.dataset.ydirection = "up";
            }
            else {
                block.changeYpos(-0.1);
            }
        }
        else if (block.dataset.ydirection == "up") {
            if (getcoords(block)[1] >= parseFloat(block.dataset.topbound)) {
                block.dataset.ydirection = "down";
            }
            else {
                block.changeYpos(0.1);
            }
        }
    }
}

timegap = 0;

function launch_script() {

    sensing = detect_sensing();
    if (sensing.touching_block_bottom) {
        velocity_up = -velocity_up;
    }
    if (sensing.touching_block_top == false) {
        velocity_up = velocity_up - 0.002;
    }
    else if (velocity_up <= 0) {
        if (out.touching_spring && velocity_up <= -0.01) {
            velocity_up = -0.5 * velocity_up;
        }
        else {
            velocity_up = 0;
            if (velocity_right > 0.001) {
                if (!(out.touching_ice)) {
                    velocity_right = velocity_right / 1.1;
                }
                else {
                    velocity_right = velocity_right / 1.005;
                }
            }
            else if (velocity_right < -0.001) {
                if (!(out.touching_ice)) {
                    velocity_right = velocity_right / 1.1;
                }
                else {
                    velocity_right = velocity_right / 1.005;
                }
            }
            else {
                velocity_right = 0
                setTimeout(function() {
                    if (!(player.rectCollision(document.getElementById("exit")))) {
                        aiming = 1;
                        scope = DOMgame.newImgPiece(scrollscreen, 10, 10, getcoords(player)[0] + 5, getcoords(player)[1] + 5, "scope.png");
                        scope.setAttribute("id", "scope");
                        scopebox = DOMgame.newRectPiece(scrollscreen, 25, 25, getcoords(player)[0], getcoords(player)[1], "");
                        scopebox.setAttribute("id", "scopebox");
                    }
                    else {
                        areyawinningson = true;
                    }
                }, 100);
                timegap = 1;
            }
        }
    }
    if (sensing.touching_block_left && velocity_right > 0) {
        if (!(sensing.touching_spring_left)) {
            velocity_right = 0;
        } else { velocity_right = -0.5 * velocity_right; }
    }
    if (sensing.touching_block_right && velocity_right < 0) {
        if (!(sensing.touching_spring_right)) {
            velocity_right = 0;
        } else { velocity_right = -0.5 * velocity_right; }
    }
    
    player.changeXpos(velocity_right);
    player.changeYpos(velocity_up);

}