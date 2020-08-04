var PaintEIA2;
(function (PaintEIA2) {
    class Heart extends PaintEIA2.Draw {
        constructor() {
            super(...arguments);
            this.w = 160;
            this.h = 120;
        }
        move() {
            this.initPos = 50;
            this.xSpeed = 3;
            this.ySpeed = 3;
            this.x = this.x + this.xSpeed;
            this.y = this.y + this.ySpeed;
            if (this.y > (PaintEIA2.height)) {
                this.initPos = this.x;
                this.initPos += 20;
                this.y = 0 + this.xSpeed + this.ySpeed;
                this.x = this.initPos + this.xSpeed + this.ySpeed;
            }
            if (this.x > (PaintEIA2.width + 50)) {
                this.y = 0 + this.xSpeed + this.ySpeed;
                this.x = -100 + this.xSpeed + this.ySpeed;
            }
            else {
                return;
            }
        }
        draw2() {
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.moveTo(this.x, this.y);
            PaintEIA2.crc2.bezierCurveTo(this.x + 82, this.y - 40, this.x, this.y - 80, this.x, this.y - 50);
            PaintEIA2.crc2.save();
            PaintEIA2.crc2.stroke();
            PaintEIA2.crc2.moveTo(this.x, this.y);
            PaintEIA2.crc2.bezierCurveTo(this.x - 82, this.y - 40, this.x, this.y - 80, this.x, this.y - 50);
            PaintEIA2.crc2.fillStyle = "Red";
            PaintEIA2.crc2.fill();
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.closePath();
            PaintEIA2.crc2.save();
        }
    }
    PaintEIA2.Heart = Heart;
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=Heart.js.map