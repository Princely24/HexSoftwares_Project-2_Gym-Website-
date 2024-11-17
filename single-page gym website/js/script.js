   // Smooth scrolling for navigation links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background color change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section:not(.hero)');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

  // Add dynamic shape creation
  function createShapes() {
    const shapesContainer = document.querySelector('.floating-shapes');
    const shapeCount = 10;

    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        const size = Math.random() * 60 + 20;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;

        shape.style.cssText = `
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            animation-delay: ${delay}s;
        `;

        shapesContainer.appendChild(shape);
    }
}

// Call function on load
window.addEventListener('load', createShapes);

// Add parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const heroContent = document.querySelector('.hero-content');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    
    heroContent.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});