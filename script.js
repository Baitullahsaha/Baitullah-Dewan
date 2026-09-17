// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let current = 0;

                const speed = target === 0 ? 1 : Math.max(1, target / 50);

                function updateCounter() {

                    if (current < target) {

                        current += speed;

                        if (current > target) {
                            current = target;
                        }

                        counter.textContent = Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;

                    }

                }

                updateCounter();

                observer.unobserve(counter);
            }

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach(function (counter) {
    observer.observe(counter);
});


// NAVBAR BACKGROUND

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,0.98)";

    } else {

        header.style.background = "rgba(0,0,0,0.9)";

    }

});


// SIMPLE PAGE LOAD EFFECT

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});
