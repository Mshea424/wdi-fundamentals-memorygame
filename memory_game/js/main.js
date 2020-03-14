console.log("Up and running!");
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You found a Match!");
	}
	else {
		alert("Sorry, try again.");
	}
};