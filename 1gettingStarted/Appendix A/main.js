/*


PRIMITIVE VALUES VS OBJECT REFERENCES.
Primitives are held by value, objects are held by reference.

Function Forms:


coercive conditional comparison

Prototypal "Classes"
 */

var awesomeFunction = function () {
    console.log("Anonymous function expression");
}
awesomeFunction();

var secondAwesomeFunction = function someName() {
    console.log("Named function expression"); // I can call myself for recursion.
}

class SomeClass {
    coolMethod() {} // no commas
    coolMethod1() {} // no commas

}

// Object.create to link new objects to its prototype
var Classroom = {
    welcome() {
        console.log("Welcome to the classroom!");
    }
}

var mathClass = Object.create(Classroom);
mathClass.welcome();

// Prototypal pattern
// all functions by default link to empty object prototype. When you call a function with new keyword it will link
// newly create object to that empty prototype object of function. But it's not function's prototype.
// don't use this pattern to create classes. Use instead ES6 classes.
function Classroom1() {

}

Classroom1.prototype.welcome = function hello() {
    console.log("Welcome students!");
}

var mathClass1 = new Classroom1();
mathClass1.welcome();


// ES6 classes
class Classroom2 {
    constructor() {
    }

    welcome() {
        console.log("Welcome to the classroom!");
    }
}

var mathClass2 = new Classroom2();
mathClass2.welcome();