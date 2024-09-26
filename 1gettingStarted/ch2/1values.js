/*

string
number
boolean
bigint
symbol
null
undefined


 */

console.log("Hello, IdeaProjects!");

var names = ["Frank", "Kyle", "Peter", "Susan"]; // array

console.log(names[0]);
console.log(typeof names);

var me = {
    first: "John",
    last: "Doe",
    age: 39,
    specialities: ["JS", "Table Tennis"]
}

console.log(`My name is ${me.first}`);
console.log("----------");
console.log(typeof 42);
console.log(typeof "abc");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {"a": 1});
console.log(typeof [1, 2, 3, 4, 5]);
console.log(typeof function hello(){});