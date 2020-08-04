var PaintEIA2;
(function (PaintEIA2) {
    class Circle extends PaintEIA2.Draw {
        constructor() {
            super(...arguments);
            this.w = 90;
            this.h = 90;
            this.radius = 10;
        }
        animate() {
            setInterval(this.draw2, 100);
            this.draw2();
        }
        draw2() {
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.translate(this.x, this.y);
            PaintEIA2.crc2.fillStyle = PaintEIA2.getRandomColor();
            PaintEIA2.crc2.moveTo(0, 0);
            PaintEIA2.crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            PaintEIA2.crc2.fill();
            PaintEIA2.crc2.restore();
            if (this.radius == 10) {
                this.radius += 10;
            }
            else if (this.radius == 20) {
                this.radius -= 10;
            }
            PaintEIA2.crc2.save();
        }
    }
    PaintEIA2.Circle = Circle;
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=circle.js.map