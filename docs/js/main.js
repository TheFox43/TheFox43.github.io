document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.toggle("is-open");
    });

    document.addEventListener("click", (e) => {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnToggle = toggle.contains(e.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            menu.classList.remove("is-open");
        }
    });
});