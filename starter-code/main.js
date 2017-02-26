console.log("JS file is connected to HTML! Woot Woot!");

// assign values to cards of queen or king
//previous code
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//section 11.1 declare a variable, cards and set it equal to an array or four string elements
var cards = ['queen', 'queen', 'king', 'king'];
//#11.2 declare a variable cardInPlay whose vaue is an emppty array.
var cardsInPlay = [];

//#5 get an element with the id of game-board and set it to a variable.
var board = document.getElementById('game-board');

//#8 create a function called createCards in JS file. This function will contain the code from #5,6,7 above//
function createBoard(){

//#6 create a for loop 
//section 11.3 setup each card with in the createBoard() function. loop the [cards] and give each element an attribute that = the card value ir'queen'//
// cardeElement.setAttribute('data-card', cards[i]);
//11.3instead of looping throug a fixed number loop throught the length of the cards
  for (var i = 0; i < cards.length; i++) {
 
//#6.2that creates an HTML element for each card.  	
  	var cardElement = document.createElement('div');
  
//#6.3 Each HTML element should be a div and have the class card. 
	cardElement.className ='card';

//11.3 cont'd this will set the card's 'data-card' to be the elembnt of the array
//data - attributes are meant to store data about an element that is not tied to a style, ie, 'king'.
	cardElement.setAttribute('data-card', cards[i]);

//11.4 when a card is clicked the function isTwoCards will be executed
	cardElement.addEventListener('click', isTwoCards);

//other part of the for loop that sets the innerHtml to be an element of the arry
//not sure about this line of code, so commenting out for nowcardElement.innerHtml = cards[i];
// #7append each newly created card to the dive with the ID game Board

	board.appendChild(cardElement);
	}
}
//11.6 create a function to see if there are cards in play 
function isTwoCards() {
	//add card to array of cards in play 'this' hasn't been covered in this prework, 
	//but for now
	//just know it gives you access to the card the user clicked on 
	cardsInPlay.push(this.getAttribute('data-card'));

		//show the card's image
		console.log(this.getAttribute('data-card'));
		if(this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src = 'http://i.imgur.com/LglI1SJ.png'>";		
		} else {
			this.innerHTML = "<img src = 'http://i.imgur.com/mtSSIe6.png'>";
		}

	//if you have two cards in play, check for a match
	if (cardsInPlay.length === 2) {
		//pass the cardsInPlay as an argument to the isMatchfunction
		isMatch(cardsInPlay);

		//clear cards in play array for your next try
		cardsInPlay = [];
	}
}

//11.5 create a function called isMatch to test if two cards in play are a match. here comes the if/else!
//alert message go here
function isMatch(cards) {
	if(cards[0] === cards[1]) {
		alert("You have a match !!");
	} else {
		alert("Sorry, not a match :(");
	}
}
//#9 Be sure to execute/fire your createCards function so it runs!
createBoard();

