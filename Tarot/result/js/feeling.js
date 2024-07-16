window.addEventListener("load", function () {
  const firstname = localStorage.getItem("firstname");
  const hisfirstname = localStorage.getItem("his-name");
  const card2ID = localStorage.getItem("card-2-id");
  const card1ID = localStorage.getItem("card-1-id");
  const personalizedone = document.getElementById("per-one1");
  // const popUpHeadline = document.getElementById("popuph");

  if (hisfirstname) {
    personalizedone.textContent = `${firstname}, let's see how ${hisfirstname} feels about you.`;
    // popUpHeadline.textContent = `${firstname}, Your Next Card Will Show You What's Going To Happen For You & ${hisfirstname}`;
  } else {
    personalizedone.textContent = `${firstname}, let's see how he feels about you.`;
    // popUpHeadline.textContent = `${firstname}, Your Next Card Will Show You What's Going To Happen For You & Him`;
  }

  if (card2ID) {
    const theImage = document.getElementById("per-tarot-card");
    const theCopy = document.getElementById("per-content");
    const theImageTop = document.getElementById("per-tarot-card-2");
    const theTopFirstImage = document.getElementById("per-tarot-card-1");
    const theOne = tarotcards2.find((card) => card.id === parseInt(card2ID));
    const prevCardIds = [card1ID];
    const firstCard = tarotcards2.find(
      (card) => card.id === parseInt(prevCardIds[0])
    );

    theTopFirstImage.src = firstCard.image;
    theImage.src = theOne.image;
    theImageTop.src = theOne.image;
    theCopy.innerHTML = `<p>${theOne.copy.join("</p><p>")}`;
  } else {
    displayCards();
  }

  const image = document.getElementById("per-tarot-card");
  const imageContainer = document.querySelector(".image-container");

  image.onload = function () {
    setTimeout(() => {
      imageContainer.classList.add("show");
    }, 500);
  };

  const continueButton = document.getElementById("button");
  continueButton.addEventListener("click", function () {
    window.location.href = "future.html";
  });
});

function displayCards() {
  // Get the previously displayed card IDs from localStorage
  const prevCardIds = [localStorage.getItem("card-1-id")];

  // Function to generate a random card that hasn't been shown before
  function getUniqueRandomCard() {
    const MAX_ITERATIONS = 1000; // Maximum number of iterations
    let iterations = 0;
    let randomIndex;
    let randomCard;

    do {
      randomIndex = Math.floor(Math.random() * tarotcards2.length);
      randomCard = tarotcards2[randomIndex];
      cardID = randomCard.id;
      localStorage.setItem("card-2-id", cardID);
      iterations++;
    } while (
      prevCardIds.includes(randomCard.id.toString()) &&
      iterations < MAX_ITERATIONS
    );

    if (iterations === MAX_ITERATIONS) {
      console.warn(
        "Unable to find a unique random card after maximum iterations."
      );
      return null; // Return null if no unique card is found
    }

    return randomCard;
  }

  // Get the first and second cards from the previous page
  const firstCard = tarotcards2.find(
    (card) => card.id === parseInt(prevCardIds[0])
  );

  // Get a new random card that hasn't been shown before
  const randomCard = getUniqueRandomCard();

  // Update the card images and content
  const topFirstCard = document.getElementById("per-tarot-card-1");
  const randomImage = document.getElementById("per-tarot-card");
  const randomImageTop = document.getElementById("per-tarot-card-2");
  const randomCopy = document.getElementById("per-content");

  topFirstCard.src = firstCard.image;
  randomImage.src = randomCard.image;
  randomImageTop.src = randomCard.image;
  randomCopy.innerHTML = `<p>${randomCard.copy.join("</p><p>")}</p>`;
  localStorage.setItem("card-2-id", randomCard.id);
}

