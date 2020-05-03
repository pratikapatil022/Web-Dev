var button = document.querySelector("button");
var body = document.querySelector("body");
var click = false;

button.addEventListener("click", function () {
    if (click) {
        body.style.backgound = "darkgrey";
    } else {
        body.style.background = "lightgrey";
    }
    click != click
})