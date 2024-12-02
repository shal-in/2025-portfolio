
const backToTopButtonEl = document.querySelector(".footer .top-container .home");
const backToTopArrowEl = backToTopButtonEl.querySelector(".arrow");
backToTopButtonEl.addEventListener("mouseover", () => {
    backToTopArrowEl.style.transform = "translateY(-5px)";
});
backToTopButtonEl.addEventListener("mouseout", () => {
    backToTopArrowEl.style.transform = "translateY(0)";
})
backToTopButtonEl.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
})

const headerContainer = document.querySelector(".header-container");


