// Word logic goes in this file
// Setup word bank
// Select a random word from array

// var wordBank = [];
// var randomWord = "";

function Word(word) {
	this.word = word;	
	this.blankSpacesArray = [];
	this.letters = word.split("");	
	this.makeUnderScores = function () {
		for (var i = 0; i < this.letters.length; i ++) {
			this.blankSpacesArray.push("_");
		}

		console.log(this.blankSpacesArray);
		
	};







}; // Word function ends here

var wordOne = new Word("Hispanic");

module.exports = Word;