export type Vector2D = {
    x: number;
    y: number;
};

export interface Shape {
    position: Vector2D;
    size: number;
    color: string;
    draw(): void;
}

export interface Sprite {
    image: HTMLImageElement;
    position: Vector2D;
    draw(): void;
    update(): void;
}

export interface Particle {
    position: Vector2D;
    velocity: Vector2D;
    lifespan: number;
    update(): void;
    draw(): void;
}

export interface ParticleSystem {
    particles: Particle[];
    createParticle(position: Vector2D): void;
    update(): void;
    draw(): void;
}

export interface Animation {
    start(): void;
    stop(): void;
    update(): void;
}