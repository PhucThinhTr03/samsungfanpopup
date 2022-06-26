window.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("sticky", window.scrollY > 60);
});