
const words = [
    { english: "¡Hola, soy Juan!", spanish: "¡Hi, i´m Juan!" },
    { english: "¡Bonjour, je suis Juan!", spanish: "¡Olá, eu sou o Juan!" },
    { english: "¡Hallo, ich bin Juan!", spanish: "¡Ciao, sono Juan!" }
];

const textElement = document.getElementById("dynamicText");
let currentWordIndex = 0;
let isWriting = true;
let isErasing = false;
let charIndex = 0;

function typeEffect() {
    const currentWord = isWriting
        ? words[currentWordIndex].english
        : words[currentWordIndex].spanish;

    if (isErasing) {
        // Borrando caracteres
        charIndex--;
        textElement.textContent = currentWord.slice(0, charIndex);

        if (charIndex === 0) {
            isErasing = false;
            isWriting = !isWriting;

            // Cambiar palabra tras borrar
            if (!isWriting) {
                currentWordIndex = (currentWordIndex + 1) % words.length;
            }

            setTimeout(typeEffect, 1000); // Pausa antes de escribir
        } else {
            setTimeout(typeEffect, 50); // Velocidad de borrado
        }
    } else {
        // Escribiendo caracteres
        charIndex++;
        textElement.textContent = currentWord.slice(0, charIndex);

        if (charIndex === currentWord.length) {
            isErasing = true;

            setTimeout(typeEffect, 3000); // Pausa tras completar la palabra
        } else {
            setTimeout(typeEffect, 50); // Velocidad de escritura
        }
    }
}

typeEffect();



const menuContainer = document.getElementById('menu-container');
const opciones = document.getElementById('opciones');

function mostrarOpciones() {
    opciones.classList.toggle('show');
}

menuContainer.addEventListener('mouseleave', () => {
    opciones.classList.remove('show');
});





const icono = document.getElementById("menu-container");

    let intervaloTemblor = setInterval(() => {
      if (!icono.matches(':hover')) { // Solo si NO está en hover
        icono.classList.add("temblor");
        setTimeout(() => {
          icono.classList.remove("temblor");
        }, 500);
      }
    }, 4000);




function movimiento(elemento) {
    document.getElementById(elemento).scrollIntoView({ behavior: 'smooth', block: "center" });
}