// Enregistre le plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

// Fonction d'animation pour faire apparaître les éléments depuis une direction spécifiée
const animateFrom = (elem, direction) => {
  direction = direction || 1;
  var x = 0, y = direction * 100;
  if(elem.classList.contains("left-element")) x = -200;
  if(elem.classList.contains("right-element")) x = 200;

  gsap.from(elem, {
    x, y, opacity: 0, duration: 1,
    scrollTrigger: {
      trigger: elem,
      start: "top 80%"
    }
  });
};

// Fonction d'animation pour les liens de la navbar
const animateNavLinks = (item, hover) => {
  const scale = hover ? 1.1 : 1;
  const color = hover ? "#72BC9E" : "#fff";
  gsap.to(item, {duration: 0.3, color, scale});
};

// Animation initiale de la navbar
gsap.from(".navbar", {duration: 1, y: -100, opacity: 0, ease: "power2.out"});

// Ajoute des événements aux liens de la navbar pour les animations au survol
document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("mouseenter", () => animateNavLinks(item, true));
  item.addEventListener("mouseleave", () => animateNavLinks(item, false));
  item.addEventListener("click", () => {
    gsap.to(item, {duration: 0.5, scale: 1.2, ease: "power2.out"});
    gsap.to(item, {duration: 0.5, scale: 1, delay: 0.5});
  });
});

// Animation des éléments avec les classes left-element, right-element et about-title
document.querySelectorAll(".left-element, .right-element, .about-title").forEach(elem => animateFrom(elem));

// Animation des boutons GitHub
const animateGitHubButtons = (item, hover) => {
  if(hover) {
    gsap.to(item, {scale: 1.1, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut"});
    gsap.to(".icon-github", {rotation: 360, duration: 0.8, repeat: -1, yoyo: true, ease: "sine.inOut"});
  } else {
    gsap.killTweensOf(item);
    gsap.killTweensOf(".icon-github");
  }
};

// Ajoute des événements aux boutons GitHub pour les animations au survol
document.querySelectorAll(".btn-github").forEach(item => {
  item.addEventListener("mouseenter", () => animateGitHubButtons(item, true));
  item.addEventListener("mouseleave", () => animateGitHubButtons(item, false));
});

// Animation du logo de la navbar
const navbarBrandAnimation = gsap.to(".navbar-brand", {
  rotation: 360, color: "#72BC9E", duration: 1, paused: true
});

// Ajoute des événements au logo de la navbar pour les animations au survol
document.querySelector(".navbar-brand").addEventListener("mouseenter", () => {
  navbarBrandAnimation.play();
});
document.querySelector(".navbar-brand").addEventListener("mouseleave", () => {
  navbarBrandAnimation.reverse();
});
