namespace PaintEIA2 {

    window.addEventListener("load", handleLoad);
    window.addEventListener("mouseup", handleMouseup);
    window.addEventListener("mousedown", handleMousedown);
    window.addEventListener("mousedown", handleMousemoveObject);
    window.addEventListener("mousedown", handleMousemoveTriangle);
    // window.addEventListener("mouseup", handleMouseupMove);


    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let img: ImageData;
    // export let diff: Draw;
    let widthSlider: HTMLInputElement;
    let heightSlider: HTMLInputElement;
    let yourColor: HTMLInputElement;
    export let width: number;
    export let height: number;
    let currentRectangle: Rectangle;
    let rectanglePresent: boolean = false;
    let currentTriangle: Triangle;
    let trianglePresent: boolean = false;
    let dragged: boolean = false;
    export let triangleArray: Triangle[] = [];
    export let rectangleArray: Rectangle[] = [];



    export function handleLoad(_event: Event): void {

        document.getElementById("restart").addEventListener("click", reloadPage);
        document.getElementById("deleteObj").addEventListener("click", deleteObject);
        // document.getElementById("smallPicture").addEventListener("click", drawBackground);
        // document.getElementById("mediumPicture").addEventListener("click", drawBackground);
        widthSlider = document.getElementById("widthSlider") as HTMLInputElement;
        heightSlider = document.getElementById("heightSlider") as HTMLInputElement;
        yourColor = document.getElementById("yourColor") as HTMLInputElement;
        widthSlider.addEventListener("change", drawBackground);
        heightSlider.addEventListener("change", drawBackground);
        yourColor.addEventListener("change", drawBackground);

        canvas = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        window.requestAnimationFrame(update);


        setInterval(update, 60);
        setInterval(clearCanvas, 1);


        // console.log(dragged);
        img = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }



    function reloadPage(): void {
        location.reload();
    }



    function update(): void {
        crc2.clearRect(0, 0, width, height);
        drawBackground();

        if (rectangleArray) {
            for (let rectangle: number = 0; rectangle < rectangleArray.length; rectangle++) {
                rectangleArray[rectangle].draw2();
            }
        }
        if (triangleArray) {
            for (let triangle: number = 0; triangle < triangleArray.length; triangle++) {
                triangleArray[triangle].draw2();
            }
        }

    }

    function clearCanvas(): void {
        let xCanvas: number = 0 + width;
        let yCanvas: number = 0 + height;

        crc2.save();
        crc2.clearRect(xCanvas, 0, 1000 - xCanvas, 600);
        crc2.clearRect(0, height, 1000, 600 - yCanvas);

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


    function drawUI(): void {
        crc2.save();
        crc2.restore();

        crc2.fillStyle = "grey";
        crc2.fillRect(0, 600, 1000, 100);
        crc2.save();

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
        crc2.closePath();
        crc2.save();

        crc2.beginPath();
        crc2.arc(310, 650, 30, 0, 2 * Math.PI);
        crc2.stroke();
        // console.log("Circle");
    }


    let xButton4: number = 390;
    let yButton4: number = 610;
    let wButton4: number = 100;
    let hButton4: number = 80;


    function drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number): void {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;
        var i = 0;

        crc2.beginPath();
        crc2.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            crc2.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            crc2.lineTo(x, y);
            rot += step;
        }

        crc2.lineTo(cx, cy - outerRadius);
        crc2.closePath();
        crc2.lineWidth = 1;
        crc2.strokeStyle = "White";
        crc2.stroke();
        // console.log("Star");

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

            let rectangleDraw = new Draw(0, 0);
            let rectangle = new Rectangle(0, rectangleDraw);
            currentRectangle = rectangle;
            rectangleArray.push(rectangle);

            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("mousemove", handleMousemoveObject);


        }




        if (_client.offsetX > xButton2 &&
            _client.offsetX < xButton2 + wButton2 &&
            _client.offsetY > yButton2 &&
            _client.offsetY < yButton2 + hButton2) {

            let triangleDraw = new Draw(0, 0);
            let triangle = new Triangle(0, triangleDraw);
            triangleArray.push(triangle);


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

        for (let rectangle of rectangleArray) {

            if (
                rectanglePresent == true &&
                _client.offsetX > rectangle.position.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.position.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.position.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.position.y + rectangle.h / 2) {



                window.addEventListener("mousedown", handleMousemoveObject);

                currentRectangle = rectangle;
                dragged = true;


            }



        }

        for (let triangle of triangleArray) {

            if (
                trianglePresent == true &&
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



    export function handleMousemoveObject(_client: MouseEvent): void {


            currentRectangle.position.x = _client.offsetX;
            currentRectangle.position.y = _client.offsetY;

            dragged = true;
        

    }

    export function handleMousemoveTriangle(_client: MouseEvent): void {
            currentTriangle.position.x = _client.offsetX;
            currentTriangle.position.y = _client.offsetY;

            dragged = true;
        
    }



    export function deleteObject(): void {
        if (rectanglePresent == true) {
            rectangleArray.pop();
            console.log("izzda");
        }

        if (trianglePresent == true) {
            triangleArray.pop();
            
        }
    }



    function handleMouseup(_client: MouseEvent): void {

        window.addEventListener("mousedown", handleMousemoveObject);
        window.addEventListener("mousedown", handleMousemoveTriangle);

        dragged = true;
        if (dragged) {
            setTimeout(() => {
                dragged = false;
            }, 100);

        }

        for (let rectangle of rectangleArray) {
            currentRectangle = rectangle;
            // console.log("droppedsadwad");
            rectanglePresent = true;
            currentRectangle.draw2();

            
        }

        for (let triangle of triangleArray) {
            currentTriangle = triangle;
            trianglePresent = true;
            currentTriangle.draw2();

        }

        window.removeEventListener("mousemove", handleMousemoveObject);
        window.removeEventListener("mousemove", handleMousemoveTriangle);
        window.removeEventListener("mouseup", handleMouseup);

        dragged = false;

    }

}



