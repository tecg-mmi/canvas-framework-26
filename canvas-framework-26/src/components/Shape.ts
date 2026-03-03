export class Shape {
    private position: { x: number; y: number };
    private size: { width: number; height: number };
    private color: string;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.position = { x, y };
        this.size = { width, height };
        this.color = color;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }

    public setPosition(x: number, y: number): void {
        this.position = { x, y };
    }

    public setSize(width: number, height: number): void {
        this.size = { width, height };
    }

    public setColor(color: string): void {
        this.color = color;
    }
}