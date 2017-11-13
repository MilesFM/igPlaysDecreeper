function calculateMouseY(evt) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    return mouseY;
}

function mouseDown(evt) {
    let mouseY = calculateMouseY(evt);
    console.log(mouseY);
    if (bulletCount > bulletCap) {
        bulletCount = 0;
    }
    bullets[bulletCount++] = new bullet(new utils.Vector2D(25, mouseY));
    console.log(bullets.length);
}