'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// roll dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  // console.log(dice);
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check for rolled 1
  if (dice != 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's score
  // scores[1] = scores[1] + currentScore;
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. Check if player's score is >= 100
  // finsh the game
  // switch to the next player
});

// player related
// const score0 = document.querySelector('#score--0');
// const score1 = document.querySelector('#score--1');
// const player1 = document.querySelector('.player--0');
// const player2 = document.querySelector('.player--1');
// const current1 = document.querySelector('#current--0');
// const current2 = document.querySelector('#current--1');
// // user interface
// const diceImg = document.querySelector('.dice');
// // buttons
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// score0.textContent = 0;
// score1.textContent = 0;

// // added a hidden style to the img
// diceImg.classList.add('hidden');
// // we start the score at∫ 0
// let score = [0, 0];
// // We start current score at 0
// let currentScore = 0;
// let activePlayer = 0;

// // roll dice functionality
// btnRoll.addEventListener('click', function () {
//   // 1. Generate a random dice roll
//   const dice = Math.trunc(Math.random() * 6 + 1);
//   console.log(dice);
//   // 2. display dice
//   diceImg.classList.remove('hidden');
//   diceImg.src = `dice-${dice}.png`;
//   // 3. check for rolled 1
//   if (dice != 1) {
//     //Add dice to current score
//     currentScore = currentScore + dice;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     // switch to next player
//     currentScore = 0;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player1.classList.toggle('player--active');
//     player2.classList.toggle('player--active');
//   }
// });
// btnHold.addEventListener('click', function () {
//   // if the activeplayer presses hold, save his score to score[0]
//   if (activePlayer) {
//     score;
//   }
//   //  else save activeplayer score to score[1]
// });
