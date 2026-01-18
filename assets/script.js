window.onscroll = function () {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 40) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};
