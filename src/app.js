import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumberOfArray(array) {
	return Math.floor(Math.random() * array.length)
}

window.onload = function () {
	//write your code here
	GenerateRandomCard();
};

function GenerateRandomCard() {
	let suits = ["♠", "♥",  "♣", "♦"];
	let ranks = ["A", 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
	let rank = randomNumberOfArray(ranks);
	let suit = randomNumberOfArray(suits);
	let text = document.querySelector("body")
	if (suit %2 === 0) text.style.color = "black";
	else text.style.color = "red";
	document.querySelector("span").innerHTML = ranks[rank];
	document.querySelector("header").innerHTML = suits[suit];
	document.querySelector("footer").innerHTML = suits[suit];
}