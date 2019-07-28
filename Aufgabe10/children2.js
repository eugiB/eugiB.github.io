var a10;
(function (a10) {
    class children2 {
        draw() {
            a10.crc2.lineWidth = 3;
            a10.crc2.moveTo(this.x, this.y);
            a10.crc2.lineWidth = 5;
            a10.crc2.beginPath();
            a10.crc2.arc(this.x + 5, this.y, 7, 0, 2 * Math.PI);
            a10.crc2.fill();
            a10.crc2.moveTo(this.x + 5, this.y + 3);
            a10.crc2.lineTo(this.x + 3, this.y + 20);
            a10.crc2.moveTo(this.x + 3, this.y + 20);
            a10.crc2.lineTo(this.x + 15, this.y + 30);
            a10.crc2.moveTo(this.x + 3, this.y + 20);
            a10.crc2.lineTo(this.x - 5, this.y + 30);
            a10.crc2.moveTo(this.x + 5, this.y + 3);
            a10.crc2.lineTo(this.x - 20, this.y + 15);
            a10.crc2.moveTo(this.x - 10, this.y + 20);
            a10.crc2.lineTo(this.x - 60, this.y + 20);
            a10.crc2.lineTo(this.x - 35, this.y + 1);
            a10.crc2.stroke();
            a10.crc2.closePath();
        }
        move() {
            if (this.x > a10.crc2.canvas.width) {
                this.y = 700;
                this.x = 0;
            }
            this.x += 2;
            this.y += -2;
            this.draw();
        }
    }
    a10.children2 = children2;
})(a10 || (a10 = {}));
//# sourceMappingURL=children2.js.map