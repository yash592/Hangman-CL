// Word logic goes in this file
// Setup word bank
// Select a random word from array

var game = require("./game.js");
var letters = require("./letters.js");
var splitLetters = "";
var blankSpacesArray = [];


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
	// console.log(this.blankWords);
	// console.log(this.splitLetters);
	

}; // Word function ends here

// var wordOne = new Word("Hispanic");
// console.log(wordOne);
// wordOne.makeUnderScores(wordOne);
// console.log(wordOne.makeUnderScores(wordOne));

module.exports = Word;
module.exports.splitLetters =  splitLetters;
module.exports.blankSpacesArray = blankSpacesArray;