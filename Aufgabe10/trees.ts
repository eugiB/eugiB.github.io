namespace a10{

    export class trees {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color1: string = "#799F0C";
        color2: string;



        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 80);
            crc2.lineTo(this.x - 35, this.y);
            crc2.lineTo(this.x + 35, this.y);
            crc2.closePath();

            crc2.fillStyle = "#008000";
            crc2.strokeStyle = "#008000";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y + 0);
            crc2.lineTo(this.x + 5, this.y + 0);
            crc2.closePath();
            crc2.strokeStyle = "#723102";
            crc2.fillStyle = "#723102";
            crc2.fill();
            crc2.stroke();


        }

    }
}