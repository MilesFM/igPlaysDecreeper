let canvas;
let context;

let fps = 30;

window.onload = function() {
    canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    context = canvas.getContext("2d");

    start();
    document.body.style.margin = "0px 0px 0px 0px";
    document.body.style.overflow = "hidden";

    setInterval(function() {
        update();
        draw();
    }, 1000/fps);
};