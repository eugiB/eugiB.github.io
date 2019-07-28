var a11;
(function (a11) {
    class Snow extends a11.draw {
        constructor() {
            super();
            this.xd = Math.random() * 500;
            this.yd = Math.random() * 600;
        }
        draw() {
            a11.crc2.fillStyle = this.color;
            a11.crc2.fillStyle = "white";
            a11.crc2.strokeStyle = "grey";
            a11.crc2.lineWidth = 1;
            a11.crc2.beginPath();
            a11.crc2.moveTo(this.xd - 3, this.yd + 2);
            a11.crc2.lineTo(this.xd, this.yd - 2);
            a11.crc2.lineTo(this.xd + 3, this.yd + 2);
            a11.crc2.closePath();
            a11.crc2.fill();
            a11.crc2.stroke();
            a11.crc2.beginPath();
            a11.crc2.moveTo(this.xd - 3, this.yd - 2);
            a11.crc2.lineTo(this.xd + 3, this.yd - 2);
            a11.crc2.lineTo(this.xd, this.yd + 3);
            a11.crc2.closePath();
            a11.crc2.fill();
            a11.crc2.stroke();
        }
        move() {
            this.yD = 4;
            this.xD = Math.random() * 0;
            this.xd += this.xD;
            this.yd += this.yD;
            if (this.yd > 600) {
                this.yd = 0;
            }
            this.draw();
        }
    }
    a11.Snow = Snow;
})(a11 || (a11 = {}));
//# sourceMappingURL=Snow.js.map