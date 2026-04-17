const elementos = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});