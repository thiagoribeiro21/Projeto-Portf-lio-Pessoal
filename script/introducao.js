// Script para animação de imagens de fundo na seção de introdução
// Utiliza o scroll para criar um efeito de "flutuação" nas imagens
function introducaoImagens(selector) {
  // Seleciona a seção de introdução
  const page = document.querySelector(selector);
  if (!page) return;

  // Verifica se o elemento existe antes de adicionar o evento de scroll
  function updateIntroducao() {
    // Obtém a posição de rolagem e a altura da página
    const scrollY = window.scrollY;
    const pageHeight = parseInt(getComputedStyle(page).height);
    // Obtém as velocidades de flutuação definidas nas variáveis CSS
    const flutuandoSpeed1 = parseFloat(
      getComputedStyle(page).getPropertyValue("--flutuando-speed-1")
    );
    const flutuandoSpeed2 = parseFloat(
      getComputedStyle(page).getPropertyValue("--flutuando-speed-2")
    );

    // Atualiza a posição de fundo das imagens com base na rolagem
    // As imagens flutuam de acordo com a posição de rolagem, criando um efeito visual dinâmico
    // Limita a atualização para quando o scrollY for menor que a altura da página
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
