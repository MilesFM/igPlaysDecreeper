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
    // removes margin and scroll bars
    document.body.style.margin = "0px 0px 0px 0px";
    document.body.style.overflow = "hidden";

    setInterval(() => {
        update();
        draw();
    }, 1000/fps);
};