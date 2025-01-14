// Bio CV button
const bioCVButtonEl = document.querySelector("#bio .cv a");

bioCVButtonEl.addEventListener("focus", () => {
    bioCVButtonEl.classList.toggle("active");
})

bioCVButtonEl.addEventListener("blur", () => {
    bioCVButtonEl.classList.toggle("active");
})

bioCVButtonEl.addEventListener("mouseover", () => {
    bioCVButtonEl.classList.toggle("active");
})

bioCVButtonEl.addEventListener("mouseout", () => {
    bioCVButtonEl.classList.toggle("active");
})



// back to top button
const backToTopButtonEl = document.querySelector(".footer .right .top");

backToTopButtonEl.addEventListener("mouseover", () => {
    backToTopButtonEl.classList.toggle("active")
})

backToTopButtonEl.addEventListener("mouseout", () => {
    backToTopButtonEl.classList.toggle("active")
})

backToTopButtonEl.addEventListener("focus", () => {
    backToTopButtonEl.classList.toggle("active")
})

backToTopButtonEl.addEventListener("blur", () => {
    backToTopButtonEl.classList.toggle("active")
})