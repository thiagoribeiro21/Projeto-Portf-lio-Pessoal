// Script para animação de opacidade ao rolar a página das seções
// Utiliza Intersection Observer para detectar quando os elementos entram na viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");

      observer.unobserve(entry.target);
    }
  });
});

const elementsToAnimate = document.querySelectorAll(".opacity-animation");

elementsToAnimate.forEach((element) => {
  observer.observe(element);
});
