import {Rectangle} from "./Rectangle";
import {IDrawable} from "../interfaces/IDrawable";
import {ISquare} from "../interfaces/shapes/ISquare";

export class Square extends Rectangle implements ISquare, IDrawable {
    public readonly size: number;

    constructor(square: ISquare) {
        super({ctx: square.ctx, origine: square.origine, color: square.color, width: square.size, height: square.size});
        this.size = square.size;
    }

}