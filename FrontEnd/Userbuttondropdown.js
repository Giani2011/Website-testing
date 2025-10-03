document.addEventListener("DOMContentLoaded", () => {
  const userBtn = document.querySelector(".user-btn");
  const userMenu = document.querySelector(".user-menu");
  const dropdown = userMenu.querySelector(".dropdown");

  // --- Mock "authentication" state ---
  // Later, replace with real login check (cookies, JWT, API, etc.)
  let isLoggedIn = false;

  // Populate dropdown depending on login state
  function renderMenu() {
    dropdown.innerHTML = ""; // clear old items

    if (isLoggedIn) {
      dropdown.innerHTML = `
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#" id="logout-link">Logout</a></li>
      `;
    } else {
      dropdown.innerHTML = `
        <li><a href="log in-sign up.html#signup">Sign Up</a></li>
        <li><a href="log in-sign up.html#login">Log In</a></li>
      `;
    }
  }

  renderMenu();

  // Toggle dropdown open/close
  userBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    userMenu.classList.toggle("open");
    userBtn.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!userMenu.contains(e.target)) {
      userMenu.classList.remove("open");
      userBtn.classList.remove("active");
    }
  });

  // Example handlers for demo purposes
  dropdown.addEventListener("click", (e) => {
    if (e.target.id === "logout-link") {
      isLoggedIn = false;
      renderMenu();
      alert("User logged out (demo)");
    }
  });
});
