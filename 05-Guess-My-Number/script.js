"use strict";

// Generate random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Show secret number: DEMO
// document.querySelector(".number").textContent = secretNumber;

// Selecting elements
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const playTimesEl = document.querySelector(".play-times");
const guessEl = document.querySelector(".guess");
const btnCheckEl = document.querySelector(".btn.check");
const btnAgainEl = document.querySelector(".btn.again");

// Set initial values
const score = 20;
let mutScore = score;
scoreEl.textContent = score;

let highScore = 0;
highScoreEl.textContent = highScore;

let message = "Start guessing...";
messageEl.textContent = message;

let playTimes = 0;
playTimesEl.textContent = playTimes;

// Action functions
const tooHighLow = (message) => {
  messageEl.textContent = message;
  mutScore--;
  scoreEl.textContent = mutScore;
};

const youWin = () => {
  messageEl.textContent = "🎉 You Win!";
  document.body.classList.add("body-green-bg"); // Change background to green
  highScoreEl.textContent = mutScore;
  playTimes++;
  playTimesEl.textContent = playTimes;
};

// Run game on click
btnCheckEl.addEventListener("click", () => {
  const guess = Number(guessEl.value);
  // console.log(guess, typeof guess); // DEMO

  if (guess === secretNumber) {
    youWin();
  } else {
    if (guess > secretNumber) {
      tooHighLow("📈 Too High!");
    } else {
      tooHighLow("📉 Too Low!");
    }
  }
});

// Run game on Enter keypress (keydown)
guessEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const guess = Number(guessEl.value);

    if (guess === secretNumber) {
      youWin();
    } else {
      if (guess > secretNumber) {
        tooHighLow("📈 Too High!");
      } else {
        tooHighLow("📉 Too Low!");
      }
    }
  }
});

// Reset game
btnAgainEl.addEventListener("click", () => {
  messageEl.textContent = message;
  document.body.classList.remove("body-green-bg"); // Change background to green
  highScoreEl.textContent = mutScore;
  scoreEl.textContent = score;
  mutScore = score;
  guessEl.value = "";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
