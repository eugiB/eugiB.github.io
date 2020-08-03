namespace PaintEIA2 {

    export class Heart extends Draw {
        position: Draw;
        size: number;
        w: number = 50;
        h: number = 80;



        draw2(): void {

            crc2.beginPath();

            crc2.restore();
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 82, this.y - 40, this.x, this.y - 80, this.x, this.y - 50);
            crc2.save();
            crc2.stroke();
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x - 82, this.y - 40, this.x, this.y - 80, this.x, this.y - 50);

            crc2.translate(this.x, this.y);
            crc2.fillStyle = "Red";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            crc2.save();


        }

    }




}
