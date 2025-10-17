document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const errorBox = document.createElement("div");
  errorBox.classList.add("error-box");
  errorBox.style.display = "none";
  errorBox.style.color = "#fff";
  errorBox.style.background = "#ff4d4f";
  errorBox.style.padding = "10px";
  errorBox.style.borderRadius = "6px";
  errorBox.style.marginBottom = "10px";
  errorBox.style.textAlign = "center";
  errorBox.style.fontWeight = "500";
  form.prepend(errorBox);

  const admin = {
    email: "admin@example.com",
    password: "123456",
    role: "admin",
  };

  const user = {
    email: "user@example.com",
    password: "123456",
    role: "user",
  };

  function showError(message) {
    errorBox.textContent = "⚠️ " + message;
    errorBox.style.display = "block";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === admin.email && password === admin.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", admin.role);
      window.location.href = "admin.html";
    } else if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", user.role);
      window.location.href = "home.html";
    } else {
      showError("Email hoặc mật khẩu không đúng!");
    }
  });
});
