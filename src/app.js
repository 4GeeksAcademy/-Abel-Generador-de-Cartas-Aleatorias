import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumberOfArray(array) {
	return Math.floor(Math.random() * array.length)
}

const GenerateRandomCard = (e) => {
	let suits = ["♠", "♥", "♣", "♦"];
	let ranks = ["A", 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
	let rank = randomNumberOfArray(ranks);
	let suit = randomNumberOfArray(suits);
	let color = (suit % 2 === 0) ? "black" : "red";
	let newCard = `
			<div class="card" style="width: 18rem;">
				<div class="card-body">
				<header style='color: ${color};'>${suits[suit]}</header>
				<div class="content"><span class="rank">${ranks[rank]}</span></div>
				<footer style="color: ${color};">${suits[suit]}</footer>
				</div>
			</div>
			`
	document.querySelector("#cards").innerHTML += newCard;
}


window.onload = function () {
	//write your code here
	GenerateRandomCard();
	document.querySelector("#createNewCard").addEventListener("click", GenerateRandomCard);
};



