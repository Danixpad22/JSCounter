
//Creo gli elementi

const bodyElement = document.body;
const header = document.createElement('div');
const title = document.createElement('h1');
const divElement = document.createElement('div');
const plusButton = document.createElement('button');
const counterText = document.createElement('p');
const minusButton = document.createElement('button');
const resetButton = document.createElement('button');
const footer = document.createElement('footer');
const textFooter = document.createElement('p');
const gitHubLink = document.createElement('a');
const gitHubIcon = document.createElement('img');

// Impostazione del percorso dell'immagine di GitHub
gitHubIcon.src = 'assets/img/github.svg';

// Impostazione dell'URL desiderato
gitHubLink.href = 'https://gist.github.com/Danixpad22'

//Aggiungo classi per modifca stili css
header.classList.add('header-style');
title.classList.add('title-style');
divElement.classList.add('container-style');
plusButton.classList.add('button-style-plus-minus');
minusButton.classList.add('button-style-plus-minus');
counterText.classList.add('counter-text-style');
resetButton.classList.add('button-style');
footer.classList.add('footer-style');
textFooter.classList.add('text-footer-style');
gitHubIcon.classList.add('icon-style');



//Aggiunto testo
title.textContent = 'JSCounter';
plusButton.textContent = '+';
minusButton.textContent = '-';
counterText.textContent = '0';
resetButton.textContent = 'Reset';
textFooter.textContent = '© 2024 Copyright: Daniele Padovani'

//Appendo al body
bodyElement.appendChild(header);
bodyElement.appendChild(title);
bodyElement.appendChild(divElement);
header.appendChild(title);
divElement.appendChild(plusButton);
divElement.appendChild(counterText);
divElement.appendChild(minusButton);
divElement.appendChild(resetButton);
footer.appendChild(textFooter);
bodyElement.appendChild(footer);
gitHubLink.appendChild(gitHubIcon);
footer.appendChild(gitHubLink);


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
