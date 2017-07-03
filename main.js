'use-strict';

// Flashcard aplication to build cards based on input

// REQUIRED VARIABLES
// ====================================================

// requiring npm's, and declaring CL input, reading exports
var fs = require('fs'); // file system
var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard.js');

// dependency for inquirer npm package
const inquirer = require("inquirer");

// FUNCTIONS TO RUN APP
// ====================================================

// inquirer app to allow user to choose which card they would like to make
inquirer.prompt([{
    name: "chooseCard",
    message: "Which set of flashcards would you like to view?",
    choices: ["Basic Cards", "Cloze Cards"],
    type: "list"
}]).then(function(cardChoice) {
    if (cardChoice.chooseCard === 'Basic Cards') {
        console.log("User has chosen to view the Basic Flashcards:");
        basicCard();
    } else if (cardChoice.chooseCard === 'Cloze Cards') {
        console.log("User has chosen to view the Cloze Flashcards:");
        clozeCard();
    }
});
