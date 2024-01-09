'use strict';

// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0EL = document.querySelector('#score--0');
// const score1EL = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0EL.textContent = 0;
//   score1EL.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };

// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   currentScore = 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // roll dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generate a random dice roll
//     const dice = Math.trunc(Math.random() * 6 + 1);
//     // console.log(dice);
//     // 2. display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. check for rolled 1
//     if (dice != 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // switch to next player
//       switchPlayer();
//     }
//   }
// });

// // Hold functionality
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     // scores[1] = scores[1] + currentScore;
//     scores[activePlayer] += currentScore;

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // finsh the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.romove('player--active');
//     } else {
//       // switch to the next player
//       switchPlayer();
//     }
//   }
// });

// // New game functionality
// btnNew.addEventListener('click', init);
// ---------------------------------------------------------
// Starting over by myself
//New game btn
const btnNew = document.querySelector('.btn--new');

// Roll Dice btn
const btnRoll = document.querySelector('.btn--roll');

// Hold btn
const btnHold = document.querySelector('.btn--hold');

//changed the scored on player1
const score0 = document.querySelector('#score--0');
score0.textContent = 0;
//changed the scored on player2
const score1 = document.querySelector('#score--1');
score1.textContent = 0;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// hide the dice img
const diceImg = document.querySelector('.dice');
diceImg.classList.add('hidden');

// Accessing current
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

let currentScore;
let activePlayer;
let score;
let playing;

// to initiliaze
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;

  // reset player 1 total score and current score
  score0.textContent = 0;
  current0.textContent = 0;

  // reset player 2 total score and current score
  score1.textContent = 0;
  current1.textContent = 0;

  // hide the dice img
  diceImg.classList.add('hidden');

  // Set player 1 as the active player
  player0.classList.add('player--active');

  //Remove the winner animation from player 1 & 2
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};
init();

// switch player function
const switchPlayer = function () {
  // 4.if not switch to player 2
  // reset the current score to 0
  currentScore = 0;
  // reset the current score of player 1 to
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  // currentScore = currentScore + dice;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random roll dice number 1-6
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    // 2. Display the dice roll
    // remove the hidden class on img
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;
    // 3. if dice is not 1
    if (dice != 1) {
      // Add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// btn hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to the total score
    score[activePlayer] = score[activePlayer] + currentScore;
    // Update the total score dynamically
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // Total score >= 100
    if (score[activePlayer] >= 10) {
      playing = false;
      diceImg.classList.add('hidden');
      // current player wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // Switch player
      switchPlayer();
    }
  }
});
