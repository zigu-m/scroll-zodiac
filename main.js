document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    const images = document.querySelectorAll('.image');
    const spans = document.querySelectorAll('span');
  
    images.forEach(img => observer.observe(img));
    spans.forEach(span => observer.observe(span));
  });
  