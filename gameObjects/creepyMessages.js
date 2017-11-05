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
            super("Where does ig live?", "cyan", 4);
        }
    },
    computer : class extends creepyMessage {
        constructor() {
            super("What is ig's computing?", "blue", 5);
        }
    },
    subscribe : class extends creepyMessage {
        constructor() {
            super("Can ig subscribe to me?", "purple", 6);
        }
    },
    friend : class extends creepyMessage {
        constructor() {
            super("Can ig and me be friends?", "yellow", 7);
        }
    },
    face : class extends creepyMessage {
        constructor() {
            super("What does ig look like?", "orange", 8);
        }
    },
    identity : class extends creepyMessage {
        constructor() {
            super("What is ig's full name?", "tomato", 9);
        }
    },
    live : class extends creepyMessage {
        constructor() {
            super("WHERE DOES IG LIVE?!", "red", 10);
        }
    },
};