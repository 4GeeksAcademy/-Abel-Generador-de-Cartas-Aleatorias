import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumberOfArray(array) {
	return Math.floor(Math.random() * array.length)
}

const GenerateRandomCard = () => {
	let suits = ["♠", "♥", "♣", "♦"];
	let ranks = ["A", 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
	let rank = randomNumberOfArray(ranks);
	let suit = randomNumberOfArray(suits);
	let color = (suit % 2 === 0) ? "black" : "red";
	let newCard = `
			<div class="card">
				<div class="card-body">
				<header style='color: ${color};'>${suits[suit]}</header>
				<div class="content"><span class="rank">${ranks[rank]}</span></div>
				<footer style="color: ${color};">${suits[suit]}</footer>
				</div>
			</div>
			`
	document.querySelector("#cards").innerHTML += newCard;
}

const resizingCards = () => {
	console.log("resizingCards");
	const widthCard = document.querySelector("#widthCard").value;
	const heightCard = document.querySelector("#heightCard").value;
	const cards = document.querySelectorAll(".card");
	cards.forEach(card => {
		card.style.width = widthCard + "px";
		card.style.fontSize = (card.style.width) ? 
							`${widthCard * 40/100}px` : 
							`${card.computedStyleMap().get("width").value *40/100 }px`;
		card.style.height = heightCard + "px";
	});
}


window.onload = function () {
	//write your code here
	GenerateRandomCard();
	resizingCards();
	document.querySelector("#createNewCard").addEventListener("click", () => {
		GenerateRandomCard();
		resizingCards();
	});
	// setInterval(GenerateRandomCard, 10000);
	document.querySelectorAll("#widthCard, #heightCard").forEach(input => {
		input.addEventListener("input", resizingCards);
	});
};



