export class Canvas {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(width: number, height: number) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d')!;
        document.body.appendChild(this.canvas);
    }

    public clear(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawShape(shape: any): void {
        // Implementation for drawing shapes
    }

    public on(event: string, handler: (event: Event) => void): void {
        this.canvas.addEventListener(event, handler);
    }

    public off(event: string, handler: (event: Event) => void): void {
        this.canvas.removeEventListener(event, handler);
    }

    public getCanvasElement(): HTMLCanvasElement {
        return this.canvas;
    }
}