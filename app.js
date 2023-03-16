"use strict";

// CREATING MY SECRET NUMBER::STATE VARIABLE
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// VARIABLE FOR SCORE

let score = 20;

// VARIABLE FOR HIGHSCORE
let highScore = 0;

// REFACTORING REPITITVE CODE
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Add event listener to Check button
document.querySelector(".check").addEventListener("click", () => {
  // console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector(".guess").value);

  // The value gotten from an input is usually a type of STRING, so we convert to NUMBER
  console.log(guess, typeof guess);

  // The value of guess is 0::and 0 is a falsy value so to make it true, we negate it with(!)::When its TRUE, then the if block is executed

  // CONDITIONS/SCENARIOS
  // When there's no input
  if (!guess) {
    // RE
    displayMessage("⛔ No Number!");
    // document.querySelector('.message').textContent = '⛔ No Number!';
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // IMPLEMENTING HIGH SCORE::When resetting, everything resets except for the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // REFACTORING CODE
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      // RE
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥You lost the game");
      // document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Resetting the game to initial values/conditions
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".score").textContent = 20;

  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";
  // RE:::
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  Number((document.querySelector(".guess").value = ""));
});
