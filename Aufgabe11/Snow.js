var a11;
(function (a11) {
    /*
        export class Snow extends Moveable {
            xD: number;
            yD: number;
    
            constructor() {
                super();
                this.position.x = Math.random() * 1300;
                this.position.y = Math.random() * 600;
            }
    
            draw(): void {
    
                crc2.fillStyle = "white";
                crc2.strokeStyle = "White";
                crc2.lineWidth = 1;
    
                crc2.beginPath();
                crc2.moveTo(this.position.x - 3, this.position.y + 2);
                crc2.lineTo(this.position.x, this.position.y - 2);
                crc2.lineTo(this.position.x + 3, this.position.y + 2);
                crc2.closePath();
    
                crc2.fill();
                crc2.stroke();
    
                crc2.beginPath();
                crc2.moveTo(this.position.x - 3, this.position.y - 2);
                crc2.lineTo(this.position.x + 3, this.position.y - 2);
                crc2.lineTo(this.position.x, this.position.y + 3);
                crc2.closePath();
    
                crc2.fill();
                crc2.stroke();
            }
    
            move(): void {
                this.yD = 4;
                this.xD = Math.random() * 0;
    
                this.position.x += this.xD;
                this.position.x += this.yD;
    
                if (this.position.y > 600) {
                    this.position.y = 0;
                }
    
                this.draw();
            }
        }
    } */
    class Snow extends a11.Moveable {
        constructor() {
            super();
            this.gradient = a11.crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            let ySnow = (3 * Math.random()) + 1;
            this.velocity = new a11.Vector(0, ySnow);
        }
        draw() {
            a11.crc2.beginPath();
            a11.crc2.save();
            a11.crc2.translate(this.position.x, this.position.y);
            a11.crc2.fillStyle = this.gradient;
            a11.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            a11.crc2.fillStyle = "white";
            a11.crc2.fill();
            a11.crc2.restore();
        }
    }
    a11.Snow = Snow;
})(a11 || (a11 = {}));
//# sourceMappingURL=Snow.js.map