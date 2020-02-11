var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceArray = ["", "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function rollDice() {

  var dice1 = document.querySelector(".img1").setAttribute("src", "images/" + diceArray[randomNumber1]);
  var dice2 = document.querySelector(".img2").setAttribute("src", "images/" + diceArray[randomNumber2]);

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
  }
  return dice1;
  return dice2;

}
