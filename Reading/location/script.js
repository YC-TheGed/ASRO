document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("locationForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const location = {
      city: formData.get("city"),
      country: formData.get("country"),
    };

    localStorage.setItem(
      "selected-location",
      `${location.city}, ${location.country}`
    );

    // Simulate router push to /name
    console.log("Attempting to navigate to /name");
    window.location.href = "/name"; // Replace with your next page route
  });
});
