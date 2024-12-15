/*
Ch5: Prototypes

All objects in JS have property [[Prototype]], which is simply a reference to another object.

If no value found in [[Prototype]] chain return 'undefined'
 */

var anotherObject = {
    a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

myObject.a; // 2


/*
in JS there is no classes there are just objects.


"Class" Functions
 */

function Foo() {
    // ...
}

Foo.prototype; // { }
/*
when you write 'new Foo()' this new object will be linked to [[Prototype]] Foo.prototype
 */

function Foo1() {
    // ...
}

var a = new Foo1();

Object.getPrototypeOf( a ) === Foo1.prototype; // true


/*
direct way to link prototype
new Foo()
vs
direct
Object.create(..)


The Foo.prototype object by default (at declaration time on line 1 of the snippet!)
 gets a public, non-enumerable (see Chapter 3) property called .constructor,
  and this property is a reference back to the function that the object is associated with.


There are no constructors in JS
But when you put 'new' in front of a function you
make a 'constructor call'

In fact, new sort of hijacks any normal function and calls it in a fashion that constructs an object, in addition to whatever else it was going to do.
"constructor" is any function called with the new keyword in front of it.
 */

function NothingSpecial() {
    console.log( "Don't mind me!" );
}

var a2 = new NothingSpecial();
// "Don't mind me!"

a2; // {}

/*
"(Prototypal) Inheritance"
 */

function Foo3(name) {
    this.name = name;
}

Foo3.prototype.myName = function() {
    return this.name;
};

function Bar(name,label) {
    Foo3.call( this, name );
    this.label = label;
}

// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`
Bar.prototype = Object.create( Foo3.prototype );

// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!

Bar.prototype.myLabel = function() {
    return this.label;
};

var a = new Bar( "a", "obj a" );

a.myName(); // "a"
a.myLabel(); // "obj a"


Foo3.prototype.isPrototypeOf( a ); // true
//b.isPrototypeOf( c );
Object.getPrototypeOf( a );
Object.getPrototypeOf( a ) === Foo3.prototype; // true


/*
All normal objects have the built-in Object.prototype as the top of the prototype chain
 */

/*
While these JavaScript mechanisms can seem to resemble "class instantiation" and "class inheritance" from traditional class-oriented languages, the key distinction is that in JavaScript, no copies are made. Rather, objects end up linked to each other via an internal [[Prototype]] chain.
 */

