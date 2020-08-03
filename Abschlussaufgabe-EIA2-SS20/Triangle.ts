namespace PaintEIA2 {
 
    export class Triangle {
        position: Draw;
        size: number;
        w: number = 90;
        h: number = 90;
        r: number = 45;

    constructor(_size: number, _position: Draw) {
        this.position = _position;
        this.size = _size;

    }

    

    draw(): void {
        crc2.beginPath();
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.rotate(this.r * Math.PI / 180);
        crc2.translate(-this.w + 35, -this.h + 20);
        crc2.scale(this.size, this.size);
        crc2.strokeStyle = "red";
        crc2.moveTo(this.position.x, this.position.y);
        crc2.lineTo(90, 90);
        crc2.lineTo(45, 0);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }   
    

    draw2(): void {
        crc2.beginPath();
        crc2.translate(this.position.x, this.position.y);

        crc2.fillStyle = getRandomColor();
        
        crc2.moveTo(0, 0);
        crc2.lineTo(-65, 90);
        crc2.lineTo(65, 90);
        crc2.translate(this.position.x, this.position.y);
        crc2.stroke();
        crc2.fill();
        crc2.restore();



    }





    }
    



}
