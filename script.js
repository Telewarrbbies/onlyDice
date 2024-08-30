var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice= "dice" + randomNumber1 +  ".png";

var Image1 = document.querySelectorAll("img")[1];

Image1.setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";

var Image2 = document.querySelectorAll("img")[2]

Image2.setAttribute("src", randomDice2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML =('<H1>PLAYER 1 wins🎉✨</H1>')
}
else if(randomNumber1 < randomNumber2){ 
    document.querySelector("h2").innerHTML =('<h1>PLAYER 2 wins🎉✨</h1>')
}
else if(randomNumber1 = randomNumber2){
    document.querySelector("h2").innerHTML=("<h1>Its a TIE, play again</h1>")
};