var a11;
(function (a11) {
    class Child extends a11.draw {
        constructor() {
            super();
            this.xd = Math.random() * 380 + 250;
            this.yd = Math.random() * 100 + 350;
        }
        draw() {
            a11.crc2.fillStyle = this.color;
            a11.crc2.fillStyle = "black";
            a11.crc2.strokeStyle = "black";
            a11.crc2.lineWidth = 3;
            a11.crc2.moveTo(this.xd, this.yd);
            a11.crc2.lineWidth = 5;
            a11.crc2.beginPath();
            a11.crc2.arc(this.xd + 5, this.yd, 7, 0, 2 * Math.PI);
            a11.crc2.fill();
            a11.crc2.moveTo(this.xd + 5, this.yd + 3);
            a11.crc2.lineTo(this.xd + 3, this.yd + 20);
            a11.crc2.moveTo(this.xd + 3, this.yd + 20);
            a11.crc2.lineTo(this.xd + 15, this.yd + 30);
            a11.crc2.moveTo(this.xd + 3, this.yd + 20);
            a11.crc2.lineTo(this.xd - 5, this.yd + 30);
            a11.crc2.moveTo(this.xd + 5, this.yd + 3);
            a11.crc2.lineTo(this.xd - 20, this.yd + 15);
            a11.crc2.moveTo(this.xd - 10, this.yd + 20);
            a11.crc2.lineTo(this.xd - 60, this.yd + 20);
            a11.crc2.lineTo(this.xd - 35, this.yd + 1);
            a11.crc2.stroke();
        }
        move() {
            if (this.state == true)
                this.moveDown();
            else {
                this.moveUp();
            }
        }
        moveDown() {
            this.xD = 5;
            this.yD = -3;
            this.xd += this.xD;
            this.yd += this.yD;
            if (this.xd > 420) {
                this.state = false;
            }
        }
        moveUp() {
            this.xD = -6;
            this.yD = 3;
            this.xd += this.xD;
            this.yd += this.yD;
            if (this.yd < 100) {
                this.xd = 100;
                this.yd = Math.floor(Math.random() * (480 - 450)) + 500;
            }
            if (this.xd < 100) {
                this.state = true;
            }
            this.draw();
        }
    }
    a11.Child = Child;
})(a11 || (a11 = {}));
//# sourceMappingURL=Children.js.map