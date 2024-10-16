// kitCounter.js

let kitCount = localStorage.getItem('kitCount') ? parseInt(localStorage.getItem('kitCount')) : 0; // Inicializa el contador
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('kitCounter').innerText = kitCount; // Muestra el contador al cargar

    // Función para incrementar el contador
    window.incrementKitCounter = function() {
        kitCount++;
        localStorage.setItem('kitCount', kitCount); // Guarda el nuevo contador en localStorage
        document.getElementById('kitCounter').innerText = kitCount; // Actualiza el contador en la UI
    };
});
