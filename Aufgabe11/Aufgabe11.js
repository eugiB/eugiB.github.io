var a11;
(function (a11) {
    window.addEventListener("load", init);
    let objects = [];
    let imagedata;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        a11.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        generateTrees();
        generateSnow();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        generateChild();
        imagedata = a11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function drawSky() {
            a11.crc2.fillStyle = "#00b0ff";
            a11.crc2.fillRect(0, 0, a11.crc2.canvas.width, 110);
            a11.crc2.beginPath();
            a11.crc2.moveTo(0, 110);
            a11.crc2.lineTo(0, 350);
            a11.crc2.lineTo(350, 110);
            a11.crc2.lineTo(0, 110);
            a11.crc2.closePath();
            a11.crc2.fill();
        }
        function drawHill() {
            a11.crc2.lineWidth = 1;
            a11.crc2.beginPath();
            a11.crc2.moveTo(350, 110);
            a11.crc2.lineTo(0, 350);
            a11.crc2.closePath();
            a11.crc2.stroke();
            a11.crc2.beginPath();
            a11.crc2.moveTo(0, 600);
            a11.crc2.lineTo(700, 600);
            a11.crc2.moveTo(700, 600);
            a11.crc2.closePath();
            a11.crc2.lineWidth = 2;
            a11.crc2.fill();
        }
        function drawSun() {
            let _x = 70;
            let _y = 70;
            let radius = 40;
            let startAngle = 0;
            let endAngle = 2 * Math.PI;
            a11.crc2.moveTo(70, 70);
            a11.crc2.beginPath();
            a11.crc2.arc(_x, _y, radius, startAngle, endAngle, true);
            a11.crc2.fillStyle = "#ffd700";
            a11.crc2.fill();
        }
        function drawCloud1() {
            a11.crc2.beginPath();
            a11.crc2.moveTo(150, 100);
            a11.crc2.arc(130, 100, 20, 0, 3 * Math.PI);
            a11.crc2.arc(120, 100, 20, 0, 3 * Math.PI);
            a11.crc2.arc(110, 90, 20, 0, 3 * Math.PI);
            a11.crc2.arc(100, 85, 20, 0, 3 * Math.PI);
            a11.crc2.fillStyle = "#FFFFFF";
            a11.crc2.fill();
        }
        function drawCloud2() {
            a11.crc2.beginPath();
            a11.crc2.arc(260, 60, 30, 0, 4 * Math.PI);
            a11.crc2.arc(220, 50, 25, 0, 4 * Math.PI);
            a11.crc2.arc(300, 50, 25, 0, 4 * Math.PI);
            a11.crc2.fillStyle = "#FFFFFF";
            a11.crc2.fill();
        }
        function drawCloud3() {
            a11.crc2.beginPath();
            a11.crc2.arc(20, 220, 30, 0, 4 * Math.PI);
            a11.crc2.arc(50, 200, 35, 0, 4 * Math.PI);
            a11.crc2.arc(80, 200, 25, 0, 4 * Math.PI);
            a11.crc2.fillStyle = "#FFFFFF";
            a11.crc2.fill();
        }
        function update() {
            a11.crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / 30);
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                object.draw();
                object.move();
            }
        }
        function generateTrees() {
            for (let i = 0; i < 6; i++) {
                let tree = new a11.Tree();
                objects.push(tree);
            }
        }
        function generateSnow() {
            for (let i = 0; i < 100; i++) {
                let snowflake = new a11.Snow();
                objects.push(snowflake);
            }
        }
        function generateChild() {
            for (let i = 0; i < 8; i++) {
                let child = new a11.Child();
                objects.push(child);
            }
        }
    }
})(a11 || (a11 = {}));
//# sourceMappingURL=Aufgabe11.js.map