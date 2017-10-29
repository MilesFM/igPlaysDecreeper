function calculateMouseY(evt) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    //console.log(mouseY);
    return mouseY;
}