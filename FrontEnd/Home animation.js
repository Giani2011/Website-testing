
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe each home-section element
  document.querySelectorAll(".home-content h1, .home-content p, .home-buttons, .home-image img")
    .forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const underlineText = document.querySelector(".underline-animate");
  let triggered = false;

  if (underlineText) {
    window.addEventListener("scroll", () => {
      if (!triggered && window.scrollY > 0) {
        underlineText.classList.add("show");
        triggered = true; // ensure it only happens once
      }
    });
  }
});
