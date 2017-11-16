class creepyMessage  {
    constructor(message, colour, velocityX) {
        this.pos = new utils.Vector2D(canvas.width, (Math.random() * canvas.height-1) + 5);
        this.message = message;
        this.colour = colour;
        this.velocityX = velocityX;
        this.dead = false;
    }
    move() {
        if (this.pos.x < 0) {
            gameOver();
            return;
        }
        if (this.dead) {
            return;
        }
        this.pos.x -= this.velocityX;
    }
    draw() {
        if (this.pos.x < 0) {
            gameOver();
            return;
        }
        if (this.dead) {
            return;
        }
        utils.drawText(this.message, this.pos.x, this.pos.y+5, "italic 15px arial", this.colour);
    }
}

// List of creepy messages.
let creepyMsgs = {
    country : class extends creepyMessage {
        constructor() {
            super("Where does ig come from?", "white", 1);
        }
    },
    city : class extends creepyMessage {
        constructor() {
            super("Where does ig live?", "cyan", 2);
        }
    },
    computer : class extends creepyMessage {
        constructor() {
            super("What is ig's computing?", "blue", 3);
        }
    },
    subscribe : class extends creepyMessage {
        constructor() {
            super("Can ig subscribe to me?", "purple", 4);
        }
    },
    friend : class extends creepyMessage {
        constructor() {
            super("Can ig and me be friends?", "yellow", 5);
        }
    },
    face : class extends creepyMessage {
        constructor() {
            super("What does ig look like?", "orange", 6);
        }
    },
    identity : class extends creepyMessage {
        constructor() {
            super("What is ig's full name?", "tomato", 7);
        }
    },
    live : class extends creepyMessage {
        constructor() {
            super("WHERE DOES IG LIVE?!", "red", 8);
        }
    },
};