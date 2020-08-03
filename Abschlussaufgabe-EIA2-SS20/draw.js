var PaintEIA2;
(function (PaintEIA2) {
    class Draw {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        move() {
            //
        }
        update() {
            //
        }
        draw2() {
            //
        }
        animate() {
            //
        }
        delete() {
            //
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    PaintEIA2.Draw = Draw;
})(PaintEIA2 || (PaintEIA2 = {}));
//# sourceMappingURL=draw.js.map