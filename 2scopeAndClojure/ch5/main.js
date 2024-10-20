/*
Chapter 5: The (Not So) Secret Lifecycle of Variables. (Hoisting (Lifting))

every identifier is
created at the beginning of the scope it belongs to, every time that
scope is entered.

Hoisting (Lifting)

function hoisting
When you enter a scope function declaration name identifier is registered at the top of its scope, it's additionally
auto-initialized to that function's reference.
 */

hello();

function hello() {
    console.log("hello");
}


/*
One key detail is that both function hoisting and var -flavored variable
hoisting attach their name identifiers to the nearest enclosing function
scope (or, if none, the global scope), not a block scope.
let and const attach themselves to nearest block scope.


Function hoisting only applies to formal function declarations
 */

// hello1(); // this will throw TypeError because hello1 is declared but it's not holding function reference value.
// Since binding haven't happened because of function expression declaration. Formal function declaration would have
// worked just fine.
// var will get 'undefined' once it is hoisted. Later var value can be reassigned.
var hello1 = function hello1() {
    console.log("hello1");
}


/*

hoisting.
Moving variables and function up in scope so you can reference them first and declare later.

function hoisting.
Function is hoisted but with function reference attached to function name at the moment of hoisting.
var hoisting. gets undefined while hoisting.



I assert that hoisting should be used to refer to the compile-time
operation of generating runtime instructions for the automatic
registration of a variable at the beginning of its scope, each time that scope
is entered.

Since hoisting is actually about registering a variable at the beginning of a
scope,


Syntax errors represent faults in
the program that stop it from even starting execution. Type errors
represent faults that arise during program execution.
you defined type and you use it wrongly. Only way to figure it out is at runtime. Hence typeError.

 */


/*
Loops
 */

var keepGoing = true;
while (keepGoing) {
    let value = Math.random(); // scope for loop is created for each loop cycle. So value is created once per scope.
    // Everything is fine. What would happen if I change let to var. Then I think it will be re-declaration of var.
    // And because of hoisting nothing bad happens. Because var will be declared only once. And then each time
    // var value = Math.random();    // var part will be omitted because it has already been declared by hoisting at
    // the beginning on only assignment part would be applied.
    if (value > 0.5) {
        keepGoing = false;
    }
}

/*
for..in
for..of


TDZ
Temporal Dead Zone
 */

// console.log(mySpecialHello);
//
// let mySpecialHello = "hello";


/*
The real question is, how do we initialize an uninitialized variable? For
let / const , the only way to do so is with an assignment attached to a
declaration statement.


let and const can be initialized only during assignment attached to a declaration statement.

The TDZ is the time window where a variable exists but is still
uninitialized, and therefore cannot be accessed in any way.
 */

/*
Example of TDZ
 */
// askQuestion();
// // ReferenceError
// let studentName = "Suzy";
// function askQuestion() {
//     console.log(`${ studentName }, do you know?`);
// }



let bohdan = "Bohdan";
console.log(bohdan);
bohdan = "Bo";
console.log(bohdan);

/*
There's a common misconception that TDZ means let and const do not
hoist. This is an inaccurate, or at least slightly misleading, claim. They
definitely hoist.
The actual difference is that let / const declarations do not
automatically initialize at the beginning of the scope, the way var does.
 */



var studentName = "Kyle";

{
    // console.log(studentName); This proves that studentName is hoisted.
    let studentName = "Sarah";
    console.log(studentName);
}
/*
So to summarize, TDZ errors occur because let / const declarations do
hoist their declarations to the top of their scopes, but unlike var , they
defer the auto-initialization of their variables until the moment in the
code's sequencing where the original declaration appeared. This window
of time (hint: temporal), whatever its length, is the TDZ.
 */

