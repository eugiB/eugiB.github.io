namespace PaintEIA2 {




    export class Rectangle extends Draw {
        position: Draw;
        size: number;
        w: number = 60;
        h: number = 60;



        draw2(): void {
            var time = new Date();
            crc2.restore();
            crc2.beginPath();
            crc2.translate(this.x - 10, this.y - 10);
            
            crc2.scale(0.7, 0.7);
            crc2.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
            
            crc2.fillStyle = getRandomColor();
            crc2.fillRect(0, 0, this.w, this.h);
            crc2.translate(this.x - 15, this.y - 15);
            crc2.scale(this.size, this.size);
            crc2.restore();
            crc2.closePath();

            crc2.save();

        }




    }

}