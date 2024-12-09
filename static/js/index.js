// Back to Top button animatiom
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

// View CV button animation
const viewCVButtonEl = document.querySelector("#bio #right #cv");
const viewCVTextEl = viewCVButtonEl.querySelector("h2");
const viewCVArrowEl = viewCVButtonEl.querySelector("svg");

viewCVButtonEl.addEventListener("mouseover", () => {
    viewCVTextEl.style.opacity = "1";
    viewCVArrowEl.style.transform = "translate(3px, -3px)";
});
viewCVButtonEl.addEventListener("mouseout", () => {
    viewCVTextEl.style.opacity = "0.4";
    viewCVArrowEl.style.transform = "translate(0,0)";
})