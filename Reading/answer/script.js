// script.js
document.addEventListener("DOMContentLoaded", () => {
  const storedFirstName = localStorage.getItem("first-name");
  const storedStarSign = localStorage.getItem("star-sign");
  const storedYear = localStorage.getItem("selected-year");
  const storedMonth = localStorage.getItem("selected-month");
  const storedDate = localStorage.getItem("selected-date");
  const storedLocation = localStorage.getItem("selected-location");
  const city = storedLocation ? storedLocation.split(",")[0].trim() : "";

  const privateReading = document.getElementById("headline-1");
  const flattering = document.getElementById("headline-3");
  const dear = document.getElementById("dear");
  const asSignBorn = document.getElementsByClassName("lh1");
  const becauseLocation = document.getElementById("because");
  const itWasAnAudio = document.getElementById("too");
  const asYouAreHere = document.getElementsByClassName("lh3");
  const reasonWhy = document.getElementById("reasonwhy");
  const pitch = document.getElementById("pitch");
  const push = document.getElementById("push");
  const pps = document.getElementById("pps");

  privateReading.innerHTML = `<h1>A Private Reading To ${storedFirstName}</h1>`;
  flattering.innerHTML = `<h1>For The ${storedStarSign} Who Born on ${storedMonth} ${storedDate}, ${storedYear}</h1>`;
  dear.innerHTML = `Dear ${storedFirstName},`;
  for (let element of asSignBorn) {
    element.innerHTML = `<h2 id="lh">As A ${storedStarSign}, Born In ${storedMonth} ${storedDate}, ${storedYear}...</h2>`;
  }
  becauseLocation.innerHTML = `Because ${storedLocation} is a place that has a secret cosmic energy that most people don’t yet know…`;
  itWasAnAudio.innerHTML = `It was an audio that was designed for ${storedStarSign}. <b>(Yes, I am a ${storedStarSign} too!)</b>`;
  for (let element of asYouAreHere) {
    element.innerHTML = `<h2 id="lh">${storedFirstName}, As You Are Here...</h2>`;
  }
  reasonWhy.innerHTML = `And that’s the reason why I am here talking to you, ${storedFirstName}.`;
  pitch.innerHTML = `The Ultimate Astrology Frequency is the first and only one-minute frequency that can allow you to connect with your star sign, ${storedStarSign}, and receive what you deserve within just 67 days.`;
  push.innerHTML = `<i>And time is always of the essence, ${storedFirstName}</i>`;
  pps.innerHTML = `<b>P.P.S. Have you been back to ${city} recently?</b> I was born around there, and the cosmic energy there is now blossoming. You should feel lucky knowing it!`;

  initializeChart();
});

// Astrological Chart

// Define the signSymbols and planetSymbols objects here (same as in the React component)

const signSymbols = {
  Aries: "\u2648",
  Taurus: "\u2649",
  Gemini: "\u264A",
  Cancer: "\u264B",
  Leo: "\u264C",
  Virgo: "\u264D",
  Libra: "\u264E",
  Scorpio: "\u264F",
  Sagittarius: "\u2650",
  Capricorn: "\u2651",
  Aquarius: "\u2652",
  Pisces: "\u2653",
};

const planetSymbols = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
};

const signs = Object.keys(signSymbols);
const houses = Array.from({ length: 12 }, (_, i) => i + 1);
const planets = Object.keys(planetSymbols);
const angle = 360 / signs.length;

function generatePlanetPositions() {
  const positions = {};
  const minDistance = 15;
  const centralCircleRadius = 60;

  for (const planet of planets) {
    let position;
    let attempts = 0;
    do {
      position = Math.floor(Math.random() * 360);
      attempts++;
    } while (
      (Object.values(positions).some(
        (pos) =>
          Math.abs(pos - position) < minDistance ||
          Math.abs(pos - position) > 360 - minDistance
      ) ||
        position > 360 - centralCircleRadius ||
        position < centralCircleRadius) &&
      attempts < 100
    );
    positions[planet] = position;
  }

  return positions;
}

function getCoordinatesOnCircle(angle, radius) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
}

