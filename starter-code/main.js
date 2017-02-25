console.log("JS file is connected to HTML! Woo!");

// assign values to cards of queen or king//

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//section 11.1
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
//section 11.3 setup each card with in the createBoard() function. loop the [cards] and give each element an attribute that = the card value ir'queen'//
// cardeElement.setAttribute('data-card', cards[i]);
//get an element with the id of game-board and sit it to a variable//



//#8 create a function called createCards in JS file. This function will contain the code from #5,6,7 above//
function createCards(){

//#5 get an element with the id of game-board and set it to a variable.
var gameBoard = document.getElementById(game-board);
//#6 create a for loop 
  for (var i = 0; i < cards.length; i++) {

//#6.2that creates an HTML element for each card.  	
  	var makeCard = document.createElement('div');
  }
//#6.3 Each HTML element should be a div and have the class card. 
makeCard.className ='cards';

//other part of the for loop that sets the innerHtml to be an element of the arry
makeCard.innerHtml = cards[i];
// #7append each newly created card to the dive with the ID game Board

gameBoard.appendChild(makeCard);






}

//#9 Be sure to execute/fire your createCards function so it runs!
createCards();
//Old original


// check for boolean equality between cards //
//comment out if statement from before//
//if (cardTwo === cardFour) {
 // alert('you have found a match!');
//} else {
 // alert('sorry, try again');
//}//
