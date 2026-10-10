document.querySelectorAll("[data-copyright-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
