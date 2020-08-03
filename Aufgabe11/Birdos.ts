/* namespace a11 {

    
      export class Birdo extends Move {
        position: Vector;
        velocity: Vector;

        constructor() {
            super();

            let birdo: number = (3 * Math.random()) + 1;

            this.velocity = new Vector(birdo, 0);

            
        }


        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(25, 1, 20, 15, Math.PI / 1, 0, 2 * Math.PI);
            crc2.fillStyle = "Grey";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            
            //head
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(5, -5, 10, 0, 6 * Math.PI);
            crc2.fillStyle = "Grey";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            
            //beak
            crc2.save();
            crc2.translate(this.position.x + 4, this.position.y + -6);
            crc2.beginPath();
            crc2.moveTo(-7, -2);
            crc2.lineTo(-17, 4);
            crc2.lineTo(-5, 10);
            crc2.fillStyle = "Orange";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //wings
            crc2.save();
            crc2.translate(this.position.x + 5, this.position.y + 8);
            crc2.beginPath();
            crc2.stroke();
            crc2.moveTo(13, -10);
            crc2.lineTo(30, 15);
            crc2.lineTo(40, 16);
            crc2.lineTo(25, -10);
            crc2.fillStyle = "Grey";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
            crc2.closePath();




        }
    }    
          
/*          move(): void {

        }     */

namespace a11 {
    export class Birdo extends Moveable {
 
        constructor() {
            super();

            let xBird: number = (3 * Math.random()) + 1;

            this.velocity = new Vector(xBird, 0);
        }



        draw(): void { 
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(25, 1, 20, 15, Math.PI / 1, 0, 2 * Math.PI);
            crc2.fillStyle = "Grey";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //head
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(5, -5, 10, 0, 6 * Math.PI);
            crc2.fillStyle = "Grey";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //beak
            crc2.save();
            crc2.translate(this.position.x + 4, this.position.y + -6);
            crc2.beginPath();
            crc2.moveTo(-7, -2);
            crc2.lineTo(-17, 4);
            crc2.lineTo(-5, 10);
            crc2.fillStyle = "Orange";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //wings
            crc2.save();
            crc2.translate(this.position.x + 5, this.position.y + 8);
            crc2.beginPath();
            crc2.stroke();
            crc2.moveTo(13, -10);
            crc2.lineTo(30, 15);
            crc2.lineTo(40, 16);
            crc2.lineTo(25, -10);
            crc2.fillStyle = "Grey";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
            crc2.closePath();
            crc2.restore();
        }
    }
}