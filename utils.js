let utils = { // Useful functions/classes that are reused.
    Vector2D : class {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    },
    
    gameObject : class {
        constructor(pos, size, src) {
            this.pos = pos;
            this.size = size;
            this.src = src;
        }
    },
    
    drawImage : (src, x, y, w, h) => {
        let img = new Image();
        img.src = src;
        context.drawImage(img, x, y, w, h);
    },
    
    drawText : (text, x, y, font, style, textAlign) => {
        context.font = font;
        context.fillStyle = style;

        // If no origin is set, make it the centre.
        if (textAlign === undefined) {
            context.textAlign = "center";
        } else {
            context.textAlign = textAlign;
        }

        context.fillText(text, x, y);
    },

    audio : (src) => {
        sound = document.createElement("audio");
        sound.src = src;
        sound.setAttribute("preload", "auto");
        sound.setAttribute("controls", "none");
        sound.style.display = "none";
        document.body.appendChild(sound);
        sound.play();
    }
};