var PaintEIA2;
(function (PaintEIA2) {
    class Wdrop extends PaintEIA2.Draw {
        constructor() {
            super(...arguments);
            this.w = 50;
            this.h = 80;
        }
        move() {
            this.ySpeed = 5;
            this.y = this.y + this.ySpeed;
            if (this.y > PaintEIA2.height) {
                this.ySpeed = -5;
                this.y = 0 + this.ySpeed;
            }
            else {
                return;
            }
        }
        draw2() {
            PaintEIA2.crc2.translate(this.x, this.y);
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.arc(this.x, this.y + 10, 22, 0, 360, false);
            PaintEIA2.crc2.moveTo(this.x - 20, this.y);
            PaintEIA2.crc2.lineTo(this.x, this.y - 40);
            PaintEIA2.crc2.lineTo(this.x + 20, this.y);
            PaintEIA2.crc2.stroke();
            PaintEIA2.crc2.fillStyle = "Lightblue";
            PaintEIA2.crc2.fill();
            PaintEIA2.crc2.save();
        }
    }
    PaintEIA2.Wdrop = Wdrop;
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=Star.js.map