// Global variables

const rules = document.getElementById("rules");
const rulesBtn = document.getElementById("rulesBtn");
const closeBtn = document.getElementById("closeBtn");
const endGame = document.getElementById("endGame");
const restartBtn = document.getElementById("restartBtn");
const countryDiv = document.getElementById("cards");
const watch = document.getElementById("timeTaken");
var openCards = [];
var steps = 0;
var timer;
var time = 0;
var matchedCards = 0;

// Fetching flag images api data

var countriesURL = "https://flagcdn.com/en/codes.json";

function getCards() {
    return fetch(countriesURL)
        .then((response) => response.json())
        .then((data) => renderCards(data));
}

// Functions to render flag images

getCards(); // Function called to render flag data onto cards

const renderCards = (countries) => {
    openCards = [];
    steps = 0;
    time = 0;
    clearInterval(timer);
    watch.innerHTML = 0;
    document.getElementById("stepsTaken").innerHTML = 0;

    const countriesArray = [...Object.keys(countries).slice(28, 36), ...Object.keys(countries).slice(28, 36)];
    shuffleArray(countriesArray);
    let flagCards = "";

    Object.keys(countriesArray).map((flags) => {
        return (flagCards = `${flagCards} <div onclick = "onCardClick(event)" class="card card-background" id="${flags}"><img class="card-image-hidden" id="image-${flags}" src="https://flagcdn.com/w160/${countriesArray[flags]}.png"/></div>`);
    });

    countryDiv.innerHTML = flagCards;
};

// Shuffle function of flag images on cards, taken from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var flag = array[i];
        array[i] = array[j];
        array[j] = flag;
    }
}

// Flipping of cards function

function onCardClick(event) {
    if (steps == 0) {
        timerStart();
    }
    steps++;
    document.getElementById("stepsTaken").innerHTML = steps;
    let image = document.getElementById("image-" + event.target.id);
    image.classList.toggle("card-image-hidden");
    image.classList.toggle("disabled");
    image.parentElement.classList.toggle("card-background");
    cardOpen(image);
}

// Matching of cards Functions

function cardOpen(image) {
    openCards.push(image);

    if (openCards.length === 2) {
        if (openCards[0].src === openCards[1].src) {
            matched();
        } else {
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

        document.getElementById("timerResults").innerHTML = ("0" + dateTimer.getUTCMinutes()).slice(-2) + ":" + ("0" + dateTimer.getUTCSeconds()).slice(-2);

        document.getElementById("stepsResults").innerHTML = steps;
    }
    openCards[0].parentElement.removeAttribute("onclick");
    openCards[1].parentElement.removeAttribute("onclick");
    openCards = [];
    
}

function unmatched() {
    let firstCard = openCards[0];
    let secondCard = openCards[1];
    openCards = [];
    setTimeout(function () {
        firstCard.classList.toggle("card-image-hidden");
        secondCard.classList.toggle("card-image-hidden");
        firstCard.classList.toggle("disabled");
        secondCard.classList.toggle("disabled");
        firstCard.parentElement.classList.toggle("card-background");
        secondCard.parentElement.classList.toggle("card-background");
    }, 500);
}

// Timer functions taken from: https://dev.to/stackfindover/how-to-create-a-stopwatch-in-javascript-57a8

function timerStart() {
    clearInterval(timer);
    timer = setInterval(() => {
        time += 1000;

        let dateTimer = new Date(time);

        watch.innerHTML = ("0" + dateTimer.getUTCMinutes()).slice(-2) + ":" + ("0" + dateTimer.getUTCSeconds()).slice(-2);
    }, 1000);
}

// Button events

rulesBtn.addEventListener("click", showRules); //opens pop-up for rules modal
closeBtn.addEventListener("click", closeRules); //closes pop-up for rules modal

// How to play modal functions

function showRules() {
    rules.style.display = "block";
}

function closeRules() {
    rules.style.display = "none";
}

// End Game modal functions

function closeModal() {
    endGame.style.display = "none";
}

restartBtn.addEventListener("click", closeModal); // closes End Game modal
