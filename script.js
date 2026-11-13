function lluviaDeDulces() {
    const dulces = ['🍬', '🍭', '🍫', '🎃', '💀', '🧁', '👻'];
    const cantidad = 35; // Cantidad de dulces que caen al hacer clic

    for (let i = 0; i < cantidad; i++) {
        const dulce = document.createElement('div');
        dulce.classList.add('dulce');
        dulce.innerText = dulces[Math.floor(Math.random() * dulces.length)];
        
        // Posición horizontal aleatoria
        dulce.style.left = Math.random() * 100 + 'vw';
        
        // Velocidad y caída aleatoria
        const duracion = Math.random() * 2 + 2; // Entre 2 y 4 segundos
        dulce.style.animationDuration = duracion + 's';
        dulce.style.animationDelay = Math.random() * 0.5 + 's';
        
        // Tamaños variados
        dulce.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';

        document.body.appendChild(dulce);

        // Borrar el dulce cuando termine de caer
        setTimeout(() => {
            dulce.remove();
        }, (duracion + 0.6) * 1000);
    }
}
