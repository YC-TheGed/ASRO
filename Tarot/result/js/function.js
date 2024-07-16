const submitBTN = document.getElementById("submit");

window.addEventListener("load", function () {
  const firstname = localStorage.getItem("firstname");
  const cardID = this.localStorage.getItem("card-1-id");
  const personalizedone = document.getElementById("per-one1");

  if (firstname) {
    personalizedone.textContent = `Welcome, ${firstname}!`;
  } else {
    personalizedone.textContent = `Welcome, dear one!`;
  }

  if (cardID) {
    const theImage = document.getElementById("per-tarot-card");
    const theCopy = document.getElementById("per-content");
    const theImageTop = document.getElementById("per-tarot-card-1");
    const theOne = tarotcards1.find((card) => card.id === parseInt(cardID));

    theImage.src = theOne.image;
    theImageTop.src = theOne.image;
    theCopy.innerHTML = `<p>${theOne.copy.join("</p><p>")}`;
  } else {
    displayRandomContent();
  }

  const image = document.getElementById("per-tarot-card");
  const imageContainer = document.querySelector(".image-container");

  image.onload = function () {
    setTimeout(() => {
      imageContainer.classList.add("show");
    }, 500);
  };
});

const tarotcards1 = [
  {
    id: 1,
    title: "The World",
    image: "./img/Tarot - The World.jpeg",
    copy: [
      "The card you’ve just drawn, The World, is telling you that…",

      "…He might be looking for a new beginning.",

      "While World can mean fulfilment and connection in a relationship…",

      "…it can also mean he is looking for a way to feel more fulfilled and connected.",

      "Maybe, he is tired of being where the situation is…",

      "Or maybe, he just doesn't know how precious and valuable being with you…",

      "Because chances are…",

      "He sees you as the one he wants to be with to feel more fulfilled and connected, emotionally and spiritually.",

      "Ever feel you could have the wholeness and fulfilled romance with him?",

      "World also tells you that you have the powerful potential to have his complete attention and a bright future with his genuine desire.",

      "Yet, he still needs to commit in order to go further in the relationship.",

      "Which means, there’s something in his mind that is stopping him from the commitment.",

      "As it may make you feel uncertain between you and him…",

      "You are actually on the path to have a closer relationship with him that has meaningful fulfilment.",
    ],
  },
  {
    id: 2,
    title: "Judgement",
    image: "./img/Tarot - Judgement.jpeg",
    copy: [
      "The card you’ve just drawn, Judgement, is telling you that…",

      "…He might be looking for an adjustment in the relationship.",

      "While Judgement can mean awakening and changes in a relationship…",

      "…it can also mean he is looking for more communication to adjust the relationship.",

      "Maybe, he is tired of being where the situation is…",

      "Or maybe, he just wants to open up more but still feels there’s something missing.",

      "Because chances are…",

      "He sees you as the one he wants to be with to go further in life, emotionally and spiritually.",

      "Ever feel you could have a romantic purpose and revalue the future for the better with him?",

      "Judgement also tells you that you have the powerful potential to go to the next level of romance and a steady future.",

      "Yet, he still needs to have the right adjustment in order to do that.",

      "Which means, there’s something in his mind that is stopping him from truly opening up, and accept you as the one.",

      "As it may make you feel insecure between you and him…",

      "You are actually on the path to have a closer relationship with him that will have no doubts and denial.",
    ],
  },
  {
    id: 3,
    title: "The Sun",
    image: "./img/Tarot - The Sun.jpeg",
    copy: [
      "The card you’ve just drawn, The Sun, is telling you that happiness and positivity might be happening in your relationship.",

      "…He might be feeling joyful and excited.",

      "While the Sun often means warmth and success…",

      "…it can also mean he is looking for a way to feel more connected and happy with you.",

      "Maybe he feels a burst of happiness in your current situation…",

      "Or maybe, he doesn’t fully see how amazing and special being with you is yet…",

      "Because chances are…",

      "He sees you as the one who can bring him even more joy and a deeper connection, emotionally and spiritually.",

      "Do you ever dream of having a happy and complete romance with him?",

      "The Sun also tells you that you have the wonderful potential to make his life brighter and build a joyful future together.",

      "But, he still needs to make a real commitment to move forward in the relationship.",

      "This means there’s something in his mind, maybe some uncertainty, that is stopping him from fully committing.",

      "Even though this might make you feel unsure about your future together…",

      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],
  },
  {
    id: 4,
    title: "The Tower",
    image: "./img/Tarot - The Tower.jpeg",
    copy: [
      "The card you’ve just drawn, The Tower, is telling you that a significant upheaval or revelation might be happening in your relationship.",

      "…He might be seeking a dramatic change or a fresh start.",

      "The Tower often means sudden disruptions, revelations, and the breaking down of old structures…",

      "…which can mean he is searching for a more profound sense of connection…",

      "…even if it can mean confronting uncomfortable truths.",

      "Maybe he feels confined or stagnant in the current situation…",

      "Or maybe, he hasn’t fully realized your value…",

      "Because chances are…",

      "He sees you as the one he wants to build a more genuine and deeply connected bond with, emotionally and spiritually.",

      "Do you feel that a truly whole and fulfilled romance is possible with him?",

      "The Tower also suggests that amidst the chaos, there is a powerful opportunity for transformation.",

      "This upheaval can clear away old patterns, allowing you to rebuild your relationship on a stronger, more authentic foundation.",

      "However, for this to happen…",

      "He needs to confront his fears and make a real commitment to moving forward together.",

      "This indicates that there’s something in his mind…",

      "…perhaps a fear of change or vulnerability, that is holding him back from fully committing.",

      "While this period of upheaval might make you feel uncertain about your future together…",

      "You are actually on the path to creating a closer, more meaningful relationship with him.",
    ],
  },
  {
    id: 5,
    title: "The Star",
    image: "./img/Tarot - The Star.jpeg",
    copy: [
      "The card you’ve just drawn, The Star, is telling you that hope and renewal might be happening in your relationship.",

      "…He might be wishing for a fresh start.",

      "While the Star often means healing and inspiration…",

      "…it can also mean he is looking for a way to feel more connected and happy.",

      "Maybe he feels a bit lost right now…",

      "Or maybe, he doesn't see how wonderful and special being with you is…",

      "Because chances are…",

      "He sees you as the one who can bring him joy and a deeper connection, emotionally and spiritually.",

      "Do you ever dream of having a happy and complete romance with him?",

      "The Star also tells you that you have the amazing potential to light up his life and build a bright future together.",

      "But, he still needs to decide to go further in the relationship.",

      "Which means, there’s something on his mind that is stopping him from making a full commitment.",

      "Even though this might make you feel unsure about your future together…",

      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],
  },
  {
    id: 6,
    title: "The Moon",
    image: "./img/Tarot - The Moon.jpeg",
    copy: [
      "The card you’ve just drawn, The Moon, is telling you that mystery and confusion might be happening in your relationship.",

      "…He might be feeling unsure or scared.",

      "While the Moon often means things are unclear and hidden…",

      "…it can also mean he is looking for a way to understand his feelings better.",

      "Maybe he feels confused about the current situation…",

      "Or maybe, he doesn’t see how important and special being with you is…",

      "Because chances are…",

      "He sees you as the one who can help him feel more understood and connected, emotionally and spiritually.",

      "Do you ever wish for a happy and complete romance with him?",

      "The Moon also tells you that you have the chance to help him see things clearly and build a brighter future together.",

      "But, he still needs to face his fears and make a real commitment to the relationship.",

      "This means there’s something in his mind, maybe worries or doubts, that is stopping him from fully committing.",

      "Even though this might make you feel unsure about your future together…",

      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 7,
    title: "Devil",
    image: "./img/Tarot - Devil.jpeg",
    copy: [
      "The card you’ve just drawn, Devil, is telling you that…",

      "…He might be looking for an obsession.",

      "While Devil can mean lust and addiction… ",

      "…it can also mean he is looking for happiness.",

      "Maybe, he is looking for a new option…",

      "Or maybe, he just doesn't know you can be the only source of pleasure…",

      "Because chances are…",

      "He may see you as the one and have more control, emotionally and spiritually.",

      "Ever feel you could be his only pleasure?",

      "Devil also tells you that you have the powerful potential to be the one who he wants to give up his ignorance...",

      "Yet, he still needs the pleasure in order to do that.",

      "Which means, there’s something in the way stopping you and him.",

      "As it may make you feel uncertain between you and him…",

      "You are actually on the path to have a romantic relationship with him that you can have control of.",
    ],

    id: 8,
    title: "Temperance",
    image: "./img/Temperance.jpeg",
    copy: [
      "The card you’ve just drawn, Temperance, is telling you that balance and patience might be important in your relationship.",
      "…He might be trying to find a way to make everything work smoothly.",
      "While Temperance often means harmony and peace…",
      "…it can also mean he is looking for a way to feel more balanced and connected with you.",
      "Maybe he feels like things need to be more even in the current situation…",
      "Or maybe, he doesn’t fully see how wonderful and special being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can help him feel more balanced and connected, emotionally and spiritually.",
      "Do you ever dream of having a peaceful and complete romance with him?",
      "Temperance also tells you that you have the wonderful potential to bring harmony to his life and build a balanced future together.",
      "But, he still needs to make a real commitment to move forward in the relationship.",
      "This means there’s something in his mind, maybe some worries, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 9,
    title: "Death",
    image: "./img/Death.jpeg",
    copy: [
      "The card you’ve just drawn, Death, is telling you that a big change or transformation might be happening in your relationship.",
      "…He might be ready for something new and different.",
      "While Death often means the end of one thing and the start of another…",
      "…it can also mean he is looking for a way to feel more connected and happy with you.",
      "Maybe he feels like the current situation needs to change…",
      "Or maybe, he doesn’t fully see how special and important being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can help him feel more alive and connected, emotionally and spiritually.",
      "Do you ever dream of having a fresh and complete romance with him?",
      "Death also tells you that you have the wonderful potential to bring new life to your relationship and build a bright future together.",
      "But, he still needs to let go of the past to move forward in the relationship.",
      "This means there’s something in his mind, maybe some old worries, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 10,
    title: "The Hanged Man",
    image: "./img/The Hanged Man.jpeg",
    copy: [
      "The card you’ve just drawn, The Hanged Man, is telling you that a time of waiting or looking at things differently might be happening in your relationship.",
      "…He might be feeling unsure and thinking a lot.",
      "While The Hanged Man often means taking a pause and seeing things from a new angle…",
      "…it can also mean he is looking for a way to feel more connected and happy with you.",
      "Maybe he feels like the current situation needs to be looked at in a new way…",
      "Or maybe, he doesn’t fully see how wonderful and special being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can help him find a new perspective and deeper connection, emotionally and spiritually.",
      "Do you ever dream of having a thoughtful and complete romance with him?",
      "The Hanged Man also tells you that you have the potential to bring new insights to your relationship and build a bright future together.",
      "But, he still needs to take the time to think and understand his feelings to move forward in the relationship.",
      "This means there’s something in his mind, maybe some confusion, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 11,
    title: "Justice",
    image: "./img/Justice.jpeg",
    copy: [
      "The card you’ve just drawn, Justice, is telling you that fairness and balance might be important in your relationship.",
      "…He might be thinking about what's right and wrong.",
      "While Justice often means making fair decisions and considering consequences…",
      "…it can also mean he is looking for a way to feel more balanced and happy with you.",
      "Maybe he feels like things need to be fair and just in the current situation…",
      "Or maybe, he doesn’t fully see how amazing and special being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can help him find fairness and happiness, emotionally and spiritually.",
      "Do you ever dream of having a fair and complete romance with him?",
      "Justice also tells you that you have the potential to bring fairness and equality to your relationship and build a bright future together.",
      "But, he still needs to make sure things are right before moving forward in the relationship.",
      "This means there’s something in his mind, maybe some concerns, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 12,
    title: "The Wheel of Fortune",
    image: "./img/The Wheel of Fortune.jpeg",
    copy: [
      "The card you’ve just drawn, The Wheel of Fortune, is telling you that change and luck might be happening in your relationship.",
      "…He might be feeling hopeful for good things to come.",
      "While The Wheel of Fortune often means unexpected changes and new opportunities…",
      "…it can also mean he is looking for a way to feel more lucky and happy with you.",
      "Maybe he feels like things are turning around for the better in the current situation…",
      "Or maybe, he doesn’t fully see how amazing and special being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him good luck and happiness, emotionally and spiritually.",
      "Do you ever dream of having a lucky and complete romance with him?",
      "The Wheel of Fortune also tells you that you have the potential to bring positive changes to your relationship and build a bright future together.",
      "But, he still needs to believe in the good things coming his way to move forward in the relationship.",
      "This means there’s something in his mind, maybe some doubts, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 13,
    title: "The Hermit",
    image: "./img/The Hermit.jpeg",
    copy: [
      "The card you’ve just drawn, The Hermit, is telling you that a time of reflection and introspection might be happening in your relationship.",
      "…He might be thinking deeply about things.",
      "While The Hermit often means taking time alone to find wisdom and guidance…",
      "…it can also mean he is looking for a way to feel more connected and happy with you.",
      "Maybe he feels like he needs some time to figure things out on his own…",
      "Or maybe, he doesn’t fully see how amazing and special being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him understanding and companionship, emotionally and spiritually.",
      "Do you ever dream of having a close and complete romance with him?",
      "The Hermit also tells you that you have the potential to bring wisdom and insight to your relationship and build a bright future together.",
      "But, he still needs to take the time to understand his feelings before moving forward in the relationship.",
      "This means there’s something in his mind, maybe some questions, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 14,
    title: "Strength",
    image: "./img/Strength.jpeg",
    copy: [
      "The card you’ve just drawn, Strength, is telling you that courage and inner strength might be important in your relationship.",
      "…He might be feeling brave and determined.",
      "While Strength often means having the courage to face challenges…",
      "…it can also mean he is looking for a way to feel more confident and happy with you.",
      "Maybe he feels like he needs to be strong in the current situation…",
      "Or maybe, he doesn’t fully see how wonderful and special being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him strength and support, emotionally and spiritually.",
      "Do you ever dream of having a strong and complete romance with him?",
      "Strength also tells you that you have the potential to bring courage and determination to your relationship and build a bright future together.",
      "But, he still needs to find the strength within himself to fully commit to the relationship.",
      "This means there’s something in his mind, maybe some fears, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 15,
    title: "The Chariot",
    image: "./img/The Chariot.jpeg",
    copy: [
      "The card you’ve just drawn, The Chariot, is telling you that determination and drive might be important in your relationship.",
      "…He might be feeling motivated and focused.",
      "While The Chariot often means moving forward with confidence and direction…",
      "…it can also mean he is looking for a way to feel more in control and happy with you.",
      "Maybe he feels like he needs to take charge in the current situation…",
      "Or maybe, he doesn’t fully see how amazing and special being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can help him steer his life in the right direction, emotionally and spiritually.",
      "Do you ever dream of having a strong and complete romance with him?",
      "The Chariot also tells you that you have the potential to bring determination and guidance to your relationship and build a bright future together.",
      "But, he still needs to take control and make decisions to move forward in the relationship.",
      "This means there’s something in his mind, maybe some uncertainties, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 16,
    title: "The Lovers",
    image: "./img/The Lovers.jpeg",
    copy: [
      "The card you’ve just drawn, The Lovers, is telling you that love and connection might be important in your relationship.",
      "…He might be feeling affectionate and caring.",
      "While The Lovers often means deep connection and partnership…",
      "…it can also mean he is looking for a way to feel more in love and happy with you.",
      "Maybe he feels like he wants to deepen your bond in the current situation…",
      "Or maybe, he doesn’t fully see how special and wonderful being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him love and joy, emotionally and spiritually.",
      "Do you ever dream of having a loving and complete romance with him?",
      "The Lovers also tells you that you have the potential to bring love and happiness to your relationship and build a bright future together.",
      "But, he still needs to fully commit to the relationship to make it work.",
      "This means there’s something in his mind, maybe some doubts, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 17,
    title: "The Hierophant",
    image: "./img/The Hierophant.webp",
    copy: [
      "The card you’ve just drawn, The Hierophant, is telling you that tradition and guidance might be important in your relationship.",
      "…He might be feeling a sense of tradition and responsibility.",
      "While The Hierophant often means following tradition and seeking guidance…",
      "…it can also mean he is looking for a way to feel more secure and happy with you.",
      "Maybe he feels like he wants to honor tradition in the current situation…",
      "Or maybe, he doesn’t fully see how special and wonderful being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him stability and comfort, emotionally and spiritually.",
      "Do you ever dream of having a secure and complete romance with him?",
      "The Hierophant also tells you that you have the potential to bring guidance and support to your relationship and build a bright future together.",
      "But, he still needs to fully embrace the commitment to make your relationship stronger.",
      "This means there’s something in his mind, maybe some uncertainties, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 18,
    title: "The Emperor",
    image: "./img/The Emperor.jpeg",
    copy: [
      "The card you’ve just drawn, The Emperor, is telling you that strength and stability might be important in your relationship.",
      "…He might be feeling powerful and in control.",
      "While The Emperor often means leadership and authority…",
      "…it can also mean he is looking for a way to feel more secure and happy with you.",
      "Maybe he feels like he wants to protect and provide for you in the current situation…",
      "Or maybe, he doesn’t fully see how special and wonderful being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him strength and support, emotionally and spiritually.",
      "Do you ever dream of having a secure and complete romance with him?",
      "The Emperor also tells you that you have the potential to bring stability and trust to your relationship and build a bright future together.",
      "But, he still needs to fully commit to making your relationship stronger.",
      "This means there’s something in his mind, maybe some doubts, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 19,
    title: "The Empress",
    image: "./img/The Empress.webp",
    copy: [
      "The card you’ve just drawn, The Empress, is telling you that love and nurturing might be important in your relationship.",
      "…He might be feeling caring and protective.",
      "While The Empress often means abundance and fertility…",
      "…it can also mean he is looking for a way to feel more loved and happy with you.",
      "Maybe he feels like he wants to take care of you in the current situation…",
      "Or maybe, he doesn’t fully see how special and wonderful being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him love and comfort, emotionally and spiritually.",
      "Do you ever dream of having a loving and complete romance with him?",
      "The Empress also tells you that you have the potential to bring nurturing and warmth to your relationship and build a bright future together.",
      "But, he still needs to fully commit to making your relationship stronger.",
      "This means there’s something in his mind, maybe some doubts, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 20,
    title: "The High Priestess",
    image: "./img/The High Priestess.webp",
    copy: [
      "The card you’ve just drawn, The High Priestess, is telling you that intuition and inner wisdom might be important in your relationship.",
      "…He might be feeling thoughtful and introspective.",
      "While The High Priestess often means listening to your inner voice and trusting your instincts…",
      "…it can also mean he is looking for a way to feel more connected and happy with you.",
      "Maybe he feels like he wants to understand his feelings better in the current situation…",
      "Or maybe, he doesn’t fully see how special and wonderful being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can help him find clarity and understanding, emotionally and spiritually.",
      "Do you ever dream of having a close and complete romance with him?",
      "The High Priestess also tells you that you have the potential to bring insight and wisdom to your relationship and build a bright future together.",
      "But, he still needs to trust his intuition and fully commit to making your relationship stronger.",
      "This means there’s something in his mind, maybe some uncertainties, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 21,
    title: "The Magician",
    image: "./img/The Magician.webp",
    copy: [
      "The card you’ve just drawn, The Magician, is telling you that creativity and potential might be important in your relationship.",
      "…He might be feeling imaginative and capable.",
      "While The Magician often means using your talents and resources to make things happen…",
      "…it can also mean he is looking for a way to feel more confident and happy with you.",
      "Maybe he feels like he wants to use his skills to improve your relationship in the current situation…",
      "Or maybe, he doesn’t fully see how special and wonderful being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can help him achieve his dreams and goals, emotionally and spiritually.",
      "Do you ever dream of having a successful and complete romance with him?",
      "The Magician also tells you that you have the potential to bring creativity and inspiration to your relationship and build a bright future together.",
      "But, he still needs to believe in himself and fully commit to making your relationship stronger.",
      "This means there’s something in his mind, maybe some doubts, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],

    id: 22,
    title: "The Fool",
    image: "./img/The Fool.jpeg",
    copy: [
      "The card you’ve just drawn, The Fool, is telling you that new beginnings and adventures might be important in your relationship.",
      "…He might be feeling adventurous and spontaneous.",
      "While The Fool often means taking risks and embracing the unknown…",
      "…it can also mean he is looking for a way to feel more excited and happy with you.",
      "Maybe he feels like he wants to explore new possibilities in the current situation…",
      "Or maybe, he doesn’t fully see how special and wonderful being with you is yet…",
      "Because chances are…",
      "He sees you as the one who can bring him joy and excitement, emotionally and spiritually.",
      "Do you ever dream of having an adventurous and complete romance with him?",
      "The Fool also tells you that you have the potential to bring spontaneity and fun to your relationship and build a bright future together.",
      "But, he still needs to take the leap and fully commit to making your relationship stronger.",
      "This means there’s something in his mind, maybe some fears, that is stopping him from fully committing.",
      "Even though this might make you feel unsure about your future together…",
      "You are actually moving towards having a closer and more meaningful relationship with him.",
    ],
  },
];

function displayRandomContent() {
  const randomIndex = Math.floor(Math.random() * tarotcards1.length);
  const randomContent = tarotcards1[randomIndex].copy.join("</p><p>");
  const randomImage = document.getElementById("per-tarot-card");
  const randomCopy = document.getElementById("per-content");
  const randomImageTop = document.getElementById("per-tarot-card-1");
  const cardId = tarotcards1[randomIndex].id;

  randomImage.src = tarotcards1[randomIndex].image;
  randomImageTop.src = tarotcards1[randomIndex].image;
  randomCopy.innerHTML = `<p>${randomContent}</p>`;
  localStorage.setItem("card-1-id", cardId.toString());
}

function submitThePage(event) {
  event.preventDefault(); // Prevent the default form submission
  const hisFirstName = document.getElementById("FirstNameInput");
  const hisNameV = hisFirstName.value.trim(); // Use value instead of ariaValueMax

  // Store the value in localStorage if it's not empty
  localStorage.setItem("his-name", hisNameV);
  window.location.href = "feeling.html";
}

function initLazyLoading() {
  const images = document.querySelectorAll("img[src]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("src");

          if (!src) {
            return;
          }

          img.setAttribute("src", "");
          img.setAttribute("data-lazy", src);

          const image = new Image();
          image.src = src;
          image.onload = () => {
            img.removeAttribute("data-lazy");
            img.setAttribute("src", src);
            observer.unobserve(img);
          };
        }
      });
    },
    { rootMargin: "200px 0px" }
  );

  images.forEach((img) => {
    observer.observe(img);
  });
}

window.addEventListener("DOMContentLoaded", initLazyLoading);
submitBTN.addEventListener("click", submitThePage);

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Fade out the preloader
  setTimeout(function () {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    // After the fade-out animation, hide preloader and show main content
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }, 2000); // Adjust this delay as needed
});
