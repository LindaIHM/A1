// Variables
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
  showPlayerRollResult();
  showAIRollResult();
  showPlayerScore();
  showAiScore();
});

// CONTROLLERS (add evaluation (win/loss/draw), increase player/AI score when player/AI wins
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}
function showAIRollResult(){
  aiRollText.innerHTML = aiRoll;
}
function showPlayerScore(){
  playerScoreText.innerHTML = "Your score is: " + playerScore;
}
function showAiScore(){
  aiScoreText.innerHTML = "AI score is: " + aiScore;
}
