document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("nameForm");
  const mainContent = document.getElementById("mainContent");
  const loadingSection = document.getElementById("loadingSection");
  const loadingMessage = document.getElementById("loadingMessage");
  const progressText = document.getElementById("progressText");
  const finalButton = document.getElementById("finalButton");

  const messages = [
    "Analyzing...",
    "Interpreting results...",
    "Your astrology reading is almost ready...",
    "Finalizing details...",
    "Your astrology reading has been answered",
  ];

  let progress = 0;
  let isComplete = false;
  let fadeIn = false;
  let loading = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = {
      first: formData.get("first"),
      last: formData.get("last"),
    };

    localStorage.setItem("first-name", name.first);
    localStorage.setItem("last-name", name.last);
    loading = true;

    // Hide form and show loading section
    mainContent.style.display = "none";
    loadingSection.style.display = "flex";

    const timer = setInterval(() => {
      progress += 1;
      if (progress >= 100) {
        clearInterval(timer);
        isComplete = true;
        fadeIn = true;
        progress = 100;
        loadingMessage.innerText = messages[messages.length - 1];
        finalButton.style.display = "block";
        finalButton.classList.add("fade-in");
      } else {
        const messageIndex = Math.floor((progress / 100) * messages.length);
        loadingMessage.innerText = messages[messageIndex];
      }
      progressText.innerText = `${progress}%`;
      document.querySelector(".progress-bar").style.width = `${progress}%`;
    }, 50); // Set a reasonable interval duration

    finalButton.addEventListener("click", () => {
      window.location.href = "/answer"; // Replace with your next page route
    });
  });
});
