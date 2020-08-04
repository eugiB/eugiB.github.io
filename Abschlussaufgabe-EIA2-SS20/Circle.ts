namespace PaintEIA2 {

    export class Circle extends Draw {
        position: Draw;
        size: number;
        w: number = 40;
        h: number = 40;
        radius: number = 10;

        animate(): void {
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


            if (this.radius == 10) {
                this.radius += 10;
            }
            else if (this.radius == 20) {
                this.radius -= 10;
            }
            crc2.save();
        }

    }




}
    



