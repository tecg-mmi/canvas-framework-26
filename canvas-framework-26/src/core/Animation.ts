export class Animation {
    private animations: Map<string, () => void>;
    private isAnimating: boolean;

    constructor() {
        this.animations = new Map();
        this.isAnimating = false;
    }

    public start(animationName: string, animationFunction: () => void): void {
        this.animations.set(animationName, animationFunction);
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.update();
        }
    }

    public stop(animationName: string): void {
        this.animations.delete(animationName);
        if (this.animations.size === 0) {
            this.isAnimating = false;
        }
    }

    private update(): void {
        if (!this.isAnimating) return;

        this.animations.forEach(animationFunction => animationFunction());
        requestAnimationFrame(() => this.update());
    }
}