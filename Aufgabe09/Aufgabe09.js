var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        drawSleigh();
        drawSleigh2();
        drawKid();
        drawKid2();
        drawRope();
        drawSantahat();
        drawSantahat2();
        for (let i = 0; i < 8; i++) {
            let _x = Math.floor(Math.random() * crc2.canvas.width);
            let _y = Math.floor(Math.random() * (70 - 250) + crc2.canvas.height);
            drawTree(_x, _y);
        }
        for (let i = 0; i < 200; i++) {
            let a = Math.floor(Math.random() * crc2.canvas.width);
            let b = Math.floor(Math.random() * crc2.canvas.height);
            drawSnow(a, b);
        }
    }
    function drawSky() {
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
    function drawHill() {
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
    function drawSun() {
        let _x = 70;
        let _y = 70;
        let radius = 40;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        crc2.moveTo(70, 70);
        crc2.beginPath();
        crc2.arc(_x, _y, radius, startAngle, endAngle, true);
        crc2.fillStyle = "#ffd700";
        crc2.fill();
    }
    function drawSnow(a, b) {
        crc2.beginPath();
        crc2.arc(a, b, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawTree(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y - 80);
        crc2.lineTo(_x - 35, _y);
        crc2.lineTo(_x + 35, _y);
        crc2.closePath();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#008000";
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 10);
        crc2.lineTo(_x - 5, _y + 10);
        crc2.lineTo(_x - 5, _y + 0);
        crc2.lineTo(_x + 5, _y + 0);
        crc2.closePath();
        crc2.strokeStyle = "#723102";
        crc2.fillStyle = "#723102";
        crc2.fill();
        crc2.stroke();
    }
    function drawCloud1() {
        crc2.beginPath();
        crc2.moveTo(150, 100);
        crc2.arc(130, 100, 20, 0, 3 * Math.PI);
        crc2.arc(120, 100, 20, 0, 3 * Math.PI);
        crc2.arc(110, 90, 20, 0, 3 * Math.PI);
        crc2.arc(100, 85, 20, 0, 3 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawCloud2() {
        crc2.beginPath();
        crc2.arc(260, 60, 30, 0, 4 * Math.PI);
        crc2.arc(220, 50, 25, 0, 4 * Math.PI);
        crc2.arc(300, 50, 25, 0, 4 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawCloud3() {
        crc2.beginPath();
        crc2.arc(20, 220, 30, 0, 4 * Math.PI);
        crc2.arc(50, 200, 35, 0, 4 * Math.PI);
        crc2.arc(80, 200, 25, 0, 4 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawSleigh() {
        crc2.lineWidth = 3;
        crc2.strokeStyle = "#723102";
        crc2.beginPath();
        crc2.moveTo(160, 310);
        crc2.lineTo(210, 270);
        crc2.moveTo(160, 310);
        crc2.lineTo(150, 305);
        crc2.moveTo(183, 290);
        crc2.lineTo(174, 280);
        crc2.moveTo(203, 257);
        crc2.lineTo(174, 280);
        crc2.moveTo(200, 260);
        crc2.lineTo(208, 270);
        crc2.stroke();
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
    function drawKid() {
        crc2.lineWidth = 5;
        crc2.strokeStyle = "#230187";
        crc2.beginPath();
        crc2.moveTo(195, 260);
        crc2.lineTo(175, 275);
        crc2.moveTo(195, 260);
        crc2.lineTo(190, 220);
        crc2.moveTo(190, 220);
        crc2.arc(190, 220, 9, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#230187";
        crc2.fill();
        crc2.moveTo(195, 245);
        crc2.lineTo(170, 235);
        crc2.moveTo(195, 245);
        crc2.lineTo(210, 225);
        crc2.stroke();
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "#230187";
        crc2.stroke();
    }
    function drawKid2() {
        crc2.lineWidth = 5;
        crc2.strokeStyle = "#C50000";
        crc2.beginPath();
        crc2.moveTo(330, 270);
        crc2.lineTo(310, 245);
        crc2.moveTo(310, 245);
        crc2.lineTo(295, 273);
        crc2.moveTo(310, 245);
        crc2.lineTo(305, 200);
        crc2.moveTo(305, 200);
        crc2.arc(305, 200, 9, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#C50000";
        crc2.fill();
        crc2.moveTo(307, 220);
        crc2.lineTo(290, 245);
        crc2.moveTo(305, 220);
        crc2.lineTo(330, 235);
        crc2.stroke();
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "#C50000";
        crc2.stroke();
    }
    function drawSleigh2() {
        crc2.lineWidth = 3;
        crc2.strokeStyle = "#723102";
        crc2.beginPath();
        crc2.moveTo(270, 270);
        crc2.lineTo(220, 310);
        crc2.moveTo(270, 270);
        crc2.lineTo(270, 255);
        crc2.moveTo(230, 300);
        crc2.lineTo(220, 288);
        crc2.moveTo(250, 285);
        crc2.lineTo(240, 273);
        crc2.moveTo(240, 273);
        crc2.lineTo(215, 292);
        crc2.stroke();
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
    function drawRope() {
        crc2.lineWidth = 1;
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(290, 245);
        crc2.lineTo(270, 265);
        crc2.stroke();
    }
    function drawSantahat2() {
        crc2.lineWidth = 6;
        crc2.strokeStyle = "#F4F3F3";
        crc2.beginPath();
        crc2.moveTo(315, 190);
        crc2.lineTo(290, 200);
        crc2.stroke();
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "#FC0202";
        crc2.beginPath();
        crc2.moveTo(295, 175);
        crc2.lineTo(311, 188);
        crc2.moveTo(295, 175);
        crc2.lineTo(292, 196);
        crc2.lineTo(312, 188);
        crc2.fillStyle = "#FC0202";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(295, 175, 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.strokeStyle = "#F4F3F3";
        crc2.stroke();
    }
    function drawSantahat() {
        crc2.lineWidth = 6;
        crc2.strokeStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(200, 210);
        crc2.lineTo(175, 218);
        crc2.stroke();
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "#FC0202";
        crc2.beginPath();
        crc2.moveTo(185, 195);
        crc2.lineTo(175, 214);
        crc2.moveTo(185, 195);
        crc2.lineTo(198, 207);
        crc2.lineTo(175, 214);
        crc2.fillStyle = "#FC0202";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(185, 195, 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe09.js.map