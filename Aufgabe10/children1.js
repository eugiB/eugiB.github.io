var a10;
(function (a10) {
    class children1 {
        draw() {
            a10.crc2.strokeStyle = "black";
            a10.crc2.fillStyle = "black";
            a10.crc2.lineWidth = 2;
            a10.crc2.moveTo(this.x, this.y);
            a10.crc2.beginPath();
            a10.crc2.arc(this.x - 5, this.y, 7, 0, 2 * Math.PI);
            a10.crc2.fill();
            a10.crc2.lineTo(this.x - 15, this.y + 25);
            a10.crc2.moveTo(this.x - 15, this.y + 15);
            a10.crc2.lineTo(this.x - 5, this.y + 5);
            a10.crc2.moveTo(this.x - 10, this.y + 5);
            a10.crc2.lineTo(this.x - 20, this.y + 5);
            a10.crc2.closePath();
            a10.crc2.stroke();
            a10.crc2.fill();
            a10.crc2.lineWidth = 5;
            a10.crc2.beginPath();
            a10.crc2.lineTo(this.x - 10, this.y + 25);
            a10.crc2.lineTo(this.x - 50, this.y + 35);
            a10.crc2.lineTo(this.x - 30, this.y + 15);
            a10.crc2.stroke();
        }
        move() {
            if (this.y > 450) {
                this.y = 200;
                this.x = 500;
            }
            this.x += -4;
            this.y += 2;
            this.draw();
        }
    }
    a10.children1 = children1;
})(a10 || (a10 = {}));
//# sourceMappingURL=children1.js.map