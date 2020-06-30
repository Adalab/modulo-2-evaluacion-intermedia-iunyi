'use strict';
// Variables
let inputNumberEl = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
let hint = document.querySelector('.js-hint');
let attempsEl = document.querySelector('.js-attemps');
let attemps = 0;

// Generar número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);

console.log(randomNumber)

// Mostrar mensaje con pista
function showHint() {
    if (inputNumberEl.value > randomNumber) {
        hint.innerHTML = 'Demasiado alto';
        attemps += 1;
    } else if (inputNumberEl.value < randomNumber) {
        hint.innerHTML = 'Demasiado bajo';
        attemps += 1;
    } else {
        hint.innerHTML = 'Has ganado campeona!!!'
    }
}

// Mostrar mensaje con número de intentos
function showAttemps() {
    attempsEl.innerHTML = `Número de intentos: ${attemps}`
}

// Handler
function showMessages() {
    showHint();
    showAttemps();
}

button.addEventListener('click', showMessages);