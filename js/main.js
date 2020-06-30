'use strict';
// Variables
let inputNumberEl = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
let hint = document.querySelector('.js-hint');
let attemps = document.querySelector('.js-attemps')

// Generar número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);

console.log(randomNumber)

// Mostrar pista
function showHint() {
    if (inputNumberEl.value > randomNumber) {
        hint.innerHTML = 'Demasiado alto'
    } else if (inputNumberEl.value < randomNumber) {
        hint.innerHTML = 'Demasiado bajo'
    } else {
        hint.innerHTML = 'Has ganado campeona!!!'
    }
}

function showAttemps() {

}

function showMessages() {
    showHint();
    showAttemps();
}

button.addEventListener('click', showMessages);