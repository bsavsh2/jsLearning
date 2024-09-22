/*
execution context
this is a keyword to access execution context of a function.

 */

function classroom(teacher) {
    return function study() {
        console.log(`
            ${teacher} says to study ${this.topic}
        `);
    }
}

var assignment = classroom("Kyle");

assignment();

topic = "JS";
assignment(); // when there is no execution context specified function defaults the context to global object.


var homework = {
    topic: "Math",
    assignment: assignment
}

homework.assignment(); // because homework object called the function it passed it's reference to that function as execution context. And now function have access to topic from that particular object.

var otherHomework = {
    topic: "Java"
}

homework.assignment.call(otherHomework); // this is another way to call a function. By explicitly passing execution context to a function.