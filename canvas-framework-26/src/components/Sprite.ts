export class Sprite {
    private image: HTMLImageElement;
    private width: number;
    private height: number;
    private frameCount: number;
    private currentFrame: number;
    private animationSpeed: number;
    private lastFrameTime: number;

    constructor(imageSrc: string, frameCount: number, animationSpeed: number) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.frameCount = frameCount;
        this.animationSpeed = animationSpeed;
        this.currentFrame = 0;
        this.lastFrameTime = 0;
        this.width = 0;
        this.height = 0;

        this.image.onload = () => {
            this.width = this.image.width / this.frameCount;
            this.height = this.image.height;
        };
    }

    public draw(ctx: CanvasRenderingContext2D, x: number, y: number, deltaTime: number): void {
        if (this.image.complete) {
            this.updateAnimation(deltaTime);
            ctx.drawImage(
                this.image,
                this.currentFrame * this.width,
                0,
                this.width,
                this.height,
                x,
                y,
                this.width,
                this.height
            );
        }
    }

    private updateAnimation(deltaTime: number): void {
        this.lastFrameTime += deltaTime;

        if (this.lastFrameTime >= this.animationSpeed) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;
            this.lastFrameTime = 0;
        }
    }
}