/*
Chapter 5: The (Not So) Secret Lifecycle of Variables

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
 */



