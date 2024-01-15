// Crée une timeline GSAP pour les animations de la section de l'en-tête
const tl = gsap.timeline();
tl.from(".masthead-avatar", {
  duration: 1.5,
  scale: 0.5,
  rotation: 360,
  ease: "back.out(1.7)",
  opacity: 0
})
  .from(".masthead-heading", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
  }, "-=1") // Le "-=1" décale le démarrage de cette animation d'une seconde par rapport à la précédente
  .from(".masthead-subheading", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out"
  }, "-=0.5") // Le "-=0.5" décale le démarrage de cette animation de 0,5 seconde par rapport à la précédente
  .from(".divider-custom-line", {
    duration: 0.75,
    scaleX: 0,
    transformOrigin: "left center",
    stagger: 0.2
  }, "-=1") // Le "-=1" décale le démarrage de cette animation d'une seconde par rapport à la première
  .from(".divider-custom-icon", {
    duration: 0.75,
    scale: 0,
    ease: "back.out(1.7)"
  }, "-=0.5"); // Le "-=0.5" décale le démarrage de cette animation de 0,5 seconde par rapport à la précédente

// Animation de rotation des icônes sociales au survol
const socialIcons = document.querySelectorAll(".btn-social");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    gsap.to(icon, {rotation: 360, duration: 0.5});
  });

  icon.addEventListener("mouseout", () => {
    gsap.to(icon, {rotation: 0, duration: 0.5});
  });
});

// Animation de défilement vers le haut lorsqu'on clique sur le bouton "scrollToTopButton"
const scrollToTopButton = document.querySelector("#scrollToTopButton");

scrollToTopButton.addEventListener("click", () => {
  window.scroll({
    top: 0, // Position vers laquelle vous souhaitez défiler (0 pour revenir en haut)
    behavior: "smooth" // Comportement de défilement fluide
  });
});
