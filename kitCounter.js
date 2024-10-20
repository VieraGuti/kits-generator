// kitCounter.js

let kitCount = localStorage.getItem('kitCount') ? parseInt(localStorage.getItem('kitCount')) : 0; 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('kitCounter').innerText = kitCount; 

    
    window.incrementKitCounter = function() {
        kitCount++;
        localStorage.setItem('kitCount', kitCount); 
        document.getElementById('kitCounter').innerText = kitCount; 
    };
});
