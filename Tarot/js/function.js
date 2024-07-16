const cardContainer = document.querySelector("#card-container");
let selectedCards = []; // Variable to store the selected card
const submitBTN = document.getElementById("submit");
const firstNameInput = document.getElementById("FirstNameInput");

//Generate Cards
function generateCards() {
  const isMobile = window.innerWidth < 768; // Check if the screen width is less than 768px
  const numCards = isMobile ? 12 : 15; // Set the number of cards based on screen size

  cardContainer.innerHTML = ""; // Clear any existing cards

  for (let i = 1; i <= numCards; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    //cardDiv.style.setProperty("--index", i);
    if (i > 1) {
      cardDiv.style.marginLeft = "-182px"; // Adjust the overlap value
    }
    cardDiv.style.zIndex = i; // Ensure each card stacks correctly

    const img = document.createElement("img");
    img.src = "./img/tarot-card-back.jpg";
    img.className = "card-img-top img-fluid";
    img.alt = "free tarot reading";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.border = "4px solid";
    img.style.borderColor = "rgb(215, 200, 169)";
    img.style.boxShadow = "3px 3px 7px 3px #a6a4a4";
    img.style.width = "200px"; // Increase the image size
    img.style.height = "300px"; // Maintain aspect ratio

    cardDiv.appendChild(img);
    cardContainer.appendChild(cardDiv);

    // Add click event listener
    img.addEventListener("click", function () {
      toggleCardHeight(img);
      updateInstructionText();
    });
  }
}

//Hang The Card Picked
function toggleCardHeight(card) {
  const isCardSelected = selectedCards.includes(card);
  //const progressBar = document.getElementById("bar1");

  if (selectedCards.length >= 3 && !isCardSelected) {
    // Maximum of 3 cards selected, and the clicked card is not already selected
    return;
  }

  if (isCardSelected) {
    // Deselect the card if it's already selected
    selectedCards = selectedCards.filter((item) => item !== card);
    card.style.transform = "";
  } else {
    // Select the card
    selectedCards.push(card);
    card.style.transform = "translateY(-17px)";
  }
}

//Card Instruction Text
function updateInstructionText() {
  let instructionContainer = document.querySelector("#instruction-container");
  const progressBar = document.querySelector(".progress");
  const progressBarInner = progressBar.querySelector(".progress-bar");

  switch (selectedCards.length) {
    case 0:
      instructionContainer.textContent = "Pick your first card...";
      instructionContainer.classList.remove("fade-color-out");
      instructionContainer.style.color = "black"; // Ensure initial color is black
      progressBar.style.opacity = "0";
      progressBarInner.style.width = "0%";
      progressBarInner.textContent = "0%";
      break;
    case 1:
      instructionContainer.textContent = "Pick your second card...";
      instructionContainer.classList.remove("fade-color-out");
      instructionContainer.style.color = "black"; // Ensure initial color is black
      progressBar.style.opacity = "0";
      progressBarInner.style.width = "0%";
      progressBarInner.textContent = "0%";
      break;
    case 2:
      instructionContainer.textContent = "Pick your final card...";
      instructionContainer.classList.remove("fade-color-out");
      instructionContainer.style.color = "black"; // Ensure initial color is black
      progressBar.style.opacity = "0";
      progressBarInner.style.width = "0%";
      progressBarInner.textContent = "0%";
      break;
    case 3:
      // Add class for color fade-out animation
      instructionContainer.classList.add("fade-color-out");

      // Use setTimeout to change the text after the animation completes
      setTimeout(() => {
        instructionContainer.innerHTML = "&nbsp;"; // Replace with non-breaking space
        instructionContainer.style.color = "black"; // Reset color for future use
        instructionContainer.classList.remove("fade-color-out"); // Remove class to reset state
      }, 700); // Match the duration of the fade-out animation

      progressBar.style.opacity = "1";
      setTimeout(() => {
        animateProgressBar(progressBarInner);
        scrollToProgressBar();
      }, 700);
      break;
    default:
      break;
  }
}

//scroll to progress bar
function scrollToProgressBar() {
  const progressBarSection = document.getElementById("bar1");
  const scrollOptions = {
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  };

  setTimeout(() => {
    progressBarSection.scrollIntoView(scrollOptions);
  }, 100); // Adjust this delay as needed
}

//Progress Bar Animation
function animateProgressBar(progressBar) {
  let width = 0;
  const button = document.getElementById("button");
  const statusText = document.getElementById("pbt");

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      // Add the 'show' class to make the button visible after the animation completes
      setTimeout(() => {
        button.style.opacity = "1";
      }, 1000);
    } else {
      width++;
      progressBar.style.width = `${width}%`;
      progressBar.textContent = `${width}%`;

      if (width == 1) {
        statusText.style.display = "block";
      }

      if (width < 25) {
        statusText.textContent = "Analyzing...";
      } else if (width < 50) {
        statusText.textContent = "Interpreting...";
      } else if (width < 75) {
        statusText.textContent = "Revealing insights...";
      } else {
        statusText.textContent = "It has been answered...";
      }
    }
  }, 20);
}

//Pop-Up Form Submit Function
function submitTheAnswer(event) {
  event.preventDefault();
  const firstname = firstNameInput.value.trim();
  if (firstname) {
    localStorage.setItem("firstname", firstname);
    window.location.href = "/Tarot/result";
  } else {
    alert("Please Enter Your First Name!😊");
  }
}

function removePreviousData() {
  localStorage.removeItem("card-1-id");
  localStorage.removeItem("card-2-id");
  localStorage.removeItem("card-3-id");
  localStorage.removeItem("firstname");
  localStorage.removeItem("his-name");
}

// Call generateCards() on page load
window.onload = function () {
  removePreviousData();
  generateCards();
  document.getElementById("instruction-text").style.display = "block";
  document.getElementById("button").style.opacity = "0";

  const instructionContainer = document.querySelector("#instruction-container");
  const card1 = document.getElementById("card1");

  // Apply the fade-in effect to the card container
  setTimeout(() => {
    card1.classList.add("show");
    instructionContainer.classList.add("show");
  }, 500);

  setTimeout(() => {
    instructionContainer.classList.add("show");
  }, 500);

  localStorage.clear();
};

// Also call generateCards() on window resize
window.addEventListener("resize", function () {
  generateCards();
});

submitBTN.addEventListener("click", submitTheAnswer);
