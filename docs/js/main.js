document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target)) {
            menu.classList.remove("active");
        }
    });
});