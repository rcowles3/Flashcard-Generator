// function to create our basic flashcards with a front and back, question and answer.
var basicCard = function() {

    // constructor function for creating basic cards
    function createBasicCard(front, back) {
        this.front = front;
        this.back = back;
    }

    // array to hold our basic questions
    var basicQuestions = [];

    // creating our cards
    var firstPresident = new createBasicCard("Who was the first president of the United States?", "George Washington");
    var currentPresident = new createBasicCard("Who is currently the President of The United States?", "Donald Trump");
    var lastPresident = new createBasicCard("Who was the last President of The United States?", "Barrack Obama");

    // pushing our questions to an array
    basicQuestions.push(firstPresident);
    basicQuestions.push(currentPresident);
    basicQuestions.push(lastPresident);

    // log to check arrary
    // console.log(basicQuestions);

    // for loop to run through array, and display questions
    for (var i = 0; i < basicQuestions.length; i++) {

    	// loggin questions
    	console.log("\nQuestion:\n");
        console.log(basicQuestions[i].front);
        console.log("\nAnswer:\n");
        console.log(basicQuestions[i].back + "\n");
    }
};

// call to create cards
// basicCard();

// exporting our function
module.exports = basicCard;
