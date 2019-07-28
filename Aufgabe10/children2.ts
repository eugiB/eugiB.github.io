namespace a10{


export class children2 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    
    
        draw(): void {

            
            crc2.lineWidth = 3;

            crc2.moveTo(this.x, this.y);

            crc2.lineWidth = 5;

         

            crc2.beginPath();
            crc2.arc(this.x + 5, this.y , 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.moveTo(this.x + 5, this.y +3);
            crc2.lineTo(this.x + 3, this.y + 20);
            crc2.moveTo(this.x + 3, this.y + 20);
            crc2.lineTo(this.x + 15, this.y + 30);
            crc2.moveTo(this.x + 3, this.y + 20);
            crc2.lineTo(this.x - 5, this.y + 30);
            crc2.moveTo(this.x + 5, this.y + 3);
            crc2.lineTo(this.x - 20, this.y + 15);
            crc2.moveTo(this.x - 10, this.y + 20);
            crc2.lineTo(this.x - 60, this.y + 20);
            crc2.lineTo(this.x - 35, this.y + 1);
             crc2.stroke();
            
          
            crc2.closePath();

        }


        move(): void {

            if (this.x > crc2.canvas.width) {
                this.y = 700;
                this.x = 0;
            }

            this.x +=  2;
            this.y += -2;
            this.draw();


        }

    
    }
}