let ig; // igPlays gameObject.

let bullets = []; // Stores all the bullet objects.
let bulletCount = 0; // How many bullets are active.
let bulletCap = 25; // Bullet cap.

let msgs = []; // Stores all the message objects.
let msgCount = 0; // How many messages are active.
let msgCap = 40; // Message cap.
let msgGo = 0; // So not too many messages spawn at once.

let stage = 0; // Current stage the game is at.

let isJoke = true; // If the before screen is up.