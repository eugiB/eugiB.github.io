namespace PaintEIA2 {

    export class Circle extends Draw {
        position: Draw;
        size: number;
        w: number = 90;
        h: number = 90;
        radius: number = 19;



        update(): void {
            setInterval(this.draw2, 100);
            this.draw2();
        }


        draw2(): void {
            crc2.beginPath();
            crc2.translate(this.x, this.y);

            crc2.fillStyle = getRandomColor();
            crc2.moveTo(0, 0);
            crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();


            if (this.radius == 19) {
                this.radius += 20;
            }
            else if (this.radius == 39) {
                this.radius -= 20;
            }
            crc2.save();
        }

    }




}
    



