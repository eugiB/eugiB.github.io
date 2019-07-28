namespace a10 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let flakes: snowflake[] = [];
    let childrenup: children1[] = [];
    let childrendown: children2[] = [];
    let treees: trees[] = [];
    let imgData: ImageData;

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawHill();
        drawSky();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        imgData = crc2.getImageData(0, 0, 600, 400);

        for (let i: number = 0; i < 100; i++) {
            let flake: snowflake = new snowflake();
            flake.x = Math.random() * crc2.canvas.width;
            flake.y = Math.random() * crc2.canvas.height;
            flake.dy = Math.random() * 4 + 2;
            flake.color = "#00ff00";

            flakes.push(flake);
        }

        for (let i: number = 0; i < 10; i++) {
            let tree: trees = new trees();
            tree.x = 350 + Math.random() * (crc2.canvas.width - 520);
            tree.y = 350 + Math.random() * (crc2.canvas.height - 350);

            treees.push(tree);
        }

        for (let i: number = 0; i < 8; i++) {
            let child1: children1 = new children1();
            child1.x = (Math.random() * crc2.canvas.width);
            child1.y = (Math.random() * crc2.canvas.height+250);
            child1.dx = Math.random() * 2 - 4;
            child1.dy = Math.random() * 2 + 4;

            childrenup.push(child1);
        }
        for (let i: number = 0; i < 8; i++) {
            let child2: children2 = new children2();
            child2.x = (Math.random() * crc2.canvas.width);
            child2.y = (Math.random() * crc2.canvas.height+200);
            child2.dx = Math.random() * 3 - 2;
            child2.dy = Math.random() * 3 + 2;

            childrendown.push(child2);
        }
        update();
    }
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
        crc2.stroke();
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
        window.setTimeout(update, 1000 / 40);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);



        for (let i: number = 0; i < 100; i++) {
            let flake: snowflake = flakes[i];
            flake.move();
            flake.draw();
        }
        for (let i: number = 0; i < 5; i++) {
            let tree: trees = treees[i];
            tree.draw();
        }


        for (let i: number = 0; i < 5; i++) {
            let child1: children1 = childrenup[i];
            child1.move();
            child1.draw();

        }

        for (let i: number = 0; i < 5; i++) {
            let child2: children2 = childrendown[i];
            child2.move();
            child2.draw();

        }



    }
}