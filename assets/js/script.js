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

const baseURL = "https://flagcdn.com/en/codes.json";

function getData(type, callback) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", baseURL + type);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
}     

function writeToDocument(type) {
  getData(type, function(data) {
    document.getElementById("data").innerHTML = data;
  });
}

getData(printDataToConsole);