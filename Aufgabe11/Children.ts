namespace a11{
    
    
      export class Child extends draw {
        xD: number;
        yD: number;
          color: string;
        state: boolean;

        constructor() {
            super();
            this. xd = Math.random() * 380 + 250;
            this. yd = Math.random() * 100 + 350;
            
        }


        draw(): void {
            crc2.fillStyle = this.color;
                        crc2.fillStyle = "black";
            crc2.strokeStyle = "black";

            crc2.lineWidth = 3;

            crc2.moveTo(this.xd, this.yd);

            crc2.lineWidth = 5;



            crc2.beginPath();
            crc2.arc(this.xd + 5, this.yd, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.moveTo(this.xd + 5, this.yd + 3);
            crc2.lineTo(this.xd + 3, this.yd + 20);
            crc2.moveTo(this.xd + 3, this.yd + 20);
            crc2.lineTo(this.xd + 15, this.yd + 30);
            crc2.moveTo(this.xd + 3, this.yd + 20);
            crc2.lineTo(this.xd - 5, this.yd + 30);
            crc2.moveTo(this.xd + 5, this.yd + 3);
            crc2.lineTo(this.xd - 20, this.yd + 15);
            crc2.moveTo(this.xd - 10, this.yd + 20);
            crc2.lineTo(this.xd - 60, this.yd + 20);
            crc2.lineTo(this.xd - 35, this.yd + 1);
            crc2.stroke();


        }
          
          
        move(): void {
            if (this.state == true)
                this.moveDown();

            else {
                this.moveUp();
            }
        }

        moveDown(): void {
            this.xD = 5;
            this.yD = -3;

            this. xd += this.xD;
            this. yd += this.yD;

            if (this. xd > 420) {
                this.state = false;
            }
        }

        moveUp(): void {

            this.xD = -6;
            this.yD = 3;

            this. xd += this.xD;
            this. yd += this.yD;
            if( this.yd <100)
            {
              
                this.xd=100;
                this.yd=Math.floor(Math.random() * (480 - 450)) + 500;
                }
            if (this. xd < 100) {
                this.state = true;
            }
            this.draw();
        }
    }
    
    
}