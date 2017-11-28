// 2. Feel free to use as many different types of constructor functions as you are able to, but at a minimum, 
// you must create the following constructor functions:

//   * **Word**: Used to create an object representing the current word the user is attempting to guess. 
//   This should contain word specific logic and data.

//   * **Letter**: Used for each letter in the current word. 
//   Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), 
//   depending on whether or not the user has guessed the letter.
//    This should contain letter specific logic and data.

// var letters =  require("./letters.js");
var inquirer = require("inquirer");
var Words = require("./words.js");
var numGuesses = 5;
var wordOne;
var chosenWord;
var winCount = 0;
var lossCount = 0;
var blankSpacesArray = [];
var wrongGuessArray = [];


// =================================

// CAPITALS OF THE WORLD (WORD BANK)

// =================================


var wordBank = ["DELHI", "ABUJA", "HELSINKI", "DHAKA", "REYKJAVIK", "MOSCOW", "KIEV", "KATHMANDU"];

// START GAME 

function startGame () {

	chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	// console.log(chosenWord);

	wordOne = new Words(chosenWord);	

	wordOne.makeUnderScores();	

	blankWord = wordOne.blankSpacesArray.join(" ");

	console.log(blankWord);

	blankSpacesArray = [];

	wrongGuessArray = [];


};



// Starting with the prompts!

// confirm prompt to see if user wants to play

function readyToPlay () {

	inquirer.prompt([

	{
		type: "confirm",
		name: "PlayGame",
		message: "Guess the Capitals of the Countries! Ready to play?"
	}

		]).then (function(response) {

			if(response.PlayGame === true) {
				console.log("Let's go!");
				startGame();
				promptLetter();
			}

			else {
				console.log("Go away you Wuss");
			}

		}) //


};

readyToPlay();




	var count = 0;


	// function with prompts to guess a letter

	function promptLetter () {

		if (count < 13) {



	inquirer.prompt([
{
	type: "input",
	name: "letter",
	message: "Guess a letter!"
}

			]).then(function(response) {

			wordOne.checkLetter(response.letter.toUpperCase());

			numGuesses--;
			console.log("Guesses remaining: " + numGuesses);
             
            // console.log("You guessed a letter!");

            count++;            

            if(wordOne.splitLetters.toString() === wordOne.blankSpacesArray.toString()) {
            	console.log("You win!");
            	winCount++;         	
            	
            	console.log("Number of wins: " +winCount);
            	readyToPlay();
            }

            else if(numGuesses === 0) {
            	lossCount++;
            	console.log("You lost!");
            	console.log("Number of losses: " + lossCount);
            	readyToPlay();
            }

            

            promptLetter();

			});

		}

		



	} // prompt letter ends here



module.exports.chosenWord = chosenWord;