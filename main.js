// Animación simple para mover las flores
document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');

    // Asignar una animación de movimiento diferente a cada flor
    flowers.forEach((flower, index) => {
        flower.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria
        flower.style.animationDelay = `${Math.random() * 3}s`; // Retraso aleatorio
    });
});
