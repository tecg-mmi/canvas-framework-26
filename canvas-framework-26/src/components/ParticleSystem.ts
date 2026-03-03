export class Particle {
    position: Vector2D;
    velocity: Vector2D;
    lifespan: number;
    color: Color;

    constructor(position: Vector2D, velocity: Vector2D, lifespan: number, color: Color) {
        this.position = position;
        this.velocity = velocity;
        this.lifespan = lifespan;
        this.color = color;
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifespan -= 1;
    }

    isAlive(): boolean {
        return this.lifespan > 0;
    }
}

export class ParticleSystem {
    particles: Particle[];
    emissionRate: number;
    maxParticles: number;

    constructor(emissionRate: number, maxParticles: number) {
        this.particles = [];
        this.emissionRate = emissionRate;
        this.maxParticles = maxParticles;
    }

    emit(position: Vector2D, velocity: Vector2D, lifespan: number, color: Color) {
        if (this.particles.length < this.maxParticles) {
            const particle = new Particle(position, velocity, lifespan, color);
            this.particles.push(particle);
        }
    }

    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.update();
            if (!particle.isAlive()) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw(context: CanvasRenderingContext2D) {
        for (const particle of this.particles) {
            context.fillStyle = particle.color.toString();
            context.beginPath();
            context.arc(particle.position.x, particle.position.y, 2, 0, Math.PI * 2);
            context.fill();
        }
    }
}