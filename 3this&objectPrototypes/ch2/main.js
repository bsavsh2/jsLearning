/*
Ch2: this All Makes Sense Now!
 there's really no such thing as "constructor functions",
 but rather construction calls of functions

 constructors are just functions that happen to be called with the new operator in front of them


 When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:

1. a brand new object is created (aka, constructed) out of thin air
2. the newly constructed object is [[Prototype]]-linked
3. the newly constructed object is set as the this binding for that function call
4. unless the function returns its own alternate object, the new-invoked function call will automatically return the
 newly constructed object

 */

var bar1 = new foo() // new binding
var bar2 = foo.call( obj2 ) // explicit binding
var bar3 = obj1.foo() // implicit binding
var bar4 = foo() // default binding

/*
=> so called "fat arrow" operator. Instead of using the four standard this rules, arrow-functions adopt the this binding from the enclosing (function or global) scope.
 */


