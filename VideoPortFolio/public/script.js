// Scroll reveal without library (extra smooth)
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < trigger) {
            section.classList.add('show');
        }
    });
});