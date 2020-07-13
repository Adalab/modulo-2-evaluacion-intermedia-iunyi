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

// Añadir número de intentos
function addAttemps(){
    attemps += 1
}

// Mostrar mensaje con pista
function showHint() {
    if (inputNumberEl.value > 100 || inputNumberEl.value < 1) {
        renderHint('El número debe estar entre 1 y 100');
    } else if (inputNumberEl.value > randomNumber) {
        renderHint('Demasiado alto');
        addAttemps();
    } else if (inputNumberEl.value < randomNumber) {
        renderHint('Demasiado bajo');
        addAttemps();
    } else {
        renderHint('Has ganado campeona!!!');
        addAttemps();
    }
}

// función pintar en hint
function renderHint(message) {
    hint.innerHTML = message
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