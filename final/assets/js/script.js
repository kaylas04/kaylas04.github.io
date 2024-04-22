const titleText = "LAKE TAHOE";
const introText = "Welcome to your ultimate guide to Lake Tahoe, where pristine waters meet awe-inspiring mountains - your adventure begins in a landscape brimming with nature's finest offerings, waiting to be explored and cherished...";

const titleElement = document.querySelector('.title');
const introElement = document.querySelector('.intro-text p');
const readySection = document.querySelector('.ready-section');

titleElement.textContent = ''; 
introElement.textContent = ''; 

let titleIndex = 0;
let introIndex = 0;

function typeTitleLetter() {
  if (titleIndex < titleText.length) {
    titleElement.textContent += titleText[titleIndex];
    titleIndex++;
    setTimeout(typeTitleLetter, 200); 
  } else {
    typeIntroText(); 
  }
}

function typeIntroText() {
  if (introIndex < introText.length) {
    introElement.textContent += introText[introIndex];
    introIndex++;
    setTimeout(typeIntroText, 15); 
  } else {
    const readyTitle = document.querySelector('.ready-title');
    readyTitle.style.opacity = 1;


    const clickBegin = document.querySelector('.click-begin');
    clickBegin.style.opacity = 1;
  }
}

function changeToDayMode() {
    readySection.style.transition = 'opacity 1s ease';
    readySection.style.opacity = '0';
    }

typeTitleLetter();


