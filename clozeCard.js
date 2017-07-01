// function to create our clozeCards as a var to be exported
var clozeCards = function() {

	// creating cards
    function createClozeCard(text, cloze) {
        this.cloze = cloze;
        this.fullText = text;
        this.partialText = this.fullText.replace(this.cloze, '____________');
    };

    // array to hold all our created questions
    var clozeQuestions = [];

    // creating questions
    var nbaFinals = new createClozeCard("The damn Warriors won the 2017 NBA Finals.", "Warriors");
    var worldSeries = new createClozeCard("The Chicago Cubs won the World Series in 2016.", "Chicago Cubs");
    var terminator = new createClozeCard("Arnold Schwarzenegger is the Terminator.", "Arnold Schwarzenegger");

    // pushing our questions to our array
    clozeQuestions.push(nbaFinals);
    clozeQuestions.push(worldSeries);
    clozeQuestions.push(terminator);

    // log to list all questions
    // console.log(clozeQuestions);

    // for loop to run through array and display questions
    for (var i = 0; i < clozeQuestions.length; i++) {

    	// building out the response in the terminal
    	console.log("\nQuestion:\n");
        console.log(clozeQuestions[i].partialText);
        console.log("\nAnswer: " + clozeQuestions[i].cloze);
        console.log(clozeQuestions[i].fullText + "\n");
    }
};

// call to create clozeCards
// clozeCards();

// exporting our function
module.exports = clozeCards;
