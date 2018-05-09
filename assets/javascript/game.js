/// Variables

var currentWord = "";
var wins = 0;
var guessesRemaining = 10;

var arrayOfWords = ["bananas", "apple", "peach", "grape"];
var arrayOfGuesses = [];
var displayArray = [];

/// functions

function setWord() {
  currentWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
  console.log("This is your current word:" , currentWord);



  return currentWord;
};

function checkGuess(key) {
  console.log("checkGuess was called with", key);
  if (arrayOfGuesses.length === 0) {
    arrayOfGuesses.push(key);
  }
  if (arrayOfGuesses.includes(key)) {
    return;
  } else {
    arrayOfGuesses.push(key);
    guessesRemaining--;
    updateGuessesRemaining();
    console.log("This is your guesses remaining", guessesRemaining);
  }
};

function updateGuessesRemaining () {
    $(".guesses-left").html(guessesRemaining);

};

function checkLetter(key) {}

/// Main Computation

//sets your current word
setWord();
updateGuessesRemaining();

//

document.onkeyup = function(event) {
  //console logging
  console.log("This is your key in the onkeyup method", key);
  console.log("This is the arrayOfGuess", arrayOfGuesses);

  

  var key = event.key;

  //sets the word to be guessed

  // makes sure letter wasn't already guessed
  checkGuess(key);
};
