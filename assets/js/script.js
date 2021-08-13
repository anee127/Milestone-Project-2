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
