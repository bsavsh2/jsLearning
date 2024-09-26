
// ---------- Functions --------------

function awesomeFunction(coolThings) {
    return coolThings * 2;
} // this is function declaration. The association between awesomeFunction identifier and the function value happens during the compile phase. Before code is executed;

var awesomeFunction2 = function(coolThings) {return coolThings * 3;}; // this is function expression. Association happens at runtime.

var whatToSay = {
    greeting() {
        console.log("Hello, IdeaProjects!");
    },
    question() {
        console.log("Hello, IdeaProjects!");
    },
    answer() {
        console.log("Hello, IdeaProjects!");
    }
}

whatToSay.greeting();