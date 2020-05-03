var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var reset = document.querySelector("#reset");
var score1 = 0;
var score2 = 0;
var gameOver = false;
var winningScore = 5;
var inNum = document.querySelector("input");
var winscore = document.querySelector("p span");



player1.addEventListener("click", function () {
    if (gameOver == false) {
        score1++
        if (score1 === winningScore) {
            gameOver = true;
            s1.classList.add("green");
        }
        s1.textContent = score1;
    }

})

player2.addEventListener("click", function () {
    if (gameOver == false) {
        score2++
        if (score2 === winningScore) {
            gameOver = true
            s2.classList.add("green");

        }
        s2.textContent = score2;
    }
})

reset.addEventListener("click", function () {
    random();
})

function random() {
    score1 = 0;
    score2 = 0;
    s1.textContent = 0;
    s2.textContent = 0;
    gameOver = false;
    s1.classList.remove("green");
    s2.classList.remove("green");
}


inNum.addEventListener("change", function () {
    winscore.textContent = inNum.value;
    winningScore = Number(inNum.value);
    random();
});