function createAstrologicalChart(firstName, starSign, year, month, date, city) {
  const chartDiv = document.getElementById("chart");
  chartDiv.innerHTML = ""; // Clear previous content

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "-200 -200 400 400");
  svg.style.margin = "12px";

  // Create outer circle
  const outerCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  outerCircle.setAttribute("cx", "0");
  outerCircle.setAttribute("cy", "0");
  outerCircle.setAttribute("r", "193");
  outerCircle.setAttribute("fill", "none");
  outerCircle.setAttribute("stroke", "#ecaa30");
  outerCircle.setAttribute("stroke-width", "2");
  svg.appendChild(outerCircle);

  // Create inner circle
  const innerCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  innerCircle.setAttribute("cx", "0");
  innerCircle.setAttribute("cy", "0");
  innerCircle.setAttribute("r", "167");
  innerCircle.setAttribute("fill", "none");
  innerCircle.setAttribute("stroke", "#ecaa30");
  innerCircle.setAttribute("stroke-width", "2");
  svg.appendChild(innerCircle);

  // Add zodiac signs and divisions
  signs.forEach((sign, index) => {
    const rotation = index * angle - angle / 2;
    const { x, y } = getCoordinatesOnCircle(rotation, 187);

    // Division lines
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const { x: x1, y: y1 } = getCoordinatesOnCircle(rotation, 167);
    const { x: x2, y: y2 } = getCoordinatesOnCircle(rotation, 193);
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#ecaa30");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);

    // Sign symbols
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const { x: textX, y: textY } = getCoordinatesOnCircle(index * angle, 180);
    text.setAttribute("x", textX);
    text.setAttribute("y", textY);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "central");
    text.setAttribute("font-size", "16");
    text.setAttribute("font-weight", "bold");
    text.setAttribute(
      "transform",
      `rotate(${index * angle}, ${textX}, ${textY})`
    );
    text.setAttribute("class", "symbol");
    text.setAttribute("fill", "white");
    text.textContent = signSymbols[sign];
    svg.appendChild(text);
  });

  // Add house divisions
  houses.forEach((house, index) => {
    const rotation = index * 30 - 15;
    const { x: x1, y: y1 } = getCoordinatesOnCircle(rotation, 47);
    const { x: x2, y: y2 } = getCoordinatesOnCircle(rotation, 167);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "white");
    line.setAttribute("stroke-width", "0.5");
    svg.appendChild(line);
  });

  // Generate planet positions and draw connections
  const planetPositions = generatePlanetPositions();

  // Draw planet connections
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const planet1 = planets[i];
      const planet2 = planets[j];
      const pos1 = getCoordinatesOnCircle(planetPositions[planet1], 133);
      const pos2 = getCoordinatesOnCircle(planetPositions[planet2], 133);

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", pos1.x);
      line.setAttribute("y1", pos1.y);
      line.setAttribute("x2", pos2.x);
      line.setAttribute("y2", pos2.y);
      line.setAttribute("stroke", "gold");
      line.setAttribute("stroke-width", "0.5");
      line.setAttribute("stroke-linecap", "round");
      svg.appendChild(line);
    }
  }

  // Add planets
  planets.forEach((planet) => {
    const { x, y } = getCoordinatesOnCircle(planetPositions[planet], 133);

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "3");
    circle.setAttribute("fill", "gold");
    svg.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 7);
    text.setAttribute("y", y);
    text.setAttribute("font-size", "9");
    text.setAttribute("fill", "gold");
    text.textContent = planet;
    svg.appendChild(text);
  });

  // Add center circle
  const centerCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  centerCircle.setAttribute("cx", "0");
  centerCircle.setAttribute("cy", "0");
  centerCircle.setAttribute("r", "47");
  centerCircle.setAttribute("fill", "none");
  centerCircle.setAttribute("stroke", "white");
  centerCircle.setAttribute("stroke-width", "1");
  svg.appendChild(centerCircle);

  // Add star sign symbol in the center
  const centerText = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  centerText.setAttribute("x", "0");
  centerText.setAttribute("y", "0");
  centerText.setAttribute("text-anchor", "middle");
  centerText.setAttribute("dominant-baseline", "central");
  centerText.setAttribute("font-size", "31");
  centerText.setAttribute("fill", "#ecaa30");
  centerText.setAttribute("font-weight", "bold");
  centerText.setAttribute("class", "symbol");
  centerText.textContent = signSymbols[starSign];
  svg.appendChild(centerText);

  chartDiv.appendChild(svg);
}

function initializeChart() {
  const firstName = localStorage.getItem("first-name");
  const starSign = localStorage.getItem("star-sign");
  const year = localStorage.getItem("selected-year");
  const month = localStorage.getItem("selected-month");
  const date = localStorage.getItem("selected-date");
  const location = localStorage.getItem("selected-location");
  const city = location ? location.split(",")[0].trim() : "";

  if (firstName && starSign && year && month && date && city) {
    createAstrologicalChart(firstName, starSign, year, month, date, city);
  } else {
    console.log("Some required information is missing from localStorage.");
    // Optionally, you can display a message to the user or handle this case differently
  }
}

// Starry Night function

const starryNight = document.getElementById("starry-night");

const generateFixedStars = () => {
  const stars = [];
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    stars.push(star);
  }
  return stars;
};

const addShootingStar = () => {
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";
  shootingStar.style.left = `${Math.random() * 100}%`;
  shootingStar.style.top = `${Math.random() * 100}%`;
  shootingStar.style.animationDuration = `${Math.random() * 2 + 1}s`;
  starryNight.appendChild(shootingStar);
  setTimeout(() => {
    shootingStar.remove();
  }, 5000);
};

const fixedStars = generateFixedStars();
fixedStars.forEach((star) => starryNight.appendChild(star));

setInterval(() => {
  if (Math.random() < 0.3) {
    addShootingStar();
  }
}, 100);
