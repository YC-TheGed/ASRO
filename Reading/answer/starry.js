const starryNight = document.getElementById("starry-night");

const generateFixedStars = () => {
  const stars = [];
  for (let i = 0; i < 100; i++) {
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
  }, 2000);
};

const fixedStars = generateFixedStars();
fixedStars.forEach((star) => starryNight.appendChild(star));

setInterval(() => {
  if (Math.random() < 0.2) {
    addShootingStar();
  }
}, 1000);
