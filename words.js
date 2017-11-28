// Word logic goes in this file



var game = require("./game.js");
// var letters = require("./letters.js");
// var splitLetters = "";
var blankSpacesArray = [];

// var letterFound = false;

// =========================================

// WORD CONSTRUCTOR HAVING LOGIC FOR MAKING
// UNDERSCORES OF WORDS AND CHECKING USER
// GUESSES AND POPULATING THE BLANK SPACES

// =========================================


function Word(word) {
	this.word = word;	
	this.blankSpacesArray = [];
	this.splitLetters = word.split("");
	
	this.makeUnderScores = function () {
		for (var i = 0; i < this.splitLetters.length; i ++) {
			this.blankSpacesArray.push("_");
		}

		// console.log(this.blankSpacesArray);
		
	};

	this.blankWords = this.blankSpacesArray.join(" ");
	console.log(this.blankWords);
	// console.log(this.splitLetters);
	// this.letter = letter;
	this.checkLetter = function(letter) {
		for(var i = 0; i < this.splitLetters.length; i ++) {
			if(this.splitLetters[i] === letter) {
				this.letterFound = true;
			}
		}

		if(this.letterFound) {
			for(var j = 0; j < this.splitLetters.length; j++) {
				if(this.splitLetters[j]  === letter) {
					this.blankSpacesArray[j] = letter;
					console.log("Correct!")
				}
			}

			console.log(this.blankSpacesArray);
		}

		else {
			console.log("Wrong!");
		}
	}


	

}; // Word function ends here

// var wordOne = new Word("Hispanic");
// console.log(wordOne);
// wordOne.makeUnderScores(wordOne);
// console.log(wordOne.makeUnderScores(wordOne));

module.exports = Word;
// module.exports.splitLetters =  splitLetters;
// module.exports.blankSpacesArray = blankSpacesArray;