
var words = require("./words.js");
var game = require("./game.js")
var splitLetters = require("./words.js");
var chosenWord = require("./game.js");
var blankSpacesArray = require("./words.js")

var letterFound = false;

console.log(words.splitLetters);

function Letters(letter) {
	this.letter = letter;
	this.checkLetters = function () {
		for(var i = 0; i < splitLetters.length; i++) {
			if(splitLetters[i] === letter) {
				this.letterFound = true;
			}
		}

		if (this.letterFound) {
			for(var j = 0; j < splitLetters.length; j++) {

				if(splitLetters[j] === letter) {
					blankSpacesArray[j] = this.letter;
					console.log("Correct!");
				}
			}

			
		}

		else {
			console.log("Wrong guess!");
		}
	}
} // letter function ends here

var newLetter = new Letters("e");
module.exports = Letters;
// module.exports = letterFound;
console.log(splitLetters);