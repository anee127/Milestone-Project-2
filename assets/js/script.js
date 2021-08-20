//global variables 
const rules = document.getElementById('rules');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');
const endGame = document.getElementById('endGame');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('reset');
const countryDiv = document.getElementById('cards');
const watch = document.getElementById('timeTaken');
var openCards = [];
var steps = 0;
var timer;
var time = 0;
var matchedCards = 0;

//fetching flag images api data
var countriesURL = "https://flagcdn.com/en/codes.json";

function getData() {
  return fetch(countriesURL)
  .then(response => response.json())
  .then(data => renderCards(data));
}

//rendering flag images api onto the cards 

getData(); //function to load initial game

const renderCards = (countries) => {
  countrydiv = '';
  openCards = [];
  steps = 0;
  time = 0;
  clearInterval(timer);
  watch.innerHTML = 0;
  document.getElementById('stepsTaken').innerHTML = 0;


  const countriesArray = [...Object.keys(countries).slice(20, 28), ...Object.keys(countries).slice(20, 28)];
  shuffleArray(countriesArray);
  let flagCards = '';

  Object.keys(countriesArray).map(flags => {
    return flagCards = `${flagCards} <div onclick = "onCardClick(event)" class="card card-background" id="${flags}"><img class="card-image-hidden" id="image-${flags}" src="https://flagcdn.com/h80/${countriesArray[flags]}.png"/></div>`;
  });

  countryDiv.innerHTML = flagCards;
}

//shuffling flags on cards

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

// flippping over the cards to match
function onCardClick(event) {
  if (steps == 0) {
    timerStart();
  }
  steps++;
  document.getElementById('stepsTaken').innerHTML = steps;
  let image = document.getElementById("image-" + event.target.id);
  image.classList.toggle("card-image-hidden");
  image.classList.toggle("disabled");
  image.parentElement.classList.toggle('card-background');
  cardOpen(image);
}

//matching cards

function cardOpen(image) {

  openCards.push(image);

  if (openCards.length===2) {
    if (openCards[0].src === openCards[1].src) {
      matched();
    }
    else {
      unmatched();
    }
  }
}

function matched() {
  matchedCards++;
  if (matchedCards == 8) {
    endGame.style.display = "block";
    clearInterval(timer);

    let dateTimer = new Date(time);

    document.getElementById('timerResults').innerHTML =
    ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCSeconds()).slice(-2);

    document.getElementById('stepsResults').innerHTML = steps;
  }
  openCards = [];
}

function unmatched() {
  let firstCard = openCards[0];
  let secondCard = openCards[1];
  openCards = [];
  setTimeout(function(){
    firstCard.classList.toggle("card-image-hidden");
    secondCard.classList.toggle("card-image-hidden");
    firstCard.classList.toggle("disabled");
    secondCard.classList.toggle("disabled");
    firstCard.parentElement.classList.toggle('card-background');
    secondCard.parentElement.classList.toggle('card-background');
  },500);
}

// timer

function timerStart() {
  clearInterval(timer);
  timer = setInterval(() => {
    time += 1000;

    let dateTimer = new Date(time);

    watch.innerHTML = 
    ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCSeconds()).slice(-2);
  }, 1000);
}

//button events
modalBtn.addEventListener('click', showRules); //opens popup for rules card
closeBtn.addEventListener('click', closeRules); //closes popup for rules card

//to show box with rules
function showRules() {
  rules.style.display = "block";
}

//to close box with
function closeRules() {
  rules.style.display = "none";
}

// to close ending modal 
function closeModal() {
  endGame.style.display = "none";
}

//ending modal events
restartBtn.addEventListener('click', closeModal, renderCards); 
