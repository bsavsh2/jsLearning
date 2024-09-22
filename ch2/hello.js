/*
you don't know js series
Kyle Simpson


Chapter 2: Surveying JS

Each file is a Program
`interpolation ${person.firstName}`


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





// Variables
// var vs let vs const
// function/outer scope vs block scope vs block scope with restriction on re-assigning
// function param (var like)
// function itself as identifier (var like)
// err from catch (let like)

// function hello1() {
//     const myBirthday = true;
//     var adult = true;
//
//     if (adult) {
//         var myName = "Bohdan";
//         let age= 100;
//         myBirthday = false;
//     }
//
//     console.log(myName);
//     console.log(age);
// }
// hello1();





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


// ------------ Comparisons --------------------
/*
 == vs ===
 latter does not allow coercion when comparing values.
 gotcha
 */
console.log(NaN === NaN); // false
console.log(0 === -0); // true

// All object values are held by reference;
/*
Coercion means a value of one type being converted to its respective representation in another type.

== - better name is coercive equality
== does the same thing as === by checking type and value but before that it does coercion if needed so both values have the same type.
 */

// ------------ How We Organize in JS --------------

// Classes
class Page {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(this.text);
    }
}

class Notebook {
    constructor() {
        this.pages = []
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}


var mathNotes = new Notebook();
mathNotes.addPage("Javascript");
mathNotes.addPage("Hello Math");
mathNotes.print();


class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${this.title}
            Author: ${this.author}
            PubDate: ${this.pubDate}
        `);
    }
}

class Book extends Publication {
    constructor(bookDetails) {
        super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
        `);
    }
}

class BlogPost extends Publication {
    constructor(title, author, pubDate, URL) {
        super(title, author, pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(`
            URL: ${this.URL}
        `);
    }
}

var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
})

YDKJS.print();

var forAgainsLet = new BlogPost(
    "For and agains let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-agains-let"
)
forAgainsLet.print();