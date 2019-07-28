namespace a11{
    
    export class Snow extends draw {
        xD: number;
        yD: number;
        color:string;
        constructor() {
            super();
            this.xd = Math.random() * 500;
            this.yd = Math.random() * 600;
        }
        

        draw(): void {
            crc2.fillStyle = this.color;

            crc2.fillStyle = "white";
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.xd - 3, this.yd + 2);
            crc2.lineTo(this.xd, this.yd - 2);
            crc2.lineTo(this.xd + 3, this.yd + 2);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xd - 3, this.yd - 2);
            crc2.lineTo(this.xd + 3, this.yd - 2);
            crc2.lineTo(this.xd, this.yd + 3);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
        
          move(): void {
               this.yD = 4;
            this.xD = Math.random() * 0;

            this.xd += this.xD;
            this.yd += this.yD;

            if (this.yd > 600) {
                this.yd = 0;
            
      }
            this.draw();
        }
    }
}