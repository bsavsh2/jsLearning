/*
Chapter 7: Using Closures

Our broad goal in
this book is not merely to understand scope, but to more effectively use it
in the structure of our programs; closure is central to that effort.

Closure gives a function access to its outer scope.
A Closure is the combination of a function bundled together(enclosed) with references to its surrounding state.

Closure is the set of free variables from the environment of your lambda that need to be saved somewhere.
lambda(x), x + 2 - closed lambda expression. It has everything it needs to execute. It doesn't need anything from
 environment.
lambda(x), x/y + 2 - open lambda expression because it needs to get free variable in order to execute.

Closure is the set of free variables from the environment of your lambda that need to be saved somewhere to make
 your open lambda closed.


 !!!!!!!!!!!!!!!!
 As I explained above, the closure of a lambda expression is the subset of definitions in its environment that
  give values to the free variables contained in that lambda expression,
  effectively closing the expression (turning an open lambda expression, which cannot be evaluated yet,
  into a closed lambda expression, which can then be evaluated, since all the symbols contained in it are now defined).


  https://stackoverflow.com/questions/220658/what-is-the-difference-between-a-closure-and-a-lambda

  There are two ways of explaining what closure is.
  From more practical way of thinking where your function "closes over"/"encloses" outer variables.
  Or from original though of open/closed lambda expression with free variables.




  Kyle's definition
  Closure is the link-association that connects that
    function to the scope/variables outside of itself, no matter where that
    function goes.


    In js closure is implemented as a function reference. And you just pass the reference of a function not function
     itself. And because function stays in the same place it still has access to outer variables through scope chain.
     That's perspective that Kyle highlighted.
     I like more to think about closure as open function with free variables that was closed. and Implementation
      details don't really matter. Closure = function + environment.


We explored two models for mentally tackling closure:
    - Observational: closure is a function instance remembering its outer
    variables even as that function is passed to and invoked in other
    scopes.
    - Implementational: closure is a function instance and its scope
    environment preserved in-place while any references to it are passed
    around and invoked from other scopes.
 */

function adder(num1) {
    return function addTo(num2) {
        return num1 + num2;
    }
}

var add42to = adder(42);
console.log(add42to(9));
var add10to = adder(10);
console.log(add10to(15));


/*
each function has it's closure.
 */

/*
Link not Snapshot
 */


function makeCounter() {
    var count = 0;

    return function getCounter() {
        count = count + 1;
        return count;
    }
}

var hits = makeCounter();

console.log("---- hits ------");
hits();
hits();
hits();
console.log(hits());




console.log("------------ keeps -----------")
var keeps = [];
for (var i = 0; i < 3; i++) { // try to change var to let.
    keeps[i] = function keepI() {
        return i;
    }
}

console.log(keeps[0]());
console.log(keeps[1]());
console.log(keeps[2]());