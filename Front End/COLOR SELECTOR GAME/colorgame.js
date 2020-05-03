var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var mes = "You  Got It Right";
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var button = document.querySelector("#button");
var header = document.getElementById("header");
colorDisplay.textContent = pickedColor;

button.addEventListener("click", function () {
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "#232323";
    displayMessage.textContent = "MAKE YOUR PICKS !!!"
})


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            displayMessage.textContent = "You Got It Right !!!";
            changeAllColor(clickedColor);
            document.getElementById("header").style.backgroundColor = clickedColor;
        } else {
            displayMessage.textContent = "You Got It Wrong !!!";
            this.style.backgroundColor = "#232323"
        }
    })
}


function changeAllColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(generateColor())
    }
    return arr
}

function generateColor() {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)

    return "rgb(" + red + ", " + green + ", " + green + ")"
}