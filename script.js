gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
    smoothTouch: 0
});

const menu = document.querySelector("#menu");
const links = document.querySelector("#links");

menu.addEventListener("click", () => {
    links.classList.toggle("aberto");
});
const elementos = document.querySelectorAll(".aparecer");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }
    });
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});
