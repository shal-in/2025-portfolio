const headerEl = document.querySelector(".header-container");
const headerNameEl = headerEl.querySelector("p");
const headerSVGEl = headerEl.querySelector("svg");

headerNameEl.addEventListener("mouseover", () => {
    headerNameEl.style.color = "var(--white-text)";
    headerSVGEl.style.fill = "var(--white-text)";
})

headerNameEl.addEventListener("mouseout", () => {
    headerNameEl.style.color = "var(--red-text)";
    headerSVGEl.style.fill = "var(--red-text)";
})