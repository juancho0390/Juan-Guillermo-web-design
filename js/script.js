
const words = [
    { english: "¡Hola soy Juan!", spanish: "¡Hi i´m Juan!" },
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

            setTimeout(typeEffect, 1000); // Pausa tras completar la palabra
        } else {
            setTimeout(typeEffect, 100); // Velocidad de escritura
        }
    }
}

typeEffect();
