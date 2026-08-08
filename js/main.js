document.getElementById("year").textContent = new Date().getFullYear();

const navMain = document.getElementById("navMain");

function focusSectionTitle(target) {
  const heading = target.querySelector("h1, h2") || target;
  heading.setAttribute("tabindex", "-1");
  heading.focus({ preventScroll: true });
}

function scrollToTarget(target) {
  const yOffset = 80;
  const y = target.getBoundingClientRect().top + window.pageYOffset - yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
  focusSectionTitle(target);
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const isMenuOpen = navMain && navMain.classList.contains("show");

    if (isMenuOpen) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMain);
      navMain.addEventListener(
        "hidden.bs.collapse",
        function onHidden() {
          navMain.removeEventListener("hidden.bs.collapse", onHidden);
          scrollToTarget(target);
        },
        { once: true }
      );
      bsCollapse.hide();
    } else {
      scrollToTarget(target);
    }
  });
});