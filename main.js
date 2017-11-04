function start() {
    //joke();
    ig = new utils.gameObject(new utils.Vector2D(25, canvas.height/2-25), new utils.Vector2D(75, 75), "assets/ig.jpg");
    document.addEventListener("mousemove", (evt) => {
        let mouseY = calculateMouseY(evt)-(ig.size.y/2);
        ig.pos.y = mouseY;
    });
    document.addEventListener("mousedown", (evt) => {
        let mouseY = calculateMouseY(evt)-(ig.size.y/2);
        console.log(mouseY);
        if (bulletCount > bulletCap) {
            bulletCount = 0;
        }
        bullets[bulletCount++] = new bullet(new utils.Vector2D(0, mouseY));
    });
    //b = new bullet(new utils.Vector2D(0, canvas.height/2));
    //c = new creepyMsgs.country();
    //c.pos.y = b.pos.y;
}

function update() {
    //b.move();
    //c.move();

    // If there are too many bullets, let garbage collector take over
    if (bulletCount > bulletCap) {
        bulletCount = 0;
        console.log("Loop over");
    }
    for (let i = 0; i < bullets.Length; i++) {
        bullets[i].move();
        console.log("thing");
    }
}

function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "red";
    context.fillRect(0, 0, 5, canvas.height);

    //c.draw();
    //b.draw();

    for (let i = 0; i < bullets.Length; i++) {
        bullets[i].draw();
    }

    utils.drawImage(ig.src, ig.pos.x, ig.pos.y, ig.size.x, ig.size.y);
}

function joke() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    utils.drawText("The following is meant as a joke.", canvas.width/2, canvas.height/2, "bold italic 40px arial", "red");

    setTimeout(()=>{return;}, 5000);

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    utils.drawText("Please do not take this seriously or as a doxxing threat.", canvas.width/2, canvas.height/2, "bold italic 40px arial", "red");
    setTimeout(()=>{return;}, 5000);
}