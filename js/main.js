document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const yOffset = 80;
    const y = target.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Cierra el menu mobile al hacer click en un link
    const navMain = document.getElementById("navMain");
    if (navMain && navMain.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMain);
      bsCollapse.hide();
    }
  });
});
