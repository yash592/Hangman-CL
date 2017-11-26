// 2. Feel free to use as many different types of constructor functions as you are able to, but at a minimum, 
// you must create the following constructor functions:

//   * **Word**: Used to create an object representing the current word the user is attempting to guess. 
//   This should contain word specific logic and data.

//   * **Letter**: Used for each letter in the current word. 
//   Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), 
//   depending on whether or not the user has guessed the letter.
//    This should contain letter specific logic and data.

var letters =  require("./letters.js");
var words = require("./words.js");

var wordBank = ["Delhi", "Abuja", "Helsinki", "Dhaka", "Reykjavik", "Moscow", "Kiev", "Kathmandu"];

var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(chosenWord);

var wordOne = new words(chosenWord);

console.log(wordOne);

wordOne.makeUnderScores(wordOne);