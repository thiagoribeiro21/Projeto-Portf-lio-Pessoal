(function () {
  // Script para abrir e fechar a barra lateral de navegação
  const abrirNav = document.getElementById("abrir-sidebar");
  const fecharNav = document.getElementById("fechar-sidebar");
  const nav = document.querySelector(".nav__ul");

  // Verifica se os elementos existem antes de adicionar os ouvintes de eventos
  abrirNav.addEventListener("click", function () {
    abrirNav.classList.add("show");
    nav.classList.add("show__nav");
  });
  // Adiciona o evento de clique para fechar a barra lateral
  fecharNav.addEventListener("click", function () {
    abrirNav.classList.remove("show");
    nav.classList.remove("show__nav");
  });
})();
