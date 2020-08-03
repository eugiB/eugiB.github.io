namespace a11 {
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

export class Snow extends Moveable {
       
    gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 5);

    constructor() {
        super();
       
        let ySnow: number = (3 * Math.random()) + 1;
        this.velocity = new Vector(0, ySnow);

    }
    
    draw(): void {
        
        crc2.beginPath();
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.fillStyle = this.gradient;
        crc2.arc(0, 0, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.restore();





    }
}


}