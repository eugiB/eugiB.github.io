namespace a10{


export class children1 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    
    
        draw(): void {

       
   crc2.strokeStyle = "black";
            crc2.fillStyle="black";
            crc2.lineWidth = 2;
            

            
            crc2.moveTo(this.x, this.y);
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y, 7, 0, 2 * Math.PI);
            crc2.fill();
             crc2.lineTo(this.x - 15, this.y + 25);
             crc2.moveTo(this.x - 15, this.y + 15);
            crc2.lineTo(this.x - 5, this.y + 5);
            crc2.moveTo(this.x - 10, this.y + 5);
            crc2.lineTo(this.x - 20, this.y +5);
            crc2.closePath();
            
            crc2.stroke();
            crc2.fill();
            
           
         
            crc2.lineWidth = 5;
            
            crc2.beginPath();
            crc2.lineTo(this.x - 10, this.y + 25);
            crc2.lineTo(this.x - 50, this.y + 35);
            crc2.lineTo(this.x - 30, this.y +15);
            crc2.stroke();


        }

        move(): void {

            if (this.y > 450) {
                this.y = 200;
                this.x = 500;
            }

            this.x += - 4;
            this.y += 2;
            this.draw();


          
        }
    }
}