// login.js - ĐÃ SỬA LỖI HIỆN/ẨN MẬP KHẨU
document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");
  toggleBtn.addEventListener("click", function () {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      passwordField.type = "password";
      toggleBtn.textContent = "Show";
    }
  });
});
