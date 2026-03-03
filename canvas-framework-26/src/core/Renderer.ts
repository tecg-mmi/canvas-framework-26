export class Renderer {
    private context: CanvasRenderingContext2D;

    constructor(private canvas: HTMLCanvasElement) {
        this.context = canvas.getContext('2d');
    }

    public clear(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawShape(shape: any): void {
        // Implementation for drawing shapes
        this.context.fillStyle = shape.color;
        this.context.beginPath();
        this.context.arc(shape.position.x, shape.position.y, shape.size, 0, Math.PI * 2);
        this.context.fill();
    }

    public drawSprite(sprite: any): void {
        // Implementation for drawing sprites
        const image = new Image();
        image.src = sprite.imageSrc;
        image.onload = () => {
            this.context.drawImage(image, sprite.position.x, sprite.position.y);
        };
    }

    public render(objects: any[]): void {
        this.clear();
        objects.forEach(object => {
            if (object.type === 'shape') {
                this.drawShape(object);
            } else if (object.type === 'sprite') {
                this.drawSprite(object);
            }
        });
    }
}