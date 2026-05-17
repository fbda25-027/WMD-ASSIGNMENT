const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {

        button.style.transform = "scale(1.05)";
        button.style.boxShadow = "0 0 1rem #0fe1e1";

    });

    button.addEventListener("mouseout", () => {

        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";

    });

});




const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseover", () => {

        card.style.transform = "translateY(-0.5rem)";
        card.style.boxShadow = "0 0 1rem #0fe1e1";

    });

    card.addEventListener("mouseout", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";

    });

});


const heading = document.querySelector(".hero-content h1");

heading.style.opacity = "0";
heading.style.transform = "translateY(-2rem)";

window.addEventListener("load", () => {

    heading.style.transition = "1s ease";

    heading.style.opacity = "1";

    heading.style.transform = "translateY(0)";

});


window.addEventListener("load", () => {

    setTimeout(() => {

        alert("Welcome to Kentse Fitness!");

    }, 1000);

});


window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

});




cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(3rem)";

    card.style.transition = "0.6s ease";

});




const hero = document.querySelector(".hero");

const backgrounds = [

    "images/tirelo.jpg",
    "images/src.jpg",
    "images/Home-img.png"

];

let current = 0;

function changeBackground(){

    hero.style.background = `

    linear-gradient(
    rgba(0,0,0,0.7),
    rgba(0,0,0,0.7)
    ),

    url('${backgrounds[current]}')

    center/cover no-repeat

    `;

    current++;

    if(current >= backgrounds.length){

        current = 0;

    }

}

changeBackground();

setInterval(changeBackground, 4000);

