document.addEventListener("DOMContentLoaded", function () {
  const hourSelect = document.getElementById("hour");
  const minuteSelect = document.getElementById("minute");
  const form = document.getElementById("birthTimeForm");

  // Populate hour options
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    hourSelect.appendChild(option);
  }

  // Populate minute options
  for (let i = 0; i < 60; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i < 10 ? `0${i}` : i;
    minuteSelect.appendChild(option);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const hour = hourSelect.value;
    const minute = minuteSelect.value;
    const ampm = document.getElementById("ampm").value;

    if (hour && minute && ampm) {
      const selectedTime = `${hour}:${minute}:${ampm}`;
      localStorage.setItem("selected-time", selectedTime);
      window.location.href = "/Reading/location";
    } else {
      alert("Please select all time fields");
    }
  });
});
