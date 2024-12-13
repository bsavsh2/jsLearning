/*
Chapter 4: Around the Global Scope



global scope.
shadowing of window.property. trick.
Idea is that scope will be different depending on env.

dom globals. Every id is a property on window object.

Web worker. Separate thread to run js in js engine. Doesn't have access to DOM.
Just as with main JS programs, var and function declarations create
mirrored properties on the global object (aka, self ), where other
declarations ( let , etc) do not.


global scope
everything is bundled together as one file.
Then basically bundle tool may create for new some function declarations to refer from one global variable to another.
(function hello() {
})()
(function helloSecondModule() {
})()


or ES Modules can be used.

idea is that global is env dependent.
globalThis - universal reference to global no matter in which env you are.

..
 */
