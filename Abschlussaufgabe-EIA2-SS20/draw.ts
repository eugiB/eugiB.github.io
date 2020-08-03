namespace PaintEIA2 {

export class Draw {

public x: number;
public y: number;
public xSpeed: number;
public ySpeed: number;



move(): void {
//
}


update(): void {
    //
}

draw2(): void {
    //
}

animate(): void {
    //
}

delete(): void{
    //
}

public set(_x: number, _y: number): void {
    this.x = _x;
    this.y = _y;
}

public constructor(_x: number, _y: number) {
    this.set(_x, _y);

}

public scale(_factor: number): void {
    this.x *= _factor;
    this.y *= _factor;

}

public add (_addend: Draw): void {
    this.x += _addend.x;
    this.y += _addend.y;
}


}

}