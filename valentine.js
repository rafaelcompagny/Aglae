const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {

    // Déplacer NON
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Faire grossir OUI
    scale += 0.15;
    yesBtn.style.transform = `scale(${scale})`;
    yesBtn.innerHTML = "OUI ❤️❤️";

     yesBtn.classList.add("pulsing");

    const rect = yesBtn.getBoundingClientRect();
    createSparkle(rect.left + rect.width/2, rect.top);
  });
}

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "final.html";
  });
}

/*Bouton oui qui pulse */

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.textContent = "✨";
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
}


/* CONFETTIS */
function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  for (let i = 0; i < 120; i++) {
    const side = Math.random() < 0.5 ? 0 : canvas.width;
    pieces.push({
      x: side,
      y: canvas.height / 2,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 6 + 2,
      r: Math.random() * 6 + 2,
      color: `hsl(${Math.random()*360},100%,70%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed + 1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

