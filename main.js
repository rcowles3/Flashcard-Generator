'use-strict';

// Flashcard aplication to build cards based on input

// REQUIRED VARIABLES
// ====================================================

// requiring npm's, and declaring CL input, reading exports
var fs = require('fs'); // file system
var searchArg = process.argv[3];
var nodeArg = process.argv[2];
var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard.js');

// dependency for inquirer npm package
const inquirer = require("inquirer");

// FUNCTIONS TO RUN APP
// ====================================================

// inquirer app to allow user to choose which card they would like to make
inquirer.prompt([{
    name: "chooseCard",
    message: "What kind of card would you like to create?",
    choices: ["Basic Card", "Cloze Card"],
    type: "list"
}]).then(function(cardChoice) {
    if (cardChoice.chooseCard === 'Basic Card') {
        console.log("user has chosen basic card, will run function");
        basicCard();
    } else if (cardChoice.chooseCard === 'Cloze Card') {
        console.log("user has chosen cloze card, will run function");
        clozeCard();
    }
    console.log(cardChoice.chooseCard);
});
