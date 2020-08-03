namespace a11 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let crc1: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];
    let objects: Static[] = [];
    let imagedata: ImageData;


    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");


        drawSky();
        drawHill();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        generateTrees();
        generateSnow();
        //generateBirdo();



        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);


        function drawSky(): void {
            var grd = crc2.createLinearGradient(0, 0, 0, 400);
            grd.addColorStop(0, "#00d4ff");
            grd.addColorStop(1, "#2121a1");
            crc2.fillStyle = grd;
            crc2.fillRect(0, 0, 1300, 400);
            crc2.restore();

            crc2.beginPath();
            crc2.moveTo(0, 400);
            crc2.lineTo(0, 700);
            crc2.lineTo(0, 110);
            crc2.closePath();

            crc2.fill();
        }


        function drawHill(): void {

            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(0, 400);
            crc2.lineTo(1300, 400);
            crc2.closePath();



            crc2.beginPath();
            crc2.moveTo(0, 200);
            crc2.lineTo(1300, 400);
            crc2.moveTo(1300, 400);

            crc2.closePath();
            crc2.lineWidth = 1;

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






        function generateTrees(): void {
            for (let i: number = 0; i < 8; i++) {
                let tree: Tree = new Tree();
                objects.push(tree);
            }
            console.log("Treees");
        }

        function generateSnow(): void {
            let nFlakes: number = 100;
            for (let i: number = 0; i < nFlakes; i++) {

                let snowflake: Snow = new Snow();
                moveables.push(snowflake);
            }
        }




        function generateBirdo(): void {
            for (let i: number = 0; i < 8; i++) {

                let bird: Birdo = new Birdo();
                moveables.push(bird);
            }
        }
        function update(_backgroundData: ImageData): void {

            crc2.putImageData(_backgroundData, 0, 0);
    
            for (let moveable of moveables) {
                if (moveable instanceof Snow) {
                    moveable.move();
                    moveable.draw();
                }
                if (moveable instanceof Birdo) {
                    moveable.move();
                    moveable.draw();
                }
    
            }
        }
/* 
        function update(): void {
            crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / 30);


            for (let moveables of moveable) {
                object.move();
                console.log("TEST");
            }

            for (let object of objects) {
                object.draw();
            }
        } */

    }
}