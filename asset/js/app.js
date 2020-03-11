let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton = document.querySelector('.resetButon');
resetButton.style.visibility = "hidden";


guessSubmit.addEventListener("click", function (e) {
   e.preventDefault();
   checkGuess();
});


function checkGuess() {


   let userGuess = Number(guessField.value);
   if (guessCount === 1) {
      guesses.textContent = 'Propositions précédentes : ';
   }
   guesses.textContent += userGuess + ' ';

   console.log(guessCount);
   
// ANCIEN CODE

   // si le numéro de l'utilisateur est egal au numero de l'ordinateur et que le nombre de coups est inférieur a 10
   if (userGuess === randomNumber && guessCount < 10) {
      lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
      lastResult.style.color = 'green';
      lowOrHi.textContent = '';
      setGameWin();
   } 
// sinon si le nombre de coup est égal a 10
   else if (guessCount === 10) {
      setGameOver();
   } else {
      lastResult.textContent = 'Faux !';
      lastResult.style.color = 'red';
      if (userGuess < randomNumber) {
         lowOrHi.textContent = "c'est plus !";
      } else if (userGuess > randomNumber) {
         lowOrHi.textContent = "c'est moins !";
      }
   }

guessCount++;
guessField.value = '';
guessField.focus();
}


function setGameWin() {
   guessField.disabled = true;
   guessSubmit.disabled = true;
   resetButton.style.visibility = "hidden";
   resetButton.addEventListener('click', resetGame(), exit);
}


function setGameOver() {
   lastResult.textContent = '!!! PERDU !!!';
   lowOrHi.textContent = "";
   guesses.textContent = "";
   resetButton.style.visibility = "hidden";
   guessField.disabled = true;
   guessSubmit.disabled = true;
   document.body.appendChild(resetButton);
   resetButton.addEventListener('click', resetGame());
   exit;
}

function resetGame() {
   guessCount = 1;
   let resetParas = document.querySelectorAll('.resultParas p');
   for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = '';
   }
   resetButton.parentNode.removeChild(resetButton);
   guessField.disabled = false;
   guessSubmit.disabled = false;
   guessField.value = '';
   guessField.focus();
   lastResult.style.backgroundColor = 'white';
   randomNumber = Math.floor(Math.random() * 100) + 1;
}