var a11;
(function (a11) {
    window.addEventListener("load", init);
    let moveables = [];
    let objects = [];
    let imagedata;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        a11.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        generateTrees();
        generateSnow();
        //generateBirdo();
        imagedata = a11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        function drawSky() {
            var grd = a11.crc2.createLinearGradient(0, 0, 0, 400);
            grd.addColorStop(0, "#00d4ff");
            grd.addColorStop(1, "#2121a1");
            a11.crc2.fillStyle = grd;
            a11.crc2.fillRect(0, 0, 1300, 400);
            a11.crc2.restore();
            a11.crc2.beginPath();
            a11.crc2.moveTo(0, 400);
            a11.crc2.lineTo(0, 700);
            a11.crc2.lineTo(0, 110);
            a11.crc2.closePath();
            a11.crc2.fill();
        }
        function drawHill() {
            a11.crc2.lineWidth = 1;
            a11.crc2.beginPath();
            a11.crc2.moveTo(0, 400);
            a11.crc2.lineTo(1300, 400);
            a11.crc2.closePath();
            a11.crc2.beginPath();
            a11.crc2.moveTo(0, 200);
            a11.crc2.lineTo(1300, 400);
            a11.crc2.moveTo(1300, 400);
            a11.crc2.closePath();
            a11.crc2.lineWidth = 1;
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
        function generateTrees() {
            for (let i = 0; i < 8; i++) {
                let tree = new a11.Tree();
                objects.push(tree);
            }
            console.log("Treees");
        }
        function generateSnow() {
            let nFlakes = 100;
            for (let i = 0; i < nFlakes; i++) {
                let snowflake = new a11.Snow();
                moveables.push(snowflake);
            }
        }
        function generateBirdo() {
            for (let i = 0; i < 8; i++) {
                let bird = new a11.Birdo();
                moveables.push(bird);
            }
        }
        function update(_backgroundData) {
            a11.crc2.putImageData(_backgroundData, 0, 0);
            for (let moveable of moveables) {
                if (moveable instanceof a11.Snow) {
                    moveable.move();
                    moveable.draw();
                }
                if (moveable instanceof a11.Birdo) {
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
})(a11 || (a11 = {}));
//# sourceMappingURL=Aufgabe11.js.map