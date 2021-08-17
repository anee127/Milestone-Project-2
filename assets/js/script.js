//rules and how to play buttons functions 
const rules = document.getElementById('rules');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');

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

//accessing flag images api

var countriesURL = "https://flagcdn.com/en/codes.json";

function getData(url) {
  return fetch(url)
  .then(response => response.json())
  .then(data => renderCards(data));
}

//rendering flag images api onto the cards 

const countryDiv = document.getElementById('cards');

const renderCards = (countries) => {
  console.log(countries);
  const countriesArray = Object.keys(countries).filter(code => countries[code].length);
  let flagCards = '';

  Object.keys(countriesArray).map(flags => {
    return flagCards = `${flagCards} <img src="https://flagcdn.com/h20/${countriesArray[flags]}.png">`;
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