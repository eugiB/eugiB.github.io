var PaintEIA2;
(function (PaintEIA2) {
    window.addEventListener("load", handleLoad);
    window.addEventListener("mouseup", handleMouseup);
    window.addEventListener("mousedown", handleMousedown);
    window.addEventListener("mousedown", handleMousemoveObject);
    window.addEventListener("mousedown", handleMousemoveTriangle);
    let img;
    // export let diff: Draw;
    let widthSlider;
    let heightSlider;
    let yourColor;
    let currentRectangle;
    let rectanglePresent = false;
    let currentTriangle;
    let trianglePresent = false;
    let dragged = false;
    PaintEIA2.triangleArray = [];
    PaintEIA2.rectangleArray = [];
    function handleLoad(_event) {
        document.getElementById("restart").addEventListener("click", reloadPage);
        document.getElementById("deleteObj").addEventListener("click", deleteObject);
        // document.getElementById("smallPicture").addEventListener("click", drawBackground);
        // document.getElementById("mediumPicture").addEventListener("click", drawBackground);
        widthSlider = document.getElementById("widthSlider");
        heightSlider = document.getElementById("heightSlider");
        yourColor = document.getElementById("yourColor");
        widthSlider.addEventListener("change", drawBackground);
        heightSlider.addEventListener("change", drawBackground);
        yourColor.addEventListener("change", drawBackground);
        PaintEIA2.canvas = document.querySelector("canvas");
        if (!PaintEIA2.canvas)
            return;
        PaintEIA2.crc2 = PaintEIA2.canvas.getContext("2d");
        window.requestAnimationFrame(update);
        setInterval(update, 60);
        setInterval(clearCanvas, 1);
        // console.log(dragged);
        img = PaintEIA2.crc2.getImageData(0, 0, PaintEIA2.canvas.width, PaintEIA2.canvas.height);
    }
    PaintEIA2.handleLoad = handleLoad;
    function reloadPage() {
        location.reload();
    }
    function update() {
        PaintEIA2.crc2.clearRect(0, 0, PaintEIA2.width, PaintEIA2.height);
        drawBackground();
        if (PaintEIA2.rectangleArray) {
            for (let rectangle = 0; rectangle < PaintEIA2.rectangleArray.length; rectangle++) {
                PaintEIA2.rectangleArray[rectangle].draw2();
            }
        }
        if (PaintEIA2.triangleArray) {
            for (let triangle = 0; triangle < PaintEIA2.triangleArray.length; triangle++) {
                PaintEIA2.triangleArray[triangle].draw2();
            }
        }
    }
    function clearCanvas() {
        let xCanvas = 0 + PaintEIA2.width;
        let yCanvas = 0 + PaintEIA2.height;
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.clearRect(xCanvas, 0, 1000 - xCanvas, 600);
        PaintEIA2.crc2.clearRect(0, PaintEIA2.height, 1000, 600 - yCanvas);
        drawUI();
        drawButtons();
        drawStopmoveButton();
        drawRectangleButton();
        drawTriangleButton();
        drawCircleButton();
        drawStar(430, 652, 5, 35, 15);
        drawHeartButton();
        // console.log(xCanvas +" "+ yCanvas);
    }
    function drawUI() {
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.fillStyle = "grey";
        PaintEIA2.crc2.fillRect(0, 600, 1000, 100);
        PaintEIA2.crc2.save();
    }
    function drawButtons() {
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(20, 610);
        PaintEIA2.crc2.lineTo(120, 610);
        PaintEIA2.crc2.lineTo(120, 690);
        PaintEIA2.crc2.lineTo(20, 690);
        PaintEIA2.crc2.lineTo(20, 610);
        PaintEIA2.crc2.strokeStyle = "Lightblue";
        PaintEIA2.crc2.shadowBlur = 2;
        PaintEIA2.crc2.shadowColor = "White";
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(140, 610);
        PaintEIA2.crc2.lineTo(240, 610);
        PaintEIA2.crc2.lineTo(240, 690);
        PaintEIA2.crc2.lineTo(140, 690);
        PaintEIA2.crc2.lineTo(140, 610);
        PaintEIA2.crc2.strokeStyle = "Lightblue";
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(260, 610);
        PaintEIA2.crc2.lineTo(360, 610);
        PaintEIA2.crc2.lineTo(360, 690);
        PaintEIA2.crc2.lineTo(260, 690);
        PaintEIA2.crc2.lineTo(260, 610);
        PaintEIA2.crc2.strokeStyle = "Lightblue";
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(380, 610);
        PaintEIA2.crc2.lineTo(480, 610);
        PaintEIA2.crc2.lineTo(480, 690);
        PaintEIA2.crc2.lineTo(380, 690);
        PaintEIA2.crc2.lineTo(380, 610);
        PaintEIA2.crc2.strokeStyle = "Lightblue";
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(500, 610);
        PaintEIA2.crc2.lineTo(600, 610);
        PaintEIA2.crc2.lineTo(600, 690);
        PaintEIA2.crc2.lineTo(500, 690);
        PaintEIA2.crc2.lineTo(500, 610);
        PaintEIA2.crc2.strokeStyle = "Lightblue";
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.closePath();
    }
    function drawBackground() {
        let newHeight = parseInt(heightSlider.value);
        let newWidth = parseInt(widthSlider.value);
        var widthValue = document.getElementById("widthVal");
        var heightValue = document.getElementById("heightVal");
        heightValue.innerHTML = "Height " + heightSlider.value;
        widthValue.innerHTML = "Width " + widthSlider.value;
        PaintEIA2.height = newHeight;
        PaintEIA2.width = newWidth;
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.clearRect(0, 0, 1000, 600);
        PaintEIA2.crc2.fillStyle = yourColor.value;
        PaintEIA2.crc2.fillRect(0, 0, PaintEIA2.width, PaintEIA2.height);
        PaintEIA2.crc2.save();
        // console.log(newWidth, newHeight);
    }
    let xButton1 = 30;
    let yButton1 = 610;
    let wButton1 = 100;
    let hButton1 = 80;
    function drawRectangleButton() {
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(40, 625);
        PaintEIA2.crc2.lineTo(100, 625);
        PaintEIA2.crc2.lineTo(100, 675);
        PaintEIA2.crc2.lineTo(40, 675);
        PaintEIA2.crc2.strokeStyle = "White";
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.save();
        // console.log("Square");
    }
    let xButton2 = 150;
    let yButton2 = 610;
    let wButton2 = 100;
    let hButton2 = 80;
    function drawTriangleButton() {
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(160, 675);
        PaintEIA2.crc2.lineTo(220, 675);
        PaintEIA2.crc2.lineTo(190, 625);
        PaintEIA2.crc2.strokeStyle = "White";
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.save();
        // console.log("Triangle");
    }
    let xButton3 = 270;
    let yButton3 = 610;
    let wButton3 = 100;
    let hButton3 = 80;
    function drawCircleButton() {
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.arc(310, 650, 30, 0, 2 * Math.PI);
        PaintEIA2.crc2.stroke();
        // console.log("Circle");
    }
    let xButton4 = 390;
    let yButton4 = 610;
    let wButton4 = 100;
    let hButton4 = 80;
    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;
        var i = 0;
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(cx, cy - outerRadius);
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            PaintEIA2.crc2.lineTo(x, y);
            rot += step;
            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            PaintEIA2.crc2.lineTo(x, y);
            rot += step;
        }
        PaintEIA2.crc2.lineTo(cx, cy - outerRadius);
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.lineWidth = 1;
        PaintEIA2.crc2.strokeStyle = "White";
        PaintEIA2.crc2.stroke();
        // console.log("Star");
    }
    let xButton5 = 510;
    let yButton5 = 610;
    let wButton5 = 100;
    let hButton5 = 80;
    function drawHeartButton() {
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.moveTo(550, 680);
        PaintEIA2.crc2.bezierCurveTo(470, 650, 550, 600, 550, 640);
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.moveTo(550, 680);
        PaintEIA2.crc2.bezierCurveTo(630, 650, 550, 600, 550, 640);
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.stroke();
        // console.log("Heart");
    }
    let xButton6 = 650;
    let yButton6 = 635;
    let wButton6 = 150;
    let hButton6 = 30;
    function drawStopmoveButton() {
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.font = "25px Arial";
        PaintEIA2.crc2.fillStyle = "white";
        PaintEIA2.crc2.fillText("SAVE POS", 650, 660);
        PaintEIA2.crc2.restore();
    }
    function handleMousedown(_client) {
        let isLeftClicked = _client.button == 0;
        if (!isLeftClicked)
            return;
        // window.removeEventListener("mousedown", handleMousemoveTriangle);
        // window.removeEventListener("mousedown", handleMousemoveObject);
        if (_client.offsetX > xButton1 &&
            _client.offsetX < xButton1 + wButton1 &&
            _client.offsetY > yButton1 &&
            _client.offsetY < yButton1 + hButton1) {
            let rectangleDraw = new PaintEIA2.Draw(0, 0);
            let rectangle = new PaintEIA2.Rectangle(0, rectangleDraw);
            currentRectangle = rectangle;
            PaintEIA2.rectangleArray.push(rectangle);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveObject);
        }
        if (_client.offsetX > xButton2 &&
            _client.offsetX < xButton2 + wButton2 &&
            _client.offsetY > yButton2 &&
            _client.offsetY < yButton2 + hButton2) {
            let triangleDraw = new PaintEIA2.Draw(0, 0);
            let triangle = new PaintEIA2.Triangle(0, triangleDraw);
            PaintEIA2.triangleArray.push(triangle);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveTriangle);
            console.log();
        }
        if (_client.offsetX > xButton3 &&
            _client.offsetX < xButton3 + wButton3 &&
            _client.offsetY > yButton3 &&
            _client.offsetY < yButton3 + hButton3) {
            window.addEventListener("mouseup", handleMouseup);
            // console.log("hit3");
        }
        if (_client.offsetX > xButton4 &&
            _client.offsetX < xButton4 + wButton4 &&
            _client.offsetY > yButton4 &&
            _client.offsetY < yButton4 + hButton4) {
            window.addEventListener("mouseup", handleMouseup);
            // console.log("hit4");
        }
        if (_client.offsetX > xButton5 &&
            _client.offsetX < xButton5 + wButton5 &&
            _client.offsetY > yButton5 &&
            _client.offsetY < yButton5 + hButton5) {
            window.addEventListener("mouseup", handleMouseup);
            // console.log("hit5");
        }
        if (_client.offsetX > xButton6 &&
            _client.offsetX < xButton6 + wButton6 &&
            _client.offsetY > yButton6 &&
            _client.offsetY < yButton6 + hButton6) {
            window.removeEventListener("mousedown", handleMousemoveObject);
            window.removeEventListener("mousedown", handleMousemoveTriangle);
            console.log("loool");
            dragged = false;
        }
        for (let rectangle of PaintEIA2.rectangleArray) {
            if (rectanglePresent == true &&
                _client.offsetX > rectangle.position.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.position.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.position.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.position.y + rectangle.h / 2) {
                window.addEventListener("mousedown", handleMousemoveObject);
                currentRectangle = rectangle;
                dragged = true;
            }
        }
        for (let triangle of PaintEIA2.triangleArray) {
            if (trianglePresent == true &&
                _client.offsetX > triangle.position.x - triangle.w / 2 &&
                _client.offsetX < triangle.position.x + triangle.w / 2 &&
                _client.offsetY > triangle.position.y - triangle.h / 2 &&
                _client.offsetY < triangle.position.y + triangle.h / 2) {
                window.addEventListener("mousedown", handleMousemoveTriangle);
                window.removeEventListener("mousedown", handleMousemoveObject);
                currentTriangle = triangle;
                dragged = true;
            }
        }
    }
    function handleMousemoveObject(_client) {
        currentRectangle.position.x = _client.offsetX;
        currentRectangle.position.y = _client.offsetY;
        dragged = true;
    }
    PaintEIA2.handleMousemoveObject = handleMousemoveObject;
    function handleMousemoveTriangle(_client) {
        currentTriangle.position.x = _client.offsetX;
        currentTriangle.position.y = _client.offsetY;
        dragged = true;
    }
    PaintEIA2.handleMousemoveTriangle = handleMousemoveTriangle;
    function deleteObject() {
        if (rectanglePresent == true) {
            PaintEIA2.rectangleArray.pop();
            console.log("izzda");
        }
        if (trianglePresent == true) {
            PaintEIA2.triangleArray.pop();
        }
    }
    PaintEIA2.deleteObject = deleteObject;
    function handleMouseup(_client) {
        window.addEventListener("mousedown", handleMousemoveObject);
        window.addEventListener("mousedown", handleMousemoveTriangle);
        dragged = true;
        if (dragged) {
            setTimeout(() => {
                dragged = false;
            }, 100);
        }
        for (let rectangle of PaintEIA2.rectangleArray) {
            currentRectangle = rectangle;
            // console.log("droppedsadwad");
            rectanglePresent = true;
            currentRectangle.draw2();
        }
        for (let triangle of PaintEIA2.triangleArray) {
            currentTriangle = triangle;
            trianglePresent = true;
            currentTriangle.draw2();
        }
        window.removeEventListener("mousemove", handleMousemoveObject);
        window.removeEventListener("mousemove", handleMousemoveTriangle);
        window.removeEventListener("mouseup", handleMouseup);
        dragged = false;
    }
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=main.js.map