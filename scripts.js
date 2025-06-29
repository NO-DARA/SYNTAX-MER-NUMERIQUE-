// script.js

window.onload = function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("main-content");
  const audio = document.getElementById("intro-audio");

  // Lecture audio intro (si autorisé)
  if (audio) {
    audio.play().catch(() => {
      console.log("🔇 Lecture auto bloquée par le navigateur.");
    });
  }

  // Afficher le contenu principal après chargement
  setTimeout(() => {
    if (loader) loader.style.display = "none";
    if (content) content.style.display = "block";
  }, 2500);
};