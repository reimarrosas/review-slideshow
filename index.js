"use strict";

const slideShowCards = document.querySelectorAll(".slideshow-container > *");
const gotoLeft = document.querySelector(".btn-left");
const gotoRight = document.querySelector(".btn-right");
const randomize = document.querySelector(".btn-random");
const card = document.querySelector(".card");

let currentCard = 0;

gotoLeft.addEventListener("click", handleGotoLeft);

function handleGotoLeft() {
  if (currentCard > 0) {
    --currentCard;
    slideShowCards[currentCard].scrollIntoView({behavior: "smooth"});
  }
}

gotoRight.addEventListener("click", handleGotoRight);

function handleGotoRight() {
  if (currentCard < slideShowCards.length - 1) {
    ++currentCard;
    slideShowCards[currentCard].scrollIntoView({behavior: "smooth"});
  }
}

randomize.addEventListener("click", handleRandomize);

function handleRandomize() {
  let randomNumber = 0;
  while (randomNumber === currentCard) {
    randomNumber = Math.floor(Math.random() * slideShowCards.length);
  }
  currentCard = randomNumber
  slideShowCards[currentCard].scrollIntoView({behavior: "smooth"});
}