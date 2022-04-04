const userChoiseDisplay = document.getElementById("userChoise");
const enemyChoiseDisplay = document.getElementById("enemyChoise");
const resultDisplay = document.getElementById("result");
const possibleChoise = document.querySelectorAll("button");

let userChoise;
let enemyChoise;
let resultMatch;

possibleChoise.forEach((possibleChoise) =>
  possibleChoise.addEventListener("click", (e) => {
    userChoise = e.target.id;
    userChoiseDisplay.innerHTML = userChoise;
    genEnemyChoise();
    getResult();
  })
);

function genEnemyChoise() {
  const randChoise = Math.floor(Math.random() * possibleChoise.length) + 1;
  console.log(randChoise);

  if (randChoise === 1) {
    enemyChoise = "stone";
  }
  if (randChoise === 2) {
    enemyChoise = "scissors";
  }
  if (randChoise === 3) {
    enemyChoise = "paper";
  }
  enemyChoiseDisplay.innerHTML = enemyChoise;
}

function getResult() {
  if (enemyChoise === "stone" && userChoise === "scissors") {
    resultMatch = "You lose! 😿";
  }
  if (enemyChoise === "scissors" && userChoise === "paper") {
    resultMatch = "You lose! 😿";
  }
  if (enemyChoise === "paper" && userChoise === "stone") {
    resultMatch = "You lose! 😿";
  }
  if (enemyChoise === "stone" && userChoise === "paper") {
    resultMatch = "You won! 😸";
  }
  if (enemyChoise === "paper" && userChoise === "scissors") {
    resultMatch = "You won! 😸";
  }
  if (enemyChoise === "scissors" && userChoise === "stone") {
    resultMatch = "You won! 😸";
  } if (enemyChoise === userChoise){
      resultMatch = 'Draw! 🙀'
  }
  resultDisplay.innerHTML = resultMatch;
}
