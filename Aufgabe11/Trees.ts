namespace a11{
    
   
    export class Tree extends draw {
        color: string;

        constructor() {
            super();
            this. xd = 60 + Math.random() * 250;
            this. yd = 400 + Math.random() * 200;
            this.color = "#799F0C";
        }

        draw(): void {
          
            crc2.beginPath();
            crc2.moveTo(this.xd, this.yd - 80);
            crc2.lineTo(this.xd - 25, this.yd);
            crc2.lineTo(this.xd + 25, this.yd);
            crc2.closePath();

            crc2.fillStyle = "#008000";
            crc2.strokeStyle = "#008000";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xd + 5, this.yd + 10);
            crc2.lineTo(this.xd - 5, this.yd + 10);
            crc2.lineTo(this.xd - 5, this.yd + 5);
            crc2.lineTo(this.xd + 5, this.yd + 5);
            crc2.closePath();
            crc2.strokeStyle = "#723102";
            crc2.fillStyle = "#723102";
            crc2.fill();
            crc2.stroke();

        }
    }
}