var randomeNumber1 = Math.random();
var randomeNumber2 = Math.random();
randomeNumber1 = Math.floor(randomeNumber1 * 6) + 1;
randomeNumber2 = Math.floor(randomeNumber2 * 6) + 1;
var dice1 = "images/dice" + randomeNumber1 + ".png";
var dice2 = "images/dice" + randomeNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src", dice1);
document.querySelector("img.img2").setAttribute("src", dice2);
if (randomeNumber1 > randomeNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 wins! ";
} else if (randomeNumber1 < randomeNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 wins! &#128681";
} else {
    document.querySelector("h1").innerHTML = "Draw! ";

}