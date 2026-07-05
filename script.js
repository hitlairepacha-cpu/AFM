const dateMatch =new Date(2026, 6, 1, 16, 30, 0).getTime();

const compteARebours = setInterval(function() {

    const maintenant = new Date().getTime();
    const distance = dateMatch - maintenant;

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distance % (1000 * 60 )) /1000);

    document.getElementById("days").innerText = jours < 10 ? "0" + jours : jours;
    document.getElementById("hours").innerText = heures < 10 ? "0" + heures : heures;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = secondes < 10 ? "0" + secondes : secondes;

    if (distance < 0) {
        clearInterval(compteARebours);
        document.getElementById("countdown").innerHTML = "<h3 style='color: var(--couleur-principale); text-transform: uppercase;'>Le Match a commencer ! 🔥</h3>";
    }

}, 1000);

const nombreDePhotos = 5;

const container = document.getElementById("carousel-container");

for (let i = 1; i <= nombreDePhotos; i++) {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    if (i === 1) slide.classList.add("active");

    slide.innerHTML = `<img src="diaporama/slide${i}.jpg" alt="Photo de l'equipe ${i}">`;

    container.insertBefore(slide, container.firstChild);
}

let indexActuel = 0;
const slide = document.querySelectorAll(".slide");

function changerSlide() {
    slide[indexActuel].classList.remove("active");
    indexActuel = (indexActuel + 1) % slide.length;
    slide[indexActuel].classList.add("active");
}

setInterval(changerSlide, 5000);