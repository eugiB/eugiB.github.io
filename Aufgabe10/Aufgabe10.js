var a10;
(function (a10) {
    window.addEventListener("load", init);
    let flakes = [];
    let childrenup = [];
    let childrendown = [];
    let treees = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        a10.crc2 = canvas.getContext("2d");
        drawHill();
        drawSky();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        imgData = a10.crc2.getImageData(0, 0, 600, 400);
        for (let i = 0; i < 100; i++) {
            let flake = new a10.snowflake();
            flake.x = Math.random() * a10.crc2.canvas.width;
            flake.y = Math.random() * a10.crc2.canvas.height;
            flake.dy = Math.random() * 4 + 2;
            flake.color = "#00ff00";
            flakes.push(flake);
        }
        for (let i = 0; i < 10; i++) {
            let tree = new a10.trees();
            tree.x = 350 + Math.random() * (a10.crc2.canvas.width - 520);
            tree.y = 350 + Math.random() * (a10.crc2.canvas.height - 350);
            treees.push(tree);
        }
        for (let i = 0; i < 8; i++) {
            let child1 = new a10.children1();
            child1.x = (Math.random() * a10.crc2.canvas.width);
            child1.y = (Math.random() * a10.crc2.canvas.height + 250);
            child1.dx = Math.random() * 2 - 4;
            child1.dy = Math.random() * 2 + 4;
            childrenup.push(child1);
        }
        for (let i = 0; i < 8; i++) {
            let child2 = new a10.children2();
            child2.x = (Math.random() * a10.crc2.canvas.width);
            child2.y = (Math.random() * a10.crc2.canvas.height + 200);
            child2.dx = Math.random() * 3 - 2;
            child2.dy = Math.random() * 3 + 2;
            childrendown.push(child2);
        }
        update();
    }
    function drawSky() {
        a10.crc2.fillStyle = "#00b0ff";
        a10.crc2.fillRect(0, 0, a10.crc2.canvas.width, 110);
        a10.crc2.beginPath();
        a10.crc2.moveTo(0, 110);
        a10.crc2.lineTo(0, 350);
        a10.crc2.lineTo(350, 110);
        a10.crc2.lineTo(0, 110);
        a10.crc2.closePath();
        a10.crc2.fill();
    }
    function drawHill() {
        a10.crc2.lineWidth = 1;
        a10.crc2.beginPath();
        a10.crc2.moveTo(350, 110);
        a10.crc2.lineTo(0, 350);
        a10.crc2.closePath();
        a10.crc2.stroke();
        a10.crc2.beginPath();
        a10.crc2.moveTo(0, 600);
        a10.crc2.lineTo(700, 600);
        a10.crc2.moveTo(700, 600);
        a10.crc2.closePath();
        a10.crc2.lineWidth = 2;
        a10.crc2.stroke();
        a10.crc2.fill();
    }
    function drawSun() {
        let _x = 70;
        let _y = 70;
        let radius = 40;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        a10.crc2.moveTo(70, 70);
        a10.crc2.beginPath();
        a10.crc2.arc(_x, _y, radius, startAngle, endAngle, true);
        a10.crc2.fillStyle = "#ffd700";
        a10.crc2.fill();
    }
    function drawCloud1() {
        a10.crc2.beginPath();
        a10.crc2.moveTo(150, 100);
        a10.crc2.arc(130, 100, 20, 0, 3 * Math.PI);
        a10.crc2.arc(120, 100, 20, 0, 3 * Math.PI);
        a10.crc2.arc(110, 90, 20, 0, 3 * Math.PI);
        a10.crc2.arc(100, 85, 20, 0, 3 * Math.PI);
        a10.crc2.fillStyle = "#FFFFFF";
        a10.crc2.fill();
    }
    function drawCloud2() {
        a10.crc2.beginPath();
        a10.crc2.arc(260, 60, 30, 0, 4 * Math.PI);
        a10.crc2.arc(220, 50, 25, 0, 4 * Math.PI);
        a10.crc2.arc(300, 50, 25, 0, 4 * Math.PI);
        a10.crc2.fillStyle = "#FFFFFF";
        a10.crc2.fill();
    }
    function drawCloud3() {
        a10.crc2.beginPath();
        a10.crc2.arc(20, 220, 30, 0, 4 * Math.PI);
        a10.crc2.arc(50, 200, 35, 0, 4 * Math.PI);
        a10.crc2.arc(80, 200, 25, 0, 4 * Math.PI);
        a10.crc2.fillStyle = "#FFFFFF";
        a10.crc2.fill();
    }
    function update() {
        window.setTimeout(update, 1000 / 40);
        a10.crc2.clearRect(0, 0, a10.crc2.canvas.width, a10.crc2.canvas.height);
        a10.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 100; i++) {
            let flake = flakes[i];
            flake.move();
            flake.draw();
        }
        for (let i = 0; i < 5; i++) {
            let tree = treees[i];
            tree.draw();
        }
        for (let i = 0; i < 5; i++) {
            let child1 = childrenup[i];
            child1.move();
            child1.draw();
        }
        for (let i = 0; i < 5; i++) {
            let child2 = childrendown[i];
            child2.move();
            child2.draw();
        }
    }
})(a10 || (a10 = {}));
//# sourceMappingURL=Aufgabe10.js.map