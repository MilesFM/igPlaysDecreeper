function killAllMsgs() {
    for (let i = 0; i < msgs.length; i++) {
        msgs[i].dead = true;
    }
}

function killAllBullets() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].dead = true;
    }
}