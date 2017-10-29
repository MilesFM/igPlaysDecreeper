class creepyMessage  {
    constructor(message, colour, velocityX) {
        this.pos = new utils.Vector2D(canvas.width, (Math.random() * canvas.height-1) + 1);
        this.message = message;
        this.colour = colour;
        this.velocityX = velocityX;
    }
    move() {
        if (this.pos.x < 0) {
            return;
        }
        this.pos.x -= this.velocityX;
    }
    draw() {
        utils.drawText(this.message, this.pos.x, this.pos.y+5, "italic 15px arial", this.colour);
    }
}

let creepyMsgs = {
    country : class extends creepyMessage {
        constructor() {
            super("Where does ig come from?", "white", 3);
        }
    },
    city : class extends creepyMessage {
        constructor() {
            super("Where does ig live?", "blue", 4);
        }
    },
    thing : class extends creepyMessage {
        constructor() {
            super("What is ig", "cyan", 5);
        }
    },
};