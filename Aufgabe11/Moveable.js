var a11;
(function (a11) {
    class Moveable {
        constructor() {
            let x = 1000 * Math.random();
            let y = 700 * Math.random();
            this.position = new a11.Vector(x, y);
        }
        move() {
            // console.log("Move");
            this.position.add(this.velocity);
            if (this.position.x > a11.crc2.canvas.width) {
                this.position.x -= a11.crc2.canvas.width;
                this.position.y = a11.crc2.canvas.height * Math.random();
            }
            if (this.position.y > a11.crc2.canvas.height) {
                this.position.y -= a11.crc2.canvas.height;
                this.position.x = a11.crc2.canvas.width * Math.random();
            }
            let yWerte = [2, 1.5, 3];
            let n = Math.floor(Math.random() * 2.5);
            if (this.velocity.x > 2 && this.position.x > a11.crc2.canvas.width / 1.5) {
                let s = Math.random() - 0.5;
                if (s < 0) {
                    s = -1;
                }
                if (s > 0) {
                    s = 1;
                }
                let yVelo = yWerte[n] * s;
                this.velocity.y = yVelo;
            }
        }
    }
    a11.Moveable = Moveable;
})(a11 || (a11 = {}));
//# sourceMappingURL=Moveable.js.map