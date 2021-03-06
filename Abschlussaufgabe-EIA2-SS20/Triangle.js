var PaintEIA2;
(function (PaintEIA2) {
    class Triangle extends PaintEIA2.Draw {
        constructor() {
            super(...arguments);
            this.w = 50;
            this.h = 50;
        }
        move() {
            this.xSpeed = 5;
            this.x = this.x + this.xSpeed;
            if (this.x > (PaintEIA2.width)) {
                this.xSpeed = -5;
                this.x = 0 + this.xSpeed;
            }
            else {
                return;
            }
        }
        draw2() {
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.translate(this.x, this.y);
            PaintEIA2.crc2.scale(0.4, 0.4);
            PaintEIA2.crc2.moveTo(0, 0);
            PaintEIA2.crc2.lineTo(-65, 90);
            PaintEIA2.crc2.lineTo(65, 90);
            PaintEIA2.crc2.translate(this.x, this.y);
            PaintEIA2.crc2.stroke();
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.fillStyle = PaintEIA2.getRandomColor();
            PaintEIA2.crc2.fill();
            PaintEIA2.crc2.closePath();
            PaintEIA2.crc2.save();
        }
    }
    PaintEIA2.Triangle = Triangle;
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=Triangle.js.map