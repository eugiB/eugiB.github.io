var PaintEIA2;
(function (PaintEIA2) {
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    PaintEIA2.getRandomColor = getRandomColor;
    class Rectangle extends PaintEIA2.Draw {
        constructor() {
            super(...arguments);
            this.w = 60;
            this.h = 60;
            this.r = 45;
        }
        draw() {
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.translate(50, 50);
            PaintEIA2.crc2.rotate(this.r * Math.PI / 180);
            PaintEIA2.crc2.translate(-this.w / 2, -this.h / 2);
            PaintEIA2.crc2.fillRect(0, 0, this.w, this.h);
            PaintEIA2.crc2.scale(this.size, this.size);
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.closePath();
        }
        draw2() {
            var time = new Date();
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.translate(this.x - 10, this.y - 10);
            PaintEIA2.crc2.scale(0.7, 0.7);
            PaintEIA2.crc2.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
            PaintEIA2.crc2.fillStyle = getRandomColor();
            PaintEIA2.crc2.fillRect(0, 0, this.w, this.h);
            PaintEIA2.crc2.translate(this.x - 15, this.y - 15);
            PaintEIA2.crc2.scale(this.size, this.size);
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.closePath();
            PaintEIA2.crc2.save();
        }
    }
    PaintEIA2.Rectangle = Rectangle;
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=Rectangle.js.map