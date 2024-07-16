window.addEventListener("load", function () {
  const firstname = localStorage.getItem("firstname");
  const hisfirstname = localStorage.getItem("his-name");
  const card3ID = localStorage.getItem("card-3-id");
  const personalizedone = document.getElementById("per-one1");

  displayCards();
  if (hisfirstname) {
    noRepeat();
    personalizedone.textContent = `Well, ${firstname}... I'm surprised, but now let's see what's the near future between you and ${hisfirstname}.`;
    perAll();
  } else {
    noRepeat();
    personalizedone.textContent = `Well, ${firstname}... I'm surprised, but now let's see what's the near future between you and him.`;
    perAll2();
  }
});

function perAll() {
  //for having his name
  const per1 = document.getElementById("per1");
  const per2 = document.getElementById("per2");
  const per3 = document.getElementById("per3");
  const per4 = document.getElementById("per4");
  const per5 = document.getElementById("per5");
  const firstname = localStorage.getItem("firstname");
  const hisfirstname = localStorage.getItem("his-name");

  per1.textContent = `${firstname}, Now I Have to Be Honest with You...`;
  per2.textContent = `That's Why I am Writing This to You, ${firstname}`;
  per3.textContent = `And time is always of the essence, ${firstname}.`;
  per4.textContent = `Or, you can get ${hisfirstname}'s heart and have the best romantic life ever.`;
  per5.textContent = `Because here's the thing ${firstname}...`;
}

function perAll2() {
  //for having his name
  const per1 = document.getElementById("per1");
  const per2 = document.getElementById("per2");
  const per3 = document.getElementById("per3");
  const per4 = document.getElementById("per4");
  const per5 = document.getElementById("per5");
  const firstname = localStorage.getItem("firstname");

  per1.textContent = `${firstname}, Now I Have to Be Honest with You...`;
  per2.textContent = `That's Why I am Writing This to You, ${firstname}`;
  per3.textContent = `And time is always of the essence, ${firstname}.`;
  per4.textContent = `Or, you can get YOUR MAN's heart and have the best romantic life ever.`;
  per5.textContent = `Because here's the thing ${firstname}...`;
}

function noRepeat() {
  const prevCardIds = [
    localStorage.getItem("card-1-id"),
    localStorage.getItem("card-2-id"),
  ];
  const firstCard = tarotcards3.find(
    (card) => card.id === parseInt(prevCardIds[0])
  );
  const secondCard = tarotcards3.find(
    (card) => card.id === parseInt(prevCardIds[1])
  );
  const topFirstCard = document.getElementById("per-tarot-card-1");
  const topSecondCard = document.getElementById("per-tarot-card-2");
  const theImage = document.getElementById("per-tarot-card");
  const theImageTop = document.getElementById("per-tarot-card-3");
  const theCopy = document.getElementById("per-content");
  const card3ID = localStorage.getItem("card-3-id");
  const theOne = tarotcards3.find((card) => card.id === parseInt(card3ID));

  topFirstCard.src = firstCard.image;
  topSecondCard.src = secondCard.image;
  theImageTop.src = theOne.image;
  theImage.src = theOne.image;
  theCopy.innerHTML = `<p>${theOne.copy.join("</p><p>")}`;
}

