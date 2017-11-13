let canvas;
let context;
let gameInterval; // So the game can be stopped

let fps = 30;

window.onload = function() {
    canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    context = canvas.getContext("2d");

    start();
    // Removes margin and scroll bars.
    document.body.style.margin = "0px 0px 0px 0px";
    document.body.style.overflow = "hidden";

    gameInterval = setInterval(() => {
        update();
        draw();
    }, 1000/fps);
};