function start() {
    ig = new utils.gameObject(new utils.Vector2D(25, canvas.height/2-25), new utils.Vector2D(75, 75), "assets/ig.jpg");
    document.addEventListener("mousemove", (evt) => {
        let mouseY = calculateMouseY(evt)-(ig.size.y/2);
        ig.pos.y = mouseY;
    });
    document.addEventListener("mousedown", mouseDown);
    window.addEventListener("resize", () => {
        console.log("Resize");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    igSound = new utils.audio("assets/pew.mp3");
}

function msgManager() {
    if (msgCount > msgCap) {
        msgCount = 0;
    }

    if (msgGo >= fps*1.5) {
        msgs[msgCount++] = new creepyMsgs[Math.floor(stage)]();
        msgGo = 0;
    } else {
        msgGo++;
    }

    for (i in msgs) {
        if (msgs[i] === undefined) { break; }
        msgs[i].move();

        // If there is a collision, both bullet and message should die.
        for (j in bullets) {
            if (bullets[j].collision(msgs[i].pos, msgs[i].dead) == true) {
                msgs[i].dead = true;
            }
        }
    }
}

function update() {
    // If there are too many bullets, let garbage collector take over
    if (bulletCount > bulletCap) {
        bulletCount = 0;
        console.log("Loop over");
    }
    for (i in bullets) {
        bullets[i].move();
    }

    msgManager();
}

function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "red";
    context.fillRect(0, 0, 5, canvas.height);

    for (i in bullets) {
        bullets[i].draw();
    }

    for (i in msgs) {
        msgs[i].draw();
    }

    utils.drawImage(ig.src, ig.pos.x, ig.pos.y, ig.size.x, ig.size.y);

    utils.drawText("Stage: " + utils.round(stage, 2), 10, 20, "20px impact", "red", "start");

    if (isJoke) {
        joke();
    }
}

function gameOver() {
    utils.drawText("GAME OVER", canvas.width/2, canvas.height/2, "bold 50px impact", "red");
    clearInterval(gameInterval);
}

function joke() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    utils.drawText("The following is meant as a joke.", canvas.width/2, canvas.height/2, "bold italic 40px arial", "red");

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    utils.drawText("Please do not take this seriously or as a doxxing threat.", canvas.width/2, canvas.height/2, "bold italic 40px arial", "red");
}