
//Creo gli elementi
const bodyElement = document.body;
const title = document.createElement('h1');
const divElement = document.createElement('div');
const plusButton = document.createElement('button');
const counterText = document.createElement('p');
const minusButton = document.createElement('button');
const resetButton = document.createElement('button');

//Aggiungo classi per modifca stili css


title.classList.add('title-style');
divElement.classList.add('container-style');
plusButton.classList.add('button-style-plus-minus');
minusButton.classList.add('button-style-plus-minus');
counterText.classList.add('counter-text-style');
resetButton.classList.add('button-style');

//Aggiunto testo
title.textContent = 'COUNTER';
plusButton.textContent = '+';
minusButton.textContent = '-';
counterText.textContent= '0';
resetButton.textContent= 'Reset';

//Appendo al body
bodyElement.appendChild(title);
bodyElement.appendChild(divElement);
divElement.appendChild(plusButton);
divElement.appendChild(counterText);
divElement.appendChild(minusButton);
divElement.appendChild(resetButton);

//funzione counter

let counter = 0;

function plusCounter(){
  counter++;
  counterText.textContent = counter;
}

function minusCounter(){
  counter--;
  counterText.textContent = counter;
}

function resetCounter(){
  counter=0;
  counterText.textContent = counter;
}

//eventi
plusButton.addEventListener('click', plusCounter);
minusButton.addEventListener('click', minusCounter);
resetButton.addEventListener('click', resetCounter);
