/*
Chapter 1: What's the scope?

compiled vs interpreted.

compiled
input -> all at once -> machine code -> only then execution

interpreted each line is converted to machine code and executed right away.

compilation steps:
tokenizing -> ast -> code generation
js engine does compilation step right before execution of a program. So it has only few microsecond to do it.
Comparing to java where compilation step is performed ahead of time.

Most important so far is that js is first compiled/analyzed and only then executed.
 */


/*
first prove
that
js first compile and only then executes
 */

var greeting1 = "hello";

console.log(greeting1);

// greeting = ."NO"; // uncomment this to see the first prove.

/*
second prove
early errors
 */
console.log("Howdy");
saySomething("Hello", "Hi");

function saySomething(greeting, greeting) {
    // "use strict" // uncomment this to see the second prove
    console.log(greeting);
}

/*
third prove
hoisting
 */

function sayHi() {
    var myVar = "Hello";
    {
        myVar = "Howdy";
        let myVar = "Hi";
        console.log(myVar);
    }
}
// sayHi(); // uncomment this to see the third prove.



console.log("-----------------");


var students = [
    {id: 14, name: "Kyle"},
    {id: 25, name: "Sarah"},
    {id: 73, name: "Suzy"},
];

function getStudentName(studentId) {
    for (let student of students) {
        if (student.id == studentId) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);
console.log(nextStudent);

/*
Lexical scope.
At compilation js identifies what scopes are there and which variables are used in which scope.
Just keep going.
Don't really understand everything here.
source/target

scopes. general idea is clear.
 */