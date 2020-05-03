var realnumber = 12;
var number = prompt("Guess the number here-");
if (Number(number) === realnumber) {
    alert("Ayo this bitch got it right")
}
else if (Number(number) > 25) {
    alert("I can tell you that it isnt as high as you think try lower next time")
}
else if (Number(number) > realnumber) {
    alert("You are guessing a bit too high")
}
else if (Number(number) < realnumber) {
    alert("Try a higher number")
}
