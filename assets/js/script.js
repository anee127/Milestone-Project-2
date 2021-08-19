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




// //accessing flag images api

// const baseURL = "https://flagcdn.com/en/codes.json";

// function getData(type, callback) {
//   var xhr = new XMLHttpRequest();

//   xhr.open("GET", baseURL + type);
//   xhr.send();

//   xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       callback(JSON.parse(this.responseText));
//     }
//   };
// }     

// function writeToDocument(type) {
//   getData(type, function(data) {
//     document.getElementById("data").innerHTML = data;
//   });
// }

// getData(printDataToConsole);

const timer = document.getElementById("timeTaken");

var time;
var seconds = 0
var minutes = 0;
var startTimer = false;
timeContainer.innerHTML = "Time:" + minutes + ":" + seconds;


//timer functions 
function startTimer() {
  time = setInterval(function() {
    seconds++;
    if(second === 59){
      minutes++;
      seconds = 0;
    }
    timeContainer.innerHTML = "Time:" + minutes + ":" + seconds;
  }, 1000);
}

function stopTimer() {
  clearInterval(time);
}