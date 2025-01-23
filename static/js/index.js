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


// Projects item buttons
const projectsItemButtonEls = document.querySelectorAll(".projects .item a");
projectsItemButtonEls.forEach(projectsItemButtonEl => {
    projectsItemButtonEl.addEventListener("focus", () => {
        projectsItemButtonEl.classList.toggle("active");
    })
    
    projectsItemButtonEl.addEventListener("blur", () => {
        projectsItemButtonEl.classList.toggle("active");
    })
    
    projectsItemButtonEl.addEventListener("mouseover", () => {
        projectsItemButtonEl.classList.toggle("active");
    })
    
    projectsItemButtonEl.addEventListener("mouseout", () => {
        projectsItemButtonEl.classList.toggle("active");
    })
})

// Projects tech stack
const projectsSectionEl = document.querySelector("#projects");

const observerCallback = (entries) => {
    entries.forEach(entry => {
        // CHANGE THRESHOLDS HERE
        const isAtLeast45Visible = entry.intersectionRatio >= 0.45;
        const isLessThan45VisibleAtTop = entry.intersectionRatio < 0.45 && entry.boundingClientRect.top > 0;
        const isLessThan10VisibleAtBottom = entry.intersectionRatio < 0.45 && entry.boundingClientRect.top < 0;

        if (isAtLeast45Visible) {
            entry.target.classList.add('active');
        } else if (isLessThan45VisibleAtTop || isLessThan10VisibleAtBottom) {
            entry.target.classList.remove('active');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: [0.45, 0.45]
});

observer.observe(projectsSectionEl);



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

