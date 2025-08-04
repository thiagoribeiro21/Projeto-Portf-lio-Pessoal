function introducaoImagens(selector) {
  const page = document.querySelector(selector);
  if (!page) return;

  function updateIntroducao() {
    const scrollY = window.scrollY;
    const pageHeight = parseInt(getComputedStyle(page).height);
    const flutuandoSpeed1 = parseFloat(
      getComputedStyle(page).getPropertyValue("--flutuando-speed-1")
    );
    const flutuandoSpeed2 = parseFloat(
      getComputedStyle(page).getPropertyValue("--flutuando-speed-2")
    );
    console.log(scrollY, pageHeight);

    if (scrollY < pageHeight) {
      page.style.backgroundPosition = `
           left 20% top calc(${
             scrollY * flutuandoSpeed1
           }px), right 20% top calc(${
        scrollY * flutuandoSpeed1
      }px), left 10% bottom calc(70% + ${
        scrollY * flutuandoSpeed2
      }px), right 10% bottom calc(70% + ${scrollY * flutuandoSpeed2}px)
           
           `;
    }
  }

  window.addEventListener("scroll", updateIntroducao);
}
