var PaintEIA2;
(function (PaintEIA2) {
    class Heart extends PaintEIA2.Draw {
        constructor() {
            super(...arguments);
            this.w = 50;
            this.h = 80;
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
            PaintEIA2.crc2.translate(this.x, this.y);
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