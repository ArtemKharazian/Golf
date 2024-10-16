                    // FIXED HEADER

let scrollOffset = window.scrollY;

const checkScroll = (scrollOffset) => {

    const header = document.getElementById("header");
    const intro = document.getElementById("intro");
    const introHeight = intro.clientHeight + header.clientHeight;

    if (scrollOffset >= introHeight) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
};
checkScroll(scrollOffset);

window.addEventListener("scroll", () => {
    scrollOffset = window.scrollY;
    checkScroll(scrollOffset);
})

                    // SMOOTH SCROLL

const dataScroll = document.querySelectorAll("[data-scroll]");

const addScrollOnClickListener = (element) => {

    element.addEventListener("click", (event) => {
        event.preventDefault();

        const blockID = this.getAttribute("data-scroll");
        const blockElement = document.querySelector(blockID);
        const blockOffset = blockElement.offsetTop;

        window.scrollTo({
            top: blockOffset,
            behavior: "smooth"
        });

        const nav = document.getElementById("nav");
        nav.classList.remove("active");
        
    });
};

dataScroll.forEach(addScrollOnClickListener);

                    // BURGER MENU
const burger = document.getElementById("burger");

burger.addEventListener("click", (event) => {
    const nav = document.getElementById("nav");
    event.preventDefault;

    burger.classList.toggle("active");
    nav.classList.toggle("active");
})

                    // FOOTER

const dataCollapse = document.querySelectorAll("[data-collapse]");

dataCollapse.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        let blockID = this.getAttribute("data-collapse");
        let targetDiv = document.querySelector(blockID);

        if (targetDiv) {
            targetDiv.classList.toggle("visible");

            if (targetDiv.classList.contains("visible")) {
                targetDiv.style.display = "block";
                
            } else {
                targetDiv.style.display = "none";
                
            }
        }

    });
});

const footerDiv = document.querySelectorAll('.footer__div');

footerDiv.forEach(function(box) {
    box.addEventListener('click', function() {
        const icon = this.querySelector('.footer__toggle');

        if (icon) {
            icon.classList.toggle('rotated');
        }
    });
});

                    // MODAL WINDOW

// const modal = document.getElementById("modal");
// const windowButton = document.querySelectorAll("[data-window");

// windowButton.addEventListener("click", (e) => {
//     e.preventDefault;
//     modal.classList.toggle("modal");
// })

// const closeWindowButton = document.getElementById("closeModal");

// closeWindowButton.addEventListener("click", () => {
//     modal.classList.toggle("modal");
// })

// modal.addEventListener("click", (event) => {
//     if(event.target === modal) {
//         modal.classList.toggle("modal");
//     }
// })

