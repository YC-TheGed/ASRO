window.addEventListener("load", function () {
  const welcome = document.getElementById("pw");
  const firstname = localStorage.getItem("firstname");

  if (firstname) {
    welcome.textContent = `Welcome, ${firstname}!`;
  } else {
    welcome.textContent = `Welcome, You Made It!`;
  }
});
