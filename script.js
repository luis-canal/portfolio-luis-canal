const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elementos.forEach(el => observer.observe(el));

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const toggle = document.getElementById("toggleTheme");

if (toggle) {
    const temaSalvo = localStorage.getItem("theme");

    if (temaSalvo === "light") {
        document.body.classList.add("light");
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem("theme", "light");
        } else {
            toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem("theme", "dark");
        }
    });
}

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });
}