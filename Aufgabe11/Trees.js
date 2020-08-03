var a11;
(function (a11) {
    class Tree extends a11.Static {
        constructor() {
            super();
            this.xd = 0 + Math.random() * 1300;
            this.yd = 400 + Math.random() * 300;
            this.color = "#799F0C";
        }
        draw() {
            a11.crc2.beginPath();
            a11.crc2.moveTo(this.xd, this.yd - 120);
            a11.crc2.lineTo(this.xd - 45, this.yd);
            a11.crc2.lineTo(this.xd + 45, this.yd);
            a11.crc2.closePath();
            a11.crc2.fillStyle = "#008000";
            a11.crc2.strokeStyle = "#008000";
            a11.crc2.fill();
            a11.crc2.stroke();
            a11.crc2.beginPath();
            a11.crc2.moveTo(this.xd + 5, this.yd + 20);
            a11.crc2.lineTo(this.xd - 10, this.yd + 20);
            a11.crc2.lineTo(this.xd - 10, this.yd);
            a11.crc2.lineTo(this.xd + 5, this.yd);
            a11.crc2.closePath();
            a11.crc2.strokeStyle = "#723102";
            a11.crc2.fillStyle = "#723102";
            a11.crc2.fill();
            a11.crc2.stroke();
        }
    }
    a11.Tree = Tree;
})(a11 || (a11 = {}));
//# sourceMappingURL=Trees.js.map