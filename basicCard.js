// function to create our basic flashcards with a front and back, question and answer.
var basicCard = function() {


var fs = require('fs'); // file system

// constructor function for creating basic cards
function createBasicCard(question, answer) {
	this.question = question;
	this.answer = answer;
}

var firstCard = new createBasicCard("Who was the first president of the United States?", "George Washington");

console.log(firstCard.question);
console.log(firstCard.answer);
};

basicCard();

// exporting our function
module.exports = basicCard;
