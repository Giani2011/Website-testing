// =======================
// Switch between forms
// =======================
document.getElementById("switch-to-login").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("signup-card").classList.remove("active");
  document.getElementById("login-card").classList.add("active");
});

document.getElementById("switch-to-signup").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("login-card").classList.remove("active");
  document.getElementById("signup-card").classList.add("active");
});

// =======================
// Signup function
// =======================
async function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Signup response:", data);

    if (data.id) {
      alert("Signup successful! You can now log in.");
      // Switch to login form
      document.getElementById("signup-card").classList.remove("active");
      document.getElementById("login-card").classList.add("active");
    } else {
      alert(data.error || "Signup failed.");
    }
  } catch (err) {
    console.error("Signup error:", err);
    alert("An error occurred during signup.");
  }
}

// =======================
// Login function
// =======================
async function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login response:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      // Redirect to Home page
      window.location.href = "Home.html";
    } else {
      alert(data.error || "Login failed.");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("An error occurred during login.");
  }
}

// =======================
// Optional: Toggle password visibility
// =======================
document.querySelectorAll(".toggle-password").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const targetId = toggle.getAttribute("data-target");
    const input = document.getElementById(targetId);

    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = "🙈";
    } else {
      input.type = "password";
      toggle.textContent = "👁️";
    }
  });
});
