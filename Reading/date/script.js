"use strict";

const starSignDates = {
  Aries: {
    start: { month: "March", day: 21 },
    end: { month: "April", day: 19 },
  },
  Taurus: {
    start: { month: "April", day: 20 },
    end: { month: "May", day: 20 },
  },
  Gemini: { start: { month: "May", day: 21 }, end: { month: "June", day: 20 } },
  Cancer: {
    start: { month: "June", day: 21 },
    end: { month: "July", day: 22 },
  },
  Leo: { start: { month: "July", day: 23 }, end: { month: "August", day: 22 } },
  Virgo: {
    start: { month: "August", day: 23 },
    end: { month: "September", day: 22 },
  },
  Libra: {
    start: { month: "September", day: 23 },
    end: { month: "October", day: 22 },
  },
  Scorpio: {
    start: { month: "October", day: 23 },
    end: { month: "November", day: 21 },
  },
  Sagittarius: {
    start: { month: "November", day: 22 },
    end: { month: "December", day: 21 },
  },
  Capricorn: {
    start: { month: "December", day: 22 },
    end: { month: "January", day: 19 },
  },
  Aquarius: {
    start: { month: "January", day: 20 },
    end: { month: "February", day: 18 },
  },
  Pisces: {
    start: { month: "February", day: 19 },
    end: { month: "March", day: 20 },
  },
};

let starSign = null;
let dateRanges = [];
let selectedDate = null;
let selectedMonth = null;

document.addEventListener("DOMContentLoaded", function () {
  const headline = document.getElementById("headline");
  headline.innerHTML = "<h1>Select Your Birth Date</h1>";

  const mainContainer = document.querySelector(".main-container");

  // Populate dateRanges (similar to useEffect in React)
  const storedStarSign = localStorage.getItem("star-sign");
  if (storedStarSign) {
    starSign = storedStarSign;
    dateRanges = getDateRangesForSign(storedStarSign);
    populateDateSections();
  }

  // Function to get date ranges for a star sign
  function getDateRangesForSign(sign) {
    const { start, end } = starSignDates[sign];
    let ranges = [];

    if (start.month === end.month) {
      ranges.push({
        month: start.month,
        start: start.day,
        end: end.day,
      });
    } else {
      ranges.push({
        month: start.month,
        start: start.day,
        end: 31,
      });
      ranges.push({
        month: end.month,
        start: 1,
        end: end.day,
      });
    }

    return ranges;
  }

  // Function to populate date sections dynamically
  function populateDateSections() {
    dateRanges.forEach((range, index) => {
      const monthSection = document.createElement("div");
      monthSection.className = "month-section";

      const monthDiv = document.createElement("div");
      monthDiv.id = "month";
      monthDiv.innerHTML = `<h3>${range.month}</h3>`;
      monthSection.appendChild(monthDiv);

      const dateGrid = document.createElement("div");
      dateGrid.className = "date-grid";

      for (let i = range.start; i <= range.end; i++) {
        const dateCol = document.createElement("div");
        dateCol.className = "col";
        dateCol.id = "date-grid-col";
        dateCol.innerHTML = `<p>${i.toString().padStart(2, "0")}</p>`;

        dateCol.addEventListener("click", function () {
          handleDateSelect(range.month, i);
        });

        if (selectedDate === i && selectedMonth === range.month) {
          dateCol.classList.add("selected");
        }

        dateGrid.appendChild(dateCol);
      }

      monthSection.appendChild(dateGrid);
      mainContainer.appendChild(monthSection);
    });
  }

  // Function to handle date selection
  function handleDateSelect(month, date) {
    selectedMonth = month;
    selectedDate = date;
    localStorage.setItem("selected-date", selectedDate.toString());
    localStorage.setItem("selected-month", selectedMonth);
    console.log("Attempting to navigate to /decade");
    window.location.href = "/decade";
    // Simulating router push
    // router.push("/decade");
  }
});

// Dummy useRouter implementation
const useRouter = {
  push: function (url) {
    console.log("Mock router push to", url);
    // Implement actual navigation logic here
  },
};
