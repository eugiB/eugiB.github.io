namespace a11 {
    
   
    export class Tree extends Static {
        color: string;

        constructor() {
            super();
            this.xd = 0 + Math.random() * 1300;
            this.yd = 400 + Math.random() * 300;
            this.color = "#799F0C";
        }

        draw(): void {
          
            crc2.beginPath();
            crc2.moveTo(this.xd, this.yd - 120);
            crc2.lineTo(this.xd - 45, this.yd);
            crc2.lineTo(this.xd + 45, this.yd);
            crc2.closePath();

            crc2.fillStyle = "#008000";
            crc2.strokeStyle = "#008000";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xd + 5, this.yd + 20);
            crc2.lineTo(this.xd - 10, this.yd + 20);
            crc2.lineTo(this.xd - 10, this.yd);
            crc2.lineTo(this.xd + 5, this.yd);
            crc2.closePath();
            crc2.strokeStyle = "#723102";
            crc2.fillStyle = "#723102";
            crc2.fill();
            crc2.stroke();

        }
    }
}