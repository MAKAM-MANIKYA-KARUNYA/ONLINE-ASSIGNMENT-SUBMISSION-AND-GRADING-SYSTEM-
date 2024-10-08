let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Welcome to EDU GRADE SYSTEM all grades are under one roof " + userName;

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
