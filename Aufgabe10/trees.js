var a10;
(function (a10) {
    class trees {
        constructor() {
            this.color1 = "#799F0C";
        }
        draw() {
            a10.crc2.beginPath();
            a10.crc2.moveTo(this.x, this.y - 80);
            a10.crc2.lineTo(this.x - 35, this.y);
            a10.crc2.lineTo(this.x + 35, this.y);
            a10.crc2.closePath();
            a10.crc2.fillStyle = "#008000";
            a10.crc2.strokeStyle = "#008000";
            a10.crc2.fill();
            a10.crc2.stroke();
            a10.crc2.beginPath();
            a10.crc2.moveTo(this.x + 5, this.y + 10);
            a10.crc2.lineTo(this.x - 5, this.y + 10);
            a10.crc2.lineTo(this.x - 5, this.y + 0);
            a10.crc2.lineTo(this.x + 5, this.y + 0);
            a10.crc2.closePath();
            a10.crc2.strokeStyle = "#723102";
            a10.crc2.fillStyle = "#723102";
            a10.crc2.fill();
            a10.crc2.stroke();
        }
    }
    a10.trees = trees;
})(a10 || (a10 = {}));
//# sourceMappingURL=trees.js.map