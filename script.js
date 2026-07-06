// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal exhibits on scroll
const revealTargets = document.querySelectorAll('.exhibit, .contact');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
