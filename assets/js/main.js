// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
