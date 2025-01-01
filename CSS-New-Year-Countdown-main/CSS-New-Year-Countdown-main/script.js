// Assign random colors to letters
let letters = document.querySelectorAll('h2 span');
letters.forEach(e => {
    e.style.color = `rgb(${Math.floor(255 * Math.random())}, 
                        ${Math.floor(255 * Math.random())}, 
                        ${Math.floor(255 * Math.random())})`;
});

// Trigger fireworks effect after countdown
setTimeout(() => {
    // Ensure jQuery and fireworks plugin are loaded
    if (typeof $ !== 'undefined' && $.fn.fireworks) {
        $('section').fireworks(); // Trigger fireworks
    } else {
        console.warn('Fireworks plugin not loaded.');
    }
}, 10000);
