/*
parameter scope, {there's a scope bubble around the parameter list}
function name scope. var myFunc = function name1() {};
In here name1 is in it's own scope. Just between the worlds of outer scope and inner function scope.
 */

function whatsTheDealHere(id,defaultID = () => id) {
    id = 5; // function scope is inside parameter's scope. defaultID lambda is closing over id parameter. And in
    // this line you are changing the value of a parameter that was closed by lambda. As we already now closure
    // holds reference to a variable not a snapshot of data. Use var to declare id to see what will happen then.
    console.log( defaultID() );
}
whatsTheDealHere(3);

/*
Never shadow parameters with local variables
Avoid using a default parameter function that closes over any of the
parameters
 */

/*

Kyle thinks that.
All functions need names. Every single one. No exceptions. Any name you
omit is making the program harder to read, harder to debug, harder to
extend and maintain later

So, in the rare cases you need lexical this, use an arrow function. It's the
best tool for that job. But just be aware that in doing so, you're accepting
the downsides of an anonymous function.
 */

(function(){
// don't do this!
})();
(function doThisInstead(){
// ..
})();
d
/*
the only reason we're using that first
surrounding set of ( .. ) is just so the function keyword isn't in a
position to qualify as a function declaration to the JS parser

The ! , + , ~ , and several other unary operators (operators with one
operand) can all be placed in front of function to turn it into an
expression.

~function andThisOneToo(){
// ..
}();
 */


/*
Why Function hoisting is good.
Executable code first then functions. It's little thing but let you spot important parts easier.
Variable hoisting is bad idea. Kyle have one exception but I also think it's not worth it so variable hoisting is
 bad idea.
 */