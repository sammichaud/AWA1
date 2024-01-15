// Animation pour afficher le formulaire de contact en fondu et déplacement vers le haut
gsap.from("#contactForm", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out"
});

// Animation pour afficher chaque champ de formulaire en fondu et déplacement vers la gauche avec un délai entre eux
gsap.from(".form-floating", {
  duration: 0.5,
  x: -50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

// Sélectionnez le bouton de soumission du formulaire
const submitButton = document.getElementById("submitButton");

// Animation lorsque la souris survole le bouton de soumission
submitButton.addEventListener("mouseenter", () => {
  gsap.to(submitButton, {
    duration: 0.3,
    backgroundColor: "#333E50",
    scale: 1.1
  });
});

// Animation lorsque la souris quitte le bouton de soumission
submitButton.addEventListener("mouseleave", () => {
  gsap.to(submitButton, {
    duration: 0.3,
    backgroundColor: "#72BC9E",
    scale: 1
  });
});