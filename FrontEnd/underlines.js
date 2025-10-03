document.addEventListener("DOMContentLoaded", function () {
  const features = document.querySelectorAll(".feature");
  const underline = document.querySelector(".main-title .underline");

  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, {
    threshold: 0.2
  });

  features.forEach(feature => featureObserver.observe(feature));

  // Observe the features section to trigger underline animation
  const featuresSection = document.querySelector(".features-section");
  const underlineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        underline.classList.add("in-view");
        // underlineObserver.unobserve(entry.target); // uncomment to run only once
      }
    });
  }, {
    threshold: 0.2
  });

  underlineObserver.observe(featuresSection);
});
