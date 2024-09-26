/*
Iterable
iterator() -> Iterator
Each time you invoke iterator from iterable you get new instance of Iterator that will walk you through iterable.

Iterator
hasNext()
next()
 */


var it = [1, 2, 3, 4, 5];

for (let val of it) { // iterator syntax build into js.
    console.log(val);
}


// ... operator. spread and gather. The spread form is an iterator consumer.

var myNewArray = [...it]; // now I have new array with copied data from 'it' array.
// another example of ... operator is to pass all values from iterable object to function arguments.

function myFund(a, b, c, d, e) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

console.log("/--------------/")
myFund(...it);



// string, array, maps, sets and others are iterable.
var arr = [10, 20, 30];
for (let val of arr) {
    console.log(`Array value: ${val}`);
}

var arrCopy = [...arr];

var greetings = "Hello world!";
var chars = [...greetings];
console.log(chars);

var btn1 = 1;
var btn2 = 2;


var buttonNames = new Map(); // map consists of entry which is two element array.
buttonNames.set(btn1, "Button 1");
buttonNames.set(btn2, "Button 2");

console.log("/------------ without array destructuring ---------/")

for (let entry of buttonNames) {
    console.log(entry[0], entry[1]);
}

console.log("/------------ with array destructuring ---------/")

for (let [btn, btnName] of buttonNames) { // array destructuring
    console.log(btn, btnName);
}
console.log("/------------ only values ---------/")

for (let btnName of buttonNames.values()) { // array destructuring
    console.log(btnName);
}

console.log("/------------ example with array inx and value. entries() method on array ---------/")

for (let [idx, val] of arr.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}

console.log("/------------ same as above but with ordinary for loop ---------/")

for (var i = 0; i < arr.length; i++) {
    console.log(`[${ i }]: ${ arr[i] }`);
}

// Three popular iterators are keys(), values() and entries().
