// Variables
   // Buttons
let button0 = document.getElementById("button0");

   // Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let result = document.getElementById("result");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");

   // Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;

// PROCESSES
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  showAIRollResult();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  aiRoll = Math.floor(Math.random() * 6) + 1;
}
for (let i = 0; i < aiRoll; i++){
  console.log(aiRoll); KOLLA
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}
function showAIRollResult(){
  aiRollText.innerHTML = aiRoll;
}
function showPlayerScore(){
  playerScoreText.innerHTML = playerScore;
}
function showAiScore(){
  aiScoreText.innerHTML = aiScore;
}
function showEvaluation(){
  result.innerHTML;
}

