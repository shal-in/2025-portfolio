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

let stackSections = ["backend", "frontend", "database", "deployment", "other"];

function createOtherStackEl(key) {
    let otherStackEls = {
        "figma": {
            "data-id": "figma", 
            "src": "/static/assets/stack/figma.png", 
            "p": "Figma"
          },
        "chrome-extensions": {
            "data-id": "chrome-extensions",
            "src": "/static/assets/stack/chrome.png",
            "p": "Chrome Extensions"
          },
        "postman": {
            "data-id": "postman",
            "src": "/static/assets/stack/postman.png",
            "p": "Postman"
          },
        "apps-script": {
            "data-id": "apps-script",
            "src": "/static/assets/stack/apps-script.png",
            "p": "Apps Script"
          },
        "youtube": {
            "data-id": "youtube",
            "src": "/static/assets/stack/youtube.png",
            "p": "Youtube API"
          },
        "git": {
            "data-id": "git",
            "src": "/static/assets/stack/git.png",
            "p": "Version Control"
          },
        "socketio": {
            "data-id": "socketio",
            "src": "/static/assets/stack/socketio.png",
            "p": "SocketIO"
        }
    }
    let info = otherStackEls[key];
    let div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("active");
    div.setAttribute("data-id", info["data-id"]);

    let img = document.createElement("img");
    img.setAttribute("src", info["src"]);
    div.appendChild(img);

    let p = document.createElement("p");
    p.textContent = info["p"]
    div.appendChild(p);

    return div

}

const updateTechStack = (entry) => {
if (entry.isIntersecting) {
    let techStack = JSON.parse(entry.target.getAttribute("data-stack"));

    stackSections.forEach(sectionTitle => {
        let sectionEl = techStackEl.querySelector(`.${sectionTitle}`);
        let sectionItems = techStack[sectionTitle];
        if (techStack.hasOwnProperty(sectionTitle)) {
            if (sectionTitle !== "other") {
                sectionEl.querySelectorAll(".list .item").forEach(itemEl => {
                    let itemId = itemEl.getAttribute("data-id");
                    if (sectionItems.includes(itemId)) { // Check if the itemId exists in sectionItems
                        itemEl.classList.add("active");
                    } else {
                        itemEl.classList.remove("active");
                    }
                });
            }
        } else {
            sectionEl.querySelectorAll(".list .item").forEach(itemEl => {
                itemEl.classList.remove("active");
            })
        }
    });
    let sectionTitle = "other";
    let sectionEl = techStackEl.querySelector(`.${sectionTitle}`);
    let list = sectionEl.querySelector(".list");
    list.innerHTML = "";
    if ("other" in techStack) {
        let sectionItems = techStack[sectionTitle];

        sectionItems.forEach(itemKey => {
            let el = createOtherStackEl(itemKey);
            list.appendChild(el);
        })
        sectionEl.classList.add("active");
    } else {
        sectionEl.classList.remove("active");
    }
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

backToTopButtonEl.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
    
    if (backToTopButtonEl.classList.contains("active")) {
        backToTopButtonEl.classList.remove("active");
    }

    backToTopButtonEl.blur();
});





// Select all elements with the "fade-up" class
const fadeUpElements = document.querySelectorAll('.fade-up');

// Create an Intersection Observer
const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view'); // Add class when in view
    } else {
      entry.target.classList.remove('in-view'); // Remove class when out of view (optional)
    }
  });
}, { threshold: 0.3 }); // Adjust threshold for when the animation triggers

// Observe each fade-up element
fadeUpElements.forEach(el => fadeUpObserver.observe(el));



// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem('typingAnimationShown')) {
        setTimeout(() => {
            let headerEl = document.querySelector(".header");
            headerEl.style.opacity = "1";
        }, 250);

        document.querySelector(".hello").innerHTML = '<span class="red">Hello!</span>';
        document.querySelector("#p1").innerHTML = '<span class="red">I\'m </span>Shalin Ahasan<span class="red">,</span>';
        document.querySelector("#p2").innerHTML = '<span class="red">a</span> Software Engineer<span class="red">,</span>';
        document.querySelector("#p3").innerHTML = 'building fun things on the';
        document.querySelector("#p4").innerHTML = 'internet<span class="red">.</span>';
        
    } else {
        let typing = document.querySelector("#landing .text");

        let hello = typing.querySelector(".hello");
        let p1 = typing.querySelector("#p1")
        let p2 = typing.querySelector("#p2")
        let p3 = typing.querySelector("#p3")
        let p4 = typing.querySelector("#p4")

        var typewriter = new Typewriter(hello, {
            loop: false,
            delay: 30
        });

        typewriter
            .callFunction(() => {
                const cursor = hello.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'inline';
                }
            })
            .pauseFor(600)
            .typeString(`<span class="red">Hello!</span>`)
            .pauseFor(100)
            .callFunction(() => {
                const cursor = hello.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'none';
                }
            })
            .callFunction(() => {
                const cursor = p1.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'inline';
                }
            })
            .start();

        typewriter = new Typewriter(p1, {
            loop: false,
            delay: 45
        });

        typewriter
            .pauseFor(1100)
            .typeString(`<span class="red">I'm </span>Shalin Ahasan<span class="red">,</span>`)
            .pauseFor(100)
            .callFunction(() => {
                const cursor = p1.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'none';
                }
            })
            .callFunction(() => {
                const cursor = p2.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'inline';
                }
            })
            .start();


        typewriter = new Typewriter(p2, {
            loop: false,
            delay: 45
        });

        typewriter
            .pauseFor(2750)
            .typeString(`<span class="red">a</span> Software Engineer<span class="red">,</span>`)
            .callFunction(() => {
                const cursor = p2.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'none';
                }
            })
            .callFunction(() => {
                const cursor = p3.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'inline';
                }
            })
            .start();


        typewriter = new Typewriter(p3, {
            loop: false,
            delay: 45
        });

        typewriter
            .pauseFor(4800)
            .typeString(`building things on `)
            .pauseFor(150)
            .deleteChars(10)
            .typeString(`fun things on the`)
            .callFunction(() => {
                const cursor = p3.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'none';
                }
            })
            .callFunction(() => {
                const cursor = p4.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'inline';
                }
            })
            .start();
        
        typewriter = new Typewriter(p4, {
            loop: false,
            delay: 45
        });

        typewriter
            .pauseFor(8200)
            .typeString(`internet<span class="red">.</span>`)
            .start();

        setTimeout(() => {
            let headerEl = document.querySelector(".header");
            headerEl.style.opacity = "1";

            sessionStorage.setItem('typingAnimationShown', 'true');
        }, 9200);
    }
});
