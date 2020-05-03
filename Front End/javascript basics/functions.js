// function test(x, y) {
//     return y - x
// }
// console.log(test(10, 40))

// function isEven(num) {
//     if (num % 2 == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isEven(21));

// function factorial(num) {
//     var result = 1
//     for (var i = 1; i <= num; i++) {
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(4))

// function generate(str) {
//     var newstr = str.replace(/superman/gi, "ultraman");
//     return newstr

// }
// console.log(generate("superman-sucks"));

console.log("lets make a few arrays");
var friends = ["Ashish", "Pratik", "Superman", "Batman"];
console.log(friends[2]);
console.log(friends[0] + " " + friends[1] + " Are not friends");
friends[0] = "not Ashish";
console.log(friends[0] + " " + friends[1] + " Are not friends");