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

// Update tech stack
const projectItemEls = document.querySelectorAll("#projects .projects div.item");
const techStackEl = document.querySelector("#projects .stack");

let stackSections = ["backend", "frontend"]
const updateTechStack = (entry) => {
if (entry.isIntersecting) {
    let techStack = JSON.parse(entry.target.getAttribute("data-stack"));

    stackSections.forEach(sectionTitle => {
        let sectionEl = techStackEl.querySelector(`.${sectionTitle}`);
        let sectionItems = techStack[sectionTitle];
        
        if (techStack.hasOwnProperty(sectionTitle)) {
            sectionEl.classList.add("active");

            sectionEl.querySelectorAll(".list .item").forEach(itemEl => {
                let itemId = itemEl.getAttribute("data-id");
                if (sectionItems.includes(itemId)) { // Check if the itemId exists in sectionItems
                    itemEl.classList.add("active");
                } else {
                    itemEl.classList.remove("active");
                }
            });
        } else {
            sectionEl.classList.remove("active");

            sectionEl.querySelectorAll(".list .item").forEach(itemEl => {
                itemEl.classList.remove("active");
            })
        }
    });
} else {
        entry.target.style.backgroundColor = ''; // Reset background color when out of view
    }
};

// Define the callback for observing project items
const projectItemVisibilityCallback = (entries) => {
    entries.forEach(entry => {
        entries.forEach(entry => {
            updateTechStack(entry);
        });
    });
};

// Create a new IntersectionObserver specifically for project items
const projectItemObserver = new IntersectionObserver(projectItemVisibilityCallback, {
    root: null, // Use the viewport as the root
    threshold: 0.60 // Trigger when at least 10% of the element is visible
});

// Observe each '.item' element
projectItemEls.forEach(item => projectItemObserver.observe(item));


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

