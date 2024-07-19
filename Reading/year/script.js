document.addEventListener("DOMContentLoaded", function () {
  let selectedYear = null;
  let decadeStart = null;

  function init() {
    const decade = localStorage.getItem("selected-decade");
    if (decade) {
      decadeStart = parseInt(decade, 10);
      renderYears();
    } else {
      // Handle the case where no decade was selected
      window.location.href = "/Reading/decade";
    }
  }

  function renderYears() {
    const yearGrid = document.getElementById("yearGrid");
    yearGrid.innerHTML = "";

    for (let year = decadeStart; year < decadeStart + 10; year++) {
      const button = document.createElement("button");
      button.textContent = year;
      button.className = "year-button";
      button.addEventListener("click", () => selectYear(year));
      yearGrid.appendChild(button);
    }
  }

  function selectYear(year) {
    selectedYear = year;
    localStorage.setItem("selected-year", year.toString());

    // Update button styles
    document.querySelectorAll(".year-button").forEach((btn) => {
      btn.classList.toggle("selected", parseInt(btn.textContent) === year);
    });

    // Navigate to next page
    setTimeout(() => {
      window.location.href = "/Reading/birth-time";
    }, 300);
  }

  init();
});
