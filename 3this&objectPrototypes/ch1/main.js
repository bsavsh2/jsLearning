/*
Ch1: this Or That?
this is the execution context (metadata of a method where it was called etc)

Technically this is referencing who called a method. Or just execution context.

Here are Kyle's words
this is actually a binding that is made when a function is invoked,
and what it references is determined entirely by the call-site where the function
is called.

Main idea is that this is execution context and where the function is called determines what "this" in that function
 will mean.

 */

function indentify1() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + indentify1.call(this);
    console.log(greeting);
}

var me = {
    name: "Kyle"
}

var you1 = {
    name: "Reader"
}

console.log(indentify1.call(me));
console.log(indentify1.call(you1));

speak.call(me);
speak.call(you1);

