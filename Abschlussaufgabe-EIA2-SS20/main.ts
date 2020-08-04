namespace PaintEIA2 {

    window.addEventListener("load", handleLoad);


    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let img: ImageData;
    let widthSlider: HTMLInputElement;
    let heightSlider: HTMLInputElement;
    let yourColor: HTMLInputElement;
    export let width: number;
    export let height: number;
    let currentRectangle: Rectangle;
    let rectanglePresent: boolean = false;
    let recArrayPos: number;
    let currentTriangle: Triangle;
    let trianglePresent: boolean = false;
    let triArrayPos: number;
    let currentCircle: Circle;
    let circlePresent: boolean = false;
    let cirArrayPos: number;
    let currentWdrop: Wdrop;
    let wdropPresent: boolean = false;
    let wdrArrayPos: number;
    let currentHeart: Heart;
    let heartPresent: boolean = false;
    let heaArrayPos: number;
    let dragged: boolean = false;
    export let triangleArray: Triangle[] = [];
    export let rectangleArray: Rectangle[] = [];
    export let circleArray: Circle[] = [];
    export let wdropArray: Wdrop[] = [];
    export let heartArray: Heart[] = [];


    export function handleLoad(_event: Event): void {

        document.getElementById("restart").addEventListener("click", reloadPage);
        document.getElementById("deleteObj").addEventListener("click", deleteObject);
        widthSlider = document.getElementById("widthSlider") as HTMLInputElement;
        heightSlider = document.getElementById("heightSlider") as HTMLInputElement;
        yourColor = document.getElementById("yourColor") as HTMLInputElement;
        widthSlider.addEventListener("change", drawBackground);
        heightSlider.addEventListener("change", drawBackground);
        yourColor.addEventListener("change", drawBackground);
        window.addEventListener("mouseup", handleMouseup);
        window.addEventListener("mousedown", handleMousedown);

        canvas = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        setInterval(update, 10);

        // console.log(dragged);
        img = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }



    function reloadPage(): void {
        location.reload();
    }



    function update(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        drawUI();
        drawBackground();


        if (rectangleArray) {
            for (let rectangle: number = 0; rectangle < rectangleArray.length; rectangle++) {
                rectangleArray[rectangle].draw2();
            }
        }
        if (triangleArray) {
            for (let triangle: number = 0; triangle < triangleArray.length; triangle++) {
                triangleArray[triangle].draw2();
                triangleArray[triangle].move();
            }
        }

        if (circleArray) {
            for (let circle: number = 0; circle < circleArray.length; circle++) {
                circleArray[circle].draw2();
            }
        }
        if (wdropArray) {
            for (let wdrop: number = 0; wdrop < wdropArray.length; wdrop++) {
                wdropArray[wdrop].draw2();
                wdropArray[wdrop].move();
            }
        }
        if (heartArray) {
            for (let heart: number = 0; heart < heartArray.length; heart++) {
                heartArray[heart].draw2();
                heartArray[heart].move();
            }
        }

    }

    function clearCanvas(): void {
        let xCanvas: number = 0 + width;
        let yCanvas: number = 0 + height;

        crc2.save();
        crc2.clearRect(xCanvas, 0, 1000 - xCanvas, 600);
        crc2.clearRect(0, height, 1000, 600 - yCanvas);
    }


    function drawUI(): void {
        crc2.clearRect(0, 600, 1000, 100);
        crc2.save();
        crc2.restore();

        crc2.fillStyle = "grey";
        crc2.fillRect(0, 600, 1000, 100);
        crc2.save();

        drawButtons();
        drawStopmoveButton();
        drawRectangleButton();
        drawTriangleButton();
        drawCircleButton();
        drawdrop();
        drawHeartButton();
        requestAnimationFrame(clearCanvas);


    }


    export function getRandomColor(): string {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



    function drawButtons(): void {
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(20, 610);
        crc2.lineTo(120, 610);
        crc2.lineTo(120, 690);
        crc2.lineTo(20, 690);
        crc2.lineTo(20, 610);
        crc2.strokeStyle = "Lightblue";
        crc2.shadowBlur = 2;
        crc2.shadowColor = "White";
        crc2.stroke();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(140, 610);
        crc2.lineTo(240, 610);
        crc2.lineTo(240, 690);
        crc2.lineTo(140, 690);
        crc2.lineTo(140, 610);
        crc2.strokeStyle = "Lightblue";
        crc2.stroke();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(260, 610);
        crc2.lineTo(360, 610);
        crc2.lineTo(360, 690);
        crc2.lineTo(260, 690);
        crc2.lineTo(260, 610);
        crc2.strokeStyle = "Lightblue";
        crc2.stroke();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(380, 610);
        crc2.lineTo(480, 610);
        crc2.lineTo(480, 690);
        crc2.lineTo(380, 690);
        crc2.lineTo(380, 610);
        crc2.strokeStyle = "Lightblue";
        crc2.stroke();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(500, 610);
        crc2.lineTo(600, 610);
        crc2.lineTo(600, 690);
        crc2.lineTo(500, 690);
        crc2.lineTo(500, 610);
        crc2.strokeStyle = "Lightblue";
        crc2.stroke();
        crc2.closePath();

    }


    function drawBackground(): void {
        let newHeight: number = parseInt(heightSlider.value);
        let newWidth: number = parseInt(widthSlider.value);
        var widthValue = document.getElementById("widthVal");
        var heightValue = document.getElementById("heightVal");
        heightValue.innerHTML = "Height " + heightSlider.value;
        widthValue.innerHTML = "Width " + widthSlider.value;
        height = newHeight;
        width = newWidth;
        crc2.restore();
        crc2.clearRect(0, 0, 1000, 600);
        crc2.fillStyle = yourColor.value;
        crc2.fillRect(0, 0, width, height);
        crc2.save();
        // console.log(newWidth, newHeight);
    }



    let xButton1: number = 30;
    let yButton1: number = 610;
    let wButton1: number = 100;
    let hButton1: number = 80;


    function drawRectangleButton(): void {

        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(40, 625);
        crc2.lineTo(100, 625);
        crc2.lineTo(100, 675);
        crc2.lineTo(40, 675);
        crc2.fillStyle = "White";
        crc2.fill();
        crc2.strokeStyle = "White";
        crc2.closePath();
        crc2.stroke();
        crc2.save();
        // console.log("Square");

    }


    let xButton2: number = 150;
    let yButton2: number = 610;
    let wButton2: number = 100;
    let hButton2: number = 80;


    function drawTriangleButton(): void {

        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(160, 675);
        crc2.lineTo(220, 675);
        crc2.lineTo(190, 625);
        crc2.fillStyle = "White";
        crc2.fill();
        crc2.strokeStyle = "White";
        crc2.closePath();
        crc2.stroke();
        crc2.save();
        // console.log("Triangle");
    }


    let xButton3: number = 270;
    let yButton3: number = 610;
    let wButton3: number = 100;
    let hButton3: number = 80;


    function drawCircleButton(): void {

        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.arc(310, 650, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "White";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        // console.log("Circle");
    }


    let xButton4: number = 390;
    let yButton4: number = 610;
    let wButton4: number = 100;
    let hButton4: number = 80;


    function drawdrop(): void {

        crc2.beginPath();

        crc2.arc(430, 663, 20, 0, 360, false);
        crc2.moveTo(410, 660);
        crc2.lineTo(430, 620);
        crc2.lineTo(450, 660);
        crc2.fillStyle = "White";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.restore();

    }



    let xButton5: number = 510;
    let yButton5: number = 610;
    let wButton5: number = 100;
    let hButton5: number = 80;

    function drawHeartButton(): void {

        crc2.save();
        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(550, 680);
        crc2.bezierCurveTo(470, 650, 550, 600, 550, 640);
        crc2.stroke();
        crc2.moveTo(550, 680);
        crc2.bezierCurveTo(630, 650, 550, 600, 550, 640);
        crc2.fillStyle = "White";
        crc2.fill();
        crc2.save();
        crc2.stroke();
        // console.log("Heart");

    }

    let xButton6: number = 650;
    let yButton6: number = 635;
    let wButton6: number = 150;
    let hButton6: number = 30;

    function drawStopmoveButton(): void {
        crc2.save();
        crc2.restore();
        crc2.font = "25px Arial";
        crc2.fillStyle = "white";
        crc2.fillText("SAVE POS", 650, 660);
        crc2.restore();
    }




    function handleMousedown(_client: MouseEvent): void {

        let isLeftClicked = _client.button == 0;
        if (!isLeftClicked) return;


        // window.removeEventListener("mousedown", handleMousemoveTriangle);
        // window.removeEventListener("mousedown", handleMousemoveObject);


        if (_client.offsetX > xButton1 &&
            _client.offsetX < xButton1 + wButton1 &&
            _client.offsetY > yButton1 &&
            _client.offsetY < yButton1 + hButton1) {

            let rectangle = new Rectangle(_client.offsetX, _client.offsetY);
            currentRectangle = rectangle;
            rectangleArray.push(rectangle);
            
            handleMousemoveObject(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveObject);

        }


        if (_client.offsetX > xButton2 &&
            _client.offsetX < xButton2 + wButton2 &&
            _client.offsetY > yButton2 &&
            _client.offsetY < yButton2 + hButton2) {

            let triangle = new Triangle(_client.offsetX, _client.offsetX);
            currentTriangle = triangle;
            triangleArray.push(triangle);


            handleMousemoveTriangle(_client);

            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveTriangle);

        }

        if (_client.offsetX > xButton3 &&
            _client.offsetX < xButton3 + wButton3 &&
            _client.offsetY > yButton3 &&
            _client.offsetY < yButton3 + hButton3) {

            let circle = new Circle(_client.offsetX, _client.offsetY);
            currentCircle = circle;
            circleArray.push(circle);

            handleMousemoveCircle(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveCircle);
            // console.log("hit3");
        }

        if (_client.offsetX > xButton4 &&
            _client.offsetX < xButton4 + wButton4 &&
            _client.offsetY > yButton4 &&
            _client.offsetY < yButton4 + hButton4) {

            let wdrop = new Wdrop(_client.offsetX, _client.offsetY);
            currentWdrop = wdrop;
            wdropArray.push(wdrop);

            handleMousemoveWdrop(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveWdrop);

            // console.log("hit4");
        }

        if (_client.offsetX > xButton5 &&
            _client.offsetX < xButton5 + wButton5 &&
            _client.offsetY > yButton5 &&
            _client.offsetY < yButton5 + hButton5) {

            let heart = new Heart(_client.offsetX, _client.offsetY);
            currentHeart = heart;
            heartArray.push(heart);

            handleMousemoveHeart(_client);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveHeart);

            // console.log("hit5");
        }



        if (_client.offsetX > xButton6 &&
            _client.offsetX < xButton6 + wButton6 &&
            _client.offsetY > yButton6 &&
            _client.offsetY < yButton6 + hButton6) {
            
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

        for (let rectangle of rectangleArray) {

            if (
                _client.offsetX > rectangle.x - rectangle.w / 2 &&
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
                currentRectangle = rectangle;
                dragged = true;
                recArrayPos = rectangleArray.indexOf(currentRectangle);


            }



        }

        for (let triangle of triangleArray) {

            if (
                _client.offsetX > triangle.x - triangle.w / 2 &&
                _client.offsetX < triangle.x + triangle.w / 2 &&
                _client.offsetY > triangle.y - triangle.h / 2 &&
                _client.offsetY < triangle.y + triangle.h / 2) {

                window.addEventListener("mousemove", handleMousemoveTriangle);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveObject);
                window.removeEventListener("mousedown", handleMousemoveCircle);
                window.removeEventListener("mousedown", handleMousemoveWdrop);
                window.removeEventListener("mousedown", handleMousemoveHeart);

                currentTriangle = triangle;
                trianglePresent = true;
                dragged = true;
                triArrayPos = triangleArray.indexOf(currentTriangle);


            }
        }

        for (let circle of circleArray) {

            if (
                _client.offsetX > circle.x - circle.w / 2 &&
                _client.offsetX < circle.x + circle.w / 2 &&
                _client.offsetY > circle.y - circle.h / 2 &&
                _client.offsetY < circle.y + circle.h / 2) {

                window.addEventListener("mousedown", handleMousemoveCircle);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveObject);
                window.removeEventListener("mousedown", handleMousemoveTriangle);
                window.removeEventListener("mousedown", handleMousemoveWdrop);
                window.removeEventListener("mousedown", handleMousemoveHeart);

                currentCircle = circle;
                circlePresent = true;
                dragged = true;
                cirArrayPos = circleArray.indexOf(currentCircle);


            }
        }

        for (let wdrop of wdropArray) {

            if (
                _client.offsetX > wdrop.x - wdrop.w / 2 &&
                _client.offsetX < wdrop.x + wdrop.w / 2 &&
                _client.offsetY > wdrop.y - wdrop.h / 2 &&
                _client.offsetY < wdrop.y + wdrop.h / 2) {

                window.addEventListener("mousedown", handleMousemoveWdrop);
                window.addEventListener("mouseup", handleMouseup);
                window.removeEventListener("mousedown", handleMousemoveObject);
                window.removeEventListener("mousedown", handleMousemoveTriangle);
                window.removeEventListener("mousedown", handleMousemoveCircle);
                window.removeEventListener("mousedown", handleMousemoveHeart);

                
                currentWdrop = wdrop;
                wdropPresent = true;
                dragged = true;
                wdrArrayPos = wdropArray.indexOf(currentWdrop);

            }
        }

        for (let heart of heartArray) {

            if (
                _client.offsetX > heart.x - heart.w / 2 &&
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

                currentHeart = heart;
                heartPresent = true;
                dragged = true;
                heaArrayPos = heartArray.indexOf(currentHeart);


            }
        }
    }



    export function handleMousemoveObject(_client: MouseEvent): void {
        currentRectangle.x = _client.offsetX;
        currentRectangle.y = _client.offsetY;
        dragged = true;
        window.addEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveHeart);
    }

    export function handleMousemoveTriangle(_client: MouseEvent): void {
        currentTriangle.x = _client.offsetX;
        currentTriangle.y = _client.offsetY;

        dragged = true;

        window.addEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveHeart);
    }

    export function handleMousemoveCircle(_client: MouseEvent): void {
        currentCircle.x = _client.offsetX;
        currentCircle.y = _client.offsetY;

        dragged = true;

        window.addEventListener("mousedown", handleMousemoveCircle);
        window.removeEventListener("mousedown", handleMousemoveObject);
        window.removeEventListener("mousedown", handleMousemoveTriangle);
        window.removeEventListener("mousedown", handleMousemoveWdrop);
        window.removeEventListener("mousedown", handleMousemoveHeart);
    }

    export function handleMousemoveWdrop(_client: MouseEvent): void {
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

    export function handleMousemoveHeart(_client: MouseEvent): void {
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



    export function deleteObject(): void {


        if (rectanglePresent == true) {
            rectangleArray.splice(recArrayPos, 1);
            // console.log("izzda");
        }

        if (trianglePresent == true) {
            triangleArray.splice(triArrayPos, 1);

        }

        if (circlePresent == true) {
            circleArray.splice(cirArrayPos, 1);
        }

        if (wdropPresent == true) {
            wdropArray.splice(wdrArrayPos, 1);
        }

        if (heartPresent == true) {
            heartArray.splice(heaArrayPos, 1);
        }
    }



    function handleMouseup(_client: MouseEvent): void {
        dragged = true;

        for (let currentRectangle of rectangleArray) {
            currentRectangle.draw2();

            window.addEventListener("mousedown", handleMousemoveObject);
        }

        for (let currentTriangle of triangleArray) {
            currentTriangle.draw2();

            window.addEventListener("mousedown", handleMousemoveTriangle);
        }

        for (let currentCircle of circleArray) {
            currentCircle.draw2();

            window.addEventListener("mousedown", handleMousemoveCircle);
        }

        for (let currentWdrop of wdropArray) {
            currentWdrop.draw2();

            window.addEventListener("mousedown", handleMousemoveWdrop);
        }

        for (let currentHeart of heartArray) {
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
    

}