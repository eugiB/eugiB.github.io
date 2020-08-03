var PaintEIA2;
(function (PaintEIA2) {
    class Triangle {
        constructor(_size, _position) {
            this.w = 90;
            this.h = 90;
            this.r = 45;
            this.position = _position;
            this.size = _size;
        }
        draw() {
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.save();
            PaintEIA2.crc2.translate(this.position.x, this.position.y);
            PaintEIA2.crc2.rotate(this.r * Math.PI / 180);
            PaintEIA2.crc2.translate(-this.w + 35, -this.h + 20);
            PaintEIA2.crc2.scale(this.size, this.size);
            PaintEIA2.crc2.strokeStyle = "red";
            PaintEIA2.crc2.moveTo(this.position.x, this.position.y);
            PaintEIA2.crc2.lineTo(90, 90);
            PaintEIA2.crc2.lineTo(45, 0);
            PaintEIA2.crc2.fill();
            PaintEIA2.crc2.restore();
            PaintEIA2.crc2.closePath();
        }
        draw2() {
            PaintEIA2.crc2.beginPath();
            PaintEIA2.crc2.translate(this.position.x, this.position.y);
            PaintEIA2.crc2.fillStyle = PaintEIA2.getRandomColor();
            PaintEIA2.crc2.moveTo(0, 0);
            PaintEIA2.crc2.lineTo(-65, 90);
            PaintEIA2.crc2.lineTo(65, 90);
            PaintEIA2.crc2.translate(this.position.x, this.position.y);
            PaintEIA2.crc2.stroke();
            PaintEIA2.crc2.fill();
            PaintEIA2.crc2.restore();
        }
    }
    PaintEIA2.Triangle = Triangle;
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=circle.js.map