// VARIABLES
   // Button
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
  evaluateResult();
  showPlayerRollResult();
  showAIRollResult();
  showPlayerScore();
  showAiScore();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

function evaluateResult(){
  if (aiRoll > playerRoll) {
    aiScore ++;
    result.innerHTML = "AI wins";
    result.style.color = "red";
  }
  if (playerRoll > aiRoll) {
    playerScore ++;
    result.innerHTML = "Player wins";
    result.style.color = "green";
  }
  if (aiRoll === playerRoll) {
     result.innerHTML = "Draw";
     result.style.color = "grey";
  }
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = "Player Dice result: " + playerRoll;
}
function showAIRollResult(){
  aiRollText.innerHTML = "AI Dice result: " + aiRoll;
}
function showPlayerScore(){
  playerScoreText.innerHTML = "Player total score is: " + playerScore;
}
function showAiScore(){
  aiScoreText.innerHTML = "AI total score is: " + aiScore;
}
