class bullet { // Bullet that when hits a message, destroys it
    constructor(pos) {
        this.pos = pos;
        this.size = new utils.Vector2D(25, 5);
        this.velocityX = 20;
    }
    move() {
        if (this.pos.x > canvas.width) {
            return;
        }
        this.pos.x += this.velocityX;
    }
    draw() {
        context.fillStyle = "red";
        context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y,);
    }
}