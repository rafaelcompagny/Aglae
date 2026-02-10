const BPM = 120;
const beatInterval = 60000 / BPM; // 500ms

const captions = document.querySelectorAll(".caption");
let beatTimer = null;

document.getElementById("play").addEventListener("click", () => {

  // Démarre battement visuel
  beatTimer = setInterval(() => {
    captions.forEach(caption => {
      caption.classList.remove("beat");
      void caption.offsetWidth; // force reflow
      caption.classList.add("beat");
    });
  }, beatInterval);
});