/*
Chapter 7: Using Closures

Our broad goal in
this book is not merely to understand scope, but to more effectively use it
in the structure of our programs; closure is central to that effort.

Closure gives a function access to its outer scope.
A Closure is the combination of a function bundled together(enclosed) with references to its surrounding state.
 */

function adder(num1) {
    return function addTo(num2) {
        return num1 + num2;
    }
}

var add42to = adder(42);
console.log(add42to(9));
var add10to = adder(10);
console.log(add10to(15));


/*
each function has it's closure.
 */

/*
Link not Snapshot
 */


function makeCounter() {
    var count = 0;

    return function getCounter() {
        count = count + 1;
        return count;
    }
}

var hits = makeCounter();

console.log("---- hits ------");
hits();
hits();
hits();
console.log(hits());




console.log("------------ keeps -----------")
var keeps = [];
for (var i = 0; i < 3; i++) { // try to change var to let.
    keeps[i] = function keepI() {
        return i;
    }
}

console.log(keeps[0]());
console.log(keeps[1]());
console.log(keeps[2]());