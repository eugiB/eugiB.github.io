namespace PaintEIA2 {

    export class Triangle extends Draw {
        position: Draw;
        size: number;
        w: number = 90;
        h: number = 90;
        r: number = 45;



        move(): void { 
            this.xSpeed = 5;
            this.x = this.x + this.xSpeed;
            if (this.x > (width)) {
                this.xSpeed = -5;
                this.x = 0 + this.xSpeed;
            }

            else {

            return;
            }
        }




        draw2(): void {
            crc2.restore();
            crc2.beginPath();
            crc2.translate(this.x, this.y);
            crc2.scale(0.4, 0.4);
            crc2.moveTo(0, 0);
            crc2.lineTo(-65, 90);
            crc2.lineTo(65, 90);
            crc2.translate(this.x, this.y);
            crc2.stroke();
            crc2.restore();
            crc2.fillStyle = getRandomColor();
            crc2.fill();
            crc2.closePath();
            crc2.save();

        }





    }




}
