namespace PaintEIA2 {

    export class Wdrop extends Draw {
        position: Draw;
        size: number;
        w: number = 50;
        h: number = 80;


        move(): void {
            this.ySpeed = 5;
            this.y = this.y + this.ySpeed;
            if (this.y > height) {
                this.ySpeed = -5;
                this.y = 0 + this.ySpeed;
            }

            else {

            return;
            }
        }

        draw2(): void {
            
            crc2.translate(this.x, this.y);
            crc2.restore();
            crc2.beginPath();
            crc2.arc(this.x, this.y + 10, 22, 0, 360, false);
            crc2.moveTo(this.x - 20, this.y );
            crc2.lineTo(this.x, this.y - 40);
            crc2.lineTo(this.x + 20, this.y );
            crc2.stroke();
            crc2.fillStyle = "Lightblue";
            crc2.fill();
            crc2.save();
    
        }

    }




}
