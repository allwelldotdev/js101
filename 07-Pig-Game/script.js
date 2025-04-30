"use strict";

// Select elements
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnReset = document.querySelector(".btn--new");

// Select player current score element
const playerCurrScoreEl = (playerNum) =>
  document.getElementById(`current--${playerNum}`);

// Select player score element
const playerScoreEl = (playerNum) =>
  document.getElementById(`score--${playerNum}`);

// Set player score
const resetPlayerScore = () => {
  for (let i = 0; i < 2; i++) {
    playerScoreEl(i).textContent = 0;
  }
};
resetPlayerScore();

// Store player score
let arrPlayerScore = [0, 0];

// Select player section element
const playerSectionEl = (playerNum) =>
  document.querySelector(`.player--${playerNum}`);

// Hide dice display
diceEl.style.display = "none";

// Set current and previous player
let currentPlayer = 0;

// Switch player func
const switchPlayer = function () {
  playerCurrScoreEl(currentPlayer).textContent = 0;
  playerSectionEl(currentPlayer).classList.toggle("player--active");
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  playerSectionEl(currentPlayer).classList.toggle("player--active");
};

// Set player cutoff
const playerWinValue = 20;

// Roll dice
btnRoll.addEventListener("click", () => {
  if (
    // Stop button if player wins
    !(arrPlayerScore[0] >= playerWinValue) &&
    !(arrPlayerScore[1] >= playerWinValue)
  ) {
    const diceRoll = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `./assets/dice-${diceRoll}.png`;
    diceEl.style.display = "block";

    if (diceRoll === 1) {
      // Switch player
      switchPlayer();
    } else {
      // Count dice roll
      let currentScore = playerCurrScoreEl(currentPlayer).textContent;
      currentScore = +currentScore + diceRoll;
      playerCurrScoreEl(currentPlayer).textContent = currentScore;
    }
  }
});

// Hold dice
btnHold.addEventListener("click", () => {
  if (
    // Stop button if player wins
    +playerCurrScoreEl(currentPlayer).textContent !== 0 &&
    !(arrPlayerScore[0] >= playerWinValue) &&
    !(arrPlayerScore[1] >= playerWinValue)
  ) {
    let score = +playerScoreEl(currentPlayer).textContent;
    score = score + +playerCurrScoreEl(currentPlayer).textContent;
    playerScoreEl(currentPlayer).textContent = score;

    // Update player score store
    arrPlayerScore[currentPlayer] = score;

    switchPlayer();
  }
});

// Reset game
btnReset.addEventListener("click", () => {
  // Restyle player section
  if (!playerSectionEl(0).classList.contains("player--active")) {
    playerSectionEl(0).classList.toggle("player--active");
    playerSectionEl(1).classList.toggle("player--active");
  }

  // Reset player score
  resetPlayerScore();

  // Reset player score store
  arrPlayerScore = [0, 0];

  // Reset player current score
  for (let i = 0; i < 2; i++) {
    playerCurrScoreEl(i).textContent = 0;
  }

  // Reset currentPlayer
  currentPlayer = 0;

  // Hide dice display
  diceEl.style.display = "none";
});
