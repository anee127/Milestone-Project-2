//rules and how to play buttons functions 
const rules = document.getElementById('rules');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');
const endGame = document.getElementById('endGame');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');
const countryDiv = document.getElementById('cards');
var openedCardCount = 0;
var openCards = [];
var flips = 0;
var amount = 0;

modalBtn.addEventListener('click', showRules); //opens popup for rules card
closeBtn.addEventListener('click', closeRules); //closes popup for rules card

//to show box with rules
function showRules() {
  rules.style.display = "block";
}

//to close box with rules
function closeRules() {
  rules.style.display = "none";
}

//to close box with
function closeRules() {
  rules.style.display = "none";
}

//ending modal events
restartBtn.addEventListener('click', closeModal);

// to close ending modal 
function closeModal() {
  endGame.style.display = "none";
}

//accessing flag images api

var countriesURL = "https://flagcdn.com/en/codes.json";

function getData(url) {
  return fetch(url)
  .then(response => response.json())
  .then(data => renderCards(data));
}

//rendering flag images api onto the cards 

const renderCards = (countries) => {
  console.log(countries);
  const countriesArray = [...Object.keys(countries).slice(0, 8), ...Object.keys(countries).slice(0, 8)];
  shuffleArray(countriesArray);
  let flagCards = '';

  Object.keys(countriesArray).map(flags => {
    return flagCards = `${flagCards} <div onclick = "onCardClick(event)" class="card" id="${flags}"><img class="card-image-hidden" id="image-${flags}" src="https://flagcdn.com/h120/${countriesArray[flags]}.png"/></div>`;
  });

  countryDiv.innerHTML = flagCards;
}
getData(countriesURL);

// shuffling flags on cards

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
  
  console.log(event.target);
  let image = document.getElementById("image-" + event.target.id);
  image.classList.toggle("card-image-hidden");
  image.classList.toggle("disabled");

  
  cardOpen(image);
}

function cardOpen(image) {

  openCards.push(image);

  if (openCards.length===2) {
    console.log(openCards);
    if (openCards[0].src === openCards[1].src) {
      matched();
    }
    else {
      unmatched();
    }
  }
  //count steps for number of times cards clicked
 
}

// function () {
// if (flips == 0) {
//   startTimer();
// }
// if (openCards < 2) {
//   flips = flips + 1;
//   Steps.innerHTML ="Steps:" + flips;
// }
// }

function matched() {
  console.log("matched");
  openCards = [];
}

function unmatched() {
  let firstCard = openCards[0];
  let secondCard = openCards[1];
  openCards = [];
  setTimeout(function(){
    console.log("unmatched");
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