function displayCards() {
  // Get the previously displayed card IDs from localStorage
  const prevCardIds = [
    localStorage.getItem("card-1-id"),
    localStorage.getItem("card-2-id"),
  ];

  // Function to generate a random card that hasn't been shown before
  function getUniqueRandomCard() {
    const MAX_ITERATIONS = 1000; // Maximum number of iterations
    let iterations = 0;
    let randomIndex;
    let randomCard;

    do {
      randomIndex = Math.floor(Math.random() * tarotcards3.length);
      randomCard = tarotcards3[randomIndex];
      cardID = randomCard.id;
      localStorage.setItem("card-3-id", cardID);
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
  const firstCard = tarotcards3.find(
    (card) => card.id === parseInt(prevCardIds[0])
  );
  const secondCard = tarotcards3.find(
    (card) => card.id === parseInt(prevCardIds[1])
  );

  // Get a new random card that hasn't been shown before
  const randomCard = getUniqueRandomCard();

  // Update the card images and content
  const topFirstCard = document.getElementById("per-tarot-card-1");
  const topSecondCard = document.getElementById("per-tarot-card-2");
  const randomImage = document.getElementById("per-tarot-card");
  const randomImageTop = document.getElementById("per-tarot-card-3");
  const randomCopy = document.getElementById("per-content");

  topFirstCard.src = firstCard.image;
  topSecondCard.src = secondCard.image;
  randomImage.src = randomCard.image;
  randomImageTop.src = randomCard.image;
  randomCopy.innerHTML = `<p>${randomCard.copy.join("</p><p>")}</p>`;
}

const tarotcards3 = [
  {
    id: 1,
    title: "The World",
    image: "./img/Tarot - The World.jpeg",
    copy: [
      "The World is showing you your future with him could take on a hard path…",

      "It is a path that may have challenges for you and him that can put you both into struggles…",

      "If the sign of the World is manifested…",

      "…you may need to be facing a life that makes you feel extremely insecure.",

      "And in some cases, you may not be able to find a solution right away.",

      "But even there’s a downside…",

      "…there's an upside that is showing you the positive path.",

      "The World, represents a loved and fulfilling romance, there's a possibility he sees you as the one who he wants to settle with.",

      "If you can tap into this positive path, you may be able to make him commit to you for a long-term committed relationship!",

      "You might not have felt it yet…",

      "…but there’s a secret force that is drawing him toward you.",

      "All you need to do is follow your instinct and learn more about him.",

      "And remember…",

      "The World can be missing something, you need to stop wasting your precious time.",

      "Once you take action…",

      "…he will feel you.",

      "And there will be a great possibility that he will start seeing you as the only one, and make the effort to serve you and love you whole-heartedly.",
    ],
  },
  {
    id: 2,
    title: "Judgement",
    image: "./img/Tarot - Judgement.jpeg",
    copy: [
      "Judgement is showing you your future with him could take on a challenging path...",

      "It is a path that may have obstacles for you both that lead to inner struggles...",

      "If the sign of Judgement comes true...",

      "...you may need to face some difficult situations that make you feel very worried and unsure.",

      "And in some cases, you may not be able to find the right answer right away.",

      "But even though there's a difficult side...",

      "...there's also a positive side that is showing you a hopeful path.",

      "Judgement represents a chance to make important choices about your love life and who you want to be with.",

      "If you choose this positive path, there's a possibility he sees you as the one he wants to commit to long-term!",

      "You might not have realized it yet...",

      "...but there's a powerful force drawing him to you at a deep soul level.",

      "All you need to do is listen to your heart's wisdom and strive to understand him better.",

      "And remember...",

      "Judgement shows a moment of reckoning, you need to use your time carefully.",

      "Once you make the right choices...",

      "...he will feel your spiritual connection.",

      "And there will be a great opportunity that he will see you as his soulmate meant to be cherished forever.",
    ],
  },
  {
    id: 3,
    title: "The Sun",
    image: "./img/Tarot - The Sun.jpeg",
    copy: [
      "The Sun is showing you your future with him could take on a bright path...",

      "It is a path filled with happiness, warmth and positive energy for you both...",

      "If the sign of The Sun is manifested...",

      "...you may need to face situations that make you feel so joyful and secure.",

      "And in most cases, any problems will have clear and uplifting solutions.",

      "But even with this wonderful side...",

      "...there's a realistic side showing you some practical matters too.",

      "The Sun represents a blossoming romance, but also the need to be grounded.",

      "If you can keep your mindset positive, there's a great possibility he will fully commit for the long-term!",

      "You might already feel it stirring...",

      "...but there's a bright cosmic force drawing him towards your vibrant spirit.",

      "All you need to do is keep shining your genuine, kindhearted self.",

      "And remember...",

      "The Sun can sometimes burn too intensely, you need to allow natural balance.",

      "Once you nurture the relationship patiently...",

      "...he will feel your brilliant light.",

      "And there will be an amazing opportunity that he will see you as his radiant partner to share life's adventures.",
    ],
  },
  {
    id: 4,
    title: "The Tower",
    image: "./img/Tarot - The Tower.jpeg",
    copy: [
      "The Tower is showing you your future with him could take on a chaotic path...",

      "It is a path filled with sudden upheaval and unwanted change for you both...",

      "If the sign of The Tower is manifested...",

      "...you may need to face situations that shake up your world and leave you feeling shaken.",

      "And in some cases, the turmoil may seem overwhelming with no clear solution.",

      "But even with this destructive force...",

      "...there's a liberating side showing you that positive transformation is possible.",

      "The Tower represents breaking free from limiting beliefs and unhealthy patterns.",

      "If you can embrace this as an opportunity for growth, there's a possibility for a new relationship to rise!",

      "You might already feel the rumblings...",

      "...but there's an unstoppable force catalyzing a major life shift for you both.",

      "All you need to do is have courage to let go of what is no longer serving you.",

      "And remember...",

      "The Tower can strip things down to the foundation, you need to use this as a fresh start.",

      "Once you work through the dust settling...",

      "...he will feel your strength and resilience.",

      "And there will be an opportunity to create a relationship aligned with your true values.",
    ],
  },
  {
    id: 5,
    title: "The Star",
    image: "./img/Tarot - The Star.jpeg",
    copy: [
      "The Star is showing you your future with him could take on a hopeful path...",

      "It is a path filled with inspiration, healing and renewal for you both...",

      "If the sign of The Star is manifested...",

      "...you may need to face situations that make you feel optimistic and restored.",

      "And in most cases, you will find the clarity and guidance you seek.",

      "But even with this positive light...",

      "...there's a realistic side showing some things still need conscious work.",

      "The Star represents having faith, but also setting healthy boundaries.",

      "If you can nurture hope while staying grounded, there's a great possibility for a meaningful bond!",

      "You might already feel it blossoming...",

      "...but there's a cosmic force gently drawing you together in divine timing.",

      "All you need to do is keep looking for signs while focusing on self-care.",

      "And remember...",

      "The Star can make things seem idealized, you need to see circumstances as they truly are.",

      "Once you cultivate patience and inner peace...",

      "...he will feel your calm resilience.",

      "And there will be an opportunity for a relationship that helps you both grow spiritually.",
    ],
  },
  {
    id: 6,
    title: "The Moon",
    image: "./img/Tarot - The Moon.jpeg",
    copy: [
      "The Moon is showing you your future with him could take on an uncertain path...",

      "It is a path filled with doubts, illusions and changing moods for you both...",

      "If the sign of The Moon is manifested...",

      "...you may need to face situations that leave you feeling confused and anxious.",

      "And in some cases, the answers you seek may remain unclear for a while.",

      "But even with this cloudiness...",

      "...there's an intuitive side showing you to look beneath the surface.",

      "The Moon represents exploring your deeper feelings and facing fears.",

      "If you can tap into this spiritual space, there's a possibility for closeness once trust is built!",

      "You might already sense it subconsciously...",

      "...but there's a mysterious force pulling you together in an unspoken way.",

      "All you need to do is be patient and watch for signals he sends.",

      "And remember...",

      "The Moon can play tricks on perception, you need to see through the illusions.",

      "Once you learn to navigate the twists and turns...",

      "...he will feel your calming presence.",

      "And there will be an opportunity for intimacy and connection beyond just the physical.",
    ],
  },
];

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
