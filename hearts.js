function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const hearts = ["❤️", "💗", "💖", "💕"];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 18 + 12) + "px";
  heart.style.animationDuration = (Math.random() * 6 + 6) + "s";
  heart.style.opacity = Math.random() * 0.4 + 0.2;

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

// fréquence douce
setInterval(createHeart, 250);


function createBlurHeart() {
  const heart = document.createElement("div");
  heart.className = "heart blur";

  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 30 + 20) + "px";
  heart.style.animationDuration = (Math.random() * 10 + 10) + "s";
  heart.style.opacity = 0.15;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 20000);
}

setInterval(createBlurHeart, 1200);
