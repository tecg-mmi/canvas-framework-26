// src/index.ts

import { Canvas } from './core/Canvas';
import { Renderer } from './core/Renderer';
import { Animation } from './core/Animation';
import { Shape } from './components/Shape';
import { Sprite } from './components/Sprite';
import { ParticleSystem } from './components/ParticleSystem';

// Initialisation du canevas
const canvas = new Canvas();
const renderer = new Renderer(canvas.getContext());
const animation = new Animation();

// Exemple de création d'une forme
const shape = new Shape(50, 50, 100, 100, 'red');
renderer.add(shape);

// Exemple de création d'un sprite
const sprite = new Sprite('path/to/image.png');
renderer.add(sprite);

// Exemple de système de particules
const particleSystem = new ParticleSystem();
renderer.add(particleSystem);

// Démarrer l'animation
animation.start(() => {
    renderer.render();
});

// Gestion des événements
canvas.onResize(() => {
    renderer.resize(canvas.width, canvas.height);
});

canvas.onClick((event) => {
    // Logique de gestion des clics
});

// Démarrer le rendu
renderer.start();