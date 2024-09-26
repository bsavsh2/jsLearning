/*
Clojure is when a function remembers and continues to access variables from outside its scope, even when function is executed in a different scope.
 */

function outerFunction(i){

    return function multiplyByI(b) {
        return b * i;
    }
}

var myFund = outerFunction(10);
console.log(myFund(2));


// Kyle's example
function greeting(msg) {
    return function who(name) {
        console.log(`${msg} ${name}`);
    }
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");
hello("Bohdan");
hello("Ira");
howdy("Grant");

/* FUCKING IMPORTANT. Clojure in JS have direct link to variable not a snapshot of it.
These closures are not a snapshot of the msg variable’s value;
they are a direct link and preservation of the variable itself.
That means closure can actually observe (or make!) updates
to these variables over time
 */

function counter(step) {
    var count = 0;
    return function increaseCount() {
        count = count + step;
        return count;
    }
}

var increaseBy1 = counter(1);
var increaseBy3 = counter(3);

console.log(increaseBy1());
console.log(increaseBy1());
console.log(increaseBy1());
console.log(increaseBy3());
console.log(increaseBy3());
console.log(increaseBy3());

