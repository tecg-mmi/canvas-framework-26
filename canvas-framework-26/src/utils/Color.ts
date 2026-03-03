export class Color {
    private r: number;
    private g: number;
    private b: number;
    private a: number;

    constructor(r: number, g: number, b: number, a: number = 1) {
        this.r = this.clamp(r, 0, 255);
        this.g = this.clamp(g, 0, 255);
        this.b = this.clamp(b, 0, 255);
        this.a = this.clamp(a, 0, 1);
    }

    private clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, value));
    }

    public toRGBA(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    public toHex(): string {
        const rHex = this.r.toString(16).padStart(2, '0');
        const gHex = this.g.toString(16).padStart(2, '0');
        const bHex = this.b.toString(16).padStart(2, '0');
        return `#${rHex}${gHex}${bHex}`;
    }

    public static fromHex(hex: string): Color {
        const bigint = parseInt(hex.replace('#', ''), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return new Color(r, g, b);
    }

    public static fromRGBA(r: number, g: number, b: number, a: number = 1): Color {
        return new Color(r, g, b, a);
    }
}