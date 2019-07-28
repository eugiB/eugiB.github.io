var a10;
(function (a10) {
    class snowflake {
        move() {
            this.y += this.dy;
            if (this.y > a10.crc2.canvas.height) {
                this.y = 0;
            }
        }
        draw() {
            a10.crc2.fillStyle = this.color;
            a10.crc2.fillStyle = "white";
            a10.crc2.strokeStyle = "grey";
            a10.crc2.lineWidth = 1;
            a10.crc2.beginPath();
            a10.crc2.moveTo(this.x - 2, this.y + 1);
            a10.crc2.lineTo(this.x, this.y - 2);
            a10.crc2.lineTo(this.x + 2, this.y + 1);
            a10.crc2.closePath();
            a10.crc2.fill();
            a10.crc2.stroke();
            a10.crc2.beginPath();
            a10.crc2.moveTo(this.x - 2, this.y - 1);
            a10.crc2.lineTo(this.x + 2, this.y - 1);
            a10.crc2.lineTo(this.x, this.y + 2);
            a10.crc2.closePath();
            a10.crc2.fill();
            a10.crc2.stroke();
        }
    }
    a10.snowflake = snowflake;
})(a10 || (a10 = {}));
//# sourceMappingURL=snowflake.js.map