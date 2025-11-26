// Script to handle any future interactivity
console.log("App initialized");

// Optional: Add some simple entrance animations or logic if needed
document.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('.glass-panel');
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(20px)';

    setTimeout(() => {
        panel.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0)';
    }, 100);
});
