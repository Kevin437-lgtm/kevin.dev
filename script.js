// Interactivity Script for Developer Portfolio

// Simple form handling to prevent default reload for the template
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Sending...';
    btn.style.opacity = '0.8';
    
    // Simulate network request
    setTimeout(() => {
        alert('Message sent successfully! (This is a frontend demo)');
        this.reset();
        btn.innerText = originalText;
        btn.style.opacity = '1';
    }, 1000);
});