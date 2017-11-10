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
    
    drawText : (text, x, y, font, style) => {
        context.font = font;
        context.fillStyke = style;
        context.textAlign = "center";
        context.fillText(text, x, y);
    }
};