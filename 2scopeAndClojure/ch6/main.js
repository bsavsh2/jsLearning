/*
Chapter 6: Limiting Scope Exposure
Lest scope exposure is good design. Low coupling high cohesion.

Immediately Invoked Function Expression
An IIFE is useful when we want to create a scope to hide
variables/functions.
 */

const factorial = (function cachedFactorial() {
    const cache = {};

    function factorial(x) {
        if (x < 2) {return 1;}
        if (!(x in cache)) {
            cache[x] = x * factorial(x - 1);
        }
        return cache[x];
    }

    return factorial;
})();

console.log(factorial(11));


/*
Scoping with blocks.

Not all {} blocks are scopes. If you don't have let and const in them they are just blocks.
class declaration is not a block or scope. etc.
Standalone block can be scope and is useful to hide variables.
 */

if (somethingHappened) {// this is a block, but not a scope
    {// this is both a block and an explicit scope
        let msg = somethingHappened.message();
        notifyOthers(msg);
    }
    recoverFromSomething();
}
/*
Kyle's idea to use var to say ohh you are function scope variable and to use let and const with blocks to indicate
that it's block level variables. And to limit exposure of variables outwards.
 */


/*
Kyle suggests to avoid it because of non predictable behaviour in different environments.
Function Declarations in Blocks (FiB)
 */
