var randomNumber = Math.random();

randomNumber = randomNumber * 6;

randomNumber = Math.floor(randomNumber) + 1;
console.log(randomNumber);

if(randomNumber === 1){
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice1.png")
}else if (randomNumber === 2){
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice2.png")
}
else if (randomNumber === 3){
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice3.png")
}
else if (randomNumber === 4){
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice4.png")
}
else if (randomNumber === 5){
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice5.png")
}
else if (randomNumber === 6){
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice6.png")
}



var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

if(randomNumber2 === 1){
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice1.png")
}else if (randomNumber2 === 2){
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice2.png")
}
else if (randomNumber2 === 3){
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice3.png")
}
else if (randomNumber2 === 4){
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice4.png")
}
else if (randomNumber2 === 5){
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice5.png")
}
else if (randomNumber2 === 6){
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice6.png")
}


if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}