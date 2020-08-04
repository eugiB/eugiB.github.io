var PaintEIA2;
(function (PaintEIA2) {
    window.addEventListener("load", handleLoad);
    window.addEventListener("mouseup", handleMouseup);
    window.addEventListener("mousedown", handleMousedown);
    let img;
    let widthSlider;
    let heightSlider;
    let yourColor;
    let currentRectangle;
    let rectanglePresent = false;
    let recArrayPos;
    let currentTriangle;
    let trianglePresent = false;
    let triArrayPos;
    let currentCircle;
    let circlePresent = false;
    let cirArrayPos;
    let currentWdrop;
    let wdropPresent = false;
    let wdrArrayPos;
    let currentHeart;
    let heartPresent = false;
    let heaArrayPos;
    let dragged = false;
    let objectChosen = false;
    PaintEIA2.triangleArray = [];
    PaintEIA2.rectangleArray = [];
    PaintEIA2.circleArray = [];
    PaintEIA2.wdropArray = [];
    PaintEIA2.heartArray = [];
    function handleLoad(_event) {
        document.getElementById("restart").addEventListener("click", reloadPage);
        document.getElementById("deleteObj").addEventListener("click", deleteObject);
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
        setInterval(update, 10);
        // console.log(dragged);
        img = PaintEIA2.crc2.getImageData(0, 0, PaintEIA2.canvas.width, PaintEIA2.canvas.height);
    }
    PaintEIA2.handleLoad = handleLoad;
    function reloadPage() {
        location.reload();
    }
    function update() {
        PaintEIA2.crc2.clearRect(0, 0, PaintEIA2.canvas.width, PaintEIA2.canvas.height);
        drawUI();
        drawBackground();
        if (PaintEIA2.rectangleArray) {
            for (let rectangle = 0; rectangle < PaintEIA2.rectangleArray.length; rectangle++) {
                PaintEIA2.rectangleArray[rectangle].draw2();
            }
        }
        if (PaintEIA2.triangleArray) {
            for (let triangle = 0; triangle < PaintEIA2.triangleArray.length; triangle++) {
                PaintEIA2.triangleArray[triangle].draw2();
                PaintEIA2.triangleArray[triangle].move();
            }
        }
        if (PaintEIA2.circleArray) {
            for (let circle = 0; circle < PaintEIA2.circleArray.length; circle++) {
                PaintEIA2.circleArray[circle].draw2();
            }
        }
        if (PaintEIA2.wdropArray) {
            for (let wdrop = 0; wdrop < PaintEIA2.wdropArray.length; wdrop++) {
                PaintEIA2.wdropArray[wdrop].draw2();
                PaintEIA2.wdropArray[wdrop].move();
            }
        }
        if (PaintEIA2.heartArray) {
            for (let heart = 0; heart < PaintEIA2.heartArray.length; heart++) {
                PaintEIA2.heartArray[heart].draw2();
                PaintEIA2.heartArray[heart].move();
            }
        }
    }
    function clearCanvas() {
        let xCanvas = 0 + PaintEIA2.width;
        let yCanvas = 0 + PaintEIA2.height;
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.clearRect(xCanvas, 0, 1000 - xCanvas, 600);
        PaintEIA2.crc2.clearRect(0, PaintEIA2.height, 1000, 600 - yCanvas);
    }
    function drawUI() {
        PaintEIA2.crc2.clearRect(0, 600, 1000, 100);
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.fillStyle = "grey";
        PaintEIA2.crc2.fillRect(0, 600, 1000, 100);
        PaintEIA2.crc2.save();
        drawButtons();
        drawStopmoveButton();
        drawmoveButton();
        drawRectangleButton();
        drawTriangleButton();
        drawCircleButton();
        drawdrop();
        drawHeartButton();
        requestAnimationFrame(clearCanvas);
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
        PaintEIA2.crc2.fillStyle = "White";
        PaintEIA2.crc2.fill();
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
        PaintEIA2.crc2.fillStyle = "White";
        PaintEIA2.crc2.fill();
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
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.arc(310, 650, 30, 0, 2 * Math.PI);
        PaintEIA2.crc2.fillStyle = "White";
        PaintEIA2.crc2.fill();
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.closePath();
        // console.log("Circle");
    }
    let xButton4 = 390;
    let yButton4 = 610;
    let wButton4 = 100;
    let hButton4 = 80;
    function drawdrop() {
        PaintEIA2.crc2.beginPath();
        PaintEIA2.crc2.arc(430, 663, 20, 0, 360, false);
        PaintEIA2.crc2.moveTo(410, 660);
        PaintEIA2.crc2.lineTo(430, 620);
        PaintEIA2.crc2.lineTo(450, 660);
        PaintEIA2.crc2.fillStyle = "White";
        PaintEIA2.crc2.fill();
        PaintEIA2.crc2.closePath();
        PaintEIA2.crc2.stroke();
        PaintEIA2.crc2.restore();
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
        PaintEIA2.crc2.fillStyle = "White";
        PaintEIA2.crc2.fill();
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
    let xButton7 = 800;
    let yButton7 = 635;
    let wButton7 = 150;
    let hButton7 = 30;
    function drawmoveButton() {
        PaintEIA2.crc2.save();
        PaintEIA2.crc2.restore();
        PaintEIA2.crc2.font = "25px Arial";
        PaintEIA2.crc2.fillStyle = "white";
        PaintEIA2.crc2.fillText("MOVE POS", 800, 660);
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
            let rectangle = new PaintEIA2.Rectangle(_client.offsetX, _client.offsetY);
            currentRectangle = rectangle;
            PaintEIA2.rectangleArray.push(rectangle);
            handleMousemoveObject(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveObject);
        }
        if (_client.offsetX > xButton2 &&
            _client.offsetX < xButton2 + wButton2 &&
            _client.offsetY > yButton2 &&
            _client.offsetY < yButton2 + hButton2) {
            let triangle = new PaintEIA2.Triangle(_client.offsetX, _client.offsetX);
            currentTriangle = triangle;
            PaintEIA2.triangleArray.push(triangle);
            handleMousemoveTriangle(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveTriangle);
        }
        if (_client.offsetX > xButton3 &&
            _client.offsetX < xButton3 + wButton3 &&
            _client.offsetY > yButton3 &&
            _client.offsetY < yButton3 + hButton3) {
            let circle = new PaintEIA2.Circle(_client.offsetX, _client.offsetY);
            currentCircle = circle;
            PaintEIA2.circleArray.push(circle);
            handleMousemoveCircle(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveCircle);
            // console.log("hit3");
        }
        if (_client.offsetX > xButton4 &&
            _client.offsetX < xButton4 + wButton4 &&
            _client.offsetY > yButton4 &&
            _client.offsetY < yButton4 + hButton4) {
            let wdrop = new PaintEIA2.Wdrop(_client.offsetX, _client.offsetY);
            currentWdrop = wdrop;
            PaintEIA2.wdropArray.push(wdrop);
            handleMousemoveWdrop(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveWdrop);
            // console.log("hit4");
        }
        if (_client.offsetX > xButton5 &&
            _client.offsetX < xButton5 + wButton5 &&
            _client.offsetY > yButton5 &&
            _client.offsetY < yButton5 + hButton5) {
            let heart = new PaintEIA2.Heart(_client.offsetX, _client.offsetY);
            currentHeart = heart;
            PaintEIA2.heartArray.push(heart);
            handleMousemoveHeart(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveHeart);
            // console.log("hit5");
        }
        if (_client.offsetX > xButton6 &&
            _client.offsetX < xButton6 + wButton6 &&
            _client.offsetY > yButton6 &&
            _client.offsetY < yButton6 + hButton6) {
            objectChosen = false;
            rectanglePresent = false;
            trianglePresent = false;
            circlePresent = false;
            wdropPresent = false;
            heartPresent = false;
            window.removeEventListener("mousedown", handleMousemoveObject);
            window.removeEventListener("mousedown", handleMousemoveTriangle);
            window.removeEventListener("mousedown", handleMousemoveCircle);
            window.removeEventListener("mousedown", handleMousemoveWdrop);
            window.removeEventListener("mousedown", handleMousemoveHeart);
            console.log("loool");
            dragged = false;
        }
        for (let rectangle of PaintEIA2.rectangleArray) {
            if (_client.offsetX > rectangle.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.y + rectangle.h / 2) {
                window.addEventListener("mousemove", handleMousemoveObject);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveTriangle);
                window.removeEventListener("mousedown", handleMousemoveCircle);
                window.removeEventListener("mousedown", handleMousemoveWdrop);
                window.removeEventListener("mousedown", handleMousemoveHeart);
                rectanglePresent = true;
                objectChosen = true;
                currentRectangle = rectangle;
                dragged = true;
                recArrayPos = PaintEIA2.rectangleArray.indexOf(currentRectangle);
            }
        }
        for (let triangle of PaintEIA2.triangleArray) {
            if (_client.offsetX > triangle.x - triangle.w / 2 &&
                _client.offsetX < triangle.x + triangle.w / 2 &&
                _client.offsetY > triangle.y - triangle.h / 2 &&
                _client.offsetY < triangle.y + triangle.h / 2) {
                window.addEventListener("mousemove", handleMousemoveTriangle);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveObject);
                window.removeEventListener("mousedown", handleMousemoveCircle);
                window.removeEventListener("mousedown", handleMousemoveWdrop);
                window.removeEventListener("mousedown", handleMousemoveHeart);
                objectChosen = true;
                currentTriangle = triangle;
                trianglePresent = true;
                dragged = true;
                triArrayPos = PaintEIA2.triangleArray.indexOf(currentTriangle);
            }
        }
        for (let circle of PaintEIA2.circleArray) {
            if (_client.offsetX > circle.x - circle.w / 2 &&
                _client.offsetX < circle.x + circle.w / 2 &&
                _client.offsetY > circle.y - circle.h / 2 &&
                _client.offsetY < circle.y + circle.h / 2) {
                window.addEventListener("mousedown", handleMousemoveCircle);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveObject);
                window.removeEventListener("mousedown", handleMousemoveTriangle);
                window.removeEventListener("mousedown", handleMousemoveWdrop);
                window.removeEventListener("mousedown", handleMousemoveHeart);
                objectChosen = true;
                currentCircle = circle;
                circlePresent = true;
                dragged = true;
                cirArrayPos = PaintEIA2.circleArray.indexOf(currentCircle);
            }
        }
        for (let wdrop of PaintEIA2.wdropArray) {
            if (_client.offsetX > wdrop.x - wdrop.w / 2 &&
                _client.offsetX < wdrop.x + wdrop.w / 2 &&
                _client.offsetY > wdrop.y - wdrop.h / 2 &&
                _client.offsetY < wdrop.y + wdrop.h / 2) {
                window.addEventListener("mousedown", handleMousemoveWdrop);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveObject);
                window.removeEventListener("mousedown", handleMousemoveTriangle);
                window.removeEventListener("mousedown", handleMousemoveCircle);
                window.removeEventListener("mousedown", handleMousemoveHeart);
                objectChosen = true;
                currentWdrop = wdrop;
                wdropPresent = true;
                dragged = true;
                wdrArrayPos = PaintEIA2.wdropArray.indexOf(currentWdrop);
            }
        }
        for (let heart of PaintEIA2.heartArray) {
            if (_client.offsetX > heart.x - heart.w / 2 &&
                _client.offsetX < heart.x + heart.w / 2 &&
                _client.offsetY > heart.y - heart.h / 2 &&
                _client.offsetY < heart.y + heart.h / 2) {
                window.addEventListener("mousemove", handleMousemoveHeart);
                window.addEventListener("mousedown", handleMousemoveHeart);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveObject);
                window.removeEventListener("mousedown", handleMousemoveTriangle);
                window.removeEventListener("mousedown", handleMousemoveCircle);
                window.removeEventListener("mousedown", handleMousemoveWdrop);
                objectChosen = true;
                currentHeart = heart;
                heartPresent = true;
                dragged = true;
                heaArrayPos = PaintEIA2.heartArray.indexOf(currentHeart);
            }
        }
    }
    function handleMousemoveObject(_client) {
        currentRectangle.x = _client.offsetX;
        currentRectangle.y = _client.offsetY;
        dragged = true;
        window.addEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveHeart);
    }
    PaintEIA2.handleMousemoveObject = handleMousemoveObject;
    function handleMousemoveTriangle(_client) {
        currentTriangle.x = _client.offsetX;
        currentTriangle.y = _client.offsetY;
        dragged = true;
        window.addEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveHeart);
    }
    PaintEIA2.handleMousemoveTriangle = handleMousemoveTriangle;
    function handleMousemoveCircle(_client) {
        currentCircle.x = _client.offsetX;
        currentCircle.y = _client.offsetY;
        dragged = true;
        window.addEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveHeart);
    }
    PaintEIA2.handleMousemoveCircle = handleMousemoveCircle;
    function handleMousemoveWdrop(_client) {
        currentWdrop.x = _client.offsetX;
        currentWdrop.y = _client.offsetY;
        dragged = true;
        // console.log("djawiofbawi");
        window.addEventListener("mousedown", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveHeart);
    }
    PaintEIA2.handleMousemoveWdrop = handleMousemoveWdrop;
    function handleMousemoveHeart(_client) {
        currentHeart.x = _client.offsetX;
        currentHeart.y = _client.offsetY;
        dragged = true;
        // console.log("djawiofbawi");
        window.addEventListener("mousedown", handleMousemoveHeart);
        window.removeEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveWdrop);
    }
    PaintEIA2.handleMousemoveHeart = handleMousemoveHeart;
    function deleteObject() {
        if (rectanglePresent == true) {
            PaintEIA2.rectangleArray.splice(recArrayPos, 1);
            // console.log("izzda");
        }
        if (trianglePresent == true) {
            PaintEIA2.triangleArray.splice(triArrayPos, 1);
        }
        if (circlePresent == true) {
            PaintEIA2.circleArray.splice(cirArrayPos, 1);
        }
        if (wdropPresent == true) {
            PaintEIA2.wdropArray.splice(wdrArrayPos, 1);
        }
        if (heartPresent == true) {
            PaintEIA2.heartArray.splice(heaArrayPos, 1);
        }
    }
    PaintEIA2.deleteObject = deleteObject;
    function handleMouseup(_client) {
        dragged = true;
        for (let currentRectangle of PaintEIA2.rectangleArray) {
            currentRectangle.draw2();
            window.addEventListener("mousedown", handleMousemoveObject);
        }
        for (let currentTriangle of PaintEIA2.triangleArray) {
            currentTriangle.draw2();
            window.addEventListener("mousedown", handleMousemoveTriangle);
        }
        for (let currentCircle of PaintEIA2.circleArray) {
            currentCircle.draw2();
            window.addEventListener("mousedown", handleMousemoveCircle);
        }
        for (let currentWdrop of PaintEIA2.wdropArray) {
            currentWdrop.draw2();
            window.addEventListener("mousedown", handleMousemoveWdrop);
        }
        for (let currentHeart of PaintEIA2.heartArray) {
            currentHeart.draw2();
            window.removeEventListener("mousemove", handleMousemoveHeart);
            window.addEventListener("mousedown", handleMousemoveHeart);
        }
        window.removeEventListener("mousemove", handleMousemoveObject);
        window.removeEventListener("mousemove", handleMousemoveTriangle);
        window.removeEventListener("mousemove", handleMousemoveCircle);
        window.removeEventListener("mousemove", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveHeart);
        window.removeEventListener("mouseup", handleMouseup);
        dragged = false;
    }
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=main.js.map