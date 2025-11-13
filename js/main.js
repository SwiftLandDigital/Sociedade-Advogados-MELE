import loadSite, { totalTime } from "./loader.js";

loadSite();

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Cria a instância do ScrollSmoother
        if (window.innerWidth > 1024) {
            const smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.8,
                effects: true,
                normalizeScroll: true,
                speed: 0.8,
                smoothTouch: 0.1,
                ignoreMobileResize: true,
            });
        }

        // CONSTRUIR OS OBSERVERS
        const elementsToAnimate = document.querySelectorAll("[data-aos]");

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else if (entry.boundingClientRect.top > 0) {
                    entry.target.classList.remove("animate");
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });

        // ANIMAÇÃO PARALLAX DO BACKGROUND DA HERO-SECTION
        // const heroBackground = document.querySelector("#hero .container-bg img");
        // const heroContainerBg = document.querySelector("#hero .container-bg");

        // const timeline =
    }, totalTime);
});
