(function () {
  const abrirNav = document.getElementById("abrir-sidebar");
  const fecharNav = document.getElementById("fechar-sidebar");
  const nav = document.querySelector(".nav__ul");

  abrirNav.addEventListener("click", function () {
    abrirNav.classList.add("show");
    nav.classList.add("show__nav");
  });

  fecharNav.addEventListener("click", function () {
    abrirNav.classList.remove("show");
    nav.classList.remove("show__nav");
  });
})();
