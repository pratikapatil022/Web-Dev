// var input = prompt("What would you like to do?");
// var list = [];
// while (input !== "quit") {
//     if (input === "list") {
//         list.forEach(function (each, i) {
//             console.log(i + ": " + each)
//         });
//     }
//     else if (input === "new") {
//         var newthing = prompt("What is New to the list?")
//         list.push(newthing);
//         console.log("New item added....")
//     }
//     else if (input === "delete") {
//         var boom = prompt("What index would you like to get rid of ??")
//         list.splice(boom, 1)
//         console.log("Item deleted.....Boom HA HA")
//     }
//     var input = prompt("What would you like to do?");

// }
// console.log("OOOOK!!!!!! Looks like you are done with this productivity thing.....")


function printReverse(list) {
    var size = list.length;
    for (var i = size - 1; i >= 0; i -= 1) {
        console.log(list[i]);
    }
}

printReverse([1, 5, 3, 4, 7]);

function isUniform(list1) {
    var first = list1[0];
    for (var i = 0; i < list1.length; i += 1) {
        if (first !== list1[i]) {
            return false;
        }
    }
    return true;
}

isUniform([1, 5, 3, 4, 7]);

// sum of all the elements of the array

function arraySum(list2) {
    var total = 0;
    list2.forEach(function (elements) {
        total += elements;
    });
    return total
}

arraySum([1, 5, 3, 4, 7]);

// find the max in the array you  know init
function arrayMax(arr) {
    var max = arr[0]
    arr.forEach(function (element) {
        if (arr[0] < element);
        max = element
    })
    return max
}
arrayMax([1, 5, 3, 4, 7]);