
document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.querySelector(".dropdown-toggle");

    const menu = document.querySelector(".dropdown-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");

        toggle.textContent = menu.classList.contains("active")
            ? "Intressen ▴"
            : "Intressen ▾"
    });
});