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

    audio : class {
        constructor(src) {
            this.sound = document.createElement("audio");
            this.sound.src = src;
            this.sound.setAttribute("preload", "auto");
            this.sound.setAttribute("controls", "none");
            this.sound.style.display = "none";
            document.body.appendChild(this.sound);
        }
        play() {
            this.sound.play();
        }
        pause() {
            this.sound.pause();
        }
    },

    round : (value, exp) => {
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math.round(value);
        }
        
        value = +value;
        exp = +exp;
        
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        
        // Shift
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
        
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
    }
};