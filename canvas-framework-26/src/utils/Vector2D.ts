export class Vector2D {
    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public add(vector: Vector2D): Vector2D {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }

    public subtract(vector: Vector2D): Vector2D {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }

    public scale(scalar: number): Vector2D {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }

    public normalize(): Vector2D {
        const length = this.length();
        if (length === 0) {
            return new Vector2D(0, 0);
        }
        return new Vector2D(this.x / length, this.y / length);
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public dot(vector: Vector2D): number {
        return this.x * vector.x + this.y * vector.y;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}