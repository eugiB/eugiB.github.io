namespace a11{
  
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let objects: draw[] = [];

    let imagedata: ImageData;
    

    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawSky();
        drawHill();
        drawSun();
        generateTrees();
        generateSnow();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        generateChild();

        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);

        update();

        
        
         function drawSky(): void {
        crc2.fillStyle = "#00b0ff";
        crc2.fillRect(0, 0, crc2.canvas.width, 110);

        crc2.beginPath();
        crc2.moveTo(0, 110);
        crc2.lineTo(0, 350);
        crc2.lineTo(350, 110);
        crc2.lineTo(0, 110);
        crc2.closePath();

        crc2.fill();
    }


    function drawHill(): void {
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(350, 110);
        crc2.lineTo(0, 350);
        crc2.closePath();

        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(700, 600);
        crc2.moveTo(700, 600);

        crc2.closePath();
        crc2.lineWidth = 2;
       
        crc2.fill();
    }

    function drawSun(): void {
        let _x: number = 70;
        let _y: number = 70;
        let radius: number = 40;
        let startAngle: number = 0;
        let endAngle: number = 2 * Math.PI;

        crc2.moveTo(70, 70);
        crc2.beginPath();
        crc2.arc(_x, _y, radius, startAngle, endAngle, true);

        crc2.fillStyle = "#ffd700";
        crc2.fill();
    }

    function drawCloud1(): void {

        crc2.beginPath();
        crc2.moveTo(150, 100);
        crc2.arc(130, 100, 20, 0, 3 * Math.PI);
        crc2.arc(120, 100, 20, 0, 3 * Math.PI);
        crc2.arc(110, 90, 20, 0, 3 * Math.PI);
        crc2.arc(100, 85, 20, 0, 3 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();

    }

    function drawCloud2(): void {

        crc2.beginPath();
        crc2.arc(260, 60, 30, 0, 4 * Math.PI);
        crc2.arc(220, 50, 25, 0, 4 * Math.PI);
        crc2.arc(300, 50, 25, 0, 4 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();


    }

    function drawCloud3(): void {

        crc2.beginPath();
        crc2.arc(20, 220, 30, 0, 4 * Math.PI);
        crc2.arc(50, 200, 35, 0, 4 * Math.PI);
        crc2.arc(80, 200, 25, 0, 4 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();


    }
        
         function update(): void {
            crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / 30);

           

            for (let i: number = 0; i < objects.length; i++) {
                let object: draw = objects[i];
                object.draw();
                object.move();
            }
        }
        function generateTrees(): void {
            for (let i: number = 0; i < 6; i++) {
                let tree: Tree = new Tree();
                objects.push(tree);
            }
        }

        function generateSnow(): void {
            for (let i: number = 0; i < 100; i++) {

                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            }
        }

     

        function generateChild(): void {
            for (let i: number = 0; i < 8; i++) {

                let child: Child = new Child();
                objects.push(child);
            }
        } 

       

       
   
        
    }
}