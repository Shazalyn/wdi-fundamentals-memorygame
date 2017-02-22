console.log("JS file is connected to HTML! Woo!");

// assign values to cards of queen or king//

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//section 11.1
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
//section 11.3 setup each card with in the crateBoard() function. loop the [cards] and give each element an attribute that = the card value ir'queen'//
// cardeElement.setAttribute('data-card', cards[i]);
//get an element with the id of game-board and sit it to a variable//
var createCards = function()

var gameboard = document.getElementById('game-board');
// assuming your memory card game consists of 4 cards, creat a for loop that creates an HTML element for each card. Each HTML element should be a div and have the class card//
for (var i = 0; i < cards.length; i++) {
	cards[i]
}
}


//append each newly created card to the div with the ID game-board//

//Old original
// check for boolean equality between cards //
//comment out if statement from before//
//if (cardTwo === cardFour) {
 // alert('you have found a match!');
//} else {
 // alert('sorry, try again');
//}//
