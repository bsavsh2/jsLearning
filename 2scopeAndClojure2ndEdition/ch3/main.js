/*

Chapter 3: The Scope Chain

Not all combinations of declaration shadowing are allowed. let can
shadow var , but var cannot shadow let :



named function expression
anonymous function expression
arrow functions (same rules of lexical scoping as in other functions)


When a function (declaration or expression) is defined, a new scope is
created.
The scope chain controls variable access, directionally oriented upward


 */
//
// function something() {
//     var special = "JavaScript";
//     {
//         let special = 42; // totally fine shadowing
// // ..
//     }
// }
// function another() {
// // ..
//     {
//         let special = "JavaScript";
//         {
//             var special = "JavaScript";
// // ^^^ Syntax Error
// // ..
//         }
//     }
// }

