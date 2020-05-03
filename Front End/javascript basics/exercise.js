var start = -10;
console.log("print all number from -10 to 19");
while (start <= 19) {
    console.log(start)
    start++;
}
var start1 = 10;
console.log("Print all even numbers from 10 to 40");
while (start1 <= 40) {
    if (start1 % 2 == 0) {
        console.log(start1);
    }
    start1++;
}

var start2 = 5;
console.log("Print all number that are divisible by 3 and 5 from 5 and 50");
while (start2 <= 50) {
    if (start2 % 15 == 0) {
        console.log(start2)
    }
    start2++
}
console.log("this one seperates the varable string characters");
var name = "superman"
for (var i = 0; i < name.length; i += 1) {
    console.log(name[i])
}
console.log("Let me use the above problems with for loop");
for (i = -10; i <= 19; i++) {
    console.log(i)
}
console.log("getting odd numbers with for loop in that");
for (i = 300; i <= 333; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }

}