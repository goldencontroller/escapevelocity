var images = [];
function preload_imgs() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload_imgs.arguments[i];
    }
}
var sounds = [];
function preload_sounds() {
    for (var i = 0; i < arguments.length; i++) {
        sounds[i] = new Audio(arguments[i]);
    }
}
preload_imgs("scope.png", "controls.png", "logoimage.jpg");
preload_sounds("sounds/bounce.wav", "sounds/launch.wav", "sounds/select.wav", "sounds/thud.wav");