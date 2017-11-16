class bullet { // Bullet that when hits a message, destroys it.
    constructor(pos) {
        this.pos = pos;
        this.size = new utils.Vector2D(25, 5);
        this.velocityX = 20;
        this.dead = false;
    }
    move() {
        if (this.pos.x > canvas.width || this.dead) {
            return;
        }
        this.pos.x += this.velocityX;
    }
    draw() {
        if (this.pos.x > canvas.width || this.dead) {
            return;
        }
        context.fillStyle = "red";
        context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y,);
    }
    collision(msgPos) {
        // Will add functionality in the future so that you don't have to hit dead centre
        if ((this.pos.y >= msgPos.y-8 && this.pos.y <= msgPos.y+8) && msgPos.x <= this.pos.x && !this.dead) { 
            this.dead = true;
            stage += 0.01;
            return true;
        }
    }
}