import {Shape} from "./Shape";
import {IDrawable} from "../interfaces/IDrawable";
import {IRectangle} from "../interfaces/shapes/IRectangle";

export class Rectangle extends Shape implements IRectangle, IDrawable {
    public readonly width: number;
    public readonly height: number;

    constructor(rectangle: IRectangle) {
        super({ctx: rectangle.ctx, origine: rectangle.origine, color: rectangle.color, rotation: rectangle.rotation, stroke: rectangle.stroke});
        this.width = rectangle.width;
        this.height = rectangle.height;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.origine.x, this.origine.y);
        this.ctx.rotate(this.rotation);
        this.ctx.beginPath();
        this.ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
       this.fillAndStroke();
        this.ctx.restore();
    }
}