document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for nav links
  document.querySelectorAll('#myNavbar a.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const hash = this.getAttribute('href');
      const target = document.querySelector(hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 56, // account for navbar height
          behavior: 'smooth'
        });
        history.pushState(null, null, hash);
      }
    });
  });

  // typed.js initialization (v2.x API)
  if (document.querySelector('.typed')) {
    new Typed('.typed', {
      strings: ["developer.", "designer.", "enthusiast."],
      typeSpeed: 100,
      startDelay: 1200,
      backSpeed: 50,
      backDelay: 800,
      loop: true,
      showCursor: false,
      contentType: 'html',
    });
  }
});