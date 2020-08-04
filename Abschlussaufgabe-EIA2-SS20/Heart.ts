namespace PaintEIA2 {

    export class Heart extends Draw {
        position: Draw;
        size: number;
        w: number = 160;
        h: number = 120;
        r: number = 105;
        scaleVal: number;



        move(): void {
            this.initPos = 50;
            this.xSpeed = 3;
            this.ySpeed = 3;
            this.x = this.x + this.xSpeed;
            this.y = this.y + this.ySpeed;


            if (this.y > (height)) {
                this.initPos = this.x;
                this.initPos += 20;
                this.y = 0 + this.xSpeed + this.ySpeed;
                this.x = this.initPos + this.xSpeed + this.ySpeed;
            }

            if (this.x > (width + 50)) {
                this.y = 0 + this.xSpeed + this.ySpeed;
                this.x = -100 + this.xSpeed + this.ySpeed;
            }

            else {
                return;
            }
        }



        draw2(): void {

            crc2.beginPath();
            crc2.restore();
            crc2.moveTo(this.x, this.y);     
            crc2.bezierCurveTo(this.x + 82, this.y - 40, this.x, this.y - 80, this.x, this.y - 50);
            crc2.save();
            crc2.stroke();
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x - 82, this.y - 40, this.x, this.y - 80, this.x, this.y - 50);
            crc2.fillStyle = "Red";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            crc2.save();


        }

    }




}