const tarotcards2 = [
  {
    id: 1,
    title: "The World",
    image: "./img/Tarot - The World.jpeg",
    copy: [
      "The World means fulfilment, achievement and completion.",

      "He feels that you can be the person who he wants to marry in his life, and behind this feeling…",

      "…He truly wants to settle with you.",

      "And honestly, this is the first time he ever feels like this in his life.",

      "Which means, you are now having the chance that other women cannot have.",

      "At this moment, he is feeling that…",

      "You are the missing piece of the puzzle that he has finally found to make his life complete.",

      "There’s a cosmic force drawing him towards you.",

      "He can often feel you and miss you, at night, when you are not around.",

      "The World is showing you his feelings for you are being limited by an unknown force, so he is hesitating to commit to you.",

      "It might feel like there’s a glass wall between you and him…",

      "You are able to see each other, but not able to touch, even though he has the desire for you…",

      "But don’t feel disappointed, darling.",

      "The World also says that he is potentially seeing you as the one who can be with you in the long term.",

      "And there’s also the possibility of marriage and even… devotion.",
    ],
  },
  {
    id: 2,
    title: "Judgement",
    image: "./img/Tarot - Judgement.jpeg",
    copy: [
      "The card you’ve just drawn, Judgement, is telling you that a significant awakening or realization might be happening in your relationship.",

      "…He might be reflecting on his feelings for you.",

      "Judgement signifies a moment of clarity and decision-making…",

      "…he might feel that you're someone he wants to have a serious relationship with.",

      "And behind this feeling…",

      "…he truly wants to be with you.",

      "Honestly, this could be the first time he's felt this way about someone.",

      "Which means, you're having a chance that's really special.",

      "Right now, he's feeling like…",

      "You're the missing piece of his life that he's finally found to make it complete.",

      "There's something powerful drawing him towards you.",

      "He might even think of you and miss you, especially at night when you're not around.",

      "But, there's a feeling like something is holding him back from fully committing to you.",

      "It's like there's an invisible barrier between you two…",

      "You can see each other, but you can't quite reach each other, even though he wants to.",

      "But don't be sad.",

      "Judgement also suggests that he sees the potential for a long-term relationship with you.",

      "And there's even a chance of marriage and… true dedication.",
    ],
  },
  {
    id: 3,
    title: "The Sun",
    image: "./img/Tarot - The Sun.jpeg",
    copy: [
      "The card you’ve just drawn, The Sun, is telling you that happiness and positivity might be shining on your relationship.",

      "…He might be feeling joyful and content.",

      "The Sun is all about warmth and brightness…",

      "…and he might feel like you bring that into his life.",

      "And behind this feeling…",

      "…he truly wants to spend a lot of time with you and maybe even live together one day.",

      "Honestly, this could be the first time he's felt this way about someone.",

      "Which means, you are very special to him in a way no other woman has been.",

      "Right now, he's feeling like…",

      "You complete his life and make him feel whole inside.",

      "There is something pulling him towards you that feels meant to be.",

      "When you are not around, he misses you and thinks about you a lot, even at night time.",

      "But, there's a feeling like something is holding him back from fully committing.",

      "It might seem like there is an invisible wall between you two... ",

      "You can see and feel his love, but not totally experience it yet, even though he really wants to be closer.",

      "But don't feel sad about this, darling.",

      "The Sun also means he could very possibly see you as his life partner for the long run.",

      "And there is a chance for marriage and him devoting himself fully to you too.",
    ],
  },
  {
    id: 4,
    title: "The Tower",
    image: "./img/Tarot - The Tower.jpeg",
    copy: [
      "The card you've just drawn, The Tower, means unexpected change, upheaval and chaos.",

      "His feelings towards you are shaken up and unstable right now.",

      "But behind this feeling...",

      "He truly cares about you and the connection you share.",

      "It is something shocking or sudden happened that rocked his emotions.",

      "This is an unsettling, confusing time unlike anything he's faced before.",

      "That means his usual feelings about your relationship are disrupted.",

      "Right now, he is feeling that...",

      "<b>Part of him still wants to be close to you.</b>",

      "But another part feels lost, scared, or wants space from the intensity.",

      "There is still a bond pulling you together, but outside forces are causing turmoil.",

      "The Tower shows his feelings are crumbling and being torn apart.",

      "It might seem like one minute he is clinging to you, the next pushing you away...",

      "...Even though he doesn't mean to whiplash you, his world has been rocked.",

      "But don't feel discouraged, dear one.",

      "The Tower also hints that once the dust settles, your connection can survive renewed.",
    ],
  },
  {
    id: 5,
    title: "The Star",
    image: "./img/Tarot - The Star.jpeg",
    copy: [
      "The card you've just drawn, The Star, means hope, inspiration and renewal.",

      "He sees you as someone who gives him faith in love again.",

      "Behind this feeling... He truly admires your beautiful spirit.",

      "But he has been hurt before, so he holds some of his heart back.",

      "This is the first time in a long while he has allowed himself to hope.",

      "That means you are very special for helping him open up.",

      "Right now, he is feeling that...",

      "Part of him is drawn to your warmth and wants to fully trust.",

      "But another part of him remembers past pain and gets scared.",

      "There is something pure about you that calms his soul, yet his doubts make him cautious.",

      "The Star shows his feelings are a mix of optimism and hesitation about being vulnerable.",

      "It might seem like one minute he is openly adoring, the next minute guarded...",

      "...Even though deep down he doesn't mean to be so hot and cold, he's just trying to protect himself.",

      "But don't feel discouraged, dear one.",

      "The Star also hints that with your caring patience, you can help heal his inner pain.",
    ],
  },
  {
    id: 6,
    title: "The Moon",
    image: "./img/Tarot - The Moon.jpeg",
    copy: [
      "The card you’ve just drawn, The Moon, means things are unclear, confusing and a bit of a mystery.",

      "He has mixed feelings about you that he doesn't fully understand himself.",

      "Behind this feeling…",

      "He actually likes you and is attracted to you.",

      "But some part of him feels hesitant or unsure about fully committing.",

      "This is the first time his feelings have been this complicated before.",

      "That means the situation with you is very different than anything he's experienced.",

      "Right now, he is feeling that…",

      "Part of him is drawn to you and craves being close to you.",

      "But another part of him feels a bit of fear or gets caught up in negative thoughts and doubts.",

      "There is something deep inside him pulling him towards you, but also making him cautious.",

      "The Moon shows his feelings are cloudy and changeable - sometimes bright like the moon, sometimes dark like the shadows.",

      "It might seem like one minute he is warm towards you, the next minute distant…",

      "…Even though he doesn't really mean to be that way, his emotions are just up and down.",

      "But don't feel discouraged, darling.",

      "The Moon also hints that once he works through his confusion, he does have very real feelings for you that could grow into something very meaningful long-term.",
    ],
  },
];
